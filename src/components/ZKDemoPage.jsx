import React from 'react';
import { Shield, Lock, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ZKDemoAdvanced from './ZKDemoAdvanced';
import ZKPrivacyMap from './ZKPrivacyMap';

const ZKDemoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/images/IMG_1968(3).png" 
              alt="Vector for Good Shield" 
              className="h-20 w-auto mr-4"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Zero-Knowledge in Action
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the future of privacy-preserving technology. Our zero-knowledge 
            platform allows you to get personalized safety insights without ever sharing your personal data.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Zero-Knowledge System Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use advanced cryptography to ensure your data never leaves your device.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Encrypt Locally</h3>
              <p className="text-gray-600">
                Your personal information is encrypted on your device before any processing begins.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Generate Proof</h3>
              <p className="text-gray-600">
                A cryptographic "proof" is generated that confirms your needs without revealing the underlying data.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Get Insights Safely</h3>
              <p className="text-gray-600">
                Our platform uses this proof to provide personalized safety scores, while your data remains private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo 1: Basic ZK Proof */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Demonstration 1: The Zero-Knowledge Proof Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we turn your sensitive data into an anonymous, verifiable proof.
            </p>
          </div>
          <ZKDemoAdvanced />
        </div>
      </section>

      {/* Interactive Demo 2: Personalized Safety Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Demonstration 2: Personalized Safety with ZK Proofs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create a private family profile and see how our QSi map adapts to your unique needs—all without sharing any personal data.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <ZKPrivacyMap />
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our enterprise solutions or dive deeper into the technical details of our privacy-first platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Request Enterprise Pilot
            </Link>
            <Link
              to="/security-whitepaper"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Read Security Whitepaper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZKDemoPage;
