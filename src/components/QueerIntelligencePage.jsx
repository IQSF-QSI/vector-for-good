import React, { useState, useEffect } from 'react';
import { Brain, Heart, Shield, Users, Sparkles, Globe, Eye, Lock, Zap, ArrowRight, Star, Rainbow, Lightbulb } from 'lucide-react';

const QueerIntelligencePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % qiFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const qiFeatures = [
    {
      icon: Heart,
      title: "Empathy-Centered Technology",
      description: "QI systems prioritize authentic human experiences, ensuring that voices from the queer community shape how data is interpreted and applied.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Safety & Privacy",
      description: "Tailored to protect queer users from harassment, discrimination, and surveillance, QI integrates privacy-first methodologies.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Cultural Competency",
      description: "Deep understanding of intersectional identities makes QI uniquely equipped to navigate complex social dynamics.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Advocacy & Empowerment",
      description: "Beyond technology, QI fuels advocacy initiatives that promote equality, inclusion, and visibility worldwide.",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const qiPrinciples = [
    {
      icon: Eye,
      title: "Intersectional Awareness",
      description: "Understanding the complexity of multiple identities and how they intersect with technology and society."
    },
    {
      icon: Lock,
      title: "Digital Sovereignty",
      description: "Empowering queer communities to control their own data, narratives, and digital presence."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Recognizing diverse queer experiences across cultures, countries, and communities worldwide."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "Creating technology solutions that directly address real challenges faced by LGBTQ+ individuals."
    }
  ];

  const applications = [
    {
      title: "Safety Intelligence",
      description: "AI-powered risk assessment for LGBTQ+ travelers and communities",
      icon: "🛡️"
    },
    {
      title: "Identity Protection",
      description: "Zero-knowledge systems that protect personal information while enabling community connection",
      icon: "🔐"
    },
    {
      title: "Cultural Navigation",
      description: "Context-aware guidance for navigating different social and legal environments",
      icon: "🧭"
    },
    {
      title: "Community Empowerment",
      description: "Tools that amplify queer voices and facilitate grassroots organizing",
      icon: "📢"
    },
    {
      title: "Healthcare Access",
      description: "Intelligent systems for finding LGBTQ+-affirming healthcare providers",
      icon: "🏥"
    },
    {
      title: "Legal Advocacy",
      description: "AI-assisted legal research and advocacy for LGBTQ+ rights",
      icon: "⚖️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* QI Logo/Icon */}
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Rainbow className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Introducing
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
            Queer Intelligence
          </h2>
          <div className="text-3xl md:text-4xl font-bold text-gray-300 mb-12">
            (QI)
          </div>

          {/* Hero Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            In a world shaped by artificial intelligence and data, <span className="text-purple-400 font-semibold">Queer Intelligence (QI)</span> emerges as a revolutionary paradigm—where technology meets lived experience, culture, and community empowerment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#learn-more" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Explore QI Framework
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/contact" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Join the Revolution
            </a>
          </div>
        </div>
      </section>

      {/* What is QI Section */}
      <section id="learn-more" className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What is Queer Intelligence?
            </h2>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-12 mb-16">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Queer Intelligence (QI) is a <span className="text-purple-400 font-semibold">pioneering framework</span> that fuses advanced AI capabilities with the unique perspectives, needs, and voices of the LGBTQ+ community. It leverages cutting-edge technology to create safer spaces, empower marginalized identities, and advocate for social justice with empathy and nuance.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Unlike conventional artificial intelligence, QI is driven by values of <span className="text-pink-400 font-semibold">inclusivity, intersectionality, and cultural understanding</span>. It's designed to anticipate and respond to challenges in queer safety, identity protection, and community solidarity—empowering a future where technology uplifts, not erases, queer lives.
            </p>
          </div>

          {/* Rotating Features */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-12">Why Queer Intelligence Matters</h3>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="mb-8">
                {qiFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className={`transition-all duration-1000 ${
                        index === currentFeature ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8 absolute'
                      }`}
                      style={{ display: index === currentFeature ? 'block' : 'none' }}
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
                      <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
              
              {/* Feature Navigation */}
              <div className="flex justify-center space-x-3">
                {qiFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentFeature ? 'bg-purple-400 scale-125' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QI Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Principles of QI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The foundational values that guide Queer Intelligence development and implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qiPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-black/40 transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{principle.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QI Applications */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              QI in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications of Queer Intelligence transforming how technology serves LGBTQ+ communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-black/40 transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-6 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{app.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Vision
            </h2>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex space-x-4">
                <img src="/images/vector-logo-hero.png" alt="Vector for Good" className="h-16 w-auto" />
                <span className="text-3xl text-white self-center">+</span>
                <img src="/images/iqsf-logo.png" alt="IQSF" className="h-16 w-auto" />
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center">
              At <span className="text-purple-400 font-semibold">International Queer Safety Foundation</span> and <span className="text-pink-400 font-semibold">Vector for Good</span>, we harness Queer Intelligence to build platforms and tools that safeguard queer communities. QI is the future of intentional, inclusive technology—a cornerstone for digital sovereignty and social justice in the 21st century.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              Join us as we redefine intelligence and create safer, smarter spaces for all queer lives. Together, with <span className="text-blue-400 font-semibold">Queer Intelligence</span>, we envision a world where every identity is respected, protected, and celebrated.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Be part of the Queer Intelligence revolution. Together, we're building technology that truly serves our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Get Involved
              <Heart className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/ai-agents" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Experience QI Technology
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QueerIntelligencePage;
