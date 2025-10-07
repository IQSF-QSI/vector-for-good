import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet'
import { Shield, Users, MapPin, Star, AlertTriangle, CheckCircle } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const QSiMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [mapData, setMapData] = useState([])
  const [loading, setLoading] = useState(true)

  // Sample safety data for demonstration
  const sampleData = [
    {
      id: 1,
      name: "San Francisco, CA",
      coordinates: [37.7749, -122.4194],
      safetyScore: 9.2,
      lgbtqFriendly: true,
      resources: 45,
      lastUpdated: "2025-01-15",
      description: "Highly LGBTQ+ friendly city with strong legal protections and vibrant community.",
      highlights: ["Marriage equality", "Anti-discrimination laws", "Pride events"]
    },
    {
      id: 2,
      name: "Amsterdam, Netherlands",
      coordinates: [52.3676, 4.9041],
      safetyScore: 9.5,
      lgbtqFriendly: true,
      resources: 38,
      lastUpdated: "2025-01-14",
      description: "Progressive city with excellent LGBTQ+ rights and acceptance.",
      highlights: ["Legal same-sex marriage", "Pride Canal Parade", "Safe neighborhoods"]
    },
    {
      id: 3,
      name: "Berlin, Germany",
      coordinates: [52.5200, 13.4050],
      safetyScore: 8.8,
      lgbtqFriendly: true,
      resources: 52,
      lastUpdated: "2025-01-13",
      description: "Historic LGBTQ+ hub with strong community and cultural scene.",
      highlights: ["Christopher Street Day", "Diverse nightlife", "Legal protections"]
    },
    {
      id: 4,
      name: "Toronto, Canada",
      coordinates: [43.6532, -79.3832],
      safetyScore: 9.1,
      lgbtqFriendly: true,
      resources: 41,
      lastUpdated: "2025-01-12",
      description: "Multicultural city with strong LGBTQ+ rights and community support.",
      highlights: ["Pride Month celebrations", "Legal equality", "Safe spaces"]
    },
    {
      id: 5,
      name: "Sydney, Australia",
      coordinates: [-33.8688, 151.2093],
      safetyScore: 8.9,
      lgbtqFriendly: true,
      resources: 36,
      lastUpdated: "2025-01-11",
      description: "Vibrant LGBTQ+ scene with annual Mardi Gras and strong community.",
      highlights: ["Sydney Gay and Lesbian Mardi Gras", "Legal marriage", "Beach culture"]
    }
  ]

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setMapData(sampleData)
      setLoading(false)
    }, 1000)
  }, [])

  const getSafetyColor = (score) => {
    if (score >= 9) return '#10B981' // Green
    if (score >= 7) return '#F59E0B' // Yellow
    if (score >= 5) return '#EF4444' // Red
    return '#6B7280' // Gray
  }

  const getSafetyIcon = (score) => {
    if (score >= 9) return CheckCircle
    if (score >= 7) return Shield
    return AlertTriangle
  }

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading safety intelligence...</p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <MapContainer
            center={[40.0, 0.0]}
            zoom={2}
            style={{ height: '500px', width: '100%' }}
            className="rounded-lg shadow-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {mapData.map((location) => (
              <CircleMarker
                key={location.id}
                center={location.coordinates}
                radius={12}
                fillColor={getSafetyColor(location.safetyScore)}
                color="#ffffff"
                weight={2}
                opacity={1}
                fillOpacity={0.8}
                eventHandlers={{
                  click: () => setSelectedLocation(location)
                }}
              >
                <Popup>
                  <div className="p-2 min-w-64">
                    <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                    <div className="flex items-center mb-2">
                      <Shield className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-semibold">Safety Score: {location.safetyScore}/10</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Users className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{location.resources} LGBTQ+ resources</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{location.description}</p>
                    <div className="space-y-1">
                      {location.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-600" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Last updated: {location.lastUpdated}
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>

          {/* Legend */}
          <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-1000">
            <h4 className="font-semibold mb-3">Safety Score Legend</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">9.0+ Excellent</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">7.0-8.9 Good</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm">5.0-6.9 Caution</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-gray-500 mr-2"></div>
                <span className="text-sm">&lt;5.0 High Risk</span>
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{mapData.length}</div>
              <div className="text-sm text-gray-600">Cities Mapped</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {mapData.reduce((sum, loc) => sum + loc.resources, 0)}
              </div>
              <div className="text-sm text-gray-600">LGBTQ+ Resources</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {(mapData.reduce((sum, loc) => sum + loc.safetyScore, 0) / mapData.length).toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">Avg Safety Score</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {mapData.filter(loc => loc.safetyScore >= 9).length}
              </div>
              <div className="text-sm text-gray-600">Top-Rated Cities</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default QSiMap
