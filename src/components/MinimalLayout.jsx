import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  MapPin, 
  Brain, 
  Shield, 
  Users, 
  ExternalLink, 
  Heart, 
  Scale,
  Zap,
  Award,
  Rocket,
  Globe
} from 'lucide-react';

const MinimalLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'QSi Map', href: '/qsi-map', icon: MapPin },
    { name: 'AI Agents', href: '/ai-agents', icon: Brain },
    { name: 'Enterprise', href: '/enterprise', icon: Scale },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Zap }
  ];

  return (
    <div className="min-h-screen">
      {/* Minimal Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/images/vector-logo-hero.png" 
                  alt="Vector for Good" 
                  className="h-8 w-auto transition-all group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white">Vector for Good</span>
                <div className="text-xs text-green-400 font-medium">NVIDIA Inception</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link 
                    key={index}
                    to={item.href}
                    className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link 
                to="/enterprise"
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <Rocket className="h-4 w-4" />
                  <span>Get Started</span>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
            >
              <div className="px-6 py-8 space-y-4">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/10 transition-colors text-white"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg font-medium">{item.name}</span>
                    </Link>
                  );
                })}
                
                <div className="pt-4 border-t border-white/10">
                  <Link 
                    to="/enterprise"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold"
                  >
                    <Rocket className="h-5 w-5" />
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="relative bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/images/vector-logo-hero.png" 
                  alt="Vector for Good" 
                  className="h-10 w-auto"
                />
                <div>
                  <span className="text-xl font-bold text-white">Vector for Good</span>
                  <div className="text-xs text-green-400 font-medium">NVIDIA Inception Member</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                AI-powered safety intelligence for LGBTQ+ communities worldwide. 
                Zero-knowledge privacy, real-time protection.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-lg">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-lg">💼</span>
                </a>
                <a href="https://github.com/IQSF-QSI/vector-for-good" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-lg">🔗</span>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Platform</h3>
              <ul className="space-y-4">
                <li><Link to="/qsi-map" className="text-gray-400 hover:text-blue-400 transition-colors">QSi Map</Link></li>
                <li><Link to="/ai-agents" className="text-gray-400 hover:text-blue-400 transition-colors">AI Agents</Link></li>
                <li><Link to="/zk-demo" className="text-gray-400 hover:text-blue-400 transition-colors">ZK Privacy</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-blue-400 transition-colors">Resources</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link to="/enterprise" className="text-gray-400 hover:text-blue-400 transition-colors">Enterprise</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm">
                &copy; 2025 Vector for Good. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Zero-knowledge protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalLayout;
