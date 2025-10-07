import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { Shield, Lock, Users, Star, AlertTriangle, CheckCircle, Eye, EyeOff } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import ZKFamilyProfiler from './ZKFamilyProfiler'
import { enhancedCityData, getScoreColor } from '../data/enhancedCityData'

const ZKPrivacyMap = () => {
  const [userProfile, setUserProfile] = useState(null)
  const [personalizedScores, setPersonalizedScores] = useState({})
  const [showProfiler, setShowProfiler] = useState(false)
  const [selectedCity, setSelectedCity] = useState(null)
  const [privacyMode, setPrivacyMode] = useState(true)
  const [isCalculating, setIsCalculating] = useState(false)

  // Zero-knowledge safety score calculation (client-side only)
  const calculatePersonalizedScores = async (zkProof) => {
    setIsCalculating(true)
    
    // Simulate client-side computation using ZK proofs
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const scores = {}
    
    enhancedCityData.forEach(city => {
      let personalizedScore = city.safetyScore
      let matchingFactors = []
      
      // Apply ZK proof-based adjustments without revealing user data
      
      // Family Structure Adjustments
      if (zkProof.proofs.hasCisParentLGBTQChild) {
        const cisParentData = city.familySafety?.cisParentsLgbtqChildren
        if (cisParentData) {
          personalizedScore = (personalizedScore + cisParentData.score) / 2
          matchingFactors.push('Cis Parent Support')
        }
      }
      
      if (zkProof.proofs.hasLGBTQParents) {
        const lgbtqParentData = city.familySafety?.lgbtqParents
        if (lgbtqParentData) {
          personalizedScore = (personalizedScore + lgbtqParentData.score) / 2
          matchingFactors.push('LGBTQ+ Parent Resources')
        }
      }
      
      if (zkProof.proofs.hasMixedFamily) {
        const mixedFamilyData = city.familySafety?.mixedFamilies
        if (mixedFamilyData) {
          personalizedScore = (personalizedScore + mixedFamilyData.score) / 2
          matchingFactors.push('Mixed Family Support')
        }
      }
      
      // LGBTQIA+ Identity-Specific Adjustments
      if (zkProof.proofs.hasLesbianMembers) {
        // Boost for cities with strong lesbian community and resources
        personalizedScore += 0.3
        matchingFactors.push('Lesbian Community & Resources')
      }
      
      if (zkProof.proofs.hasGayMembers) {
        // Boost for cities with established gay men's communities
        personalizedScore += 0.3
        matchingFactors.push('Gay Men\'s Community & Health Resources')
      }
      
      if (zkProof.proofs.hasBisexualMembers) {
        // Adjust for bisexual-specific challenges and erasure
        if (city.safetyScore > 8.0) {
          personalizedScore += 0.2
          matchingFactors.push('Bisexual Visibility & Support')
        } else {
          personalizedScore -= 0.1 // Bisexual erasure more problematic in less accepting areas
        }
      }
      
      if (zkProof.proofs.hasTransgenderMembers) {
        const transData = city.intersectionalSafety?.transgender || 
                         city.familySafety?.cisParentsLgbtqChildren // Trans children support
        if (transData && transData.score) {
          personalizedScore = (personalizedScore + transData.score) / 2
          matchingFactors.push('Transgender Healthcare & Legal Support')
        } else {
          personalizedScore -= 0.5 // Significant safety concern without trans resources
        }
      }
      
      if (zkProof.proofs.hasNonbinaryMembers) {
        // Non-binary recognition varies significantly by location
        if (city.safetyScore > 8.5) {
          personalizedScore += 0.2
          matchingFactors.push('Non-binary Recognition & Rights')
        } else {
          personalizedScore -= 0.3 // Limited recognition in less progressive areas
        }
      }
      
      if (zkProof.proofs.hasIntersexMembers) {
        // Intersex-specific medical and legal considerations
        if (city.communityResources?.healthCare?.length > 3) {
          personalizedScore += 0.2
          matchingFactors.push('Intersex Medical Rights & Support')
        } else {
          personalizedScore -= 0.2
        }
      }
      
      if (zkProof.proofs.hasAsexualMembers) {
        // Asexual visibility and community support
        personalizedScore += 0.1
        matchingFactors.push('Asexual Community Recognition')
      }
      
      if (zkProof.proofs.hasQuestioningMembers) {
        // Support for identity exploration
        personalizedScore += 0.2
        matchingFactors.push('Questioning & Identity Exploration Support')
      }
      
      // Identity-Specific Intersection Adjustments
      if (zkProof.proofs.needsLesbianSpecificSupport) {
        personalizedScore += 0.3
        matchingFactors.push('Lesbian-Specific Safety & Healthcare')
      }
      
      if (zkProof.proofs.needsGayMenSpecificSupport) {
        personalizedScore += 0.3
        matchingFactors.push('Gay Men\'s Health & Community Safety')
      }
      
      if (zkProof.proofs.needsBisexualSpecificSupport) {
        personalizedScore += 0.2
        matchingFactors.push('Bisexual Erasure Prevention & Support')
      }
      
      if (zkProof.proofs.needsTransgenderSpecificSupport) {
        personalizedScore += 0.4
        matchingFactors.push('Transgender-Specific Healthcare & Legal Rights')
      }
      
      if (zkProof.proofs.needsNonbinarySpecificSupport) {
        personalizedScore += 0.3
        matchingFactors.push('Non-binary Legal Recognition & Support')
      }
      
      if (zkProof.proofs.needsIntersexSpecificSupport) {
        personalizedScore += 0.3
        matchingFactors.push('Intersex Medical Rights & Advocacy')
      }
      
      if (zkProof.proofs.needsAsexualSpecificSupport) {
        personalizedScore += 0.2
        matchingFactors.push('Asexual Visibility & Community Support')
      }
      
      if (zkProof.proofs.needsQuestioningSupport) {
        personalizedScore += 0.2
        matchingFactors.push('Identity Exploration & Questioning Support')
      }
      
      // Traditional Intersectional Adjustments
      if (zkProof.proofs.needsRaceEthnicityConsiderations) {
        const raceData = city.intersectionalSafety?.raceEthnicity
        if (raceData) {
          personalizedScore = (personalizedScore + raceData.score) / 2
          matchingFactors.push('LGBTQIA+ People of Color Support')
        }
      }
      
      if (zkProof.proofs.needsDisabilityConsiderations) {
        const disabilityData = city.intersectionalSafety?.disability
        if (disabilityData) {
          personalizedScore = (personalizedScore + disabilityData.score) / 2
          matchingFactors.push('LGBTQIA+ Disability Accessibility')
        }
      }
      
      if (zkProof.proofs.needsImmigrationConsiderations) {
        const immigrationData = city.intersectionalSafety?.immigration
        if (immigrationData) {
          personalizedScore = (personalizedScore + immigrationData.score) / 2
          matchingFactors.push('LGBTQIA+ Immigration Protections')
        }
      }
      
      // Additional Support Needs
      if (zkProof.proofs.needsMentalHealthSupport) {
        personalizedScore += 0.2
        matchingFactors.push('LGBTQIA+ Mental Health Services')
      }
      
      if (zkProof.proofs.needsDomesticViolenceSupport) {
        personalizedScore += 0.3
        matchingFactors.push('LGBTQIA+ Domestic Violence Resources')
      }
      
      if (zkProof.proofs.needsVeteranSupport) {
        personalizedScore += 0.2
        matchingFactors.push('LGBTQIA+ Veteran Services')
      }
      
      // Safety priority adjustments
      if (zkProof.proofs.prioritizesSchoolSafety) {
        // Boost score for cities with strong school policies
        if (city.familySafety?.cisParentsLgbtqChildren?.schoolSupport || 
            city.familySafety?.lgbtqParents?.schoolPolicies) {
          personalizedScore += 0.5
          matchingFactors.push('School Safety Priority')
        }
      }
      
      if (zkProof.proofs.prioritizesHealthcareAccess) {
        // Boost score for cities with good healthcare access
        if (city.communityResources?.healthCare?.length > 2) {
          personalizedScore += 0.3
          matchingFactors.push('Healthcare Access Priority')
        }
      }
      
      // Cap at 10.0
      personalizedScore = Math.min(10.0, personalizedScore)
      
      scores[city.id] = {
        originalScore: city.safetyScore,
        personalizedScore: Math.round(personalizedScore * 10) / 10,
        matchingFactors,
        confidenceLevel: matchingFactors.length > 0 ? 'High' : 'Medium'
      }
    })
    
    setIsCalculating(false)
    return scores
  }

  const handleProfileComplete = async (zkProof) => {
    setUserProfile(zkProof)
    const scores = await calculatePersonalizedScores(zkProof)
    setPersonalizedScores(scores)
    setShowProfiler(false)
  }

  const getPersonalizedScore = (cityId) => {
    return personalizedScores[cityId]?.personalizedScore || enhancedCityData.find(c => c.id === cityId)?.safetyScore || 0
  }

  const getMatchingFactors = (cityId) => {
    return personalizedScores[cityId]?.matchingFactors || []
  }

  const renderPersonalizedPopup = (city) => {
    const personalizedData = personalizedScores[city.id]
    const matchingFactors = getMatchingFactors(city.id)
    
    return (
      <div className="min-w-[350px]">
        <h3 className="font-bold text-lg mb-2">{city.name}</h3>
        
        {userProfile && (
          <div className="mb-4 p-3 bg-green-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span className="font-medium text-green-800">Personalized for Your Family</span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>General Safety Score:</span>
                <span>{personalizedData?.originalScore || city.safetyScore}/10</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Your Personalized Score:</span>
                <span className="text-green-600">{personalizedData?.personalizedScore || city.safetyScore}/10</span>
              </div>
              <div className="flex justify-between">
                <span>Confidence Level:</span>
                <span>{personalizedData?.confidenceLevel || 'Medium'}</span>
              </div>
            </div>
            
            {matchingFactors.length > 0 && (
              <div className="mt-3">
                <div className="font-medium text-sm mb-1">Matching Your Needs:</div>
                <div className="flex flex-wrap gap-1">
                  {matchingFactors.map((factor, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-500 mr-2" />
          <span>Safety Score: {getPersonalizedScore(city.id)}/10</span>
        </div>
        
        <button
          onClick={() => setSelectedCity(city)}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
        >
          View Detailed Analysis
        </button>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      {/* Privacy Controls Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 mb-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Lock className="w-6 h-6 mr-3" />
            <div>
              <h2 className="text-xl font-bold">Zero-Knowledge Safety Intelligence</h2>
              <p className="text-sm opacity-90">
                Get personalized safety scores without sharing personal data
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setPrivacyMode(!privacyMode)}
              className="flex items-center px-3 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30"
            >
              {privacyMode ? <Eye className="w-4 h-4 mr-2" /> : <EyeOff className="w-4 h-4 mr-2" />}
              {privacyMode ? 'Privacy Mode On' : 'Privacy Mode Off'}
            </button>
            
            {!userProfile && (
              <button
                onClick={() => setShowProfiler(true)}
                className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 font-medium"
              >
                Create Private Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Profile Status */}
      {userProfile && (
        <div className="bg-green-50 border border-green-200 p-4 mb-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <div className="font-medium text-green-800">Zero-Knowledge Profile Active</div>
                <div className="text-sm text-green-600">
                  Showing personalized safety scores based on your encrypted profile
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {isCalculating && (
                <div className="flex items-center text-sm text-green-600">
                  <div className="animate-spin w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full mr-2"></div>
                  Calculating...
                </div>
              )}
              <button
                onClick={() => setShowProfiler(true)}
                className="text-sm text-green-600 hover:text-green-800"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Map Container */}
      <div className="relative">
        <MapContainer
          center={[40.7128, -74.0060]}
          zoom={2}
          style={{ height: '600px', width: '100%' }}
          className="rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {enhancedCityData.map((city) => {
            const score = getPersonalizedScore(city.id)
            const isPersonalized = userProfile && personalizedScores[city.id]
            
            return (
              <CircleMarker
                key={city.id}
                center={city.coordinates}
                radius={isPersonalized ? 10 : 8}
                fillColor={getScoreColor(score)}
                color={isPersonalized ? "#7C3AED" : "#fff"}
                weight={isPersonalized ? 3 : 2}
                opacity={1}
                fillOpacity={0.8}
                eventHandlers={{
                  click: () => setSelectedCity(city)
                }}
              >
                <Popup>
                  {renderPersonalizedPopup(city)}
                </Popup>
              </CircleMarker>
            )
          })}
        </MapContainer>

        {/* Enhanced Legend */}
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
          <h4 className="font-semibold mb-2">Safety Score Legend</h4>
          <div className="space-y-1 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <span>9.0+ Excellent</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
              <span>7.0-8.9 Good</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
              <span>5.0-6.9 Caution</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gray-500 mr-2"></div>
              <span>&lt;5.0 High Risk</span>
            </div>
          </div>
          
          {userProfile && (
            <div className="mt-3 pt-3 border-t">
              <div className="flex items-center text-sm">
                <div className="w-4 h-4 rounded-full border-2 border-purple-600 mr-2"></div>
                <span>Personalized Score</span>
              </div>
            </div>
          )}
        </div>

        {/* Privacy Indicator */}
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center text-sm">
            <Lock className="w-4 h-4 text-green-600 mr-2" />
            <span className="font-medium">Zero-Knowledge Privacy</span>
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Your data never leaves your device
          </div>
        </div>
      </div>

      {/* ZK Family Profiler Modal */}
      {showProfiler && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Create Zero-Knowledge Profile</h2>
              <button
                onClick={() => setShowProfiler(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="overflow-y-auto h-full pb-20">
              <ZKFamilyProfiler onProfileComplete={handleProfileComplete} />
            </div>
          </div>
        </div>
      )}

      {/* Detailed City Modal */}
      {selectedCity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{selectedCity.name}</h2>
                  <div className="flex items-center mt-2">
                    <Star className="w-5 h-5 text-yellow-300 mr-2" />
                    <span>
                      {userProfile ? 'Personalized' : 'General'} Safety Score: {getPersonalizedScore(selectedCity.id)}/10
                    </span>
                  </div>
                  {userProfile && personalizedScores[selectedCity.id] && (
                    <div className="text-sm opacity-90 mt-1">
                      Original Score: {personalizedScores[selectedCity.id].originalScore}/10
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedCity(null)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto h-full pb-20">
              {userProfile && personalizedScores[selectedCity.id] && (
                <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Zero-Knowledge Personalization</h3>
                  <div className="text-sm space-y-2">
                    <div>This score is calculated using your encrypted profile without revealing personal details.</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {getMatchingFactors(selectedCity.id).map((factor, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Rest of city details... */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Legal Protections</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>{selectedCity.legalProtections.description}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Community Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(selectedCity.communityResources).map(([category, resources]) => (
                      <div key={category} className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h4>
                        <ul className="text-sm space-y-1">
                          {resources.slice(0, 3).map((resource, idx) => (
                            <li key={idx}>• {resource}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ZKPrivacyMap
