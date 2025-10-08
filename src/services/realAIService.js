import OpenAI from 'openai';

// Initialize OpenAI client with environment variable
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

class RealAIService {
  constructor() {
    this.isInitialized = false;
    this.conversationHistory = [];
  }

  async initialize() {
    try {
      // Test the connection
      await this.testConnection();
      this.isInitialized = true;
      console.log('✅ Real AI Service initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize AI Service:', error);
      return false;
    }
  }

  async testConnection() {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: "You are Vector for Good's AI assistant. Respond with 'AI Service Connected' to confirm the connection."
          },
          {
            role: "user",
            content: "Test connection"
          }
        ],
        max_tokens: 10,
        temperature: 0
      });
      
      return response.choices[0].message.content;
    } catch (error) {
      throw new Error(`OpenAI API connection failed: ${error.message}`);
    }
  }

  async generateSafetyAnalysis(location, userProfile = {}) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      const prompt = `As Vector for Good's AI safety analyst, provide a comprehensive LGBTQ+ safety analysis for ${location}. 

User Profile: ${JSON.stringify(userProfile)}

Provide a detailed analysis including:
1. Overall Safety Score (1-10)
2. Legal Environment
3. Social Acceptance Level
4. Recommended Precautions
5. Safe Spaces and Resources
6. Emergency Contacts
7. Travel Tips

Be specific, accurate, and helpful. Base your analysis on current data and real conditions.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: "You are Vector for Good's expert AI safety analyst specializing in LGBTQ+ safety intelligence. Provide accurate, helpful, and detailed safety assessments based on real data and current conditions. Always prioritize user safety and provide actionable advice."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1500,
        temperature: 0.3
      });

      const analysis = response.choices[0].message.content;
      this.conversationHistory.push({
        type: 'safety_analysis',
        location,
        userProfile,
        response: analysis,
        timestamp: new Date().toISOString()
      });

      return {
        success: true,
        analysis,
        location,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Safety analysis failed:', error);
      return {
        success: false,
        error: error.message,
        fallback: this.getFallbackSafetyAnalysis(location)
      };
    }
  }

  async chatWithAgent(message, context = {}) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      const systemPrompt = `You are Vector for Good's AI assistant, specialized in LGBTQ+ safety intelligence and support. You help users with:

- Safety assessments for travel and relocation
- Legal rights information
- Community resources and support
- Emergency assistance guidance
- Privacy and security advice

Context: ${JSON.stringify(context)}

Be helpful, accurate, and supportive. Always prioritize user safety and privacy.`;

      const messages = [
        { role: "system", content: systemPrompt },
        ...this.conversationHistory.slice(-5).map(h => ({
          role: "assistant",
          content: h.response
        })),
        { role: "user", content: message }
      ];

      const response = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages,
        max_tokens: 800,
        temperature: 0.7
      });

      const aiResponse = response.choices[0].message.content;
      
      this.conversationHistory.push({
        type: 'chat',
        userMessage: message,
        response: aiResponse,
        context,
        timestamp: new Date().toISOString()
      });

      return {
        success: true,
        response: aiResponse,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Chat failed:', error);
      return {
        success: false,
        error: error.message,
        response: "I'm experiencing technical difficulties. Please try again in a moment."
      };
    }
  }

  async generateTravelPlan(destination, preferences = {}) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      const prompt = `Create a comprehensive LGBTQ+-friendly travel plan for ${destination}.

Preferences: ${JSON.stringify(preferences)}

Include:
1. LGBTQ+-friendly accommodations
2. Safe neighborhoods and areas to avoid
3. Local LGBTQ+ venues and events
4. Cultural considerations and tips
5. Legal considerations
6. Emergency resources
7. Transportation safety
8. Recommended itinerary

Provide specific, actionable recommendations with real places and resources.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: "You are Vector for Good's expert travel planning AI, specializing in LGBTQ+-safe travel. Provide detailed, accurate travel plans with specific recommendations for accommodations, activities, and safety considerations."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.4
      });

      const travelPlan = response.choices[0].message.content;
      
      return {
        success: true,
        travelPlan,
        destination,
        preferences,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Travel plan generation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async assessCommunityRisk(communityData) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      const prompt = `Analyze the LGBTQ+ community risk level based on this data:

${JSON.stringify(communityData, null, 2)}

Provide:
1. Risk Level Assessment (Low/Medium/High)
2. Key Risk Factors
3. Protective Factors
4. Recommended Actions
5. Resource Recommendations
6. Monitoring Suggestions

Be thorough and actionable in your analysis.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: "You are Vector for Good's community risk assessment AI. Analyze data to provide comprehensive risk assessments and actionable recommendations for LGBTQ+ community safety."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1200,
        temperature: 0.2
      });

      return {
        success: true,
        assessment: response.choices[0].message.content,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Community risk assessment failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  getFallbackSafetyAnalysis(location) {
    return `I'm currently unable to access real-time data for ${location}. Please check back later or contact our support team for immediate assistance. For emergency situations, please contact local emergency services or LGBTQ+ support organizations in your area.`;
  }

  getConversationHistory() {
    return this.conversationHistory;
  }

  clearHistory() {
    this.conversationHistory = [];
  }
}

// Export singleton instance
export const realAIService = new RealAIService();
export default realAIService;
