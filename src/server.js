import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
const port = 3001;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Middleware
app.use(cors());
app.use(express.json());

// System prompt for Vector AI assistant
const SYSTEM_PROMPT = `You are Vector, an AI assistant for Vector for Good, a privacy-first safety intelligence platform. You help users understand our services and guide them to the right resources.

Key Information about Vector for Good:
- We provide privacy-first safety intelligence using zero-knowledge cryptography
- We partner with the International Queer Safety Foundation (IQSF) to protect LGBTQ+ communities
- Our QSi Map provides real-time safety intelligence for 195+ countries
- We offer enterprise solutions for organizations and free tools for communities
- Our zero-knowledge technology ensures data privacy while enabling powerful safety insights

Your personality:
- Professional but friendly and approachable
- Knowledgeable about safety, privacy, and LGBTQ+ issues
- Helpful in guiding users to the right resources
- Concise but informative in responses

Always provide helpful, accurate information and guide users to relevant features like:
- QSi Map for exploring safety data
- IQSF Partnership for community resources
- Zero-Knowledge Demo for understanding our privacy technology
- Enterprise solutions for business needs
- Contact forms for human support

Keep responses conversational and under 150 words unless detailed explanation is needed.`;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, userInfo, messageHistory, currentStep, agentType, systemPrompt, specialization } = req.body;

    // Build conversation context
    const messages = [
      { role: 'system', content: systemPrompt || SYSTEM_PROMPT }
    ];

    // Add recent message history for context
    if (messageHistory && messageHistory.length > 0) {
      const recentMessages = messageHistory.slice(-6);
      recentMessages.forEach(msg => {
        if (msg.type === 'user') {
          messages.push({ role: 'user', content: msg.text });
        } else if (msg.type === 'bot') {
          messages.push({ role: 'assistant', content: msg.text });
        }
      });
    }

    // Add user context if available
    if (userInfo && Object.keys(userInfo).length > 0) {
      const contextParts = [];
      if (userInfo.name) contextParts.push(`User's name: ${userInfo.name}`);
      if (userInfo.company) contextParts.push(`Company: ${userInfo.company}`);
      if (userInfo.role) contextParts.push(`Role: ${userInfo.role}`);
      if (userInfo.interest) contextParts.push(`Primary interest: ${userInfo.interest}`);
      
      if (contextParts.length > 0) {
        messages.push({ 
          role: 'system', 
          content: `User context: ${contextParts.join(', ')}. Personalize your response accordingly.`
        });
      }
    }

    // Add current user message
    messages.push({ role: 'user', content: message });

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: messages,
      max_tokens: 300,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1
    });

    const aiResponse = response.choices[0].message.content;
    
    // Generate contextual options based on the response
    const options = generateContextualOptions(message, aiResponse);
    
    res.json({
      message: aiResponse,
      options: options,
      confidence: 0.9,
      agentType: determineAgentType(message, aiResponse)
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Return fallback response
    const fallbackResponse = getFallbackResponse(req.body.message);
    res.json(fallbackResponse);
  }
});

function generateContextualOptions(userMessage, aiResponse) {
  const messageLower = userMessage.toLowerCase();
  const responseLower = aiResponse.toLowerCase();
  
  // Enterprise-focused options
  if (messageLower.includes('enterprise') || messageLower.includes('business') || 
      messageLower.includes('organization') || responseLower.includes('enterprise')) {
    return [
      "🚀 Request Enterprise Demo",
      "📊 View Pricing Plans",
      "🔒 Security Documentation",
      "📞 Speak with Sales Team"
    ];
  }
  
  // Community/LGBTQ+ focused options
  if (messageLower.includes('community') || messageLower.includes('lgbtq') || 
      messageLower.includes('iqsf') || responseLower.includes('community')) {
    return [
      "🗺️ Explore QSi Map",
      "🏳️‍🌈 IQSF Partnership Info",
      "📚 Safety Resources",
      "🤝 Community Support"
    ];
  }
  
  // Privacy/Security focused options
  if (messageLower.includes('privacy') || messageLower.includes('security') || 
      messageLower.includes('zero-knowledge') || responseLower.includes('privacy')) {
    return [
      "🔐 Try ZK Demo",
      "📋 Privacy Policy",
      "🛡️ Security Features",
      "🔍 Data Protection"
    ];
  }
  
  // Technical/Research focused options
  if (messageLower.includes('research') || messageLower.includes('data') || 
      messageLower.includes('api') || responseLower.includes('research')) {
    return [
      "📊 View Research Data",
      "🔌 API Documentation",
      "📈 Safety Analytics",
      "📚 Technical Resources"
    ];
  }
  
  // Default general options
  return [
    "🗺️ Explore QSi Map",
    "🚀 Enterprise Solutions",
    "🔒 Privacy & Security",
    "📞 Contact Team"
  ];
}

function determineAgentType(message, response) {
  const messageLower = message.toLowerCase();
  const responseLower = response.toLowerCase();
  
  if (messageLower.includes('enterprise') || responseLower.includes('enterprise')) {
    return 'enterprise';
  }
  if (messageLower.includes('community') || responseLower.includes('community')) {
    return 'community';
  }
  if (messageLower.includes('privacy') || responseLower.includes('privacy')) {
    return 'privacy';
  }
  if (messageLower.includes('research') || responseLower.includes('research')) {
    return 'research';
  }
  
  return 'general';
}

function getFallbackResponse(message) {
  const messageLower = message.toLowerCase();
  
  // Enterprise fallback
  if (messageLower.includes('enterprise') || messageLower.includes('business')) {
    return {
      message: "I'd be happy to help with enterprise solutions! Our platform provides comprehensive safety intelligence for organizations worldwide. We offer scalable solutions with enterprise-grade security and privacy protection.",
      options: [
        "🚀 Request Enterprise Demo",
        "📊 View Pricing Plans",
        "🔒 Security Documentation",
        "📞 Speak with Sales Team"
      ],
      agentType: 'enterprise',
      confidence: 0.8
    };
  }
  
  // Community fallback
  if (messageLower.includes('community') || messageLower.includes('lgbtq') || messageLower.includes('iqsf')) {
    return {
      message: "Our community tools are designed to keep LGBTQ+ individuals safe worldwide. Through our IQSF partnership, we provide free access to safety resources and real-time intelligence to protect vulnerable communities.",
      options: [
        "🗺️ Explore QSi Map",
        "🏳️‍🌈 IQSF Partnership Info",
        "📚 Safety Resources",
        "🤝 Community Support"
      ],
      agentType: 'community',
      confidence: 0.8
    };
  }
  
  // Privacy fallback
  if (messageLower.includes('privacy') || messageLower.includes('security') || messageLower.includes('zero-knowledge')) {
    return {
      message: "Privacy and security are fundamental to our platform. We use advanced zero-knowledge cryptography to protect your data while providing powerful safety intelligence. Your information stays private while contributing to community safety.",
      options: [
        "🔐 Try ZK Demo",
        "📋 Privacy Policy",
        "🛡️ Security Features",
        "🔍 Data Protection"
      ],
      agentType: 'privacy',
      confidence: 0.8
    };
  }
  
  // General fallback
  return {
    message: "Thanks for your message! I'm here to help you learn about Vector for Good's privacy-first safety intelligence platform. Whether you're interested in enterprise solutions, community resources, or our privacy technology, I can guide you to the right information.",
    options: [
      "🏢 Enterprise Solutions",
      "🌍 Community Resources",
      "🔒 Privacy & Security",
      "📞 Contact Team"
    ],
    agentType: 'general',
    confidence: 0.7
  };
}

app.listen(port, () => {
  console.log(`Vector AI Chat Server running at http://localhost:${port}`);
});
