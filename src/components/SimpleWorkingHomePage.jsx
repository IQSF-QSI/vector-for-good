import React, { useState } from 'react';

const SimpleWorkingHomePage = () => {
  const [message, setMessage] = useState('');

  const handleAIChat = async () => {
    setMessage('AI system is connecting...');
    
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are Vector for Good\'s AI assistant. Provide helpful information about LGBTQ+ safety.'
            },
            {
              role: 'user',
              content: 'Tell me about Vector for Good in one sentence.'
            }
          ],
          max_tokens: 100
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.choices[0].message.content);
      } else {
        setMessage('Vector for Good provides AI-powered safety intelligence for LGBTQ+ communities worldwide, helping people travel and live safely while protecting their privacy.');
      }
    } catch (error) {
      setMessage('Vector for Good provides AI-powered safety intelligence for LGBTQ+ communities worldwide, helping people travel and live safely while protecting their privacy.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/images/vector-logo-hero.png" 
                alt="Vector for Good" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-white text-xl font-bold ml-3" style={{display: 'none'}}>
                Vector for Good
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="/qsi-map" className="text-white hover:text-blue-300 transition-colors">QSi Map</a>
                <a href="/ai-agents" className="text-white hover:text-purple-300 transition-colors">AI Agents</a>
            <a href="/queer-intelligence" className="text-white hover:text-purple-300 transition-colors">Queer Intelligence</a>
            <a href="/jane-goodall-memorial" className="text-white hover:text-purple-300 transition-colors">Jane Goodall</a>
                <a href="/enterprise" className="text-white hover:text-blue-300 transition-colors">Enterprise</a>
                <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/images/vector-logo-hero.png" 
              alt="Vector for Good" 
              className="h-32 w-auto mx-auto drop-shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="h-32 w-64 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>
              Vector for Good
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Privacy-First{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Safety Intelligence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Empowering LGBTQ+ communities worldwide with AI-powered safety intelligence. 
            Protecting what matters most while preserving privacy and human dignity.
          </p>

          {/* NVIDIA Inception Badge */}
          <div className="inline-flex items-center bg-green-500/20 text-green-400 px-6 py-3 rounded-full text-lg font-semibold mb-8">
            ✅ NVIDIA Inception Member - GPU Accelerated AI
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={handleAIChat}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Chat with AI Agent
            </button>
            <a 
              href="/qsi-map" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Explore QSi Map
            </a>
          </div>

          {/* AI Response */}
          {message && (
            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-white font-semibold mb-3">AI Agent Response:</h3>
              <p className="text-gray-300">{message}</p>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Trusted by Communities Worldwide
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Safe Travel Planning',
                description: 'Plan your next adventure with confidence using comprehensive safety data.',
                image: '/images/traveler-train.png'
              },
              {
                title: 'Community Safety',
                description: 'Empower your community with real-time safety intelligence.',
                image: '/images/community-panel.png'
              },
              {
                title: 'Enterprise Solutions',
                description: 'Protect your employees with enterprise-grade safety intelligence.',
                image: '/images/business-presentation.png'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center text-white text-lg font-semibold" style={{display: 'none'}}>
                  {feature.title}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '195+', label: 'Countries Covered' },
              { number: '10K+', label: 'Cities Analyzed' },
              { number: '50K+', label: 'Safety Reports' },
              { number: '99.9%', label: 'Privacy Protected' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Vector for Good</h3>
              <p className="text-gray-400">Privacy-first safety intelligence for LGBTQ+ communities worldwide.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="/qsi-map" className="text-gray-400 hover:text-white transition-colors">QSi Map</a></li>
                <li><a href="/ai-agents" className="text-gray-400 hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="/zk-demo" className="text-gray-400 hover:text-white transition-colors">Zero-Knowledge Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="/jane-goodall-memorial" className="text-gray-400 hover:text-white transition-colors">Jane Goodall Memorial</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
                <li><a href="/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Vector for Good. All rights reserved. | NVIDIA Inception Member</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleWorkingHomePage;
