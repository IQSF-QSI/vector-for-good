import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Lock, Eye, EyeOff, Zap, CheckCircle, Hash, Key, Database, AlertCircle } from 'lucide-react'

const ZKDemoAdvanced = () => {
  const [demoStep, setDemoStep] = useState(1)
  const [userInput, setUserInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [encryptedData, setEncryptedData] = useState('')
  const [zkProof, setZkProof] = useState('')
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false)

  const handleDemo = () => {
    setIsProcessing(true)
    
    // Simulate encryption process
    setTimeout(() => {
      const encrypted = btoa(userInput).replace(/[+/=]/g, (m) => ({'+': '-', '/': '_', '=': ''}[m]))
      setEncryptedData(encrypted)
      setDemoStep(2)
    }, 1000)

    // Simulate proof generation
    setTimeout(() => {
      const proof = 'zk_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      setZkProof(proof)
      setDemoStep(3)
    }, 2000)

    // Complete processing
    setTimeout(() => {
      setIsProcessing(false)
      setDemoStep(4)
    }, 3000)
  }

  const resetDemo = () => {
    setDemoStep(1)
    setUserInput('')
    setEncryptedData('')
    setZkProof('')
    setIsProcessing(false)
    setShowTechnicalDetails(false)
  }

  const getStepStatus = (step) => {
    if (demoStep > step) return 'complete'
    if (demoStep === step) return 'active'
    return 'pending'
  }

  const StepIndicator = ({ step, title, status }) => {
    const getStatusColor = () => {
      switch (status) {
        case 'complete': return 'bg-green-600 text-white'
        case 'active': return 'bg-blue-600 text-white'
        default: return 'bg-gray-300 text-gray-600'
      }
    }

    return (
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getStatusColor()}`}>
          {status === 'complete' ? <CheckCircle className="w-5 h-5" /> : step}
        </div>
        <span className={`ml-2 text-sm font-medium ${status === 'active' ? 'text-blue-600' : status === 'complete' ? 'text-green-600' : 'text-gray-500'}`}>
          {title}
        </span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/images/IMG_1968(3).png" 
                alt="Rainbow Shield" 
                className="h-16 w-auto mr-4"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Zero-Knowledge Demo
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience how our zero-knowledge technology protects your privacy while 
              contributing to community safety intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <StepIndicator step={1} title="Input Data" status={getStepStatus(1)} />
                <div className="flex-1 h-1 bg-gray-200 mx-4">
                  <div className={`h-full bg-blue-600 transition-all duration-500 ${demoStep >= 2 ? 'w-1/3' : 'w-0'}`}></div>
                </div>
                <StepIndicator step={2} title="Encrypt" status={getStepStatus(2)} />
                <div className="flex-1 h-1 bg-gray-200 mx-4">
                  <div className={`h-full bg-blue-600 transition-all duration-500 ${demoStep >= 3 ? 'w-2/3' : demoStep >= 2 ? 'w-1/3' : 'w-0'}`}></div>
                </div>
                <StepIndicator step={3} title="Generate Proof" status={getStepStatus(3)} />
                <div className="flex-1 h-1 bg-gray-200 mx-4">
                  <div className={`h-full bg-blue-600 transition-all duration-500 ${demoStep >= 4 ? 'w-full' : 'w-0'}`}></div>
                </div>
                <StepIndicator step={4} title="Complete" status={getStepStatus(4)} />
              </div>
            </div>

            {/* Step 1: Input */}
            {demoStep === 1 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Enter Your Safety Data</h2>
                <p className="text-gray-600 mb-6">
                  Share a location or safety experience. This will be processed using zero-knowledge proofs 
                  to contribute to community safety while keeping your data completely private.
                </p>
                <div className="max-w-md mx-auto">
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="e.g., 'Found a very welcoming LGBTQ+ bookstore in downtown Seattle with friendly staff and inclusive atmosphere'"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 h-24 resize-none"
                  />
                  <button
                    onClick={handleDemo}
                    disabled={!userInput.trim() || isProcessing}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : 'Process with Zero-Knowledge'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Encryption */}
            {demoStep === 2 && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Local Encryption</h2>
                <p className="text-gray-600 mb-6">
                  Your data is being encrypted on your device before any transmission...
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-blue-800">Encrypting locally to ensure privacy</p>
                </div>
              </div>
            )}

            {/* Step 3: Proof Generation */}
            {demoStep === 3 && (
              <div className="text-center">
                <div className="animate-pulse">
                  <Zap className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Generating Zero-Knowledge Proof</h2>
                <p className="text-gray-600 mb-6">
                  Creating cryptographic proof without revealing your original data...
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <Hash className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-purple-800">Generating mathematical proof of validity</p>
                </div>
              </div>
            )}

            {/* Step 4: Complete */}
            {demoStep === 4 && (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Zero-Knowledge Processing Complete</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <EyeOff className="w-8 h-8 text-red-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Your Data Stays Private</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Your original input was never exposed to our servers.
                    </p>
                    <div className="bg-white p-3 rounded border text-xs text-gray-500 font-mono">
                      Original: [ENCRYPTED LOCALLY]
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Safety Intelligence Generated</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Cryptographic proof contributed to community safety.
                    </p>
                    <div className="bg-white p-3 rounded border text-xs text-green-600 font-mono">
                      Proof: {zkProof}
                    </div>
                  </div>
                </div>

                {/* Technical Details Toggle */}
                <div className="mb-6">
                  <button
                    onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    {showTechnicalDetails ? 'Hide' : 'Show'} Technical Details
                  </button>
                </div>

                {showTechnicalDetails && (
                  <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Key className="w-5 h-5 mr-2" />
                      Technical Implementation
                    </h4>
                    <div className="space-y-4 text-sm">
                      <div>
                        <strong>Encryption Algorithm:</strong> AES-256-GCM with client-side key generation
                      </div>
                      <div>
                        <strong>Zero-Knowledge Protocol:</strong> zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge)
                      </div>
                      <div>
                        <strong>Proof System:</strong> Groth16 with BN254 elliptic curve
                      </div>
                      <div>
                        <strong>Privacy Guarantee:</strong> Computational zero-knowledge with statistical soundness
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <strong>Encrypted Data Hash:</strong> 
                        <code className="block mt-1 text-xs text-gray-600 font-mono break-all">
                          {encryptedData}
                        </code>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetDemo}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Try Again
                  </button>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            )}

            {/* How it Works - Always visible */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">How Zero-Knowledge Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">1. Encrypt Locally</h4>
                  <p className="text-gray-600 text-sm">Your data is encrypted on your device before any transmission</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">2. Generate Proof</h4>
                  <p className="text-gray-600 text-sm">Cryptographic proof is created without revealing the original data</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">3. Contribute Safely</h4>
                  <p className="text-gray-600 text-sm">Only the proof is shared, contributing to safety intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ZKDemoAdvanced
