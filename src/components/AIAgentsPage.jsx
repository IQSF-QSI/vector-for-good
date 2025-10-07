import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Bot, Brain, Users, Zap, Shield, Globe, MessageSquare } from 'lucide-react'
import AIAgentModal from './AIAgentModal'

const AIAgentsPage = () => {
  const [selectedAgent, setSelectedAgent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAgentInteraction = (agentName) => {
    setSelectedAgent(agentName)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedAgent(null)
  }

  const agents = [
    {
      name: "Safety Scout",
      icon: Shield,
      description: "Analyzes location safety data and provides real-time risk assessments",
      capabilities: ["Risk Analysis", "Location Scoring", "Threat Detection"],
      color: "blue"
    },
    {
      name: "Community Connector",
      icon: Users,
      description: "Helps users find LGBTQ+ friendly spaces and community resources",
      capabilities: ["Resource Discovery", "Community Matching", "Event Recommendations"],
      color: "purple"
    },
    {
      name: "Privacy Guardian",
      icon: Brain,
      description: "Ensures all data processing maintains zero-knowledge privacy standards",
      capabilities: ["Data Encryption", "Privacy Verification", "Anonymization"],
      color: "green"
    },
    {
      name: "Global Intelligence",
      icon: Globe,
      description: "Aggregates worldwide safety intelligence while preserving individual privacy",
      capabilities: ["Data Aggregation", "Pattern Recognition", "Trend Analysis"],
      color: "orange"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      green: "bg-green-50 text-green-600 border-green-200",
      orange: "bg-orange-50 text-orange-600 border-orange-200"
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Bot className="w-12 h-12 text-purple-600 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                AI Agent Teams
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Meet our specialized AI agents working together to provide privacy-first safety intelligence. 
              Each agent has unique capabilities designed to protect and empower communities.
            </p>
          </div>
        </div>
      </section>

      {/* AI Agents Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getColorClasses(agent.color)}`}>
                    <agent.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{agent.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{agent.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.capabilities.map((capability, capIndex) => (
                      <span 
                        key={capIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(agent.color)}`}
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => handleAgentInteraction(agent.name)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Interact with {agent.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Teams Work */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Our AI Teams Work Together</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">1. User Input</h3>
                <p className="text-gray-600 text-sm">You interact with our AI through natural conversation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Agent Coordination</h3>
                <p className="text-gray-600 text-sm">Multiple AI agents collaborate to understand your needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Privacy Protection</h3>
                <p className="text-gray-600 text-sm">All processing maintains zero-knowledge privacy standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Intelligent Response</h3>
                <p className="text-gray-600 text-sm">Personalized safety intelligence delivered instantly</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Experience AI Teams
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Modal */}
      <AIAgentModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        agent={selectedAgent}
      />
    </div>
  )
}

export default AIAgentsPage
