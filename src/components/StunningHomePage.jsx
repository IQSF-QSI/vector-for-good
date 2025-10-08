import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
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
  Play,
  Award,
  Rocket,
  Eye,
  Lock,
  BarChart3,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const StunningHomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '195+', label: 'Countries Protected', icon: Globe },
    { value: '10x', label: 'Faster Processing', icon: Zap },
    { value: '99.9%', label: 'Uptime Guarantee', icon: TrendingUp },
    { value: '256-bit', label: 'Encryption Standard', icon: Shield }
  ];

  const features = [
    {
      title: 'Zero-Knowledge Privacy',
      description: 'Advanced cryptographic protection ensures complete data privacy while maintaining full functionality.',
      icon: Shield,
      gradient: 'from-blue-600 via-blue-500 to-cyan-400',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'AI Agent Collaboration',
      description: 'Multi-LLM systems powered by NVIDIA Inception deliver real-time intelligence at unprecedented scale.',
      icon: Brain,
      gradient: 'from-purple-600 via-pink-500 to-rose-400',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Global Safety Intelligence',
      description: 'Real-time safety data covering every corner of the world with continuous updates and verification.',
      icon: Globe,
      gradient: 'from-emerald-600 via-green-500 to-teal-400',
      image: '/api/placeholder/400/300'
    }
  ];

  const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (!isInView) return;
      
      const numericValue = parseInt(value.replace(/[^\d]/g, ''));
      let start = 0;
      const increment = numericValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [isInView, value, duration]);

    return (
      <span ref={ref}>
        {value.includes('+') ? `${count}+` : 
         value.includes('x') ? `${count}x` : 
         value.includes('%') ? `${count}%` :
         value.includes('-bit') ? `${count}-bit` : count}
      </span>
    );
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59, 130, 246, 0.3) 0%, 
              rgba(147, 51, 234, 0.2) 25%, 
              rgba(236, 72, 153, 0.1) 50%, 
              transparent 70%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
        style={{ y, opacity }}
      >
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <img 
                src="/images/vector-logo-hero.png" 
                alt="Vector for Good" 
                className="h-20 w-auto mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Protect
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Everyone
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
              AI-powered safety intelligence for LGBTQ+ communities worldwide.
              <span className="block text-blue-400 font-medium mt-2">
                Zero-knowledge. Real-time. Enterprise-grade.
              </span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/qsi-map"
                className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <MapPin className="h-6 w-6" />
                  <span>Explore QSi Map</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link 
                to="/ai-agents"
                className="group px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full font-semibold text-xl hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center space-x-3">
                  <Brain className="h-6 w-6" />
                  <span>Try AI Agents</span>
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="mb-4">
                    <IconComponent className="h-8 w-8 mx-auto text-blue-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Built for the
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Future
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade infrastructure powered by NVIDIA Inception, 
              designed for Fortune 500 companies and global organizations.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="space-y-32">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.gradient} mb-8 shadow-2xl`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {feature.title}
                      </span>
                    </h3>
                    
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-lg">
                      {feature.description}
                    </p>
                    
                    <Link 
                      to={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group inline-flex items-center space-x-2 text-blue-400 hover:text-white transition-colors text-lg font-semibold"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className="flex-1">
                    <div className="relative">
                      <div className={`w-full h-80 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-20`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="h-32 w-32 text-white/50" />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-3xl blur-3xl`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NVIDIA Inception Badge */}
      <motion.section 
        className="relative z-10 py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Award className="h-12 w-12 text-green-400" />
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">NVIDIA Inception</div>
                  <div className="text-green-400 font-semibold">Member Company</div>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Accelerating AI innovation with enterprise-grade GPU resources and technical expertise
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="bg-white/10 px-4 py-2 rounded-full">10x GPU Acceleration</span>
                <span className="bg-white/10 px-4 py-2 rounded-full">Enterprise AI Suite</span>
                <span className="bg-white/10 px-4 py-2 rounded-full">Technical Mentorship</span>
                <span className="bg-white/10 px-4 py-2 rounded-full">Go-to-Market Support</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Safety Intelligence?
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the future of LGBTQ+ safety with enterprise-grade AI and zero-knowledge privacy.
            </p>
            
            <Link 
              to="/contact"
              className="group inline-flex items-center space-x-4 px-16 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-bold text-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Rocket className="h-8 w-8" />
              <span>Get Started Today</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default StunningHomePage;
