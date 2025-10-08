import React, { useState, useEffect } from 'react';
import { qsiDataGenerationService } from '../services/qsiDataGenerationService.js';

const QSiDataGenerationPanel = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationResults, setGenerationResults] = useState(null);
  const [qsiData, setQsiData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [customLocation, setCustomLocation] = useState({ country: '', city: '', state: '' });
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    loadExistingData();
  }, []);

  const loadExistingData = async () => {
    try {
      const result = await qsiDataGenerationService.getAllQSiData();
      if (result.success) {
        setQsiData(result.data);
        addLog(`✅ Loaded ${result.data.length} existing QSi records`);
      }
    } catch (error) {
      addLog(`❌ Error loading data: ${error.message}`);
    }
  };

  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-19), `[${timestamp}] ${message}`]);
  };

  const generateAllData = async () => {
    setIsGenerating(true);
    setGenerationResults(null);
    addLog('🚀 Starting triple-LLM QSi data generation for all priority cities');

    try {
      const result = await qsiDataGenerationService.generateAllPriorityData();
      setGenerationResults(result);
      
      if (result.success) {
        addLog(`✅ Generation complete: ${result.successful}/${result.totalProcessed} cities processed`);
        await loadExistingData(); // Refresh the data
      } else {
        addLog(`❌ Generation failed: ${result.error}`);
      }
    } catch (error) {
      addLog(`❌ Generation error: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateSingleCity = async () => {
    if (!customLocation.country || !customLocation.city) {
      addLog('❌ Please enter both country and city');
      return;
    }

    setIsGenerating(true);
    addLog(`🔄 Generating QSi data for ${customLocation.city}, ${customLocation.country}`);

    try {
      const result = await qsiDataGenerationService.generateQSiData(customLocation, true);
      
      if (result.success) {
        addLog(`✅ Generated data for ${customLocation.city}: Score ${result.scores?.overallScore}/100`);
        await loadExistingData(); // Refresh the data
      } else {
        addLog(`❌ Failed to generate data for ${customLocation.city}: ${result.error}`);
      }
    } catch (error) {
      addLog(`❌ Error: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const refreshSingleCity = async (cityData) => {
    setIsGenerating(true);
    const location = {
      country: getCountryName(cityData.country_code),
      city: cityData.city,
      state: cityData.state_province
    };

    addLog(`🔄 Refreshing data for ${location.city}, ${location.country}`);

    try {
      const result = await qsiDataGenerationService.generateQSiData(location, true);
      
      if (result.success) {
        addLog(`✅ Refreshed ${location.city}: Score ${result.scores?.overallScore}/100`);
        await loadExistingData();
      } else {
        addLog(`❌ Failed to refresh ${location.city}: ${result.error}`);
      }
    } catch (error) {
      addLog(`❌ Error: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const getCountryName = (countryCode) => {
    const codes = {
      'DEU': 'Germany', 'EST': 'Estonia', 'USA': 'United States',
      'CAN': 'Canada', 'GBR': 'United Kingdom', 'NLD': 'Netherlands',
      'ESP': 'Spain', 'AUS': 'Australia', 'BRA': 'Brazil',
      'ZAF': 'South Africa', 'THA': 'Thailand', 'JPN': 'Japan',
      'IND': 'India', 'RUS': 'Russia'
    };
    return codes[countryCode] || countryCode;
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getRiskBadgeColor = (riskLevel) => {
    const colors = {
      'LOW': 'bg-green-100 text-green-800',
      'MEDIUM': 'bg-yellow-100 text-yellow-800',
      'HIGH': 'bg-orange-100 text-orange-800',
      'CRITICAL': 'bg-red-100 text-red-800'
    };
    return colors[riskLevel] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🤖 QSi Data Generation Panel
          </h1>
          <p className="text-xl text-purple-200">
            Triple-LLM AI Agent Teams: GPT-4 + Gemini Pro + Hermes
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              ✅ NVIDIA Inception Accelerated
            </span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              🔄 Real-time Data Generation
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Generation Controls */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">🚀 Data Generation</h2>
            
            {/* Generate All Cities */}
            <div className="mb-6">
              <button
                onClick={generateAllData}
                disabled={isGenerating}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all ${
                  isGenerating 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                }`}
              >
                {isGenerating ? '🔄 Generating...' : '🌍 Generate All Priority Cities'}
              </button>
              <p className="text-purple-200 text-sm mt-2">
                Generate QSi data for 20+ priority cities using triple-LLM collaboration
              </p>
            </div>

            {/* Generate Single City */}
            <div className="border-t border-white/20 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">🎯 Generate Single City</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Country (e.g., United States)"
                  value={customLocation.country}
                  onChange={(e) => setCustomLocation(prev => ({ ...prev, country: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200"
                />
                <input
                  type="text"
                  placeholder="City (e.g., Austin)"
                  value={customLocation.city}
                  onChange={(e) => setCustomLocation(prev => ({ ...prev, city: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200"
                />
                <input
                  type="text"
                  placeholder="State/Province (optional)"
                  value={customLocation.state}
                  onChange={(e) => setCustomLocation(prev => ({ ...prev, state: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200"
                />
                <button
                  onClick={generateSingleCity}
                  disabled={isGenerating || !customLocation.country || !customLocation.city}
                  className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition-all ${
                    isGenerating || !customLocation.country || !customLocation.city
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                  }`}
                >
                  {isGenerating ? '🔄 Generating...' : '🎯 Generate QSi Data'}
                </button>
              </div>
            </div>

            {/* Generation Results */}
            {generationResults && (
              <div className="border-t border-white/20 pt-6 mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">📊 Generation Results</h3>
                <div className="bg-black/20 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">
                        {generationResults.successful}
                      </div>
                      <div className="text-sm text-purple-200">Successful</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400">
                        {generationResults.failed}
                      </div>
                      <div className="text-sm text-purple-200">Failed</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Live Logs */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">📝 Live Generation Logs</h2>
            <div className="bg-black/30 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm">
              {logs.length === 0 ? (
                <div className="text-purple-300">Waiting for generation to start...</div>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="text-green-300 mb-1">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Current QSi Data */}
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">🗺️ Current QSi Database</h2>
            <button
              onClick={loadExistingData}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              🔄 Refresh
            </button>
          </div>

          {qsiData.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-purple-200 text-lg">No QSi data generated yet</div>
              <div className="text-purple-300 text-sm mt-2">Click "Generate All Priority Cities" to start</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {qsiData.map((city, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-white">{city.city}</h3>
                      <p className="text-purple-200 text-sm">{getCountryName(city.country_code)}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${getRiskBadgeColor(city.risk_level || 'MEDIUM')}`}>
                      {city.risk_level || 'MEDIUM'}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-purple-200 text-sm">Overall Score:</span>
                      <span className={`font-semibold ${getScoreColor(city.safety_score)}`}>
                        {city.safety_score}/100
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200 text-sm">Legal:</span>
                      <span className={`font-semibold ${getScoreColor(city.legal_protection_score)}`}>
                        {city.legal_protection_score}/100
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200 text-sm">Social:</span>
                      <span className={`font-semibold ${getScoreColor(city.social_acceptance_score)}`}>
                        {city.social_acceptance_score}/100
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200 text-sm">Healthcare:</span>
                      <span className={`font-semibold ${getScoreColor(city.healthcare_access_score)}`}>
                        {city.healthcare_access_score}/100
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-purple-300">
                      {new Date(city.last_updated).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => refreshSingleCity(city)}
                      disabled={isGenerating}
                      className={`text-xs px-3 py-1 rounded transition-colors ${
                        isGenerating 
                          ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      🔄 Refresh
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QSiDataGenerationPanel;
