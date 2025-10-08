import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Globe, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Building2, 
  Zap, 
  Lock, 
  AlertTriangle,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const EnterprisePage = () => {
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Advanced Threat Intelligence',
      description: 'Real-time monitoring and analysis of global safety threats with predictive modeling and risk assessment.',
      benefits: ['24/7 threat monitoring', 'Predictive risk modeling', 'Custom threat intelligence feeds', 'Automated alert systems']
    },
    {
      icon: Users,
      title: 'Employee Safety Management',
      description: 'Comprehensive employee protection with travel safety, location monitoring, and emergency response coordination.',
      benefits: ['Employee travel tracking', 'Emergency response protocols', 'Safety check-ins', 'Family notification systems']
    },
    {
      icon: BarChart3,
      title: 'Executive Dashboards',
      description: 'Real-time analytics and reporting for C-suite executives with customizable KPIs and compliance metrics.',
      benefits: ['Executive-level reporting', 'Custom KPI tracking', 'Compliance monitoring', 'ROI analytics']
    },
    {
      icon: Globe,
      title: 'Global Operations Support',
      description: 'Multi-region deployment with local compliance, cultural sensitivity, and regulatory adherence.',
      benefits: ['Multi-region deployment', 'Local compliance', 'Cultural adaptation', 'Regulatory adherence']
    }
  ];

  const pricingPlans = [
    {
      id: 'professional',
      name: 'Professional',
      price: '$2,500',
      period: 'per month',
      description: 'For growing companies with 100-500 employees',
      features: [
        'Up to 500 employee profiles',
        'Basic threat intelligence',
        'Standard reporting',
        'Email support',
        'API access',
        'Mobile apps'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$7,500',
      period: 'per month',
      description: 'For large organizations with 500-5000 employees',
      features: [
        'Up to 5,000 employee profiles',
        'Advanced threat intelligence',
        'Executive dashboards',
        'Priority support',
        'Custom integrations',
        'Dedicated success manager',
        'Advanced analytics',
        'Compliance reporting'
      ],
      cta: 'Contact Sales',
      popular: true
    },
    {
      id: 'fortune500',
      name: 'Fortune 500',
      price: 'Custom',
      period: 'pricing',
      description: 'For Fortune 500 companies with unlimited scale',
      features: [
        'Unlimited employee profiles',
        'Custom threat intelligence',
        'White-label solutions',
        '24/7 dedicated support',
        'On-premise deployment',
        'Custom development',
        'Executive briefings',
        'Global compliance suite'
      ],
      cta: 'Schedule Consultation',
      popular: false
    }
  ];

  const testimonials = [
    {
      company: 'Global Tech Corp',
      industry: 'Technology',
      logo: '🏢',
      quote: 'Vector for Good transformed our global employee safety program. The predictive analytics helped us prevent three major incidents last quarter.',
      author: 'Sarah Chen',
      title: 'Chief Security Officer',
      employees: '15,000+ employees'
    },
    {
      company: 'International Finance Ltd',
      industry: 'Financial Services',
      logo: '🏦',
      quote: 'The compliance reporting features saved us hundreds of hours during our regulatory audit. The ROI was immediate.',
      author: 'Michael Rodriguez',
      title: 'VP of Risk Management',
      employees: '8,000+ employees'
    },
    {
      company: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      logo: '🏭',
      quote: 'Having real-time safety intelligence for our operations in 40+ countries gives our leadership team unprecedented visibility.',
      author: 'Jennifer Park',
      title: 'Global Operations Director',
      employees: '25,000+ employees'
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: '☁️' },
    { name: 'Microsoft 365', logo: '📊' },
    { name: 'Slack', logo: '💬' },
    { name: 'ServiceNow', logo: '🔧' },
    { name: 'Workday', logo: '👥' },
    { name: 'SAP', logo: '📈' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise Safety Intelligence
              <span className="block text-blue-300">Built for Fortune 500</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your global workforce with enterprise-grade safety intelligence, 
              compliance reporting, and executive dashboards trusted by industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule Demo</span>
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Contact Sales</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety intelligence platform designed for the unique needs of Fortune 500 companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {enterpriseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your organization's needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.logo}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.company}</h4>
                    <p className="text-gray-600">{testimonial.industry}</p>
                    <p className="text-sm text-blue-600">{testimonial.employees}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing enterprise tools and workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-gray-200 transition-colors">
                  <span className="text-3xl">{integration.logo}</span>
                </div>
                <p className="font-semibold text-gray-900">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Protect Your Global Workforce?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join Fortune 500 companies who trust Vector for Good to keep their employees safe worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Enterprise Demo</span>
            </button>
            <Link 
              to="/contact"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Sales Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterprisePage;
