import React, { useState, useEffect } from 'react';
import { Heart, Quote, TreePine, Globe, Users, Shield, Star, Sparkles, ArrowRight, Play, Pause } from 'lucide-react';

const JaneGoodallMemorial = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspiringQuotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const inspiringQuotes = [
    {
      text: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
      context: "On individual responsibility and action"
    },
    {
      text: "Every individual matters. Every individual has a role to play. Every individual makes a difference.",
      context: "On the power of each person"
    },
    {
      text: "Hope is not passive. Hope is action. Hope is doing something.",
      context: "On the nature of hope"
    },
    {
      text: "We have a choice to use the gift of our life to make the world a better place—or not to bother.",
      context: "On life's purpose"
    },
    {
      text: "Change happens by listening and then starting a dialogue with the people who are doing something you don't believe is right.",
      context: "On creating positive change"
    },
    {
      text: "Only if we understand, will we care. Only if we care, will we help. Only if we help, shall all be saved.",
      context: "On education and compassion"
    }
  ];

  const legacyConnections = [
    {
      icon: Shield,
      title: "Protecting the Vulnerable",
      description: "Just as Jane protected chimpanzees from harm, Vector for Good protects LGBTQ+ individuals by providing safety intelligence and secure spaces worldwide.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Globe,
      title: "Global Compassion",
      description: "Her worldwide conservation efforts inspire our global mission to create safe spaces for all people, regardless of who they love or how they identify.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Jane's Roots & Shoots program empowered young people globally. IQSF empowers LGBTQ+ communities with knowledge, resources, and solidarity.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: TreePine,
      title: "Sustainable Future",
      description: "Her environmental legacy guides our commitment to building sustainable, inclusive communities where everyone can thrive authentically.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const milestones = [
    {
      year: "1960",
      title: "Gombe Journey Begins",
      description: "At 26, Jane arrived in what is now Tanzania to study chimpanzees, beginning a revolutionary approach to animal research.",
      impact: "Showed the world that animals have personalities, emotions, and complex social structures."
    },
    {
      year: "1977",
      title: "Jane Goodall Institute Founded",
      description: "Established to continue research and conservation work while supporting local communities.",
      impact: "Created sustainable conservation programs that protect both wildlife and human communities."
    },
    {
      year: "1991",
      title: "Roots & Shoots Launched",
      description: "Youth program empowering young people to become environmental stewards and compassionate leaders.",
      impact: "Inspired millions of young people worldwide to take action for people, animals, and the environment."
    },
    {
      year: "2002",
      title: "UN Messenger of Peace",
      description: "Appointed by Kofi Annan to spread messages of hope and environmental awareness globally.",
      impact: "Elevated conservation and compassion to the highest levels of international diplomacy."
    }
  ];

  const personalMessage = {
    title: "A Personal Thank You",
    content: `Dr. Jane Goodall, your extraordinary life has been a beacon of hope and inspiration for all of us at Vector for Good and the International Queer Safety Foundation. Your revolutionary approach to understanding and protecting our fellow beings on this planet has shaped our own mission to protect and empower LGBTQ+ communities worldwide.

    When you first ventured into Gombe at just 26 years old, you didn't just study chimpanzees—you showed the world how to see the individual worth and dignity in every living being. This profound respect for individuality, for the unique value of each life, is at the very heart of our work protecting LGBTQ+ individuals around the globe.

    Your famous words, "Every individual matters. Every individual has a role to play. Every individual makes a difference," resonate deeply with our mission. Every LGBTQ+ person deserves safety, dignity, and the freedom to live authentically. Every ally has a role in creating inclusive communities. Every act of compassion makes a difference.

    Just as you transformed our understanding of what it means to be human through your work with chimpanzees, we strive to transform how the world sees and protects LGBTQ+ individuals. Your legacy of patient observation, deep empathy, and unwavering commitment to justice guides us every day.

    Your Roots & Shoots program has empowered millions of young people to become agents of positive change. Similarly, we work to empower LGBTQ+ communities with the tools, knowledge, and support they need to create safer, more inclusive spaces for themselves and future generations.

    Dr. Goodall, though you are no longer with us in person, your spirit lives on in every act of compassion, every effort to protect the vulnerable, and every step toward a more just and inclusive world. Thank you for showing us that one person, armed with patience, courage, and love, can indeed change the world.

    Your legacy continues to inspire everything we do at Vector for Good and IQSF. We carry your torch of hope, your commitment to understanding, and your belief that every individual matters.

    With deepest gratitude and respect,
    The Vector for Good and IQSF Teams`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Memorial Portrait */}
            <div className="mb-12 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl transform scale-110"></div>
                <img 
                  src="/images/jane-goodall-portrait.png" 
                  alt="Dr. Jane Goodall" 
                  className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full object-cover shadow-2xl border-8 border-white/50 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Memorial Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Dr. Jane Goodall
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
                1934 - 2024
              </p>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Primatologist, Conservationist, UN Messenger of Peace
                <br />
                <span className="text-lg italic">A beacon of hope who showed us that every individual matters</span>
              </p>
            </div>

            {/* Floating Quote */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mb-12 border border-amber-200">
              <Quote className="h-12 w-12 text-amber-600 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-4 leading-relaxed font-light">
                "{inspiringQuotes[currentQuote].text}"
              </blockquote>
              <p className="text-gray-600 italic">
                {inspiringQuotes[currentQuote].context}
              </p>
              
              {/* Quote Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {inspiringQuotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentQuote ? 'bg-amber-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Memorial Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3">
                <Heart className="h-6 w-6" />
                <span>Share Your Memory</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="group flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors"
              >
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  {isPlaying ? <Pause className="h-6 w-6 ml-1" /> : <Play className="h-6 w-6 ml-1" />}
                </div>
                <span className="text-lg font-medium">
                  {isPlaying ? 'Pause' : 'Play'} Memorial Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Connection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Her Legacy Lives On
              <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent"> In Our Mission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dr. Goodall's revolutionary approach to understanding and protecting vulnerable beings 
              continues to inspire Vector for Good and IQSF's mission to create safety and dignity for all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legacyConnections.map((connection, index) => {
              const IconComponent = connection.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${connection.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {connection.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {connection.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Life Journey Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              A Life of
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Extraordinary Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a young woman with a dream to a global icon of hope and conservation
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-red-400 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-amber-500 to-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-shadow">
                    <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-l-4 border-amber-400">
                      <p className="text-sm text-gray-700 italic">
                        <strong>Impact:</strong> {milestone.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Legacy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              A Visual
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Legacy</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <img 
                src="/images/jane-goodall-nature.png" 
                alt="Jane Goodall in nature with chimpanzees" 
                className="w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow"
              />
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                <p className="text-gray-700 leading-relaxed italic">
                  "In the forest, I learned that we are not the only beings with personalities, minds, and emotions. 
                  This understanding changed everything—not just how we see animals, but how we see ourselves and our responsibility to all life."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <img 
                src="/images/jane-goodall-legacy.png" 
                alt="Jane Goodall's continuing legacy" 
                className="w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow"
              />
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <p className="text-gray-700 leading-relaxed italic">
                  "Her legacy grows like the great tree in this image—providing shelter, strength, and hope for all who seek safety and understanding. 
                  From the roots of compassion springs the branches of justice, protection, and love."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-purple-200">
            <div className="text-center mb-12">
              <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {personalMessage.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {personalMessage.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-justify">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-center space-x-6">
              <img src="/images/vector-logo-alt.png" alt="Vector for Good" className="h-12 w-auto" />
              <div className="w-px h-12 bg-gray-300"></div>
              <img src="/images/iqsf-logo.png" alt="IQSF" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Continue Her Legacy
          </h2>
          <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
            Honor Dr. Goodall's memory by taking action to protect and empower vulnerable communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6" />
              <span>Support LGBTQ+ Safety</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors transform hover:scale-105 flex items-center justify-center space-x-3">
              <Globe className="h-6 w-6" />
              <span>Join Our Mission</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JaneGoodallMemorial;
