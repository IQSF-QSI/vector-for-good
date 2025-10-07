import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Globe, Shield, Users, Heart, Target, Zap, CheckCircle, MapPin, Award, Calendar, ExternalLink } from 'lucide-react'

const IQSFPartnershipPage = () => {
  const partnershipBenefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Combined coverage across 195+ countries with local community insights and cultural context"
    },
    {
      icon: Shield,
      title: "Enhanced Safety Intelligence",
      description: "Advanced zero-knowledge protocols protecting community data while maximizing safety insights"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Free tools and resources specifically designed for LGBTQ+ activists, travelers, and vulnerable populations"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "24/7 monitoring and instant alerts for safety conditions affecting LGBTQ+ communities worldwide"
    }
  ]

  const initiatives = [
    {
      title: "Global Safety Database",
      description: "Comprehensive database of LGBTQ+ friendly locations, services, and safety information across all continents",
      status: "Active",
      impact: "50,000+ verified safe locations"
    },
    {
      title: "Emergency Response Network",
      description: "Rapid response system for LGBTQ+ individuals facing safety threats while traveling or in crisis situations",
      status: "Pilot Phase",
      impact: "24/7 multilingual support"
    },
    {
      title: "Legal Protection Mapping",
      description: "Real-time tracking of LGBTQ+ rights and legal protections across different jurisdictions worldwide",
      status: "Development",
      impact: "195+ countries monitored"
    },
    {
      title: "Community Ambassador Program",
      description: "Training local LGBTQ+ advocates to provide safety intelligence and support in their regions",
      status: "Expanding",
      impact: "500+ ambassadors globally"
    }
  ]

  const milestones = [
    {
      date: "January 2024",
      title: "Partnership Announcement",
      description: "Official partnership between Vector for Good and IQSF launched at Global Pride Summit"
    },
    {
      date: "March 2024",
      title: "Technology Integration",
      description: "Zero-knowledge safety intelligence platform integrated with IQSF's global network"
    },
    {
      date: "June 2024",
      title: "Pilot Program Launch",
      description: "Beta testing with 10,000+ LGBTQ+ community members across 25 countries"
    },
    {
      date: "September 2024",
      title: "Global Expansion",
      description: "Full platform rollout to all IQSF member organizations worldwide"
    },
    {
      date: "December 2024",
      title: "Impact Milestone",
      description: "Reached 1 million community members with enhanced safety intelligence"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/images/IMG_1968(3).png" 
                alt="Rainbow Shield" 
                className="h-16 w-auto mr-4"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                IQSF Partnership
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partnering with the International Queer Safety Foundation to create the world's most 
              comprehensive privacy-first safety intelligence platform for LGBTQ+ communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Safer Communities Together</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our strategic partnership with the International Queer Safety Foundation represents a 
                  groundbreaking collaboration to protect LGBTQ+ individuals worldwide while maintaining 
                  the highest standards of privacy and human dignity.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  By combining Vector for Good's cutting-edge zero-knowledge technology with IQSF's 
                  global network and community expertise, we're creating unprecedented safety intelligence 
                  capabilities that empower communities without compromising individual privacy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all text-center"
                  >
                    Join the Partnership
                  </Link>
                  <a
                    href="https://iqsf.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-center inline-flex items-center justify-center"
                  >
                    Visit IQSF <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/IMG_1979(4).png" 
                  alt="Global Partnership" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600">How our collaboration enhances safety for LGBTQ+ communities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Joint Initiatives */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Joint Initiatives</h2>
            <p className="text-xl text-gray-600">Collaborative projects making a global impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{initiative.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    initiative.status === 'Active' ? 'bg-green-100 text-green-800' :
                    initiative.status === 'Pilot Phase' ? 'bg-blue-100 text-blue-800' :
                    initiative.status === 'Development' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {initiative.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                <div className="flex items-center text-sm text-purple-600 font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  {initiative.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Timeline</h2>
            <p className="text-xl text-gray-600">Key milestones in our collaborative journey</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-purple-600 mr-2" />
                      <div className="text-sm font-medium text-purple-600">{milestone.date}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Global Impact</h2>
              <p className="text-xl opacity-90">Together, we're making a difference worldwide</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">195+</div>
                <div className="text-lg opacity-90">Countries Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-lg opacity-90">Community Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-lg opacity-90">Safe Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our mission to create safer, more inclusive communities worldwide. 
              Whether you're an individual, organization, or advocate, there's a place for you in our partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Partner With Us
              </Link>
              <Link
                to="/qsi-map"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Explore QSi Map
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IQSFPartnershipPage
