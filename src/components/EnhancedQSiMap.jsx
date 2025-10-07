import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { Shield, Users, MapPin, Star, AlertTriangle, CheckCircle, Heart, Baby, Home, Globe } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import { enhancedCityData, getScoreColor, getFamilyTypeData, getIntersectionalData } from '../data/enhancedCityData'

const EnhancedQSiMap = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    familyType: 'all',
    intersectionalFocus: 'all',
    minSafetyScore: 0
  })
  const [filteredData, setFilteredData] = useState(enhancedCityData)
  const [selectedCity, setSelectedCity] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  // Filter data based on selected criteria
  useEffect(() => {
    let filtered = enhancedCityData.filter(city => {
      // Safety score filter
      if (city.safetyScore < selectedFilters.minSafetyScore) return false
      
      // Family type filter
      if (selectedFilters.familyType !== 'all') {
        const familyData = getFamilyTypeData(city, selectedFilters.familyType)
        if (!familyData || familyData.score < 6.0) return false
      }
      
      // Intersectional filter
      if (selectedFilters.intersectionalFocus !== 'all') {
        const intersectionalData = getIntersectionalData(city, selectedFilters.intersectionalFocus)
        if (!intersectionalData || intersectionalData.score < 6.0) return false
      }
      
      return true
    })
    
    setFilteredData(filtered)
  }, [selectedFilters])

  const handleMarkerClick = (city) => {
    setSelectedCity(city)
  }

  const renderFamilySpecificInfo = (city, familyType) => {
    const familyData = getFamilyTypeData(city, familyType)
    if (!familyData) return null

    return (
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">
          {familyType === 'lgbtq_parents' && '🏳️‍🌈 LGBTQ+ Parents'}
          {familyType === 'cis_parents_lgbtq_children' && '👨‍👩‍👧‍👦 Parents of LGBTQ+ Children'}
          {familyType === 'mixed_families' && '🏠 Mixed Families'}
        </h4>
        <div className="text-sm space-y-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span>Safety Score: {familyData.score}/10</span>
          </div>
          
          {familyData.supportGroups && (
            <div>
              <strong>Support Groups:</strong>
              <ul className="list-disc list-inside ml-4">
                {familyData.supportGroups.map((group, idx) => (
                  <li key={idx}>{group}</li>
                ))}
              </ul>
            </div>
          )}
          
          {familyData.schoolSupport && (
            <div>
              <strong>School Support:</strong> {familyData.schoolSupport}
            </div>
          )}
          
          {familyData.medicalResources && (
            <div>
              <strong>Medical Resources:</strong>
              <ul className="list-disc list-inside ml-4">
                {familyData.medicalResources.map((resource, idx) => (
                  <li key={idx}>{resource}</li>
                ))}
              </ul>
            </div>
          )}
          
          {familyData.safetyTips && (
            <div className="mt-2 p-2 bg-yellow-100 rounded">
              <strong>Safety Tips:</strong> {familyData.safetyTips}
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderIntersectionalInfo = (city, intersectionType) => {
    const intersectionalData = getIntersectionalData(city, intersectionType)
    if (!intersectionalData) return null

    return (
      <div className="mt-4 p-4 bg-purple-50 rounded-lg">
        <h4 className="font-semibold text-purple-900 mb-2">
          {intersectionType === 'raceEthnicity' && '🌍 Race & Ethnicity Considerations'}
          {intersectionType === 'disability' && '♿ Disability & Accessibility'}
          {intersectionType === 'immigration' && '🛂 Immigration Considerations'}
          {intersectionType === 'age' && '👥 Age-Specific Considerations'}
        </h4>
        <div className="text-sm space-y-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span>Safety Score: {intersectionalData.score}/10</span>
          </div>
          
          {intersectionalData.considerations && (
            <div>
              <strong>Key Considerations:</strong> {intersectionalData.considerations}
            </div>
          )}
          
          {intersectionalData.resources && (
            <div>
              <strong>Specialized Resources:</strong>
              <ul className="list-disc list-inside ml-4">
                {intersectionalData.resources.map((resource, idx) => (
                  <li key={idx}>{resource}</li>
                ))}
              </ul>
            </div>
          )}
          
          {intersectionalData.specificConcerns && (
            <div className="mt-2 p-2 bg-red-100 rounded">
              <strong>Specific Concerns:</strong> {intersectionalData.specificConcerns}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      {/* Filter Controls */}
      <div className="bg-white p-4 shadow-md mb-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Filter by Your Needs</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          {/* Family Type Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Family Type</label>
            <select 
              value={selectedFilters.familyType}
              onChange={(e) => setSelectedFilters({...selectedFilters, familyType: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Families</option>
              <option value="lgbtq_parents">LGBTQ+ Parents</option>
              <option value="cis_parents_lgbtq_children">Parents of LGBTQ+ Children</option>
              <option value="mixed_families">Mixed Families</option>
            </select>
          </div>
          
          {/* Intersectional Focus Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Intersectional Focus</label>
            <select 
              value={selectedFilters.intersectionalFocus}
              onChange={(e) => setSelectedFilters({...selectedFilters, intersectionalFocus: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Considerations</option>
              <option value="raceEthnicity">Race & Ethnicity</option>
              <option value="disability">Disability & Accessibility</option>
              <option value="immigration">Immigration Status</option>
              <option value="age">Age-Specific Needs</option>
            </select>
          </div>
          
          {/* Minimum Safety Score */}
          <div>
            <label className="block text-sm font-medium mb-2">Minimum Safety Score</label>
            <select 
              value={selectedFilters.minSafetyScore}
              onChange={(e) => setSelectedFilters({...selectedFilters, minSafetyScore: parseFloat(e.target.value)})}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value={0}>Any Score</option>
              <option value={7.0}>Good (7.0+)</option>
              <option value={8.0}>Very Good (8.0+)</option>
              <option value={9.0}>Excellent (9.0+)</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredData.length} cities matching your criteria
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        <MapContainer
          center={[40.7128, -74.0060]}
          zoom={2}
          style={{ height: '500px', width: '100%' }}
          className="rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {filteredData.map((city) => (
            <CircleMarker
              key={city.id}
              center={city.coordinates}
              radius={8}
              fillColor={getScoreColor(city.safetyScore)}
              color="#fff"
              weight={2}
              opacity={1}
              fillOpacity={0.8}
              eventHandlers={{
                click: () => handleMarkerClick(city)
              }}
            >
              <Popup>
                <div className="min-w-[300px]">
                  <h3 className="font-bold text-lg mb-2">{city.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    <span>Overall Safety Score: {city.safetyScore}/10</span>
                  </div>
                  
                  {/* Family-specific information based on current filter */}
                  {selectedFilters.familyType !== 'all' && 
                    renderFamilySpecificInfo(city, selectedFilters.familyType)
                  }
                  
                  {/* Intersectional information based on current filter */}
                  {selectedFilters.intersectionalFocus !== 'all' && 
                    renderIntersectionalInfo(city, selectedFilters.intersectionalFocus)
                  }
                  
                  <button
                    onClick={() => setSelectedCity(city)}
                    className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    View Full Details
                  </button>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>

        {/* Legend */}
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
        </div>
      </div>

      {/* Detailed City Modal */}
      {selectedCity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{selectedCity.name}</h2>
                  <div className="flex items-center mt-2">
                    <Star className="w-5 h-5 text-yellow-300 mr-2" />
                    <span>Overall Safety Score: {selectedCity.safetyScore}/10</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCity(null)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex h-full">
              {/* Tab Navigation */}
              <div className="w-1/4 bg-gray-50 p-4">
                <nav className="space-y-2">
                  {[
                    { id: 'overview', label: 'Overview', icon: MapPin },
                    { id: 'families', label: 'Family Safety', icon: Heart },
                    { id: 'intersectional', label: 'Intersectional', icon: Users },
                    { id: 'resources', label: 'Resources', icon: Shield }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center p-3 rounded-lg text-left ${
                        activeTab === tab.id 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <tab.icon className="w-4 h-4 mr-3" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Legal Protections</h3>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          <span className="font-medium">Score: {selectedCity.legalProtections.score}/10</span>
                        </div>
                        <p>{selectedCity.legalProtections.description}</p>
                        <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                          <div>Marriage Equality: {selectedCity.legalProtections.marriageEquality ? '✅' : '❌'}</div>
                          <div>Adoption Rights: {selectedCity.legalProtections.adoptionRights ? '✅' : '❌'}</div>
                          <div>Conversion Therapy Ban: {selectedCity.legalProtections.conversionTherapyBan ? '✅' : '❌'}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Social Acceptance</h3>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Users className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-medium">Score: {selectedCity.socialAcceptance.score}/10</span>
                        </div>
                        <p>{selectedCity.socialAcceptance.description}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Safety Concerns</h3>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <ul className="space-y-2">
                          {selectedCity.safetyConcerns.map((concern, idx) => (
                            <li key={idx} className="flex items-start">
                              <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{concern}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'families' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Family-Specific Safety Information</h3>
                    
                    {renderFamilySpecificInfo(selectedCity, 'lgbtq_parents')}
                    {renderFamilySpecificInfo(selectedCity, 'cis_parents_lgbtq_children')}
                    {renderFamilySpecificInfo(selectedCity, 'mixed_families')}
                  </div>
                )}

                {activeTab === 'intersectional' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Intersectional Safety Considerations</h3>
                    
                    {renderIntersectionalInfo(selectedCity, 'raceEthnicity')}
                    {renderIntersectionalInfo(selectedCity, 'disability')}
                    {renderIntersectionalInfo(selectedCity, 'immigration')}
                    {renderIntersectionalInfo(selectedCity, 'age')}
                  </div>
                )}

                {activeTab === 'resources' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Community Resources</h3>
                    
                    {Object.entries(selectedCity.communityResources).map(([category, resources]) => (
                      <div key={category} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h4>
                        <ul className="space-y-1">
                          {resources.map((resource, idx) => (
                            <li key={idx} className="text-sm flex items-start">
                              <Shield className="w-3 h-3 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EnhancedQSiMap
