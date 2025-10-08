import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Globe, Users, Brain, ChevronDown, ExternalLink, MapPin, Scale, Heart, Zap } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/about', icon: Users },
    { name: 'IQSF Partnership', href: '/iqsf-partnership', icon: Globe },
    { name: 'QSi Map', href: '/qsi-map', icon: MapPin },
    { name: 'ZK Demo', href: '/zk-demo', icon: Shield },
    { name: 'AI Agent Teams', href: '/ai-agents', icon: Brain },
    { name: 'Jane Goodall Memorial', href: '/jane-goodall-memorial', icon: Heart },
    { name: 'Contact', href: '/contact', icon: ExternalLink }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🔗' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      } border-b border-gray-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/images/vector-logo-hero.png" 
                  alt="Vector for Good" 
                  className="h-12 w-auto transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Vector for Good
                </span>
                <div className="text-xs text-gray-500 font-medium">Privacy-First Safety Intelligence</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-gray-100 ${
                      location.pathname === item.href 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/qsi-map"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MapPin className="h-4 w-4 inline mr-2" />
                Explore QSi
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Zap className="h-4 w-4 inline mr-2" />
                Request Pilot
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="px-4 py-4 space-y-3 border-t border-gray-200 mt-4">
                <Link
                  to="/qsi-map"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPin className="h-4 w-4 inline mr-2" />
                  Explore QSi Map
                </Link>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg text-sm font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Zap className="h-4 w-4 inline mr-2" />
                  Request Enterprise Pilot
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/images/vector-logo-hero.png" 
                  alt="Vector for Good" 
                  className="h-10 w-auto"
                />
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Vector for Good
                  </span>
                  <div className="text-sm text-gray-300">Privacy-First Safety Intelligence</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Empowering LGBTQ+ communities worldwide with zero-knowledge safety intelligence. 
                Protecting what matters most while preserving privacy and human dignity.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Platform Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Platform</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><Users className="h-4 w-4" /><span>About Us</span></Link></li>
                <li><Link to="/qsi-map" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><MapPin className="h-4 w-4" /><span>QSi Map</span></Link></li>
                <li><Link to="/zk-demo" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><Shield className="h-4 w-4" /><span>ZK Demo</span></Link></li>
                <li><Link to="/ai-agents" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><Brain className="h-4 w-4" /><span>AI Agents</span></Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><ExternalLink className="h-4 w-4" /><span>Contact</span></Link></li>
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Legal & Support</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><Shield className="h-4 w-4" /><span>Privacy Policy</span></Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><Scale className="h-4 w-4" /><span>Terms of Service</span></Link></li>
                <li><a href="mailto:support@vectorforgood.com" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><ExternalLink className="h-4 w-4" /><span>Support</span></a></li>
                <li><a href="mailto:security@vectorforgood.com" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><Shield className="h-4 w-4" /><span>Security</span></a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                &copy; 2025 Vector for Good. All rights reserved. Built with ❤️ for the LGBTQ+ community.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
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

export default Layout;
