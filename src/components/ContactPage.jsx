import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Shield, Globe, Users, MessageCircle, Sparkles, Heart, Rainbow } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    pilotType: 'enterprise'
  });

  const [chatMessages, setChatMessages] = useState([
    {
      type: 'agent',
      message: "Hey gorgeous! 💅 I'm Quinn, your fabulous AI assistant! Ready to make some magic happen? What can this fierce digital diva help you with today? ✨🌈"
    }
  ]);

  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sassyResponses = [
    "Honey, you're speaking my language! Let me connect you with our amazing team faster than you can say 'rainbow flag'! 🏳️‍🌈",
    "Oh darling, that's absolutely ICONIC! Our team is going to LIVE for this conversation! 💫",
    "Sweetie, you've come to the right place! We're about to serve you some serious safety intelligence realness! 🔥",
    "Baby, that question is giving me LIFE! Let me get you the tea on how we can help! ☕✨",
    "Gorgeous, you're asking all the right questions! Our team is going to be SO excited to chat with you! 💖",
    "Hun, that's what I call a power move! Let's get you connected with our fabulous experts! 🌟",
    "Darling, you're absolutely glowing with good ideas! Our team can't wait to collaborate! ✨",
    "Babe, that's giving me major visionary vibes! Let's make some beautiful things happen together! 🦄"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const newMessages = [...chatMessages, { type: 'user', message: chatInput }];
    setChatMessages(newMessages);
    setChatInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = sassyResponses[Math.floor(Math.random() * sassyResponses.length)];
      setChatMessages([...newMessages, { type: 'agent', message: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect &
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Make Magic
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join the safety revolution? Our fabulous team is here to help you protect what matters most. 
            Let's create something beautiful together! 🌈✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-purple-400" />
              Global Headquarters
            </h2>
            
            <div className="space-y-6">
              {/* Tallinn HQ */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                  Tallinn Headquarters
                </h3>
                <p className="text-gray-300">
                  Vector For Good Ou<br />
                  Tallinn, Estonia<br />
                  <span className="text-blue-400">🇪🇪 European Operations</span>
                </p>
              </div>

              {/* Delaware Office */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-400" />
                  US Operations
                </h3>
                <p className="text-gray-300">
                  Vector For Good PBC<br />
                  Dover, Delaware, USA<br />
                  <span className="text-green-400">🇺🇸 Americas Hub</span>
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-pink-400" />
                    <span className="font-mono text-lg">619-83-QUEER</span>
                  </div>
                  <div className="text-sm text-gray-400 ml-8">
                    (619-837-8337)
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-purple-400" />
                    <span>hello@vectorforgood.com</span>
                  </div>
                </div>
              </div>

              {/* IQSF Partnership */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-400/30">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-400" />
                  IQSF Partnership
                </h3>
                <p className="text-gray-300 text-sm">
                  Proudly partnered with the International Queer Safety Foundation (501c3) 
                  to advance LGBTQ+ safety worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Send className="w-6 h-6 mr-3 text-green-400" />
              Start Your Journey
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your fabulous name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your amazing organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How can we help?
                  </label>
                  <select
                    name="pilotType"
                    value={formData.pilotType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="enterprise" className="bg-gray-800">Enterprise Safety Intelligence</option>
                    <option value="nonprofit" className="bg-gray-800">Nonprofit Partnership</option>
                    <option value="government" className="bg-gray-800">Government Collaboration</option>
                    <option value="media" className="bg-gray-800">Media & Press Inquiry</option>
                    <option value="other" className="bg-gray-800">Other Fabulous Ideas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us more *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Share your vision, goals, or questions. We're all ears! ✨"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message ✨
              </button>
            </form>
          </div>

          {/* Sassy AI Chat */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-3 text-pink-400" />
              Chat with Quinn AI
              <Sparkles className="w-5 h-5 ml-2 text-yellow-400" />
            </h2>
            
            <div className="bg-white/10 rounded-2xl p-4 h-80 overflow-y-auto mb-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.type === 'user' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-pink-500/20 text-white border border-pink-400/30'
                  }`}>
                    {msg.type === 'agent' && (
                      <div className="flex items-center mb-1">
                        <Rainbow className="w-4 h-4 mr-1 text-pink-400" />
                        <span className="text-xs font-semibold text-pink-400">Quinn AI</span>
                      </div>
                    )}
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-pink-500/20 text-white border border-pink-400/30 px-4 py-2 rounded-2xl">
                    <div className="flex items-center">
                      <Rainbow className="w-4 h-4 mr-1 text-pink-400" />
                      <span className="text-xs font-semibold text-pink-400 mr-2">Quinn AI</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleChatSubmit} className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask Quinn anything! 💅"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">
                Quinn is our fabulous AI assistant with a little queer sass! 💖
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Vector for Good?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Privacy-First</h4>
                <p className="text-gray-300 text-sm">Zero-knowledge architecture protects your data</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Global Reach</h4>
                <p className="text-gray-300 text-sm">195+ countries with comprehensive safety data</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Community-Driven</h4>
                <p className="text-gray-300 text-sm">Built by and for the LGBTQ+ community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
