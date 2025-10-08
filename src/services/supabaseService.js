import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Supabase Service Class
export class SupabaseService {
  constructor() {
    this.client = supabase;
  }

  // Authentication methods
  async signUp(email, password, metadata = {}) {
    try {
      const { data, error } = await this.client.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  }

  async signIn(email, password) {
    try {
      const { data, error } = await this.client.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  }

  async signOut() {
    try {
      const { error } = await this.client.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const { data: { user }, error } = await this.client.auth.getUser();
      if (error) throw error;
      return user;
    } catch (error) {
      console.error('Get user error:', error);
      return null;
    }
  }

  // Safety data methods
  async getSafetyData(filters = {}) {
    try {
      let query = this.client
        .from('safety_data')
        .select('*');

      // Apply filters
      if (filters.country) {
        query = query.eq('country', filters.country);
      }
      if (filters.city) {
        query = query.eq('city', filters.city);
      }
      if (filters.minScore) {
        query = query.gte('safety_score', filters.minScore);
      }
      if (filters.maxScore) {
        query = query.lte('safety_score', filters.maxScore);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Get safety data error:', error);
      throw error;
    }
  }

  async updateSafetyData(id, updates) {
    try {
      const { data, error } = await this.client
        .from('safety_data')
        .update(updates)
        .eq('id', id)
        .select();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Update safety data error:', error);
      throw error;
    }
  }

  async addSafetyReport(report) {
    try {
      const { data, error } = await this.client
        .from('safety_reports')
        .insert([{
          ...report,
          created_at: new Date().toISOString(),
          user_id: (await this.getCurrentUser())?.id
        }])
        .select();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Add safety report error:', error);
      throw error;
    }
  }

  // User profile methods
  async getUserProfile(userId) {
    try {
      const { data, error } = await this.client
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (error && error.code !== 'PGRST116') throw error;
      return data;
    } catch (error) {
      console.error('Get user profile error:', error);
      return null;
    }
  }

  async updateUserProfile(userId, profile) {
    try {
      const { data, error } = await this.client
        .from('user_profiles')
        .upsert([{
          user_id: userId,
          ...profile,
          updated_at: new Date().toISOString()
        }])
        .select();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Update user profile error:', error);
      throw error;
    }
  }

  // AI conversation methods
  async saveConversation(conversation) {
    try {
      const { data, error } = await this.client
        .from('ai_conversations')
        .insert([{
          ...conversation,
          user_id: (await this.getCurrentUser())?.id,
          created_at: new Date().toISOString()
        }])
        .select();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Save conversation error:', error);
      throw error;
    }
  }

  async getConversationHistory(userId, limit = 50) {
    try {
      const { data, error } = await this.client
        .from('ai_conversations')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit);
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Get conversation history error:', error);
      throw error;
    }
  }

  // Analytics and feedback methods
  async recordUserInteraction(interaction) {
    try {
      const { data, error } = await this.client
        .from('user_interactions')
        .insert([{
          ...interaction,
          user_id: (await this.getCurrentUser())?.id,
          timestamp: new Date().toISOString()
        }]);
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Record interaction error:', error);
      throw error;
    }
  }

  async submitFeedback(feedback) {
    try {
      const { data, error } = await this.client
        .from('feedback')
        .insert([{
          ...feedback,
          user_id: (await this.getCurrentUser())?.id,
          created_at: new Date().toISOString()
        }])
        .select();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Submit feedback error:', error);
      throw error;
    }
  }

  // Real-time subscriptions
  subscribeToSafetyUpdates(callback) {
    return this.client
      .channel('safety_updates')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'safety_data'
      }, callback)
      .subscribe();
  }

  subscribeToUserNotifications(userId, callback) {
    return this.client
      .channel(`user_notifications_${userId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'notifications',
        filter: `user_id=eq.${userId}`
      }, callback)
      .subscribe();
  }

  // File storage methods
  async uploadFile(bucket, path, file) {
    try {
      const { data, error } = await this.client.storage
        .from(bucket)
        .upload(path, file);
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Upload file error:', error);
      throw error;
    }
  }

  async getFileUrl(bucket, path) {
    try {
      const { data } = this.client.storage
        .from(bucket)
        .getPublicUrl(path);
      
      return data.publicUrl;
    } catch (error) {
      console.error('Get file URL error:', error);
      return null;
    }
  }

  // Database initialization methods
  async initializeDatabase() {
    try {
      // Create tables if they don't exist
      const tables = [
        {
          name: 'safety_data',
          sql: `
            CREATE TABLE IF NOT EXISTS safety_data (
              id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
              country VARCHAR NOT NULL,
              city VARCHAR,
              latitude DECIMAL,
              longitude DECIMAL,
              safety_score INTEGER CHECK (safety_score >= 0 AND safety_score <= 100),
              legal_status JSONB,
              social_acceptance JSONB,
              healthcare_access JSONB,
              community_support JSONB,
              last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
          `
        },
        {
          name: 'user_profiles',
          sql: `
            CREATE TABLE IF NOT EXISTS user_profiles (
              id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
              user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
              display_name VARCHAR,
              preferences JSONB,
              privacy_settings JSONB,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              UNIQUE(user_id)
            );
          `
        },
        {
          name: 'ai_conversations',
          sql: `
            CREATE TABLE IF NOT EXISTS ai_conversations (
              id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
              user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
              agent_id VARCHAR NOT NULL,
              conversation_data JSONB,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
          `
        }
      ];

      for (const table of tables) {
        const { error } = await this.client.rpc('exec_sql', { sql: table.sql });
        if (error) {
          console.warn(`Table ${table.name} might already exist:`, error);
        }
      }

      return true;
    } catch (error) {
      console.error('Database initialization error:', error);
      return false;
    }
  }
}

// Export singleton instance
export const supabaseService = new SupabaseService();

// React hooks for Supabase integration
export const useSupabase = () => {
  return {
    client: supabase,
    service: supabaseService,
    signUp: supabaseService.signUp.bind(supabaseService),
    signIn: supabaseService.signIn.bind(supabaseService),
    signOut: supabaseService.signOut.bind(supabaseService),
    getCurrentUser: supabaseService.getCurrentUser.bind(supabaseService),
    getSafetyData: supabaseService.getSafetyData.bind(supabaseService),
    getUserProfile: supabaseService.getUserProfile.bind(supabaseService),
    updateUserProfile: supabaseService.updateUserProfile.bind(supabaseService)
  };
};

export default supabaseService;
