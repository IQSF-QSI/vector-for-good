import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Globe, Users, Brain, Heart, Target, Award, Zap, Lock } from 'lucide-react'

const AboutPage = () => {

  const milestones = [
    {
      year: "2023",
      title: "Foundation Established",
      description: "Vector for Good founded with mission to create privacy-first safety intelligence"
    },
    {
      year: "2024",
      title: "IQSF Partnership",
      description: "Strategic partnership with International Queer Safety Foundation launched"
    },
    {
      year: "2024",
      title: "Zero-Knowledge Protocol",
      description: "Breakthrough in privacy-preserving safety intelligence technology"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Platform launched across 195+ countries with real-time safety intelligence"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Vector for Good
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're building the world's most trusted privacy-first safety intelligence platform, 
              empowering communities while protecting individual privacy and human dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To create a safer, more inclusive world by providing privacy-first safety intelligence 
                that empowers individuals and communities to make informed decisions about their safety 
                without compromising their privacy or dignity.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A world where everyone can live authentically and safely, supported by technology 
                that respects privacy while fostering community protection and empowerment through 
                collective intelligence and shared safety insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">Zero-knowledge architecture ensures your data remains private</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">Built by and for the communities we serve</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
              <p className="text-gray-600">Creating positive change across all communities worldwide</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Brain className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge technology for social good</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in building safer communities</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600">Visionary leader dedicated to creating safer communities worldwide</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/founder-photo.png" 
                    alt="Levi Hankins, Founder & CEO of Vector for Good"
                    className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Levi Hankins</h3>
                  <p className="text-xl text-purple-600 font-semibold mb-4">Founder & CEO, Vector for Good</p>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      A retired United States Navy veteran and ordained minister, Levi brings a unique combination 
                      of service, leadership, and spiritual guidance to his mission of protecting vulnerable communities. 
                      Inspired by Dame Jane Goodall's profound wisdom that "everyone has a special role to play 
                      and we are more interconnected than separate," he created Vector for Good to protect 
                      LGBTQIA+ communities through innovative technology and compassionate design.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Drawing from his military experience in service and protection, combined with his ministerial 
                      calling to care for others, Levi leads Vector for Good's mission to create the world's most 
                      trusted safety intelligence platform while maintaining the highest standards of privacy and 
                      human dignity. His deep expertise in privacy-preserving technologies is matched by an 
                      unwavering commitment to social justice and community protection.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      As a partner with the International Queer Safety Foundation (IQSF), Levi works tirelessly 
                      to ensure that every LGBTQIA+ individual and family can live authentically and safely, 
                      anywhere in the world. His background in both military service and ministry informs his 
                      holistic approach to safety—protecting not just physical wellbeing, but also spiritual 
                      and emotional flourishing.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      US Navy Veteran
                    </span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Ordained Minister
                    </span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      Privacy Technology Expert
                    </span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      LGBTQIA+ Advocate
                    </span>
                    <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      Social Impact Leader
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-purple-200">
                <blockquote className="text-center">
                  <p className="text-xl italic text-gray-700 mb-4">
                    "Dame Jane taught us that we are more interconnected than separate. Every individual 
                    matters, every individual has a role to play, every individual makes a difference. 
                    This wisdom guides everything we do at Vector for Good."
                  </p>
                  <footer className="text-purple-600 font-semibold">— Levi Hankins, Founder & CEO</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              Help us build a safer, more inclusive world for everyone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Involved
              </Link>
              <Link
                to="/qsi-map"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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

export default AboutPage
