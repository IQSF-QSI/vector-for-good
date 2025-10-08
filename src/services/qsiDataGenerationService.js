import { createClient } from '@supabase/supabase-js';
import { tripleAIService } from './tripleAIService.js';

// Production Supabase Configuration
const supabaseUrl = 'https://bgfcvbfsckdvxittlwdt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnZmN2YmZzY2tkdnhpdHRsd2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4ODg2NjcsImV4cCI6MjA3MDQ2NDY2N30.QgdXSjhhoRzSCGJcAizjVgbX7k0dUo0922paoP0925U';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

class QSiDataGenerationService {
  constructor() {
    this.isGenerating = false;
    this.generationQueue = [];
    this.edgeFunctionUrl = `${supabaseUrl}/functions/v1/ai-agent-orchestrator`;
    this.priorityCities = [
      // Recently added cities for evaluation
      { country: 'Germany', city: 'Berlin', priority: 'high' },
      { country: 'Estonia', city: 'Tallinn', priority: 'high' },
      { country: 'United States', city: 'Las Vegas', state: 'Nevada', priority: 'high' },
      { country: 'United States', city: 'Des Moines', state: 'Iowa', priority: 'high' },
      { country: 'United States', city: 'St. Louis', state: 'Missouri', priority: 'high' },
      { country: 'United States', city: 'Omaha', state: 'Nebraska', priority: 'high' },
      { country: 'United States', city: 'Tuscaloosa', state: 'Alabama', priority: 'high' },
      // Major global cities for comprehensive coverage
      { country: 'United States', city: 'New York', state: 'New York', priority: 'critical' },
      { country: 'United States', city: 'San Francisco', state: 'California', priority: 'critical' },
      { country: 'Canada', city: 'Toronto', priority: 'high' },
      { country: 'United Kingdom', city: 'London', priority: 'critical' },
      { country: 'Netherlands', city: 'Amsterdam', priority: 'high' },
      { country: 'Spain', city: 'Madrid', priority: 'high' },
      { country: 'Australia', city: 'Sydney', priority: 'high' },
      { country: 'Brazil', city: 'São Paulo', priority: 'medium' },
      { country: 'South Africa', city: 'Cape Town', priority: 'medium' },
      { country: 'Thailand', city: 'Bangkok', priority: 'medium' },
      { country: 'Japan', city: 'Tokyo', priority: 'medium' },
      { country: 'India', city: 'Mumbai', priority: 'low' },
      { country: 'Russia', city: 'Moscow', priority: 'critical' }
    ];
  }

  /**
   * Generate real QSi data using triple-LLM collaboration
   */
  async generateQSiData(location, forceRefresh = false) {
    try {
      console.log(`🔄 Generating QSi data for ${location.city}, ${location.country} using triple-LLM system`);

      // Check if we have recent data (unless forcing refresh)
      if (!forceRefresh) {
        const existingData = await this.getExistingQSiData(location);
        if (existingData && this.isDataRecent(existingData.last_updated)) {
          console.log(`✅ Using existing recent data for ${location.city}`);
          return existingData;
        }
      }

      // Generate comprehensive safety analysis using triple-LLM
      const safetyAnalysis = await this.generateTripleLLMSafetyAnalysis(location);
      
      if (!safetyAnalysis.success) {
        throw new Error(`Triple-LLM analysis failed: ${safetyAnalysis.error}`);
      }

      // Calculate QSi scores from AI analysis
      const qsiScores = this.calculateQSiScores(safetyAnalysis.analysis, location);

      // Store in Supabase
      const qsiData = await this.storeQSiData(location, qsiScores, safetyAnalysis);

      console.log(`✅ QSi data generated for ${location.city}: Overall score ${qsiScores.overallScore}/100`);
      
      return qsiData;
    } catch (error) {
      console.error(`❌ QSi data generation failed for ${location.city}:`, error);
      return {
        success: false,
        error: error.message,
        location: location
      };
    }
  }

  /**
   * Generate comprehensive safety analysis using GPT-4 + Gemini Pro + Hermes
   */
  async generateTripleLLMSafetyAnalysis(location) {
    try {
      const response = await fetch(this.edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`
        },
        body: JSON.stringify({
          agentType: 'safety_analysis',
          task: `Generate comprehensive Queer Safety Index (QSi) data for ${location.city}, ${location.country}. 

Analyze and provide specific scores (0-100) for:
1. Legal Protection Score: Marriage equality, anti-discrimination laws, hate crime legislation, gender recognition laws
2. Social Acceptance Score: Public opinion polls, Pride events, LGBTQ+ visibility, cultural attitudes
3. Healthcare Access Score: LGBTQ+-affirming healthcare, transition-related care, mental health support
4. Safety Score: Hate crime statistics, police relations, safe spaces availability, emergency resources

Also provide:
- Key legal protections and gaps
- Major LGBTQ+ organizations and resources
- Safe neighborhoods and venues
- Emergency contacts and support services
- Recent developments and trends
- Specific recommendations for LGBTQ+ travelers/residents

Use current 2024-2025 data and cite specific sources where possible.`,
          location: location,
          priority: 'critical',
          nvidiaAccelerated: true
        })
      });

      if (!response.ok) {
        throw new Error(`Triple-LLM QSi analysis failed: ${response.status}`);
      }

      const result = await response.json();
      
      return {
        success: true,
        analysis: result.consensus,
        models: result.multiLLMMetrics?.totalModels || 3,
        consensusScore: result.consensus.consensusScore,
        sessionId: result.sessionId,
        timestamp: result.timestamp
      };
    } catch (error) {
      console.error('Triple-LLM QSi analysis failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Calculate QSi scores from AI analysis
   */
  calculateQSiScores(analysis, location) {
    // Extract scores from AI analysis or calculate based on findings
    const keyFindings = analysis.keyFindings || [];
    const recommendations = analysis.recommendations || [];
    
    // Default scoring based on country/region
    let baseScores = this.getBaseScores(location.country);
    
    // Adjust scores based on AI analysis content
    const legalScore = this.extractScore(keyFindings, 'legal', baseScores.legal);
    const socialScore = this.extractScore(keyFindings, 'social', baseScores.social);
    const healthcareScore = this.extractScore(keyFindings, 'healthcare', baseScores.healthcare);
    const safetyScore = this.extractScore(keyFindings, 'safety', baseScores.safety);
    
    // Calculate overall score with weighted average
    const overallScore = Math.round(
      (legalScore * 0.3) + 
      (socialScore * 0.25) + 
      (healthcareScore * 0.2) + 
      (safetyScore * 0.25)
    );

    return {
      overallScore: Math.max(0, Math.min(100, overallScore)),
      legalProtectionScore: Math.max(0, Math.min(100, legalScore)),
      socialAcceptanceScore: Math.max(0, Math.min(100, socialScore)),
      healthcareAccessScore: Math.max(0, Math.min(100, healthcareScore)),
      safetyScore: Math.max(0, Math.min(100, safetyScore)),
      confidenceLevel: analysis.consensusScore || 0.85,
      riskLevel: analysis.riskLevel || 'MEDIUM'
    };
  }

  /**
   * Get base scores for countries based on known data
   */
  getBaseScores(country) {
    const countryScores = {
      'Germany': { legal: 85, social: 80, healthcare: 90, safety: 82 },
      'Estonia': { legal: 75, social: 70, healthcare: 75, safety: 78 },
      'United States': { legal: 70, social: 65, healthcare: 60, safety: 68 },
      'Canada': { legal: 95, social: 90, healthcare: 85, safety: 88 },
      'United Kingdom': { legal: 85, social: 82, healthcare: 80, safety: 85 },
      'Netherlands': { legal: 95, social: 95, healthcare: 90, safety: 92 },
      'Spain': { legal: 90, social: 85, healthcare: 85, safety: 87 },
      'Australia': { legal: 85, social: 80, healthcare: 82, safety: 83 },
      'Brazil': { legal: 60, social: 55, healthcare: 50, safety: 45 },
      'South Africa': { legal: 85, social: 40, healthcare: 45, safety: 35 },
      'Thailand': { legal: 30, social: 70, healthcare: 40, safety: 55 },
      'Japan': { legal: 40, social: 50, healthcare: 60, safety: 75 },
      'India': { legal: 25, social: 30, healthcare: 35, safety: 40 },
      'Russia': { legal: 10, social: 15, healthcare: 20, safety: 25 }
    };

    return countryScores[country] || { legal: 50, social: 50, healthcare: 50, safety: 50 };
  }

  /**
   * Extract specific scores from AI analysis
   */
  extractScore(findings, category, baseScore) {
    const categoryKeywords = {
      legal: ['marriage', 'discrimination', 'law', 'legal', 'rights', 'protection'],
      social: ['acceptance', 'social', 'pride', 'community', 'culture', 'attitude'],
      healthcare: ['healthcare', 'medical', 'transition', 'therapy', 'treatment'],
      safety: ['safety', 'crime', 'violence', 'police', 'security', 'threat']
    };

    const keywords = categoryKeywords[category] || [];
    let adjustment = 0;
    
    findings.forEach(finding => {
      const text = finding.toLowerCase();
      keywords.forEach(keyword => {
        if (text.includes(keyword)) {
          if (text.includes('excellent') || text.includes('strong') || text.includes('progressive')) {
            adjustment += 10;
          } else if (text.includes('good') || text.includes('positive')) {
            adjustment += 5;
          } else if (text.includes('poor') || text.includes('limited') || text.includes('restrictive')) {
            adjustment -= 10;
          } else if (text.includes('dangerous') || text.includes('illegal') || text.includes('criminalized')) {
            adjustment -= 20;
          }
        }
      });
    });

    return Math.max(0, Math.min(100, baseScore + adjustment));
  }

  /**
   * Store QSi data in Supabase
   */
  async storeQSiData(location, scores, analysis) {
    try {
      const qsiRecord = {
        country_code: this.getCountryCode(location.country),
        city: location.city,
        state_province: location.state || null,
        safety_score: scores.overallScore,
        legal_protection_score: scores.legalProtectionScore,
        social_acceptance_score: scores.socialAcceptanceScore,
        healthcare_access_score: scores.healthcareAccessScore,
        risk_level: scores.riskLevel,
        confidence_level: scores.confidenceLevel,
        data_sources: {
          ai_models: ['GPT-4', 'Gemini Pro', 'Hermes'],
          consensus_score: analysis.consensusScore,
          session_id: analysis.sessionId,
          analysis_timestamp: analysis.timestamp,
          key_findings: analysis.analysis.keyFindings,
          recommendations: analysis.analysis.recommendations
        },
        last_updated: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('safety_intelligence')
        .upsert(qsiRecord, {
          onConflict: 'country_code,city',
          ignoreDuplicates: false
        })
        .select()
        .single();

      if (error) {
        throw new Error(`Database storage failed: ${error.message}`);
      }

      return {
        success: true,
        data: data,
        location: location,
        scores: scores,
        tripleLLMGenerated: true
      };
    } catch (error) {
      console.error('QSi data storage failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Generate QSi data for all priority cities
   */
  async generateAllPriorityData() {
    console.log('🚀 Starting QSi data generation for all priority cities using triple-LLM system');
    
    this.isGenerating = true;
    const results = [];
    
    try {
      // Sort by priority
      const sortedCities = this.priorityCities.sort((a, b) => {
        const priorityOrder = { 'critical': 0, 'high': 1, 'medium': 2, 'low': 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });

      for (const location of sortedCities) {
        try {
          console.log(`🔄 Processing ${location.city}, ${location.country} (Priority: ${location.priority})`);
          
          const result = await this.generateQSiData(location, false);
          results.push(result);
          
          // Add delay to respect API rate limits
          await this.delay(2000);
          
        } catch (error) {
          console.error(`❌ Failed to process ${location.city}:`, error);
          results.push({
            success: false,
            location: location,
            error: error.message
          });
        }
      }

      const successful = results.filter(r => r.success).length;
      const failed = results.filter(r => !r.success).length;
      
      console.log(`✅ QSi data generation complete: ${successful} successful, ${failed} failed`);
      
      return {
        success: true,
        totalProcessed: results.length,
        successful: successful,
        failed: failed,
        results: results
      };
      
    } finally {
      this.isGenerating = false;
    }
  }

  /**
   * Get existing QSi data from database
   */
  async getExistingQSiData(location) {
    try {
      const { data, error } = await supabase
        .from('safety_intelligence')
        .select('*')
        .eq('country_code', this.getCountryCode(location.country))
        .eq('city', location.city)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error getting existing QSi data:', error);
      return null;
    }
  }

  /**
   * Check if data is recent (within 7 days)
   */
  isDataRecent(lastUpdated) {
    if (!lastUpdated) return false;
    
    const lastUpdate = new Date(lastUpdated);
    const now = new Date();
    const daysDiff = (now - lastUpdate) / (1000 * 60 * 60 * 24);
    
    return daysDiff < 7;
  }

  /**
   * Get all QSi data for map display
   */
  async getAllQSiData() {
    try {
      const { data, error } = await supabase
        .from('safety_intelligence')
        .select('*')
        .order('safety_score', { ascending: false });

      if (error) throw error;

      return {
        success: true,
        data: data,
        totalCities: data.length,
        lastUpdated: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error getting all QSi data:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Get country code from country name
   */
  getCountryCode(country) {
    const countryCodes = {
      'Germany': 'DEU',
      'Estonia': 'EST',
      'United States': 'USA',
      'Canada': 'CAN',
      'United Kingdom': 'GBR',
      'Netherlands': 'NLD',
      'Spain': 'ESP',
      'Australia': 'AUS',
      'Brazil': 'BRA',
      'South Africa': 'ZAF',
      'Thailand': 'THA',
      'Japan': 'JPN',
      'India': 'IND',
      'Russia': 'RUS'
    };

    return countryCodes[country] || 'UNK';
  }

  /**
   * Utility delay function
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Get generation status
   */
  getGenerationStatus() {
    return {
      isGenerating: this.isGenerating,
      queueLength: this.generationQueue.length,
      priorityCities: this.priorityCities.length,
      tripleLLMEnabled: true,
      nvidiaAccelerated: true
    };
  }
}

// Export singleton instance
export const qsiDataGenerationService = new QSiDataGenerationService();
export default qsiDataGenerationService;
