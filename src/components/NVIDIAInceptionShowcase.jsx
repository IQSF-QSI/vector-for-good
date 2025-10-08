import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Award, 
  TrendingUp, 
  Users, 
  Rocket,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  BarChart3,
  Cpu
} from 'lucide-react';

const NVIDIAInceptionShowcase = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % performanceMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const membershipBenefits = [
    {
      icon: Zap,
      title: 'GPU Acceleration',
      description: 'Access to NVIDIA A100 and H100 GPU credits for real-time AI processing',
      impact: '10x faster processing',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI Enterprise Suite',
      description: 'Full access to NVIDIA AI Enterprise software stack and optimization tools',
      impact: 'Enterprise-grade AI',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Technical Mentorship',
      description: 'Direct access to NVIDIA engineers and AI experts for technical guidance',
      impact: 'Expert support',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Go-to-Market Support',
      description: 'Business development assistance and market strategy guidance',
      impact: 'Accelerated growth',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Global Network Access',
      description: 'Connection to NVIDIA\'s worldwide ecosystem of partners and customers',
      impact: 'Global reach',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Rocket,
      title: 'Investor Introductions',
      description: 'Access to NVIDIA\'s network of investors and venture capital partners',
      impact: 'Funding opportunities',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Processing Speed',
      value: '10x',
      description: 'Faster threat detection with GPU acceleration',
      icon: Zap,
      color: 'text-green-600'
    },
    {
      metric: 'Model Inference',
      value: '<100ms',
      description: 'Average response time for AI agent queries',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      metric: 'Concurrent Users',
      value: '10,000+',
      description: 'Simultaneous users supported',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      metric: 'Data Processing',
      value: '1TB+',
      description: 'Daily safety intelligence processing capacity',
      icon: BarChart3,
      color: 'text-orange-600'
    }
  ];

  const acceleratedWorkloads = [
    {
      name: 'Real-time Threat Detection',
      description: 'GPU-accelerated analysis of global safety threats',
      speedup: '15x faster',
      status: 'Active'
    },
    {
      name: 'Geospatial Intelligence',
      description: 'Large-scale processing of location-based safety data',
      speedup: '8x faster',
      status: 'Active'
    },
    {
      name: 'Multi-modal AI Analysis',
      description: 'Combined text, image, and sensor data processing',
      speedup: '12x faster',
      status: 'Active'
    },
    {
      name: 'Predictive Safety Modeling',
      description: 'Machine learning models for safety prediction',
      speedup: '20x faster',
      status: 'Active'
    }
  ];

  const partnershipTimeline = [
    {
      year: '2024',
      milestone: 'NVIDIA Inception Membership',
      description: 'Accepted into NVIDIA Inception program for AI startups',
      status: 'completed'
    },
    {
      year: '2024',
      milestone: 'GPU Credits Allocation',
      description: 'Received substantial A100 GPU credits for AI workloads',
      status: 'completed'
    },
    {
      year: '2024',
      milestone: 'Technical Integration',
      description: 'Integrated NVIDIA AI Enterprise suite into platform',
      status: 'completed'
    },
    {
      year: '2025',
      milestone: 'Scale-up Phase',
      description: 'Expanding GPU usage for global deployment',
      status: 'active'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-green-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-500 p-4 rounded-2xl mr-4">
              <Award className="h-12 w-12 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-green-400">NVIDIA Inception</span> Member
              </h2>
              <p className="text-xl text-gray-300">Accelerating AI for Global Safety Intelligence</p>
            </div>
          </div>
          
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              As an <strong className="text-green-400">NVIDIA Inception member</strong>, Vector for Good leverages 
              cutting-edge GPU acceleration and AI enterprise tools to deliver real-time safety intelligence 
              at unprecedented scale and speed.
            </p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">GPU-Accelerated</span> Performance
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              const isActive = index === activeMetric;
              
              return (
                <div 
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-500 ${
                    isActive 
                      ? 'border-green-500 bg-green-500/10 scale-105 shadow-2xl shadow-green-500/20' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="text-center">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
                    <div className="text-3xl font-bold mb-2 text-white">{metric.value}</div>
                    <div className="text-lg font-semibold mb-2 text-green-400">{metric.metric}</div>
                    <p className="text-gray-400 text-sm">{metric.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Membership Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Inception Program <span className="text-green-400">Benefits</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              
              return (
                <div 
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="flex items-center text-green-400 font-semibold">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>{benefit.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accelerated Workloads */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">GPU-Accelerated</span> Workloads
          </h3>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="space-y-6">
              {acceleratedWorkloads.map((workload, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Cpu className="h-5 w-5 text-green-400 mr-3" />
                      <h4 className="text-lg font-semibold text-white">{workload.name}</h4>
                      <span className="ml-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {workload.status}
                      </span>
                    </div>
                    <p className="text-gray-400">{workload.description}</p>
                  </div>
                  
                  <div className="text-right ml-6">
                    <div className="text-2xl font-bold text-green-400">{workload.speedup}</div>
                    <div className="text-sm text-gray-500">performance gain</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Partnership <span className="text-green-400">Timeline</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-500"></div>
              
              <div className="space-y-8">
                {partnershipTimeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                      item.status === 'completed' 
                        ? 'bg-green-500 border-green-400' 
                        : item.status === 'active'
                        ? 'bg-green-400 border-green-300 animate-pulse'
                        : 'bg-gray-600 border-gray-500'
                    }`}>
                      {item.status === 'completed' ? (
                        <CheckCircle className="h-8 w-8 text-white" />
                      ) : item.status === 'active' ? (
                        <Star className="h-8 w-8 text-white" />
                      ) : (
                        <Clock className="h-8 w-8 text-white" />
                      )}
                    </div>
                    
                    <div className="ml-8 flex-1">
                      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-white">{item.milestone}</h4>
                          <span className="text-green-400 font-semibold">{item.year}</span>
                        </div>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm p-12 rounded-2xl border border-green-500/30">
            <h3 className="text-3xl font-bold mb-6">
              Enterprise-Grade AI <span className="text-green-400">Powered by NVIDIA</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our NVIDIA Inception membership ensures Vector for Good delivers Fortune 500-grade 
              performance with cutting-edge GPU acceleration and enterprise AI tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Rocket className="h-5 w-5" />
                <span>Experience GPU-Accelerated AI</span>
              </button>
              <button className="border border-green-500/50 hover:bg-green-500/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Learn About Our Technology</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NVIDIAInceptionShowcase;
