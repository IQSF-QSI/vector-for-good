import React, { useState, useEffect } from 'react';
import { MessageCircle, Brain, Shield, MapPin, Scale, Users, Heart, Zap, Send, User, Bot } from 'lucide-react';
import { aiAgentService, AI_AGENTS } from '../services/aiAgentService';
import { supabaseService } from '../services/supabaseService';

const EnhancedAIAgentsPage = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [activeConversation, setActiveConversation] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for authenticated user
    const checkUser = async () => {
      const currentUser = await supabaseService.getCurrentUser();
      setUser(currentUser);
    };
    checkUser();
  }, []);

  const agentIcons = {
    'SAFETY_ANALYST': Shield,
    'TRAVEL_ADVISOR': MapPin,
    'LEGAL_EXPERT': Scale,
    'COMMUNITY_CONNECTOR': Users,
    'CRISIS_SUPPORT': Heart
  };

  const agentColors = {
    'SAFETY_ANALYST': 'bg-blue-500',
    'TRAVEL_ADVISOR': 'bg-green-500',
    'LEGAL_EXPERT': 'bg-purple-500',
    'COMMUNITY_CONNECTOR': 'bg-orange-500',
    'CRISIS_SUPPORT': 'bg-red-500'
  };

  const handleStartConversation = async (agentId) => {
    try {
      setIsLoading(true);
      const conversation = await aiAgentService.startConversation(agentId);
      setActiveConversation(conversation);
      setSelectedAgent(agentId);
      setConversationHistory([]);
    } catch (error) {
      console.error('Failed to start conversation:', error);
      alert('Failed to start conversation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !activeConversation || isLoading) return;

    try {
      setIsLoading(true);
      
      // Add user message to history immediately
      const userMessage = {
        role: 'user',
        content: message,
        timestamp: new Date()
      };
      setConversationHistory(prev => [...prev, userMessage]);
      setMessage('');

      // Send message to AI agent
      const response = await aiAgentService.sendMessage(
        activeConversation.id, 
        message,
        { userId: user?.id }
      );

      // Add AI response to history
      const aiMessage = {
        role: 'assistant',
        content: response.response,
        timestamp: new Date(),
        agentName: response.agentName
      };
      setConversationHistory(prev => [...prev, aiMessage]);

      // Save conversation to Supabase if user is authenticated
      if (user) {
        await supabaseService.saveConversation({
          conversation_id: activeConversation.id,
          agent_id: selectedAgent,
          messages: [userMessage, aiMessage]
        });
      }

    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (content) => {
    // Simple formatting for better readability
    return content
      .split('\n')
      .map((line, index) => (
        <p key={index} className={line.trim() ? 'mb-2' : 'mb-1'}>
          {line}
        </p>
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-16 w-16 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                AI Agent Team
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Meet our specialized AI agents, each trained to provide expert assistance 
              in different aspects of LGBTQ+ safety and support. All conversations are 
              privacy-protected using zero-knowledge architecture.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Zap className="h-4 w-4 text-green-500" />
              <span>Live AI Connections</span>
              <span>•</span>
              <Shield className="h-4 w-4 text-blue-500" />
              <span>Privacy Protected</span>
              <span>•</span>
              <MessageCircle className="h-4 w-4 text-purple-500" />
              <span>Real-time Chat</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Agent Selection Panel */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your AI Agent</h2>
            <div className="space-y-4">
              {Object.entries(AI_AGENTS).map(([agentId, agent]) => {
                const IconComponent = agentIcons[agentId];
                const isSelected = selectedAgent === agentId;
                
                return (
                  <div
                    key={agentId}
                    onClick={() => handleStartConversation(agentId)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all transform hover:scale-105 ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${agentColors[agentId]} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {agent.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {agent.systemPrompt.substring(0, 120)}...
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {agent.capabilities.map((capability, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {capability.replace('-', ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            {selectedAgent ? (
              <div className="bg-white rounded-xl shadow-lg h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${agentColors[selectedAgent]} text-white`}>
                      {React.createElement(agentIcons[selectedAgent], { className: "h-6 w-6" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {AI_AGENTS[selectedAgent].name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        AI Agent • {activeConversation ? 'Connected' : 'Connecting...'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {conversationHistory.length === 0 ? (
                    <div className="text-center py-12">
                      <Bot className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">
                        Start a conversation with {AI_AGENTS[selectedAgent].name}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        Ask about safety, travel, legal rights, or community resources
                      </p>
                    </div>
                  ) : (
                    conversationHistory.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                            msg.role === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <div className="flex items-center space-x-2 mb-1">
                            {msg.role === 'user' ? (
                              <User className="h-4 w-4" />
                            ) : (
                              <Bot className="h-4 w-4" />
                            )}
                            <span className="text-xs opacity-75">
                              {msg.role === 'user' ? 'You' : msg.agentName || 'AI Agent'}
                            </span>
                          </div>
                          <div className="text-sm">
                            {formatMessage(msg.content)}
                          </div>
                          <div className="text-xs opacity-50 mt-1">
                            {msg.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 max-w-xs lg:max-w-md px-4 py-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4" />
                          <span className="text-xs">AI Agent is thinking...</span>
                        </div>
                        <div className="flex space-x-1 mt-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-6 border-t border-gray-200">
                  <div className="flex space-x-4">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={`Ask ${AI_AGENTS[selectedAgent].name} anything...`}
                      className="flex-1 resize-none border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows="2"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim() || isLoading}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Press Enter to send • Shift+Enter for new line
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Select an AI Agent to Start
                  </h3>
                  <p className="text-gray-500">
                    Choose from our specialized AI agents to get expert assistance
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => handleStartConversation('SAFETY_ANALYST')}
              className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-left"
            >
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Safety Analysis</h3>
              <p className="text-sm text-gray-600">Get comprehensive safety assessment for any location</p>
            </button>
            
            <button
              onClick={() => handleStartConversation('TRAVEL_ADVISOR')}
              className="p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all text-left"
            >
              <MapPin className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Travel Planning</h3>
              <p className="text-sm text-gray-600">Get LGBTQ+-friendly travel recommendations</p>
            </button>
            
            <button
              onClick={() => handleStartConversation('CRISIS_SUPPORT')}
              className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all text-left"
            >
              <Heart className="h-8 w-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Crisis Support</h3>
              <p className="text-sm text-gray-600">Get immediate support and crisis resources</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAIAgentsPage;
