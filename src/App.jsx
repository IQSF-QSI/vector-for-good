import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Globe, Users, Brain, ChevronDown, ExternalLink } from 'lucide-react';
import './App.css';

// Import components
import ContactPage from './components/ContactPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import QSiMapPage from './components/QSiMapPage';
import ZKDemoPage from './components/ZKDemoPage';
import AIAgentsPage from './components/AIAgentsPage';
import AboutPage from './components/AboutPage';
import IQSFPartnershipPage from './components/IQSFPartnershipPage';
import JaneGoodallMemorial from './components/JaneGoodallMemorial';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'IQSF Partnership', href: '/iqsf-partnership' },
    { name: 'QSi Map', href: '/qsi-map' },
    { name: 'ZK Demo', href: '/zk-demo' },
    { name: 'AI Agent Teams', href: '/ai-agents' },
    { name: 'Jane Goodall Memorial', href: '/jane-goodall-memorial' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/IMG_1968(1).png" 
              alt="Vector for Good Shield" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">Vector for Good</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href ? 'text-blue-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="flex items-center space-x-4">
              <Link
                to="/qsi-map"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Explore Free QSi
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Request Pilot
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="px-3 py-2 space-y-2">
              <Link
                to="/qsi-map"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore Free QSi
              </Link>
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-purple-700 hover:to-blue-700 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Pilot
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy-First
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Safety Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering organizations and communities with zero-knowledge safety intelligence. 
            Protect what matters most while preserving privacy and human dignity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Start Enterprise Pilot
            </Link>
            <Link
              to="/qsi-map"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Explore Free QSi Map
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Zero-Knowledge Architecture",
      description: "Advanced cryptographic protocols ensure your data remains private while enabling powerful safety intelligence."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Real-time safety intelligence across 195+ countries with city-level granularity and cultural context."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Free tools for LGBTQ+ communities, activists, and vulnerable populations to stay safe worldwide."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms provide predictive safety intelligence and personalized risk assessments."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Redefining Safety Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our privacy-first approach combines cutting-edge technology with human-centered design 
            to create the world's most trusted safety intelligence platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
              <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/IMG_1968(1).png" 
                alt="Vector for Good Shield" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">Vector for Good</span>
            </div>
            <p className="text-gray-400 mb-4">
              Privacy-first safety intelligence for a safer, more inclusive world.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/qsi-map" className="hover:text-white transition-colors">QSi Map</Link></li>
              <li><Link to="/zk-demo" className="hover:text-white transition-colors">ZK Demo</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Vector for Good. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// IQSF Partnership Section
const IQSFSection = () => {
  return (
    <section id="iqsf" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IQSF Partnership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with the International Queer Safety Foundation to create 
            the world's most comprehensive safety intelligence platform for LGBTQ+ communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building Safer Communities Together
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Data Collection</h4>
                  <p className="text-gray-600">Comprehensive safety data from 195+ countries with local community insights.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Privacy-First Approach</h4>
                  <p className="text-gray-600">Zero-knowledge architecture ensures community safety without compromising privacy.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Community Empowerment</h4>
                  <p className="text-gray-600">Free tools and resources for activists, travelers, and vulnerable populations.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Global Impact</h4>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">195+</div>
                  <div className="text-sm text-gray-600">Countries Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50K+</div>
                  <div className="text-sm text-gray-600">Safe Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1M+</div>
                  <div className="text-sm text-gray-600">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Real-time Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <IQSFSection />
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/iqsf-partnership" element={<IQSFPartnershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/qsi-map" element={<QSiMapPage />} />
            <Route path="/zk-demo" element={<ZKDemoPage />} />
            <Route path="/ai-agents" element={<AIAgentsPage />} />
            <Route path="/jane-goodall-memorial" element={<JaneGoodallMemorial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
