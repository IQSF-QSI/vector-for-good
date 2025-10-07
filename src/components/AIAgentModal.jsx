import React, { useState, useEffect, useRef } from 'react'
import { X, Send, Bot, Shield, Users, Brain, Globe, Loader } from 'lucide-react'
import aiService from '../services/aiService'

const AIAgentModal = ({ isOpen, onClose, agent }) => {
  const [messages, setMessages] = useState([])
  const [currentInput, setCurrentInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const agentConfigs = {
    'Safety Scout': {
      icon: Shield,
      color: 'blue',
      systemPrompt: `You are Safety Scout, a specialized AI agent for Vector for Good focused on location safety analysis and risk assessment. You help users understand safety conditions in specific locations, analyze risk factors, and provide actionable safety recommendations.

Your expertise includes:
- Real-time safety data analysis for 195+ countries
- Location-specific risk scoring and threat detection
- LGBTQ+ safety considerations and cultural context
- Travel safety recommendations and precautions
- Emergency response guidance and local resources

Always provide specific, actionable safety advice and ask clarifying questions about locations, travel plans, or safety concerns.`,
      greeting: "🛡️ Hi! I'm Safety Scout, your personal safety intelligence agent. I analyze location safety data and provide real-time risk assessments for anywhere in the world. What location would you like me to analyze for safety?"
    },
    'Community Connector': {
      icon: Users,
      color: 'purple',
      systemPrompt: `You are Community Connector, a specialized AI agent for Vector for Good focused on helping users find LGBTQ+ friendly spaces and community resources. You connect people with safe, welcoming communities and events.

Your expertise includes:
- LGBTQ+ friendly businesses, venues, and services
- Community events and Pride celebrations
- Support groups and advocacy organizations
- Safe housing and accommodation options
- Local LGBTQ+ laws and cultural acceptance levels

Always be warm, inclusive, and focus on building connections within the LGBTQ+ community.`,
      greeting: "🏳️‍🌈 Hello! I'm Community Connector, here to help you find LGBTQ+ friendly spaces and connect with welcoming communities. Whether you're looking for safe venues, community events, or support resources, I'm here to help. What are you looking for?"
    },
    'Privacy Guardian': {
      icon: Brain,
      color: 'green',
      systemPrompt: `You are Privacy Guardian, a specialized AI agent for Vector for Good focused on zero-knowledge privacy protection and data security. You ensure all data processing maintains the highest privacy standards.

Your expertise includes:
- Zero-knowledge cryptography and privacy protocols
- Data encryption and anonymization techniques
- Privacy verification and compliance
- Secure data sharing and processing
- Privacy rights and protection strategies

Always prioritize privacy education and help users understand how their data is protected.`,
      greeting: "🔒 Greetings! I'm Privacy Guardian, your dedicated privacy protection specialist. I ensure all data processing maintains zero-knowledge privacy standards. How can I help you understand our privacy protections or answer questions about data security?"
    },
    'Global Intelligence': {
      icon: Globe,
      color: 'orange',
      systemPrompt: `You are Global Intelligence, a specialized AI agent for Vector for Good focused on aggregating worldwide safety intelligence while preserving individual privacy. You analyze global patterns and trends in safety data.

Your expertise includes:
- Worldwide safety trend analysis and pattern recognition
- Cross-cultural safety considerations and local contexts
- Global LGBTQ+ rights and legal landscape monitoring
- International travel safety and diplomatic considerations
- Geopolitical risk assessment and regional stability

Always provide global perspective and context for safety intelligence.`,
      greeting: "🌍 Welcome! I'm Global Intelligence, your worldwide safety analysis specialist. I aggregate global safety intelligence while protecting individual privacy. What global safety trends, regional analysis, or international travel guidance can I provide for you?"
    }
  }

  const config = agentConfigs[agent] || agentConfigs['Safety Scout']

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initialize with agent greeting
      setTimeout(() => {
        setMessages([{
          id: Date.now(),
          type: 'bot',
          text: config.greeting,
          timestamp: new Date()
        }])
      }, 500)
    }
  }, [isOpen, agent])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return

    const userMessage = currentInput.trim()
    setCurrentInput('')
    
    // Add user message
    const newUserMessage = {
      id: Date.now(),
      type: 'user',
      text: userMessage,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, newUserMessage])
    setIsTyping(true)

    try {
      // Process with specialized agent context
      const response = await aiService.processMessage(userMessage, {
        agentType: agent,
        systemPrompt: config.systemPrompt,
        messageHistory: messages.slice(-6), // Last 6 messages for context
        specialization: agent
      })

      setTimeout(() => {
        setIsTyping(false)
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          text: response.message,
          options: response.options,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
      }, 1500)

    } catch (error) {
      console.error('Agent processing error:', error)
      setTimeout(() => {
        setIsTyping(false)
        const fallbackMessage = {
          id: Date.now() + 1,
          type: 'bot',
          text: `I'm having trouble processing that request right now. As ${agent}, I'm here to help with ${agent === 'Safety Scout' ? 'safety analysis and risk assessment' : 
                agent === 'Community Connector' ? 'finding LGBTQ+ friendly spaces and community resources' :
                agent === 'Privacy Guardian' ? 'privacy protection and data security' :
                'global safety intelligence and trend analysis'}. Please try asking again or rephrase your question.`,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, fallbackMessage])
      }, 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleOptionClick = (option) => {
    // Check if it's a navigation option
    if (option.includes('Explore QSi Map')) {
      window.location.href = '/qsi-map'
      return
    }
    if (option.includes('IQSF Partnership')) {
      window.location.href = '/iqsf-partnership'
      return
    }
    if (option.includes('Try ZK Demo')) {
      window.location.href = '/zk-demo'
      return
    }
    if (option.includes('Privacy Policy')) {
      window.location.href = '/privacy'
      return
    }
    if (option.includes('Contact')) {
      window.location.href = '/contact'
      return
    }
    
    // Otherwise, treat as a regular chat input
    setCurrentInput(option)
    setTimeout(() => handleSendMessage(), 100)
  }

  if (!isOpen) return null

  const IconComponent = config.icon
  const colorClasses = {
    blue: 'from-blue-600 to-blue-700',
    purple: 'from-purple-600 to-purple-700',
    green: 'from-green-600 to-green-700',
    orange: 'from-orange-600 to-orange-700'
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col">
        {/* Header */}
        <div className={`bg-gradient-to-r ${colorClasses[config.color]} text-white p-4 rounded-t-xl flex items-center justify-between`}>
          <div className="flex items-center">
            <IconComponent className="w-6 h-6 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">{agent}</h3>
              <p className="text-sm opacity-90">Specialized AI Agent</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="text-sm">{message.text}</p>
                {message.options && (
                  <div className="mt-3 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="block w-full text-left px-3 py-2 bg-white text-gray-700 rounded border hover:bg-gray-50 transition-colors text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 p-3 rounded-lg flex items-center">
                <Loader className="w-4 h-4 animate-spin mr-2" />
                <span className="text-sm">{agent} is thinking...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Ask ${agent} anything...`}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={!currentInput.trim() || isTyping}
              className={`px-4 py-2 bg-gradient-to-r ${colorClasses[config.color]} text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIAgentModal
