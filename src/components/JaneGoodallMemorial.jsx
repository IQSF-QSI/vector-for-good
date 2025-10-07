import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Heart, Globe, Users, Leaf, BookOpen, Award, Star } from 'lucide-react'

const JaneGoodallMemorial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-red-500 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                In Loving Memory
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              Dame Jane Goodall
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              April 3, 1934 - October 1, 2025
            </p>
            <p className="text-lg text-gray-500 italic mb-8">
              "What you do makes a difference, and you have to decide what kind of difference you want to make."
            </p>
            
            {/* Featured Photos in Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <div className="relative group">
                <img 
                  src="/images/Nlyz6Swdxo3r.jpg" 
                  alt="Jane Goodall observing chimpanzees" 
                  className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg"></div>
              </div>
              
              <div className="relative group">
                <img 
                  src="/images/VW8GV9NXbqNW.jpeg" 
                  alt="Jane Goodall with David Greybeard" 
                  className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg"></div>
              </div>
              
              <div className="relative group">
                <img 
                  src="/images/y9MgaXr8BLpE.jpg" 
                  alt="Jane Goodall in the field" 
                  className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg"></div>
              </div>
              
              <div className="relative group">
                <img 
                  src="/images/Dn7yGmtqQH0y.jpg" 
                  alt="Iconic Jane Goodall portrait" 
                  className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
              <div className="text-center text-white">
                <Globe className="w-24 h-24 mx-auto mb-4 opacity-80" />
                <p className="text-2xl font-semibold">A Life Dedicated to Our Planet</p>
                <p className="text-lg opacity-90">Primatologist • Conservationist • Humanitarian</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">A Legacy of Hope and Change</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dame Jane Goodall revolutionized our understanding of primates and dedicated her life to 
              conservation, education, and creating a better world for all living beings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Scientific Breakthrough */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Scientific Pioneer</h4>
              <p className="text-gray-600">
                Groundbreaking research at Gombe Stream revealed that chimpanzees use tools, 
                fundamentally changing our understanding of what makes us human.
              </p>
            </div>

            {/* Conservation Leader */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Conservation Champion</h4>
              <p className="text-gray-600">
                Founded the Jane Goodall Institute and Roots & Shoots program, 
                inspiring millions to take action for people, animals, and the environment.
              </p>
            </div>

            {/* Global Impact */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Advocate</h4>
              <p className="text-gray-600">
                Traveled 300+ days a year spreading hope and inspiring action, 
                becoming one of the world's most respected voices for environmental protection.
              </p>
            </div>

            {/* Youth Empowerment */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Youth Empowerment</h4>
              <p className="text-gray-600">
                Roots & Shoots program active in over 65 countries, 
                empowering young people to become compassionate leaders and environmental stewards.
              </p>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Recognition</h4>
              <p className="text-gray-600">
                Dame Commander of the British Empire, UN Messenger of Peace, 
                and recipient of countless honors for her contributions to science and humanity.
              </p>
            </div>

            {/* Inspiration */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Star className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Eternal Inspiration</h4>
              <p className="text-gray-600">
                Her message of hope, individual action, and interconnectedness 
                continues to inspire new generations of changemakers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Vector for Good */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Her Spirit Lives On in Our Mission</h3>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dame Jane Goodall's unwavering commitment to creating a better world for all living beings 
              deeply inspires Vector for Good's mission. Just as she dedicated her life to understanding 
              and protecting vulnerable communities in the natural world, we are committed to protecting 
              and empowering vulnerable LGBTQIA+ communities through technology and compassion.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Her belief that "every individual matters, every individual has a role to play, 
              every individual makes a difference" guides our work in creating safer, more inclusive 
              spaces for LGBTQIA+ individuals and families worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our Queer Safety Intelligence platform, we honor her legacy by using technology 
              to create the kind of world she envisioned - one where every being can live safely, 
              authentically, and with dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Jane Goodall: Iconic Moments in Photos</h3>
            <p className="text-xl text-gray-600">A visual journey through Dame Jane's groundbreaking work at Gombe Stream</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photo 1 - Jane with chimpanzee */}
            <figure className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/Nlyz6Swdxo3r.jpg" 
                alt="Jane Goodall observing chimpanzees at Gombe Stream" 
                className="w-full h-64 object-cover"
              />
              <figcaption className="p-4">
                <p className="text-sm text-gray-700 font-medium mb-1">Observing Chimpanzees, Gombe Stream</p>
                <p className="text-xs text-gray-500">Early research days in Tanzania – Photo: National Geographic</p>
              </figcaption>
            </figure>

            {/* Photo 2 - With David Greybeard */}
            <figure className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/VW8GV9NXbqNW.jpeg" 
                alt="Jane Goodall with David Greybeard, the famous tool-using chimpanzee" 
                className="w-full h-64 object-cover"
              />
              <figcaption className="p-4">
                <p className="text-sm text-gray-700 font-medium mb-1">With David Greybeard, 1965</p>
                <p className="text-xs text-gray-500">The chimpanzee who changed our understanding of humanity</p>
              </figcaption>
            </figure>

            {/* Photo 3 - Gombe 60 */}
            <figure className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/lmDpX7xYRenM.png" 
                alt="Gombe 60 years celebration" 
                className="w-full h-64 object-cover"
              />
              <figcaption className="p-4">
                <p className="text-sm text-gray-700 font-medium mb-1">Gombe 60: Six Decades of Discovery</p>
                <p className="text-xs text-gray-500">Celebrating 60 years of groundbreaking research</p>
              </figcaption>
            </figure>

            {/* Photo 4 - Field research */}
            <figure className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/y9MgaXr8BLpE.jpg" 
                alt="Jane Goodall conducting field research" 
                className="w-full h-64 object-cover"
              />
              <figcaption className="p-4">
                <p className="text-sm text-gray-700 font-medium mb-1">Life in the Wild</p>
                <p className="text-xs text-gray-500">Reflecting on decades of conservation work</p>
              </figcaption>
            </figure>

            {/* Photo 5 - Famous chimps */}
            <figure className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/PoXwRgcv0xwW.jpg" 
                alt="The famous chimpanzees of Gombe" 
                className="w-full h-64 object-cover"
              />
              <figcaption className="p-4">
                <p className="text-sm text-gray-700 font-medium mb-1">Flo, Flint, David and Goliath</p>
                <p className="text-xs text-gray-500">The famous chimpanzees who became household names</p>
              </figcaption>
            </figure>

            {/* Photo 6 - National Geographic */}
            <figure className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/Dn7yGmtqQH0y.jpg" 
                alt="Iconic National Geographic photo of Jane Goodall" 
                className="w-full h-64 object-cover"
              />
              <figcaption className="p-4">
                <p className="text-sm text-gray-700 font-medium mb-1">National Geographic Icon</p>
                <p className="text-xs text-gray-500">One of the most recognizable images in conservation history</p>
              </figcaption>
            </figure>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 italic">
              "The greatest danger to our future is apathy." - Dame Jane Goodall
            </p>
          </div>
        </div>
      </section>

      {/* Words of Wisdom */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Words of Wisdom</h3>          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "What you do makes a difference, and you have to decide what kind of difference you want to make."
              </blockquote>
              <p className="text-green-600 font-semibold">- Dame Jane Goodall</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Every individual matters. Every individual has a role to play. Every individual makes a difference."
              </blockquote>
              <p className="text-green-600 font-semibold">- Dame Jane Goodall</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Hope is not passive. Hope is action. Hope is doing something."
              </blockquote>
              <p className="text-green-600 font-semibold">- Dame Jane Goodall</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Change happens by listening and then starting a dialogue with the people who are doing something you don't believe is right."
              </blockquote>
              <p className="text-green-600 font-semibold">- Dame Jane Goodall</p>
            </div>
          </div>
        </div>
      </section>

      {/* Memorial Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Honor Her Legacy</h3>
          <p className="text-xl text-green-100 mb-8">
            Continue Dame Jane's work by taking action in your own community
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://www.janegoodall.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-6 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Visit Jane Goodall Institute
            </a>
            <a 
              href="https://www.rootsandshoots.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Join Roots & Shoots
            </a>
            <Link 
              to="/contact"
              className="bg-white text-purple-600 px-6 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">A Personal Message of Gratitude</h3>
              <p className="text-gray-600">From the Founder of Vector for Good</p>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Dear Dame Jane,
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Your profound wisdom that everyone has a special role to play and that we are more 
                interconnected than separate has been the guiding light for Vector for Good's mission. 
                This beautiful truth - that our individual actions ripple through the web of life to 
                create meaningful change - inspired me to build a platform where technology serves 
                our shared humanity.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Just as you showed us that understanding and protecting our fellow creatures requires 
                recognizing our deep interconnectedness, Vector for Good's work to protect LGBTQIA+ 
                communities is built on the same foundation - that when we protect the vulnerable, 
                we strengthen the entire fabric of our shared world.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Your teaching that every individual matters, every individual has a role to play, 
                every individual makes a difference became our rallying cry. Through our zero-knowledge 
                privacy technology, we honor this interconnectedness by ensuring that when someone 
                shares their safety experience, it helps protect countless others while keeping their 
                personal story secure.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Thank you for showing us that we are not separate beings struggling alone, but part 
                of a beautiful, interconnected tapestry where each thread - each person, each act of 
                compassion, each moment of courage - strengthens the whole. Your legacy reminds us 
                that in protecting others, we protect ourselves; in lifting others up, we all rise.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Every LGBTQIA+ individual who finds safety through our platform, every family who 
                travels with confidence, every community that becomes more inclusive - they are all 
                part of this interconnected web of care that you taught us to see and nurture.
              </p>
              
              <p className="text-lg leading-relaxed">
                With profound gratitude for showing us our interconnectedness,<br />
                <span className="font-semibold text-purple-700">The Vector for Good Team</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tribute */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Thank You, Dame Jane</h3>
          <p className="text-lg text-gray-300 mb-6">
            For showing us that one person can indeed make a difference, 
            and that hope combined with action can change the world.
          </p>
          <p className="text-sm text-gray-400">
            Your legacy lives on in every act of compassion, every effort to protect the vulnerable, 
            and every person inspired to make the world a better place.
          </p>
        </div>
      </section>
    </div>
  )
}

export default JaneGoodallMemorial
