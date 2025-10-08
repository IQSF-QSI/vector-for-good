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
  ChevronDown,
  Globe,
  Award,
  Rocket
} from 'lucide-react';

const ModernLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Platform', 
      dropdown: [
        { name: 'QSi Map', href: '/qsi-map', icon: MapPin, description: 'Interactive global safety intelligence' },
        { name: 'AI Agents', href: '/ai-agents', icon: Brain, description: 'Multi-LLM collaboration system' },
        { name: 'ZK Privacy', href: '/zk-demo', icon: Shield, description: 'Zero-knowledge demonstrations' }
      ]
    },
    { 
      name: 'Company', 
      dropdown: [
        { name: 'About', href: '/about', icon: Users, description: 'Our mission and team' },
        { name: 'Careers', href: '/careers', icon: Heart, description: 'Join our mission' },
        { name: 'Jane Goodall Memorial', href: '/jane-goodall-memorial', icon: Award, description: 'Honoring our inspiration' }
      ]
    },
    { 
      name: 'Solutions', 
      dropdown: [
        { name: 'Enterprise', href: '/enterprise', icon: Scale, description: 'Fortune 500 solutions' },
        { name: 'Resources', href: '/resources', icon: ExternalLink, description: 'Documentation & guides' }
      ]
    },
    { name: 'Contact', href: '/contact', icon: Zap }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: 'https://github.com/IQSF-QSI/vector-for-good', icon: '🔗' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Modern Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-white/60 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/images/vector-logo-hero.png" 
                  alt="Vector for Good" 
                  className="h-10 w-auto transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Vector for Good
                </span>
                <div className="text-xs text-gray-500 font-medium">NVIDIA Inception Member</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button className="flex items-center space-x-1 px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all font-medium">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link 
                      to={item.href}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all font-medium ${
                        location.pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                      }`}
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => {
                            const IconComponent = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownIndex}
                                to={dropdownItem.href}
                                className="flex items-start space-x-3 p-4 rounded-xl hover:bg-blue-50/50 transition-colors group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <IconComponent className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link 
                to="/enterprise"
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
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
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
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
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div>
                        <div className="font-semibold text-gray-900 mb-2">{item.name}</div>
                        <div className="space-y-2 pl-4">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => {
                            const IconComponent = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownIndex}
                                to={dropdownItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors"
                              >
                                <IconComponent className="h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">{dropdownItem.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors"
                      >
                        {item.icon && <item.icon className="h-5 w-5 text-blue-600" />}
                        <span className="text-gray-700 font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-200">
                  <Link 
                    to="/enterprise"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold"
                  >
                    <Rocket className="h-4 w-4" />
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Modern Footer */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src="/images/vector-logo-hero.png" 
                  alt="Vector for Good" 
                  className="h-12 w-auto"
                />
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Vector for Good
                  </span>
                  <div className="text-sm text-gray-300">Privacy-First Safety Intelligence</div>
                  <div className="text-xs text-green-400 font-medium">NVIDIA Inception Member</div>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Empowering LGBTQ+ communities worldwide with zero-knowledge safety intelligence. 
                Protecting what matters most while preserving privacy and human dignity.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Platform Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Platform</h3>
              <ul className="space-y-4">
                <li><Link to="/qsi-map" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group"><MapPin className="h-4 w-4 group-hover:scale-110 transition-transform" /><span>QSi Map</span></Link></li>
                <li><Link to="/ai-agents" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group"><Brain className="h-4 w-4 group-hover:scale-110 transition-transform" /><span>AI Agents</span></Link></li>
                <li><Link to="/zk-demo" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group"><Shield className="h-4 w-4 group-hover:scale-110 transition-transform" /><span>ZK Demo</span></Link></li>
                <li><Link to="/resources" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group"><ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" /><span>Resources</span></Link></li>
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group"><Users className="h-4 w-4 group-hover:scale-110 transition-transform" /><span>About</span></Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group"><Heart className="h-4 w-4 group-hover:scale-110 transition-transform" /><span>Careers</span></Link></li>
                <li><Link to="/enterprise" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group"><Scale className="h-4 w-4 group-hover:scale-110 transition-transform" /><span>Enterprise</span></Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group"><Zap className="h-4 w-4 group-hover:scale-110 transition-transform" /><span>Contact</span></Link></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                &copy; 2025 Vector for Good. All rights reserved. Built with ❤️ for the LGBTQ+ community.
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Zero-knowledge protected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-green-400" />
                  <span>NVIDIA Inception</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLayout;
