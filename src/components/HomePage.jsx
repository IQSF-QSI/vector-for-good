import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Globe, Brain, MapPin, Users, Zap, Star, CheckCircle, ExternalLink, Play, Sparkles } from 'lucide-react';
import './LogoFix.css';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Zero-Knowledge Privacy',
      description: 'Advanced cryptographic protection ensures your personal data never leaves your device while still providing personalized safety insights.',
      color: 'from-blue-500 to-cyan-500',
      link: '/zk-demo'
    },
    {
      icon: MapPin,
      title: 'Global QSi Map',
      description: 'Interactive world map with comprehensive LGBTQ+ safety data covering 195+ countries and thousands of cities worldwide.',
      color: 'from-green-500 to-emerald-500',
      link: '/qsi-map'
    },
    {
      icon: Brain,
      title: 'AI Agent Teams',
      description: 'Specialized AI agents providing expert assistance in safety analysis, travel planning, legal guidance, and crisis support.',
      color: 'from-purple-500 to-pink-500',
      link: '/ai-agents'
    },
    {
      icon: Globe,
      title: 'IQSF Partnership',
      description: 'Powered by the International Queer Safety Foundation with real-time data from trusted global sources and community reports.',
      color: 'from-orange-500 to-red-500',
      link: '/iqsf-partnership'
    }
  ];

  const stats = [
    { number: '195+', label: 'Countries Covered', icon: Globe },
    { number: '10K+', label: 'Cities Analyzed', icon: MapPin },
    { number: '50K+', label: 'Safety Reports', icon: Shield },
    { number: '99.9%', label: 'Privacy Protected', icon: CheckCircle }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Digital Nomad',
      content: 'Vector for Good helped me plan my entire Southeast Asia trip with confidence. The safety insights were incredibly detailed and accurate.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Travel Blogger',
      content: 'The zero-knowledge privacy features are revolutionary. I get personalized recommendations without compromising my personal data.',
      rating: 5,
      avatar: '✈️'
    },
    {
      name: 'Jordan Taylor',
      role: 'Community Organizer',
      content: 'The AI agents provide expert-level guidance that has been invaluable for our community safety initiatives.',
      rating: 5,
      avatar: '🏳️‍🌈'
    }
  ];

  const useCases = [
    {
      title: 'Safe Travel Planning',
      description: 'Plan your next adventure with confidence using comprehensive safety data and AI-powered recommendations.',
      icon: '✈️',
      features: ['Destination safety scores', 'LGBTQ+-friendly accommodations', 'Local community resources', 'Emergency contacts']
    },
    {
      title: 'Community Safety',
      description: 'Empower your community with real-time safety intelligence and collaborative threat assessment.',
      icon: '🏘️',
      features: ['Community reporting', 'Safety alerts', 'Resource mapping', 'Incident tracking']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Protect your employees and customers with enterprise-grade safety intelligence and risk assessment.',
      icon: '🏢',
      features: ['Employee safety', 'Risk assessment', 'Compliance reporting', '24/7 monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="hero-content relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <div className="relative group">
                <img 
                  src="/images/vector-logo-hero.png" 
                  alt="Vector for Good" 
                  className="logo h-16 w-auto max-w-[120px] sm:h-20 sm:max-w-[150px] md:h-24 md:max-w-[180px] lg:h-28 lg:max-w-[200px] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Privacy-First
              </span>
              <br />
              <span className="text-gray-900">Safety Intelligence</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Empowering LGBTQ+ communities worldwide with zero-knowledge safety intelligence. 
              Protecting what matters most while preserving privacy and human dignity.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Zero-Knowledge Protected</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Globe className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">195+ Countries</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Brain className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">AI-Powered</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/qsi-map"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
              >
                <MapPin className="h-6 w-6" />
                <span>Explore QSi Map</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ai-agents"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
              >
                <Brain className="h-6 w-6" />
                <span>Meet AI Agents</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Demo Video Button */}
            <button className="group flex items-center space-x-3 mx-auto text-gray-600 hover:text-blue-600 transition-colors">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Play className="h-6 w-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Demo (2 min)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Everyone</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual travelers to enterprise organizations, Vector for Good provides 
              comprehensive safety intelligence tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Real Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Vector for Good transforms safety intelligence across different use cases and industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-6xl mb-6">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16">
            Trusted by
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Communities Worldwide</span>
          </h2>

          <div className="relative">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Future of Safety?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of users who trust Vector for Good to keep them safe while protecting their privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/qsi-map"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3"
            >
              <MapPin className="h-6 w-6" />
              <span>Start Exploring</span>
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Zap className="h-6 w-6" />
              <span>Request Enterprise Demo</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
