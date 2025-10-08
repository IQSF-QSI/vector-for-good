import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Brain, 
  MapPin, 
  Users, 
  Zap, 
  Star, 
  CheckCircle, 
  ExternalLink, 
  Play, 
  Sparkles,
  TrendingUp,
  Award,
  Rocket,
  Eye,
  Lock,
  BarChart3,
  Clock,
  ChevronRight
} from 'lucide-react';
import ModernCard from './ModernCard';
import NVIDIAInceptionShowcase from './NVIDIAInceptionShowcase';

const ModernHomePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Zero-Knowledge Privacy',
      description: 'Advanced cryptographic protection ensures your data remains completely private',
      color: 'from-blue-500 to-cyan-500',
      stats: '256-bit encryption'
    },
    {
      icon: Brain,
      title: 'AI Agent Teams',
      description: 'Multi-LLM collaboration with NVIDIA GPU acceleration for real-time intelligence',
      color: 'from-purple-500 to-pink-500',
      stats: '10x faster processing'
    },
    {
      icon: Globe,
      title: 'Global Safety Intelligence',
      description: 'Real-time safety data covering 195+ countries with continuous updates',
      color: 'from-green-500 to-emerald-500',
      stats: '195+ countries'
    },
    {
      icon: MapPin,
      title: 'Interactive QSi Map',
      description: 'Dynamic visualization of LGBTQ+ safety metrics worldwide',
      color: 'from-orange-500 to-red-500',
      stats: 'Real-time updates'
    }
  ];

  const stats = [
    { label: 'Countries Covered', value: '195+', icon: Globe },
    { label: 'AI Models', value: '4+', icon: Brain },
    { label: 'Processing Speed', value: '10x', icon: Zap },
    { label: 'Uptime', value: '99.9%', icon: TrendingUp }
  ];

  const testimonials = [
    {
      quote: "Vector for Good's AI-powered safety intelligence has transformed how we protect our global workforce.",
      author: "Sarah Chen",
      role: "Chief Security Officer",
      company: "Fortune 100 Tech Company",
      avatar: "👩‍💼"
    },
    {
      quote: "The zero-knowledge privacy approach gives us enterprise-grade security with complete transparency.",
      author: "Marcus Rodriguez",
      role: "VP of Global Operations",
      company: "International NGO",
      avatar: "👨‍💼"
    },
    {
      quote: "NVIDIA Inception partnership ensures we get cutting-edge AI performance at scale.",
      author: "Dr. Aisha Patel",
      role: "Head of AI Research",
      company: "Healthcare Consortium",
      avatar: "👩‍🔬"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo and Brand */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="relative">
                <img 
                  src="/images/vector-logo-hero.png" 
                  alt="Vector for Good" 
                  className="h-16 w-auto md:h-20 lg:h-24 drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Vector for Good
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-medium">
                  Privacy-First Safety Intelligence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hero Headline */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Protecting LGBTQ+ Communities
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                With AI-Powered Intelligence
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade safety intelligence powered by NVIDIA Inception, 
              zero-knowledge privacy, and multi-LLM collaboration.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/qsi-map"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Explore QSi Map</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link 
                to="/ai-agents"
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-2xl font-semibold text-lg border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>Try AI Agents</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <ModernCard 
                    key={index} 
                    glassmorphism 
                    hover 
                    glow
                    animation="scaleIn"
                    delay={index * 0.1}
                    className="p-6 text-center"
                  >
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </ModernCard>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with enterprise-grade infrastructure and powered by NVIDIA Inception resources
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const isActive = index === activeFeature;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ModernCard 
                      className={`p-8 cursor-pointer transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-500 shadow-2xl scale-105' 
                          : 'hover:shadow-xl'
                      }`}
                      hover={false}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start space-x-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {feature.description}
                          </p>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                            <span className="text-sm font-semibold text-gray-700">
                              {feature.stats}
                            </span>
                          </div>
                        </div>
                      </div>
                    </ModernCard>
                  </motion.div>
                );
              })}
            </div>

            {/* Interactive Demo */}
            <div className="lg:pl-8">
              <ModernCard 
                glassmorphism 
                glow 
                className="p-8 h-96 flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    {React.createElement(features[activeFeature].icon, {
                      className: `h-24 w-24 mx-auto mb-6 text-transparent bg-gradient-to-r ${features[activeFeature].color} bg-clip-text`
                    })}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-gray-600">
                      Interactive demo coming soon
                    </p>
                  </motion.div>
                </AnimatePresence>
              </ModernCard>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ModernCard 
                  glassmorphism 
                  hover 
                  className="p-8 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <blockquote className="text-gray-700 mb-6 flex-1 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NVIDIA Inception Showcase */}
      <NVIDIAInceptionShowcase />

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Transform Safety Intelligence?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Join the future of LGBTQ+ safety with AI-powered, privacy-first intelligence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="group px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Rocket className="h-6 w-6" />
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/enterprise"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Award className="h-6 w-6" />
                  <span>Enterprise Solutions</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModernHomePage;
