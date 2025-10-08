import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { realAIService } from '../services/realAIService';

const AssetIntegratedHomePage = () => {
  const [aiStatus, setAiStatus] = useState('connecting');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Initialize real AI service
    const initializeAI = async () => {
      const success = await realAIService.initialize();
      setAiStatus(success ? 'connected' : 'error');
    };
    
    initializeAI();

    // Rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "Vector for Good's AI agents helped me plan my entire Southeast Asia trip with confidence. The safety insights were incredibly detailed and accurate.",
      author: "Alex Chen",
      role: "Digital Nomad",
      image: "/images/diverse-leadership.jpeg"
    },
    {
      text: "As a Fortune 500 CHRO, Vector for Good's enterprise safety intelligence has transformed how we protect our global LGBTQ+ employees.",
      author: "Sarah Johnson",
      role: "Chief Human Resources Officer",
      image: "/images/business-presentation.png"
    },
    {
      text: "The zero-knowledge privacy features give me peace of mind while accessing critical safety information for my community work.",
      author: "Dr. Maria Rodriguez",
      role: "Community Advocate",
      image: "/images/community-panel.png"
    }
  ];

  const handleAIChat = async () => {
    const response = await realAIService.chatWithAgent(
      "Hello! I'd like to learn more about Vector for Good's safety intelligence capabilities.",
      { source: 'homepage', userType: 'visitor' }
    );
    
    if (response.success) {
      alert(`AI Response: ${response.response}`);
    } else {
      alert('AI service is currently unavailable. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section with Vector Logo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Vector Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src="/images/vector-logo-hero.png" 
              alt="Vector for Good" 
              className="h-24 w-auto mx-auto md:h-32 lg:h-40 drop-shadow-2xl"
            />
          </motion.div>

          {/* Hero Text */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Privacy-First{' '}
            <span className="gradient-text-light">Safety Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Empowering LGBTQ+ communities worldwide with zero-knowledge safety intelligence. 
            Protecting what matters most while preserving privacy and human dignity.
          </motion.p>

          {/* AI Status Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className={`w-3 h-3 rounded-full ${
              aiStatus === 'connected' ? 'bg-green-400 animate-pulse' : 
              aiStatus === 'connecting' ? 'bg-yellow-400 animate-pulse' : 
              'bg-red-400'
            }`}></div>
            <span className="text-white font-medium">
              AI Agents: {aiStatus === 'connected' ? 'Online & Ready' : 
                         aiStatus === 'connecting' ? 'Connecting...' : 
                         'Offline'}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button 
              onClick={handleAIChat}
              className="btn-primary text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              Chat with AI Agent
            </button>
            <a 
              href="/qsi-map" 
              className="btn-secondary text-lg px-10 py-5 rounded-2xl"
            >
              Explore QSi Map
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Real Assets */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '195+', label: 'Countries Covered', icon: '🌍' },
              { number: '10K+', label: 'Cities Analyzed', icon: '🏙️' },
              { number: '50K+', label: 'Safety Reports', icon: '📊' },
              { number: '99.9%', label: 'Privacy Protected', icon: '🔒' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Real Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          >
            Powerful Features for Everyone
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Safe Travel Planning',
                description: 'Plan your next adventure with confidence using comprehensive safety data and AI-powered recommendations.',
                image: '/images/traveler-train.png',
                features: ['Destination safety scores', 'LGBTQ+-friendly accommodations', 'Local community resources', 'Emergency contacts']
              },
              {
                title: 'Community Safety',
                description: 'Empower your community with real-time safety intelligence and collaborative threat assessment.',
                image: '/images/community-panel.png',
                features: ['Community reporting', 'Safety alerts', 'Resource mapping', 'Incident tracking']
              },
              {
                title: 'Enterprise Solutions',
                description: 'Protect your employees and customers with enterprise-grade safety intelligence and risk assessment.',
                image: '/images/business-presentation.png',
                features: ['Employee safety', 'Risk assessment', 'Compliance reporting', '24/7 monitoring']
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-glass p-8 hover:scale-105 transition-all duration-500"
              >
                <div className="mb-6">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NVIDIA Inception Showcase */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="mb-6"
              >
                <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ✅ NVIDIA Inception Member
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  GPU-Accelerated AI Intelligence
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  As an NVIDIA Inception member, Vector for Good leverages cutting-edge GPU acceleration 
                  to deliver 10x faster AI processing and enterprise-grade performance for Fortune 500 companies.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: '10x', label: 'Faster Processing' },
                  { metric: '99.9%', label: 'Uptime SLA' },
                  { metric: '24/7', label: 'Enterprise Support' },
                  { metric: 'Fortune 500', label: 'Ready' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{item.metric}</div>
                    <div className="text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.img
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                src="/images/global-network.png"
                alt="Global AI Network"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Real Images */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16"
          >
            Trusted by Communities Worldwide
          </motion.h2>

          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="card-glass p-12 max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].author}
                className="w-20 h-20 rounded-full mx-auto object-cover"
              />
            </div>
            <blockquote className="text-2xl text-gray-300 mb-8 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="text-white font-semibold text-lg">
              {testimonials[currentTestimonial].author}
            </div>
            <div className="text-gray-400">
              {testimonials[currentTestimonial].role}
            </div>
          </motion.div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Experience the Future of Safety?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of users who trust Vector for Good to keep them safe while protecting their privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleAIChat}
                className="btn-primary text-lg px-10 py-5"
              >
                Start Free Trial
              </button>
              <a href="/enterprise" className="btn-secondary text-lg px-10 py-5">
                Enterprise Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AssetIntegratedHomePage;
