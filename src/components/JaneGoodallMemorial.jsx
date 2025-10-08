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
      title: "Global Conservation",
      description: "Jane's worldwide conservation efforts inspire our global mission to create safe spaces and protect LGBTQ+ communities across all continents.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Her work empowering local communities mirrors our commitment to empowering LGBTQ+ communities with the tools and knowledge they need to stay safe.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Heart,
      title: "Compassionate Action",
      description: "Jane's compassionate approach to all living beings guides our empathetic, human-centered approach to safety intelligence and community support.",
      color: "from-red-500 to-rose-600"
    }
  ];

  const lifeJourney = [
    {
      year: "1934",
      title: "Born in London",
      description: "Valerie Jane Morris-Goodall was born on April 3, 1934, in London, England, beginning a life that would change our understanding of the natural world."
    },
    {
      year: "1960",
      title: "Journey to Gombe",
      description: "At age 26, Jane arrived at what is now Gombe Stream National Park in Tanzania to study chimpanzees, beginning her groundbreaking research."
    },
    {
      year: "1960s",
      title: "Revolutionary Discoveries",
      description: "Jane observed chimpanzees making and using tools, fundamentally changing our understanding of what makes humans unique."
    },
    {
      year: "1977",
      title: "Founded Jane Goodall Institute",
      description: "Established the Jane Goodall Institute to continue research and conservation work, expanding her impact globally."
    },
    {
      year: "1991",
      title: "Roots & Shoots Program",
      description: "Launched the youth program that now operates in over 65 countries, empowering young people to become environmental stewards."
    },
    {
      year: "2002",
      title: "UN Messenger of Peace",
      description: "Appointed as a UN Messenger of Peace, recognizing her global influence in conservation and humanitarian work."
    },
    {
      year: "2024",
      title: "Eternal Legacy",
      description: "Dr. Jane Goodall passed away peacefully, leaving behind an unparalleled legacy of compassion, scientific discovery, and hope for our planet's future."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Memorial Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Memorial Portrait */}
          <div className="mb-12">
            <div className="relative inline-block">
              <img 
                src="/images/jane-goodall-portrait.png" 
                alt="Dr. Jane Goodall" 
                className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Memorial Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            In Loving Memory of
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-8">
            Dr. Jane Goodall
          </h2>
          
          {/* Life Dates */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            April 3, 1934 - December 2024
          </div>

          {/* Memorial Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Primatologist, Conservationist, and Champion for All Living Beings
            <br />
            <span className="text-green-400 font-semibold">Her legacy lives on in every act of compassion and conservation</span>
          </p>

          {/* Rotating Memorial Quotes */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-green-400 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl text-white mb-6 italic font-light leading-relaxed">
              "{inspiringQuotes[currentQuote].text}"
            </blockquote>
            <p className="text-green-400 font-medium">
              {inspiringQuotes[currentQuote].context}
            </p>
            
            {/* Quote Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {inspiringQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote ? 'bg-green-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Connections to Vector for Good */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Jane's Legacy Inspires Vector for Good
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dr. Goodall's pioneering work in protecting vulnerable beings and empowering communities 
              directly inspires our mission to protect LGBTQ+ individuals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legacyConnections.map((connection, index) => {
              const IconComponent = connection.icon;
              return (
                <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-black/40 transition-all duration-500 hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${connection.color} flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{connection.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{connection.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Life Journey Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Life of Extraordinary Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a young woman with a dream to study animals in Africa to a global icon of conservation and compassion.
            </p>
          </div>

          <div className="space-y-8">
            {lifeJourney.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex-1 hover:bg-black/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Legacy Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-green-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visual Legacy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Images that capture the essence of Dr. Goodall's remarkable life and enduring impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-black/40 transition-all duration-500">
              <img 
                src="/images/jane-goodall-nature.png" 
                alt="Jane in Nature" 
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-3">In Her Element</h3>
              <p className="text-gray-300">Jane in the forests of Gombe, where she made her groundbreaking discoveries about chimpanzee behavior.</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-black/40 transition-all duration-500">
              <img 
                src="/images/jane-goodall-portrait.png" 
                alt="Jane Goodall Portrait" 
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-3">The Scientist</h3>
              <p className="text-gray-300">A portrait of the woman who revolutionized our understanding of animal behavior and intelligence.</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-black/40 transition-all duration-500">
              <img 
                src="/images/jane-goodall-legacy.png" 
                alt="Jane's Legacy" 
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-3">Enduring Legacy</h3>
              <p className="text-gray-300">Her work continues to inspire new generations of conservationists and advocates worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Personal Memorial Tribute */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Founder's Memorial Tribute
              </h2>
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
              "Jane Goodall was more than a global icon—she was my childhood hero. Her courage and wisdom shaped my understanding of compassion, advocacy, and what it means to make a difference. Jane personally influenced the course of my life, inspiring me to pursue causes that protect the vulnerable and empower change.
              <br /><br />
              Through her work, I learned that hope is powerful, empathy is revolutionary, and our dedication to justice must include every voice and life. Her legacy lives in my resolve and in the very foundation of IQSF and Vector For Good.
              <br /><br />
              Though she has left us, her spirit continues to guide every decision we make, every person we protect, and every community we serve. Thank you, Dame Jane, for showing me—and countless others—that every small action counts, and that dreams truly can change the world. Your legacy of compassion will live on forever."
            </blockquote>
            
            <div className="text-center">
              <div className="text-white font-semibold text-lg mb-2">— Levi Hankins</div>
              <div className="text-gray-400 space-y-1">
                <div>Founder & CEO</div>
                <div>IQSF (International Queer Safety Foundation 501c3)</div>
                <div>Vector For Good PBC (Delaware, USA)</div>
                <div>Vector For Good Ou (Estonia)</div>
                <div>Future Vector For Good GmbH (Berlin, Germany)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Memorial Message */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              From All of Us at Vector for Good
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Dr. Jane Goodall's passing marks the end of an era, but her legacy of compassion, scientific rigor, and unwavering hope continues to inspire our work every day. She showed us that understanding leads to caring, caring leads to action, and action can change the world.
              <br /><br />
              At Vector for Good, we carry forward her mission of protecting the vulnerable and building bridges of understanding. Every safety report we generate, every community we protect, and every life we help save is a testament to the values she embodied.
              <br /><br />
              Rest in peace, Dr. Goodall. Your legacy lives on in every act of kindness, every moment of protection, and every step toward a more compassionate world.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <img src="/images/vector-logo-hero.png" alt="Vector for Good" className="h-12 w-auto" />
              <span className="text-2xl text-white">+</span>
              <img src="/images/iqsf-logo.png" alt="IQSF" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Continue Her Legacy */}
      <section className="py-20 bg-gradient-to-r from-green-900/50 to-emerald-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Continue Her Legacy
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Honor Dr. Goodall's memory by joining our mission to protect and empower LGBTQ+ communities worldwide. 
            Every action, no matter how small, makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/qsi-map" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Explore Safety Intelligence
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/contact" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Join Our Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JaneGoodallMemorial;
