import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Shield, Globe, Users } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    pilotType: 'enterprise'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Enterprise Pilot
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join leading organizations using Vector for Good's privacy-first safety intelligence. 
            Get started with a custom pilot program tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Enterprise Pilot</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your organization name"
                />
              </div>

              <div>
                <label htmlFor="pilotType" className="block text-sm font-medium text-gray-700 mb-2">
                  Pilot Type
                </label>
                <select
                  id="pilotType"
                  name="pilotType"
                  value={formData.pilotType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="enterprise">Enterprise Safety Intelligence</option>
                  <option value="community">Community Safety Platform</option>
                  <option value="research">Research & Academic Partnership</option>
                  <option value="government">Government & Policy Integration</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your safety intelligence needs and goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Request Pilot Access</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">enterprise@vectorforgood.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">San Francisco, CA & Global</span>
                </div>
              </div>
            </div>

            {/* Pilot Benefits */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Pilot Program Benefits</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Zero-Knowledge Privacy</h4>
                    <p className="text-gray-600 text-sm">Advanced cryptographic protocols ensure complete data privacy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Coverage</h4>
                    <p className="text-gray-600 text-sm">Real-time safety intelligence across 195+ countries</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Support</h4>
                    <p className="text-gray-600 text-sm">Dedicated team for implementation and optimization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
              <p className="text-blue-100 mb-4">
                We respond to all enterprise inquiries within 24 hours. For urgent safety intelligence needs, 
                we offer same-day consultation calls.
              </p>
              <div className="text-2xl font-bold">&lt; 24 Hours</div>
              <div className="text-blue-100">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
