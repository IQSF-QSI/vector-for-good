import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Globe, 
  Zap, 
  Shield, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Coffee,
  Laptop,
  Home
} from 'lucide-react';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build scalable systems that protect LGBTQ+ communities worldwide. Work with React, Node.js, and cutting-edge privacy technologies.',
      requirements: ['5+ years full-stack development', 'React/Node.js expertise', 'Experience with privacy-preserving technologies', 'Passion for social impact'],
      featured: true
    },
    {
      id: 2,
      title: 'AI/ML Research Scientist',
      department: 'AI Research',
      location: 'Remote / Boston',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop AI agents and machine learning models for safety intelligence and threat detection.',
      requirements: ['PhD in ML/AI or equivalent', 'Experience with LLMs', 'Python/PyTorch expertise', 'Research publication record'],
      featured: true
    },
    {
      id: 3,
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design intuitive interfaces for complex safety intelligence tools used by Fortune 500 companies.',
      requirements: ['4+ years product design', 'Figma/Sketch expertise', 'Enterprise UX experience', 'Portfolio of complex products'],
      featured: false
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain secure, scalable infrastructure for global safety intelligence platform.',
      requirements: ['3+ years DevOps experience', 'AWS/GCP expertise', 'Kubernetes/Docker', 'Security-first mindset'],
      featured: false
    },
    {
      id: 5,
      title: 'Sales Director - Enterprise',
      department: 'Sales',
      location: 'Remote / Chicago',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Lead enterprise sales efforts targeting Fortune 500 companies and government organizations.',
      requirements: ['7+ years enterprise sales', 'SaaS/B2B experience', 'Fortune 500 relationships', 'Track record of $10M+ deals'],
      featured: false
    },
    {
      id: 6,
      title: 'Data Privacy Counsel',
      department: 'Legal',
      location: 'Remote / Washington DC',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Ensure compliance with global privacy regulations and advise on zero-knowledge architecture.',
      requirements: ['JD with privacy law focus', '5+ years privacy counsel', 'GDPR/CCPA expertise', 'Tech company experience'],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Mission-Driven Work',
      description: 'Make a real impact protecting LGBTQ+ communities worldwide'
    },
    {
      icon: Home,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and async collaboration'
    },
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Top-tier salaries, equity, and comprehensive benefits package'
    },
    {
      icon: Coffee,
      title: 'Professional Development',
      description: '$5,000 annual learning budget and conference attendance'
    },
    {
      icon: Users,
      title: 'Inclusive Team',
      description: 'Diverse, welcoming team committed to equality and justice'
    },
    {
      icon: Laptop,
      title: 'Top-Tier Equipment',
      description: 'Latest MacBook Pro, monitor, and home office setup allowance'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'We believe privacy is a fundamental human right and build accordingly.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our work protects vulnerable communities in 195+ countries worldwide.'
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We push the boundaries of technology to solve complex social problems.'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We center human dignity and compassion in everything we build.'
    }
  ];

  const teamStats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Countries', icon: Globe },
    { number: '95%', label: 'Employee Satisfaction', icon: Star },
    { number: '2x', label: 'Annual Growth', icon: Zap }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department.toLowerCase() === selectedDepartment.toLowerCase());

  const departments = ['all', 'Engineering', 'AI Research', 'Design', 'Sales', 'Legal'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Mission
              <span className="block text-blue-300">Build the Future of Safety</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Help us create technology that protects LGBTQ+ communities worldwide. 
              Work with cutting-edge AI, privacy tech, and passionate people changing the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#openings"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Open Positions</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link 
                to="/about"
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and the culture we're building together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team so they can do their best work changing the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and help build technology that makes the world safer for everyone.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className={`bg-white border rounded-2xl p-8 hover:shadow-lg transition-shadow ${
                  job.featured ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      {job.featured && (
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="text-gray-500 text-sm">+{job.requirements.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No positions found in this department.</p>
              <button 
                onClick={() => setSelectedDepartment('all')}
                className="text-blue-600 hover:text-blue-700 font-medium mt-2"
              >
                View all positions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for exceptional people who share our mission. 
            Send us your resume and tell us how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
            <Link 
              to="/about"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
