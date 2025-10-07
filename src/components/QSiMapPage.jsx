import React from 'react';
import { Shield, Globe, Users, Heart, MapPin, Star, Info } from 'lucide-react';
import ComprehensiveQSiMap from './ComprehensiveQSiMap';

const QSiMapPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Queer Safety Index
              <span className="block text-blue-200 text-2xl md:text-3xl mt-2">
                Global LGBTQ+ Safety Intelligence
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive, real-time safety data for LGBTQ+ individuals, families, and communities worldwide. 
              Make informed decisions about travel, relocation, and daily life with our privacy-first intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">195+</div>
                <div className="text-blue-200">Countries Covered</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">1,000+</div>
                <div className="text-blue-200">Cities Analyzed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200">Real-time Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Safety Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our QSi platform combines legal analysis, community insights, and real-time data 
              to provide the most accurate safety intelligence for LGBTQ+ communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Protections</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of LGBTQ+ rights, anti-discrimination laws, and legal protections
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Insights</h3>
              <p className="text-gray-600 text-sm">
                Real experiences from LGBTQ+ community members and local advocacy organizations
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Family Safety</h3>
              <p className="text-gray-600 text-sm">
                Specialized data for LGBTQ+ families, parents, and children with intersectional considerations
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Coverage</h3>
              <p className="text-gray-600 text-sm">
                Worldwide data with city-level granularity and cultural context for informed decisions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <ComprehensiveQSiMap />
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Use the QSi Map
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the most out of our safety intelligence platform with these simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Filter Your Needs</h3>
              <p className="text-gray-600">
                Use our filters to find locations that match your specific safety requirements, 
                family situation, and travel preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore Locations</h3>
              <p className="text-gray-600">
                Click on any city marker to view detailed safety information, legal protections, 
                community resources, and travel advisories.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Make Informed Decisions</h3>
              <p className="text-gray-600">
                Use our comprehensive data to make informed decisions about travel, relocation, 
                or daily activities with confidence and safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Sources and Methodology */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted Data Sources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our safety intelligence is built on authoritative sources and community-verified data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Analysis</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Equaldex Equality Index</li>
                <li>• ILGA-Europe Rainbow Map</li>
                <li>• National legislation databases</li>
                <li>• Court case precedents</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Data</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• LGBTQ+ organization reports</li>
                <li>• Community safety surveys</li>
                <li>• Incident reporting systems</li>
                <li>• Local advocacy groups</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Intelligence</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• News monitoring systems</li>
                <li>• Social media sentiment analysis</li>
                <li>• Government policy tracking</li>
                <li>• Emergency alert networks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy and Security Notice */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Privacy-First Design</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your privacy and safety are our top priorities. Our zero-knowledge architecture ensures 
              that your location data and personal information remain completely private while you 
              access the safety intelligence you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Zero-Knowledge Architecture</h3>
                <p className="text-blue-100 text-sm">No personal data stored or tracked</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">End-to-End Encryption</h3>
                <p className="text-blue-100 text-sm">All data transmission is encrypted</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Anonymous Access</h3>
                <p className="text-blue-100 text-sm">No registration or login required</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need More Advanced Features?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Unlock enterprise-grade safety intelligence with personalized risk assessments, 
            real-time alerts, and dedicated support for organizations and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Request Enterprise Access
            </a>
            <a
              href="/zk-demo"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Explore Zero-Knowledge Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QSiMapPage
