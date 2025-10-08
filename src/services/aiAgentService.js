import OpenAI from 'openai';

// Initialize OpenAI client with environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

// AI Agent configurations
export const AI_AGENTS = {
  SAFETY_ANALYST: {
    id: 'safety-analyst',
    name: 'Safety Intelligence Analyst',
    model: 'gpt-4.1-mini',
    systemPrompt: `You are a Safety Intelligence Analyst specializing in LGBTQ+ safety assessment. You provide comprehensive safety analysis for locations worldwide, considering legal frameworks, social acceptance, healthcare access, and community support. Always prioritize user safety and provide actionable insights.`,
    capabilities: ['location-analysis', 'risk-assessment', 'safety-recommendations'],
    avatar: '/images/ai-safety-analyst.png'
  },
  TRAVEL_ADVISOR: {
    id: 'travel-advisor',
    name: 'LGBTQ+ Travel Advisor',
    model: 'gpt-4.1-mini',
    systemPrompt: `You are an expert LGBTQ+ Travel Advisor with deep knowledge of global destinations. You provide personalized travel recommendations, safety tips, and cultural insights while respecting privacy through zero-knowledge principles. Focus on creating safe, inclusive travel experiences.`,
    capabilities: ['travel-planning', 'cultural-guidance', 'accommodation-recommendations'],
    avatar: '/images/ai-travel-advisor.png'
  },
  LEGAL_EXPERT: {
    id: 'legal-expert',
    name: 'Legal Rights Expert',
    model: 'gpt-4.1-mini',
    systemPrompt: `You are a Legal Rights Expert specializing in LGBTQ+ rights and protections worldwide. You provide accurate, up-to-date information about legal frameworks, rights, and protections in different jurisdictions. Always emphasize the importance of consulting local legal counsel for specific situations.`,
    capabilities: ['legal-analysis', 'rights-information', 'policy-updates'],
    avatar: '/images/ai-legal-expert.png'
  },
  COMMUNITY_CONNECTOR: {
    id: 'community-connector',
    name: 'Community Connector',
    model: 'gpt-4.1-mini',
    systemPrompt: `You are a Community Connector focused on helping LGBTQ+ individuals find supportive communities, resources, and services. You maintain privacy while connecting people with relevant local organizations, support groups, and safe spaces.`,
    capabilities: ['community-matching', 'resource-discovery', 'support-networks'],
    avatar: '/images/ai-community-connector.png'
  },
  CRISIS_SUPPORT: {
    id: 'crisis-support',
    name: 'Crisis Support Specialist',
    model: 'gpt-4.1-mini',
    systemPrompt: `You are a Crisis Support Specialist trained to provide immediate assistance and resources for LGBTQ+ individuals in crisis situations. You prioritize safety, provide crisis hotlines, emergency resources, and guide users to appropriate professional help. Always maintain a supportive, non-judgmental approach.`,
    capabilities: ['crisis-intervention', 'emergency-resources', 'mental-health-support'],
    avatar: '/images/ai-crisis-support.png'
  }
};

// AI Agent Service Class
export class AIAgentService {
  constructor() {
    this.activeConversations = new Map();
    this.conversationHistory = new Map();
  }

  // Initialize conversation with an AI agent
  async startConversation(agentId, initialContext = {}) {
    const agent = AI_AGENTS[agentId.toUpperCase()];
    if (!agent) {
      throw new Error(`Agent ${agentId} not found`);
    }

    const conversationId = this.generateConversationId();
    const conversation = {
      id: conversationId,
      agentId,
      agent,
      context: initialContext,
      messages: [],
      startTime: new Date(),
      lastActivity: new Date()
    };

    this.activeConversations.set(conversationId, conversation);
    return conversation;
  }

  // Send message to AI agent
  async sendMessage(conversationId, message, userContext = {}) {
    const conversation = this.activeConversations.get(conversationId);
    if (!conversation) {
      throw new Error('Conversation not found');
    }

    try {
      // Add user message to conversation
      conversation.messages.push({
        role: 'user',
        content: message,
        timestamp: new Date(),
        context: userContext
      });

      // Prepare messages for OpenAI API
      const messages = [
        { role: 'system', content: conversation.agent.systemPrompt },
        ...conversation.messages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      ];

      // Call OpenAI API
      const response = await openai.chat.completions.create({
        model: conversation.agent.model,
        messages,
        temperature: 0.7,
        max_tokens: 1000,
        presence_penalty: 0.1,
        frequency_penalty: 0.1
      });

      const aiResponse = response.choices[0].message.content;

      // Add AI response to conversation
      conversation.messages.push({
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date(),
        model: conversation.agent.model
      });

      conversation.lastActivity = new Date();

      // Store in conversation history
      this.conversationHistory.set(conversationId, conversation);

      return {
        response: aiResponse,
        agentName: conversation.agent.name,
        conversationId,
        messageCount: conversation.messages.length
      };

    } catch (error) {
      console.error('AI Agent Service Error:', error);
      throw new Error(`Failed to get response from ${conversation.agent.name}: ${error.message}`);
    }
  }

  // Get conversation history
  getConversation(conversationId) {
    return this.activeConversations.get(conversationId) || 
           this.conversationHistory.get(conversationId);
  }

  // List all available agents
  getAvailableAgents() {
    return Object.values(AI_AGENTS);
  }

  // Get agent by ID
  getAgent(agentId) {
    return AI_AGENTS[agentId.toUpperCase()];
  }

  // Generate unique conversation ID
  generateConversationId() {
    return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // End conversation
  endConversation(conversationId) {
    const conversation = this.activeConversations.get(conversationId);
    if (conversation) {
      conversation.endTime = new Date();
      this.conversationHistory.set(conversationId, conversation);
      this.activeConversations.delete(conversationId);
    }
  }

  // Get safety analysis for a location
  async getSafetyAnalysis(location, userProfile = {}) {
    const conversation = await this.startConversation('SAFETY_ANALYST', {
      location,
      userProfile,
      analysisType: 'comprehensive'
    });

    const prompt = `Please provide a comprehensive safety analysis for ${location} considering LGBTQ+ travelers. Include:
    1. Legal status and protections
    2. Social acceptance levels
    3. Healthcare access
    4. Safe areas and venues
    5. Potential risks and precautions
    6. Emergency contacts and resources
    
    Location: ${location}
    ${userProfile.travelPurpose ? `Travel Purpose: ${userProfile.travelPurpose}` : ''}
    ${userProfile.duration ? `Duration: ${userProfile.duration}` : ''}`;

    return await this.sendMessage(conversation.id, prompt, { location, userProfile });
  }

  // Get travel recommendations
  async getTravelRecommendations(destination, preferences = {}) {
    const conversation = await this.startConversation('TRAVEL_ADVISOR', {
      destination,
      preferences
    });

    const prompt = `I'm planning to travel to ${destination}. Can you provide personalized LGBTQ+-friendly recommendations including:
    1. Safe accommodations
    2. LGBTQ+ venues and events
    3. Cultural considerations
    4. Local LGBTQ+ organizations
    5. Transportation tips
    6. Best times to visit
    
    Destination: ${destination}
    Preferences: ${JSON.stringify(preferences)}`;

    return await this.sendMessage(conversation.id, prompt, { destination, preferences });
  }

  // Get legal information
  async getLegalInfo(jurisdiction, query) {
    const conversation = await this.startConversation('LEGAL_EXPERT', {
      jurisdiction,
      query
    });

    const prompt = `Please provide information about LGBTQ+ legal rights and protections in ${jurisdiction}. 
    Specific query: ${query}
    
    Please include:
    1. Current legal status
    2. Anti-discrimination protections
    3. Marriage and partnership rights
    4. Recent legal changes
    5. Enforcement and practical considerations
    6. Resources for legal assistance`;

    return await this.sendMessage(conversation.id, prompt, { jurisdiction, query });
  }
}

// Export singleton instance
export const aiAgentService = new AIAgentService();

// Utility functions for React components
export const useAIAgent = () => {
  return {
    startConversation: aiAgentService.startConversation.bind(aiAgentService),
    sendMessage: aiAgentService.sendMessage.bind(aiAgentService),
    getConversation: aiAgentService.getConversation.bind(aiAgentService),
    getAvailableAgents: aiAgentService.getAvailableAgents.bind(aiAgentService),
    getSafetyAnalysis: aiAgentService.getSafetyAnalysis.bind(aiAgentService),
    getTravelRecommendations: aiAgentService.getTravelRecommendations.bind(aiAgentService),
    getLegalInfo: aiAgentService.getLegalInfo.bind(aiAgentService)
  };
};

export default aiAgentService;
