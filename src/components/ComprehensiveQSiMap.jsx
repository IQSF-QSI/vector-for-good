import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { Shield, Users, MapPin, Star, AlertTriangle, CheckCircle, Heart, Globe, Info, ExternalLink } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { globalSafetyData, cityMetrics, travelAdvisories } from '../data/comprehensiveSafetyData';

const ComprehensiveQSiMap = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    safetyTier: 'all',
    minSafetyScore: 0,
    region: 'all'
  });
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Flatten all cities from all tiers
  useEffect(() => {
    const allCities = [
      ...globalSafetyData.topTier.flatMap(country => 
        country.cities.map(city => ({ ...city, country: country.country, tier: 'excellent', equalityIndex: country.equalityIndex }))
      ),
      ...globalSafetyData.highSafety.flatMap(country => 
        country.cities.map(city => ({ ...city, country: country.country, tier: 'veryGood', equalityIndex: country.equalityIndex }))
      ),
      ...globalSafetyData.moderateSafety.flatMap(country => 
        country.cities.map(city => ({ ...city, country: country.country, tier: 'moderate', equalityIndex: country.equalityIndex }))
      ),
      ...globalSafetyData.cautionTier.flatMap(country => 
        country.cities.map(city => ({ ...city, country: country.country, tier: 'highRisk', equalityIndex: country.equalityIndex }))
      ),
      ...globalSafetyData.highRisk.flatMap(country => 
        country.cities.map(city => ({ ...city, country: country.country, tier: 'extremeRisk', equalityIndex: country.equalityIndex }))
      )
    ];

    let filtered = allCities.filter(city => {
      // Safety tier filter
      if (selectedFilters.safetyTier !== 'all' && city.tier !== selectedFilters.safetyTier) return false;
      
      // Minimum safety score filter
      if (city.safetyScore < selectedFilters.minSafetyScore) return false;
      
      // Region filter (simplified by continent)
      if (selectedFilters.region !== 'all') {
        const regionMapping = {
          'europe': ['Iceland', 'Norway', 'Spain', 'Denmark', 'United Kingdom'],
          'americas': ['Canada', 'United States', 'Uruguay'],
          'asia': ['Taiwan', 'Japan'],
          'oceania': ['Australia'],
          'africa': [],
          'middleEast': ['Saudi Arabia', 'Iran']
        };
        
        if (!regionMapping[selectedFilters.region]?.includes(city.country)) return false;
      }
      
      return true;
    });

    setFilteredCities(filtered);
  }, [selectedFilters]);

  const getScoreColor = (score) => {
    if (score >= 85) return '#10B981'; // Green
    if (score >= 70) return '#F59E0B'; // Yellow
    if (score >= 50) return '#EF4444'; // Red
    return '#6B7280'; // Gray
  };

  const getTierBadge = (tier) => {
    const badges = {
      excellent: { color: 'bg-green-100 text-green-800', text: 'Excellent' },
      veryGood: { color: 'bg-blue-100 text-blue-800', text: 'Very Good' },
      moderate: { color: 'bg-yellow-100 text-yellow-800', text: 'Moderate' },
      highRisk: { color: 'bg-orange-100 text-orange-800', text: 'High Risk' },
      extremeRisk: { color: 'bg-red-100 text-red-800', text: 'Extreme Risk' }
    };
    
    const badge = badges[tier] || badges.moderate;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        {badge.text}
      </span>
    );
  };

  const renderCityDetails = (city) => {
    const advisory = travelAdvisories[city.tier] || travelAdvisories.moderate;
    
    return (
      <div className="space-y-6">
        {/* Overview */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{city.name}, {city.country}</h3>
            {getTierBadge(city.tier)}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium">Safety Score</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">{city.safetyScore}/100</div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Globe className="w-5 h-5 text-purple-600 mr-2" />
                <span className="font-medium">Equality Index</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">{city.equalityIndex}/100</div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">{city.description}</p>
          </div>
        </div>

        {/* Highlights */}
        {city.highlights && city.highlights.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {city.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Resources */}
        {city.resources && city.resources.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              Available Resources
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {city.resources.map((resource, idx) => (
                <div key={idx} className="bg-blue-50 p-3 rounded-lg">
                  <span className="text-blue-800">{resource}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Concerns */}
        {city.concerns && city.concerns.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
              Safety Concerns
            </h4>
            <div className="bg-orange-50 p-4 rounded-lg">
              <ul className="space-y-2">
                {city.concerns.map((concern, idx) => (
                  <li key={idx} className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-orange-800">{concern}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Travel Advisory */}
        <div>
          <h4 className="text-lg font-semibold mb-3 flex items-center">
            <Info className="w-5 h-5 text-indigo-600 mr-2" />
            Travel Advisory
          </h4>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-indigo-800 mb-3">{advisory.description}</p>
            <div>
              <strong className="text-indigo-900">Safety Tips:</strong>
              <ul className="mt-2 space-y-1">
                {advisory.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-indigo-800 text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg">
        <h2 className="text-2xl font-bold mb-2">Global LGBTQ+ Safety Intelligence Map</h2>
        <p className="text-blue-100">
          Comprehensive safety data for LGBTQ+ travelers and communities worldwide
        </p>
      </div>

      {/* Filter Controls */}
      <div className="bg-white p-4 shadow-md border-x border-gray-200">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Safety Tier Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Safety Level</label>
            <select 
              value={selectedFilters.safetyTier}
              onChange={(e) => setSelectedFilters({...selectedFilters, safetyTier: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Levels</option>
              <option value="excellent">Excellent</option>
              <option value="veryGood">Very Good</option>
              <option value="moderate">Moderate</option>
              <option value="highRisk">High Risk</option>
              <option value="extremeRisk">Extreme Risk</option>
            </select>
          </div>
          
          {/* Region Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Region</label>
            <select 
              value={selectedFilters.region}
              onChange={(e) => setSelectedFilters({...selectedFilters, region: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Regions</option>
              <option value="europe">Europe</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="oceania">Oceania</option>
              <option value="africa">Africa</option>
              <option value="middleEast">Middle East</option>
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
              <option value={70}>Good (70+)</option>
              <option value={80}>Very Good (80+)</option>
              <option value={90}>Excellent (90+)</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded-md w-full text-center">
              {filteredCities.length} cities found
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        <MapContainer
          center={[40.7128, -74.0060]}
          zoom={2}
          style={{ height: '600px', width: '100%' }}
          className="border-x border-b border-gray-200"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {filteredCities.map((city, index) => (
            <CircleMarker
              key={`${city.country}-${city.name}-${index}`}
              center={city.coordinates}
              radius={8}
              fillColor={getScoreColor(city.safetyScore)}
              color="#fff"
              weight={2}
              opacity={1}
              fillOpacity={0.8}
              eventHandlers={{
                click: () => setSelectedCity(city)
              }}
            >
              <Popup>
                <div className="min-w-[300px]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{city.name}</h3>
                    {getTierBadge(city.tier)}
                  </div>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    <span>Safety Score: {city.safetyScore}/100</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{city.description}</p>
                  <button
                    onClick={() => setSelectedCity(city)}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
              <span>85+ Excellent</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
              <span>70-84 Good</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
              <span>50-69 Caution</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gray-500 mr-2"></div>
              <span>&lt;50 High Risk</span>
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
                  <h2 className="text-2xl font-bold">{selectedCity.name}, {selectedCity.country}</h2>
                  <div className="flex items-center mt-2">
                    <Star className="w-5 h-5 text-yellow-300 mr-2" />
                    <span>Safety Score: {selectedCity.safetyScore}/100</span>
                    <div className="ml-4">
                      {getTierBadge(selectedCity.tier)}
                    </div>
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
            <div className="p-6 overflow-y-auto h-full">
              {renderCityDetails(selectedCity)}
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="bg-gray-50 p-4 rounded-b-lg border-x border-b border-gray-200">
        <div className="text-sm text-gray-600 text-center">
          <p>Data sources: Equaldex Equality Index, ILGA-Europe Rainbow Map, and community reports</p>
          <p className="mt-1">Last updated: October 2025 • For emergency assistance, contact local LGBTQ+ organizations</p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveQSiMap;
