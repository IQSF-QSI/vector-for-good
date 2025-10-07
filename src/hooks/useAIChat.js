import { useState, useEffect, useRef, useCallback } from 'react'
import aiService from '../services/aiService'

export const useAIChat = () => {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentStep, setCurrentStep] = useState('greeting')
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    timeline: '',
    budget: '',
    specificNeeds: ''
  })
  const [conversationContext, setConversationContext] = useState({
    currentAgent: 'global_monitoring',
    confidence: 0.85,
    lastInteraction: null,
    sessionId: null
  })
  const [isHealthy, setIsHealthy] = useState(true)
  const messagesEndRef = useRef(null)
  const retryCount = useRef(0)
  const maxRetries = 3

  // Initialize session
  useEffect(() => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    setConversationContext(prev => ({ ...prev, sessionId }))
    
    // Check AI service health
    checkServiceHealth()
    
    // Initialize with greeting
    setTimeout(() => {
      addBotMessage("👋 Hi there! I'm Vector, your AI assistant for Vector for Good. I'm here to help you find exactly what you need!")
      setTimeout(() => {
        addBotMessage("Whether you're interested in our enterprise safety intelligence, want to explore the free QSi map, or have questions about our zero-knowledge technology, I'll guide you to the right resources.")
        setTimeout(() => {
          addBotMessage("What brings you here today?", [
            "🏢 Enterprise Solutions",
            "🌍 Community & IQSF",
            "🔒 Privacy & Security",
            "📚 Research & Data",
            "💬 General Questions"
          ])
        }, 1500)
      }, 1000)
    }, 500)
  }, [])

  const checkServiceHealth = async () => {
    try {
      const healthy = await aiService.checkHealth()
      setIsHealthy(healthy)
      if (!healthy) {
        console.warn('AI service is not healthy, using fallback responses')
      }
    } catch (error) {
      console.error('Health check failed:', error)
      setIsHealthy(false)
    }
  }

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const addBotMessage = useCallback((text, options = null) => {
    setMessages(prev => [...prev, {
      id: Date.now() + Math.random(),
      type: 'bot',
      text,
      options,
      timestamp: new Date(),
      agent: conversationContext.currentAgent,
      confidence: conversationContext.confidence
    }])
  }, [conversationContext])

  const addUserMessage = useCallback((text) => {
    setMessages(prev => [...prev, {
      id: Date.now() + Math.random(),
      type: 'user',
      text,
      timestamp: new Date()
    }])
  }, [])

  const updateUserInfo = useCallback((updates) => {
    setUserInfo(prev => ({ ...prev, ...updates }))
  }, [])

  const updateConversationContext = useCallback((updates) => {
    setConversationContext(prev => ({ 
      ...prev, 
      ...updates,
      lastInteraction: new Date()
    }))
  }, [])

  const simulateTyping = useCallback((callback, delay = 1500) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, delay)
  }, [])

  const processWithAI = async (message, context = {}) => {
    try {
      retryCount.current = 0
      
      const response = await aiService.processMessage(message, {
        userInfo: { ...userInfo, ...context.userInfo },
        messageHistory: messages.slice(-10), // Last 10 messages for context
        currentStep,
        ...context
      })

      // Update conversation context with AI response
      updateConversationContext({
        currentAgent: response.agentType || 'global_monitoring',
        confidence: response.confidence || 0.85
      })

      return response
    } catch (error) {
      console.error('AI processing error:', error)
      
      // Retry logic
      if (retryCount.current < maxRetries && isHealthy) {
        retryCount.current++
        console.log(`Retrying AI request (${retryCount.current}/${maxRetries})`)
        await new Promise(resolve => setTimeout(resolve, 1000 * retryCount.current))
        return processWithAI(message, context)
      }
      
      // Fallback to service fallback
      return aiService.getFallbackResponse(message, { userInfo, currentStep })
    }
  }

  const handleOptionClick = async (option, customHandlers = {}) => {
    addUserMessage(option)
    
    // Check for special enterprise pilot request options
    const pilotOptions = [
      "🚀 Request Pilot Program",
      "📅 Schedule Enterprise Demo",
      "🚀 Request Enterprise Pilot"
    ]
    
    if (pilotOptions.some(pilotOption => option.includes("Request Pilot") || option.includes("Enterprise Demo"))) {
      // Trigger the enterprise pilot modal
      if (customHandlers.onPilotRequest) {
        customHandlers.onPilotRequest()
        return
      }
    }
    
    setIsTyping(true)
    
    try {
      const response = await processWithAI(option, {
        type: 'option_selection',
        currentStep,
        userInfo
      })
      
      setTimeout(() => {
        setIsTyping(false)
        addBotMessage(response.message)
        
        // Update user info if provided
        if (response.userInfoUpdate) {
          updateUserInfo(response.userInfoUpdate)
        }
        
        // Update chat step if provided
        if (response.nextStep) {
          setCurrentStep(response.nextStep)
        }
        
        // Add follow-up options if provided
        if (response.options && response.options.length > 0) {
          setTimeout(() => {
            const followUpMessage = response.followUpMessage || "What would you like to do next?"
            addBotMessage(followUpMessage, response.options)
          }, 1500)
        }
      }, 2000)
      
    } catch (error) {
      console.error('Option processing error:', error)
      
      setTimeout(() => {
        setIsTyping(false)
        addBotMessage("I'm having trouble processing that option right now. Let me provide you with some alternatives.")
        setTimeout(() => {
          addBotMessage("How else can I help you?", [
            "🔄 Try Again",
            "📞 Schedule a Call",
            "💬 Continue Conversation",
            "📧 Get Information"
          ])
        }, 1500)
      }, 1000)
    }
  }

  const handleTextInput = async (text) => {
    addUserMessage(text)
    
    // Handle structured information gathering
    if (currentStep === 'name') {
      updateUserInfo({ name: text })
      simulateTyping(() => {
        addBotMessage(`Nice to meet you, ${text}! What's your email address?`)
        setCurrentStep('email')
      })
      return
    }
    
    if (currentStep === 'email') {
      updateUserInfo({ email: text })
      simulateTyping(() => {
        addBotMessage("And what company or organization are you with?")
        setCurrentStep('company')
      })
      return
    }
    
    if (currentStep === 'company') {
      updateUserInfo({ company: text })
      simulateTyping(() => {
        addBotMessage("Perfect! Let me analyze your needs and provide personalized recommendations...")
        setTimeout(() => {
          generatePersonalizedResponse()
        }, 2000)
      })
      return
    }
    
    // Process with AI for free-form conversation
    setIsTyping(true)
    
    try {
      const response = await processWithAI(text, {
        type: 'free_form',
        currentStep,
        userInfo
      })
      
      setTimeout(() => {
        setIsTyping(false)
        addBotMessage(response.message)
        
        // Update chat step if provided
        if (response.nextStep) {
          setCurrentStep(response.nextStep)
        }
        
        // Add follow-up options if provided
        if (response.options && response.options.length > 0) {
          setTimeout(() => {
            addBotMessage("Here are some options based on your inquiry:", response.options)
          }, 1500)
        }
      }, 2000)
      
    } catch (error) {
      console.error('Text processing error:', error)
      
      setTimeout(() => {
        setIsTyping(false)
        addBotMessage("Thanks for your message! I'm processing your request and will provide you with the most relevant information shortly.")
        
        setTimeout(() => {
          addBotMessage("Based on your inquiry, here are some helpful options:", [
            "📞 Schedule a Call",
            "📧 Send Detailed Information",
            "🔍 Explore Specific Features",
            "💬 Continue Conversation"
          ])
        }, 2000)
      }, 1000)
    }
  }

  const generatePersonalizedResponse = async () => {
    const { name, interest, role, timeline, company } = userInfo
    
    try {
      const query = `Provide personalized recommendations for ${role} at ${company} interested in ${interest} with ${timeline} timeline`
      
      const response = await processWithAI(query, {
        type: 'personalization',
        userInfo,
        currentStep: 'personalization'
      })
      
      setTimeout(() => {
        addBotMessage(response.message)
        setTimeout(() => {
          const options = response.options || [
            "📞 Schedule a Call",
            "📧 Send Detailed Information", 
            "🔍 Explore Specific Features",
            "💬 Continue Conversation"
          ]
          addBotMessage("Here's what I recommend based on our AI analysis:", options)
          setCurrentStep('recommendations')
        }, 1500)
      }, 1000)
      
    } catch (error) {
      console.error('Personalization error:', error)
      
      // Fallback personalized response
      setTimeout(() => {
        addBotMessage(`Based on our conversation, I can see that ${company} is interested in ${interest} solutions with a ${timeline?.toLowerCase() || 'flexible'} timeline.`)
        setTimeout(() => {
          const fallbackOptions = interest === 'enterprise' ? [
            "📅 Schedule Enterprise Demo",
            "🚀 Request Pilot Program", 
            "📄 Download Security Whitepaper",
            "💬 Speak with Sales Team"
          ] : [
            "🗺️ Explore QSi Global Map",
            "📧 Join Newsletter",
            "🤝 Partnership Information",
            "💝 Support IQSF Mission"
          ]
          
          addBotMessage("Here's what I recommend for you:", fallbackOptions)
          setCurrentStep('recommendations')
        }, 1500)
      }, 1000)
    }
  }

  const handleRecommendationClick = async (recommendation) => {
    addUserMessage(recommendation)
    
    setIsTyping(true)
    
    try {
      const response = await processWithAI(recommendation, {
        type: 'recommendation_action',
        userInfo,
        currentStep: 'recommendations'
      })
      
      setTimeout(() => {
        setIsTyping(false)
        addBotMessage(response.message)
        
        if (response.options && response.options.length > 0) {
          setTimeout(() => {
            addBotMessage("What would you like to do next?", response.options)
          }, 1500)
        }
      }, 2000)
      
    } catch (error) {
      console.error('Recommendation processing error:', error)
      
      // Fallback recommendation handling
      setTimeout(() => {
        setIsTyping(false)
        
        if (recommendation.includes("Demo") || recommendation.includes("Call")) {
          addBotMessage("Excellent choice! I'm connecting you with our team. They'll reach out within 24 hours to schedule a personalized session.")
        } else if (recommendation.includes("Map")) {
          addBotMessage("Perfect! The QSi Global Map shows real-time safety intelligence for 195+ countries. Let me take you there!")
          setTimeout(() => {
            window.open('/qsi-map', '_blank')
            addBotMessage("The map should be opening in a new tab. Is there anything specific you'd like to know about the data?")
          }, 1000)
        } else if (recommendation.includes("Whitepaper") || recommendation.includes("Information")) {
          addBotMessage("Great! I'm preparing the information for you. The documents will be sent to your email shortly.")
        } else {
          addBotMessage("I'm processing your request. Our team will follow up with you shortly!")
        }
        
        setTimeout(() => {
          addBotMessage("Is there anything else I can help you with?", [
            "🔄 Explore Other Options",
            "📋 Get Summary",
            "💬 Continue Conversation",
            "✅ I'm All Set"
          ])
        }, 2000)
      }, 1500)
    }
  }

  const resetChat = useCallback(() => {
    setMessages([])
    setCurrentStep('greeting')
    setUserInfo({
      name: '',
      email: '',
      company: '',
      role: '',
      interest: '',
      timeline: '',
      budget: '',
      specificNeeds: ''
    })
    setConversationContext({
      currentAgent: 'global_monitoring',
      confidence: 0.85,
      lastInteraction: null,
      sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    })
    setIsTyping(false)
    retryCount.current = 0
  }, [])

  const getConversationSummary = useCallback(() => {
    return {
      userInfo,
      conversationContext,
      messageCount: messages.length,
      currentStep,
      isHealthy,
      lastAgent: conversationContext.currentAgent,
      confidence: conversationContext.confidence
    }
  }, [userInfo, conversationContext, messages.length, currentStep, isHealthy])

  // Legacy compatibility methods
  const processAIMessage = useCallback(async (message, context = {}) => {
    try {
      const response = await processWithAI(message, context)
      return {
        text: response.message,
        options: response.options,
        confidence: response.confidence,
        type: response.agentType
      }
    } catch (error) {
      console.error('Legacy processAIMessage error:', error)
      return {
        text: "I'm having trouble connecting to our AI agents right now. Let me provide you with some helpful information based on your message.",
        options: getDefaultOptions(message),
        confidence: 0.5,
        type: 'fallback'
      }
    }
  }, [])

  const getDefaultOptions = (message) => {
    const messageLower = message.toLowerCase()
    
    if (messageLower.includes('price') || messageLower.includes('cost')) {
      return [
        "💰 Enterprise Pricing Information",
        "📞 Schedule Pricing Discussion",
        "🚀 Request Pilot Program",
        "📄 Download ROI Calculator"
      ]
    }
    
    if (messageLower.includes('demo') || messageLower.includes('trial')) {
      return [
        "🎯 Try Zero-Knowledge Demo",
        "🗺️ Explore QSi Global Map", 
        "📅 Schedule Live Demo",
        "🚀 Request Enterprise Pilot"
      ]
    }
    
    if (messageLower.includes('contact') || messageLower.includes('speak') || messageLower.includes('call')) {
      return [
        "📞 Schedule a Call",
        "📧 Send Email Inquiry",
        "💬 Continue Chat",
        "📄 Download Information"
      ]
    }
    
    return [
      "🔍 Learn More",
      "📞 Schedule Consultation",
      "🗺️ Explore QSi Map", 
      "💬 Ask Another Question"
    ]
  }

  const isProcessing = isTyping

  return {
    // Enhanced state and methods
    messages,
    isTyping,
    currentStep,
    userInfo,
    conversationContext,
    isHealthy,
    messagesEndRef,
    
    // Enhanced actions
    handleOptionClick,
    handleTextInput,
    handleRecommendationClick,
    addBotMessage,
    addUserMessage,
    updateUserInfo,
    resetChat,
    
    // Utilities
    getConversationSummary,
    checkServiceHealth,
    
    // Legacy compatibility
    processAIMessage,
    isProcessing
  }
}

export default useAIChat
