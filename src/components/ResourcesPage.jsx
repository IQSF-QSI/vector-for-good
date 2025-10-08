import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Book, 
  FileText, 
  Video, 
  Code, 
  Download, 
  ExternalLink, 
  Search,
  Filter,
  Clock,
  Users,
  Star,
  ArrowRight,
  Shield,
  Globe,
  Brain,
  Zap,
  CheckCircle,
  PlayCircle
} from 'lucide-react';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resourceCategories = [
    { id: 'all', name: 'All Resources', icon: Book },
    { id: 'documentation', name: 'Documentation', icon: FileText },
    { id: 'tutorials', name: 'Tutorials', icon: Video },
    { id: 'api', name: 'API Reference', icon: Code },
    { id: 'research', name: 'Research Papers', icon: Book },
    { id: 'tools', name: 'Tools & SDKs', icon: Download }
  ];

  const resources = [
    {
      id: 1,
      title: 'Getting Started with Vector for Good API',
      category: 'documentation',
      type: 'Documentation',
      description: 'Complete guide to integrating Vector for Good safety intelligence into your applications.',
      readTime: '15 min',
      difficulty: 'Beginner',
      downloads: 2500,
      rating: 4.9,
      featured: true,
      tags: ['API', 'Integration', 'Getting Started'],
      link: '/docs/api-getting-started'
    },
    {
      id: 2,
      title: 'Zero-Knowledge Privacy Architecture',
      category: 'research',
      type: 'Research Paper',
      description: 'Technical deep-dive into our zero-knowledge proof implementation for privacy-preserving safety intelligence.',
      readTime: '45 min',
      difficulty: 'Advanced',
      downloads: 1200,
      rating: 4.8,
      featured: true,
      tags: ['Zero-Knowledge', 'Privacy', 'Cryptography'],
      link: '/research/zk-privacy-architecture.pdf'
    },
    {
      id: 3,
      title: 'Building Safety-First Applications',
      category: 'tutorials',
      type: 'Video Tutorial',
      description: 'Step-by-step video guide to building applications that prioritize user safety and privacy.',
      readTime: '30 min',
      difficulty: 'Intermediate',
      downloads: 3200,
      rating: 4.9,
      featured: false,
      tags: ['Tutorial', 'Safety', 'Best Practices'],
      link: '/tutorials/safety-first-apps'
    },
    {
      id: 4,
      title: 'QSi Map Integration SDK',
      category: 'tools',
      type: 'SDK',
      description: 'JavaScript SDK for embedding interactive safety maps into your web applications.',
      readTime: '10 min',
      difficulty: 'Beginner',
      downloads: 5600,
      rating: 4.7,
      featured: true,
      tags: ['SDK', 'JavaScript', 'Maps'],
      link: '/tools/qsi-map-sdk'
    },
    {
      id: 5,
      title: 'AI Agent API Reference',
      category: 'api',
      type: 'API Documentation',
      description: 'Complete reference for interacting with our AI agents for safety analysis and recommendations.',
      readTime: '25 min',
      difficulty: 'Intermediate',
      downloads: 1800,
      rating: 4.8,
      featured: false,
      tags: ['API', 'AI Agents', 'Reference'],
      link: '/docs/ai-agent-api'
    },
    {
      id: 6,
      title: 'Global Safety Data Analysis',
      category: 'research',
      type: 'Research Report',
      description: 'Comprehensive analysis of global LGBTQ+ safety trends and patterns from our 2024 dataset.',
      readTime: '60 min',
      difficulty: 'Intermediate',
      downloads: 980,
      rating: 4.9,
      featured: false,
      tags: ['Research', 'Data Analysis', 'Global Trends'],
      link: '/research/global-safety-analysis-2024.pdf'
    },
    {
      id: 7,
      title: 'Enterprise Integration Guide',
      category: 'documentation',
      type: 'Documentation',
      description: 'Best practices for integrating Vector for Good into enterprise environments and workflows.',
      readTime: '35 min',
      difficulty: 'Advanced',
      downloads: 750,
      rating: 4.8,
      featured: false,
      tags: ['Enterprise', 'Integration', 'Best Practices'],
      link: '/docs/enterprise-integration'
    },
    {
      id: 8,
      title: 'Mobile App Development Kit',
      category: 'tools',
      type: 'Development Kit',
      description: 'Native iOS and Android SDKs for building mobile applications with safety intelligence.',
      readTime: '20 min',
      difficulty: 'Intermediate',
      downloads: 2100,
      rating: 4.6,
      featured: false,
      tags: ['Mobile', 'iOS', 'Android', 'SDK'],
      link: '/tools/mobile-sdk'
    }
  ];

  const quickLinks = [
    {
      title: 'API Documentation',
      description: 'Complete API reference and guides',
      icon: Code,
      link: '/docs/api',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Safety Intelligence Guide',
      description: 'Understanding our safety data and metrics',
      icon: Shield,
      link: '/docs/safety-intelligence',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Privacy & Security',
      description: 'Zero-knowledge architecture and security',
      icon: Globe,
      link: '/docs/privacy-security',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Agents Guide',
      description: 'Working with our AI agent system',
      icon: Brain,
      link: '/docs/ai-agents',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Developer Resources
              <span className="block text-blue-300">Build with Vector for Good</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Everything you need to integrate safety intelligence into your applications. 
              Documentation, tutorials, SDKs, and research papers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources, tutorials, documentation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quick Start Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jump right into the most popular resources and get started quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={index}
                  to={link.link}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {resourceCategories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span className="font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredResources.length} Resources Found
                </h2>
              </div>

              <div className="space-y-6">
                {filteredResources.map((resource) => (
                  <div 
                    key={resource.id} 
                    className={`bg-white border rounded-2xl p-8 hover:shadow-lg transition-shadow ${
                      resource.featured ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{resource.title}</h3>
                          {resource.featured && (
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            {resource.type}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(resource.difficulty)}`}>
                            {resource.difficulty}
                          </span>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{resource.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Download className="h-4 w-4" />
                            <span className="text-sm">{resource.downloads.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-sm text-gray-600">{resource.rating}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">{resource.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.map((tag, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <a
                          href={resource.link}
                          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                          {resource.type === 'Video Tutorial' ? (
                            <PlayCircle className="h-4 w-4" />
                          ) : resource.type.includes('PDF') || resource.type.includes('Report') ? (
                            <Download className="h-4 w-4" />
                          ) : (
                            <ExternalLink className="h-4 w-4" />
                          )}
                          <span>
                            {resource.type === 'Video Tutorial' ? 'Watch' : 
                             resource.type.includes('PDF') || resource.type.includes('Report') ? 'Download' : 
                             'View'}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or selecting a different category.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Need Help Getting Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our developer support team is here to help you integrate Vector for Good 
            into your applications successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Support
            </Link>
            <Link 
              to="/docs/api"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View API Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
