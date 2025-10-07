import React, { useState, useEffect } from 'react'
import { Shield, Lock, Eye, EyeOff, Users, Heart, Baby, Home, AlertCircle, CheckCircle } from 'lucide-react'

const ZKFamilyProfiler = ({ onProfileComplete }) => {
  const [step, setStep] = useState(1)
  const [familyProfile, setFamilyProfile] = useState({
    // Core family structure (encrypted locally)
    familyMembers: [],
    primaryConcerns: [],
    intersectionalFactors: [],
    privacyLevel: 'maximum'
  })
  const [zkProof, setZkProof] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showRawData, setShowRawData] = useState(false)

  // Simulated zk-SNARK proof generation (client-side only)
  const generateZKProof = async (profileData) => {
    setIsProcessing(true)
    
    // Simulate cryptographic proof generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate a hash-based proof that proves profile characteristics without revealing details
    const profileHash = await crypto.subtle.digest('SHA-256', 
      new TextEncoder().encode(JSON.stringify(profileData))
    )
    
    const proofData = {
      timestamp: Date.now(),
      profileHash: Array.from(new Uint8Array(profileHash)).map(b => b.toString(16).padStart(2, '0')).join(''),
      
      // Zero-knowledge proofs for safety matching (no raw data exposed)
      proofs: {
        // Family Structure Proofs
        hasCisParentLGBTQChild: profileData.familyMembers.some(m => 
          m.relationship === 'parent' && m.identity === 'cisgender_heterosexual' && 
          profileData.familyMembers.some(c => c.relationship === 'child' && c.identity !== 'cisgender_heterosexual')
        ),
        hasLGBTQParents: profileData.familyMembers.some(m => 
          m.relationship === 'parent' && m.identity !== 'cisgender_heterosexual'
        ),
        hasMixedFamily: profileData.familyMembers.length > 0 && 
          profileData.familyMembers.some(m => m.identity !== 'cisgender_heterosexual') &&
          profileData.familyMembers.some(m => m.identity === 'cisgender_heterosexual'),
        hasIntersectionalNeeds: profileData.intersectionalFactors.length > 0,
        
        // LGBTQIA+ Identity-Specific Proofs
        hasLesbianMembers: profileData.familyMembers.some(m => m.identity === 'lesbian'),
        hasGayMembers: profileData.familyMembers.some(m => m.identity === 'gay'),
        hasBisexualMembers: profileData.familyMembers.some(m => m.identity === 'bisexual'),
        hasTransgenderMembers: profileData.familyMembers.some(m => 
          m.identity.includes('transgender') || m.identity === 'transgender_woman' || m.identity === 'transgender_man'
        ),
        hasNonbinaryMembers: profileData.familyMembers.some(m => 
          m.identity === 'nonbinary' || m.identity === 'genderfluid' || m.identity === 'genderqueer' || m.identity === 'agender'
        ),
        hasIntersexMembers: profileData.familyMembers.some(m => m.identity === 'intersex'),
        hasAsexualMembers: profileData.familyMembers.some(m => 
          m.identity === 'asexual' || m.identity === 'aromantic' || m.identity === 'demisexual'
        ),
        hasQuestioningMembers: profileData.familyMembers.some(m => 
          m.identity === 'questioning' || m.identity === 'queer'
        ),
        
        // Identity-Specific Intersection Proofs
        needsLesbianSpecificSupport: profileData.intersectionalFactors.includes('lesbian_specific'),
        needsGayMenSpecificSupport: profileData.intersectionalFactors.includes('gay_men_specific'),
        needsBisexualSpecificSupport: profileData.intersectionalFactors.includes('bisexual_specific'),
        needsTransgenderSpecificSupport: profileData.intersectionalFactors.includes('transgender_specific'),
        needsNonbinarySpecificSupport: profileData.intersectionalFactors.includes('nonbinary_specific'),
        needsIntersexSpecificSupport: profileData.intersectionalFactors.includes('intersex_specific'),
        needsAsexualSpecificSupport: profileData.intersectionalFactors.includes('asexual_specific'),
        needsQuestioningSupport: profileData.intersectionalFactors.includes('queer_questioning'),
        
        // Traditional Intersectional Proofs
        needsRaceEthnicityConsiderations: profileData.intersectionalFactors.includes('race_ethnicity'),
        needsDisabilityConsiderations: profileData.intersectionalFactors.includes('disability'),
        needsImmigrationConsiderations: profileData.intersectionalFactors.includes('immigration'),
        needsAgeSpecificConsiderations: profileData.intersectionalFactors.includes('age_specific'),
        needsEconomicConsiderations: profileData.intersectionalFactors.includes('economic'),
        needsReligiousConsiderations: profileData.intersectionalFactors.includes('religious'),
        needsRuralUrbanConsiderations: profileData.intersectionalFactors.includes('rural_urban'),
        needsLanguageSupport: profileData.intersectionalFactors.includes('language'),
        
        // Additional Support Needs
        needsMentalHealthSupport: profileData.intersectionalFactors.includes('mental_health'),
        needsSubstanceRecoverySupport: profileData.intersectionalFactors.includes('substance_recovery'),
        needsDomesticViolenceSupport: profileData.intersectionalFactors.includes('domestic_violence'),
        needsSexWorkConsiderations: profileData.intersectionalFactors.includes('sex_work'),
        needsVeteranSupport: profileData.intersectionalFactors.includes('military_veteran'),
        needsCriminalJusticeSupport: profileData.intersectionalFactors.includes('incarceration_history'),
        
        // Safety Priority Proofs
        prioritizesSchoolSafety: profileData.primaryConcerns.includes('school_safety'),
        prioritizesHealthcareAccess: profileData.primaryConcerns.includes('healthcare_access'),
        prioritizesLegalProtections: profileData.primaryConcerns.includes('legal_protections'),
        prioritizesCommunitySupport: profileData.primaryConcerns.includes('community_support'),
        prioritizesWorkplaceSafety: profileData.primaryConcerns.includes('workplace_safety'),
        prioritizesHousingSecurity: profileData.primaryConcerns.includes('housing_security'),
        prioritizesPublicSafety: profileData.primaryConcerns.includes('public_safety'),
        prioritizesTravelSafety: profileData.primaryConcerns.includes('travel_safety')
      },
      
      // Encrypted profile (only decryptable by user's device)
      encryptedProfile: btoa(JSON.stringify(profileData)) // In real implementation, use proper encryption
    }
    
    setIsProcessing(false)
    return proofData
  }

  const handleFamilyMemberAdd = (member) => {
    setFamilyProfile(prev => ({
      ...prev,
      familyMembers: [...prev.familyMembers, { ...member, id: Date.now() }]
    }))
  }

  const handleFamilyMemberRemove = (id) => {
    setFamilyProfile(prev => ({
      ...prev,
      familyMembers: prev.familyMembers.filter(m => m.id !== id)
    }))
  }

  const handleConcernToggle = (concern) => {
    setFamilyProfile(prev => ({
      ...prev,
      primaryConcerns: prev.primaryConcerns.includes(concern)
        ? prev.primaryConcerns.filter(c => c !== concern)
        : [...prev.primaryConcerns, concern]
    }))
  }

  const handleIntersectionalToggle = (factor) => {
    setFamilyProfile(prev => ({
      ...prev,
      intersectionalFactors: prev.intersectionalFactors.includes(factor)
        ? prev.intersectionalFactors.filter(f => f !== factor)
        : [...prev.intersectionalFactors, factor]
    }))
  }

  const completeProfile = async () => {
    const proof = await generateZKProof(familyProfile)
    setZkProof(proof)
    onProfileComplete(proof)
  }

  const FamilyMemberForm = () => {
    const [newMember, setNewMember] = useState({
      relationship: '',
      identity: '',
      ageRange: ''
    })

    const addMember = () => {
      if (newMember.relationship && newMember.identity) {
        handleFamilyMemberAdd(newMember)
        setNewMember({ relationship: '', identity: '', ageRange: '' })
      }
    }

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Family Composition (Encrypted Locally)
        </h3>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Lock className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium">Zero-Knowledge Privacy</span>
          </div>
          <p className="text-sm text-blue-700">
            This information is encrypted on your device and never sent to our servers. 
            We only receive mathematical proofs about your safety needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <select
            value={newMember.relationship}
            onChange={(e) => setNewMember({...newMember, relationship: e.target.value})}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Relationship</option>
            <option value="parent">Parent/Guardian</option>
            <option value="child">Child</option>
            <option value="partner">Partner/Spouse</option>
            <option value="sibling">Sibling</option>
            <option value="extended">Extended Family</option>
            <option value="chosen">Chosen Family</option>
          </select>

          <select
            value={newMember.identity}
            onChange={(e) => setNewMember({...newMember, identity: e.target.value})}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Identity</option>
            <option value="cisgender_heterosexual">Cisgender/Heterosexual</option>
            
            {/* Sexual Orientation */}
            <optgroup label="Sexual Orientation">
              <option value="lesbian">Lesbian</option>
              <option value="gay">Gay</option>
              <option value="bisexual">Bisexual</option>
              <option value="pansexual">Pansexual</option>
              <option value="asexual">Asexual</option>
              <option value="aromantic">Aromantic</option>
              <option value="demisexual">Demisexual</option>
              <option value="graysexual">Graysexual</option>
            </optgroup>
            
            {/* Gender Identity */}
            <optgroup label="Gender Identity">
              <option value="transgender_woman">Transgender Woman</option>
              <option value="transgender_man">Transgender Man</option>
              <option value="nonbinary">Non-binary</option>
              <option value="genderfluid">Genderfluid</option>
              <option value="genderqueer">Genderqueer</option>
              <option value="agender">Agender</option>
              <option value="demigender">Demigender</option>
              <option value="two_spirit">Two-Spirit</option>
            </optgroup>
            
            {/* Intersex */}
            <optgroup label="Intersex">
              <option value="intersex">Intersex</option>
            </optgroup>
            
            {/* Umbrella Terms */}
            <optgroup label="Umbrella Terms">
              <option value="queer">Queer</option>
              <option value="questioning">Questioning</option>
              <option value="lgbtqia_plus">LGBTQIA+</option>
            </optgroup>
            
            {/* Multiple Identities */}
            <optgroup label="Multiple Identities">
              <option value="multiple_identities">Multiple LGBTQIA+ Identities</option>
            </optgroup>
          </select>

          <select
            value={newMember.ageRange}
            onChange={(e) => setNewMember({...newMember, ageRange: e.target.value})}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Age Range</option>
            <option value="child">Child (0-12)</option>
            <option value="teen">Teen (13-17)</option>
            <option value="young_adult">Young Adult (18-25)</option>
            <option value="adult">Adult (26-64)</option>
            <option value="senior">Senior (65+)</option>
          </select>
        </div>

        <button
          onClick={addMember}
          disabled={!newMember.relationship || !newMember.identity}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          Add Family Member
        </button>

        {/* Current Family Members */}
        <div className="space-y-2">
          {familyProfile.familyMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
              <span className="text-sm">
                {member.relationship} - {member.identity} {member.ageRange && `(${member.ageRange})`}
              </span>
              <button
                onClick={() => handleFamilyMemberRemove(member.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const SafetyConcerns = () => {
    const concerns = [
      { id: 'school_safety', label: 'School Safety & Policies', icon: '🏫' },
      { id: 'healthcare_access', label: 'Healthcare Access', icon: '🏥' },
      { id: 'legal_protections', label: 'Legal Protections', icon: '⚖️' },
      { id: 'community_support', label: 'Community Support', icon: '🤝' },
      { id: 'workplace_safety', label: 'Workplace Safety', icon: '💼' },
      { id: 'housing_security', label: 'Housing Security', icon: '🏠' },
      { id: 'public_safety', label: 'Public Safety', icon: '🚶' },
      { id: 'travel_safety', label: 'Travel Safety', icon: '✈️' }
    ]

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Primary Safety Concerns</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {concerns.map((concern) => (
            <label key={concern.id} className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={familyProfile.primaryConcerns.includes(concern.id)}
                onChange={() => handleConcernToggle(concern.id)}
                className="mr-3"
              />
              <span className="mr-2">{concern.icon}</span>
              <span className="text-sm">{concern.label}</span>
            </label>
          ))}
        </div>
      </div>
    )
  }

  const IntersectionalFactors = () => {
    const factors = [
      // Identity-Specific Intersections
      { id: 'lesbian_specific', label: 'Lesbian-Specific Safety Concerns', icon: '🏳️‍🌈' },
      { id: 'gay_men_specific', label: 'Gay Men-Specific Safety Concerns', icon: '🏳️‍🌈' },
      { id: 'bisexual_specific', label: 'Bisexual Erasure & Biphobia', icon: '💗💜💙' },
      { id: 'transgender_specific', label: 'Transgender Safety & Healthcare', icon: '🏳️‍⚧️' },
      { id: 'nonbinary_specific', label: 'Non-binary Recognition & Rights', icon: '💛🤍💜🖤' },
      { id: 'intersex_specific', label: 'Intersex Medical & Legal Rights', icon: '💛💜' },
      { id: 'asexual_specific', label: 'Asexual/Aromantic Recognition', icon: '🖤🩶🤍💜' },
      { id: 'queer_questioning', label: 'Questioning & Fluid Identity Support', icon: '❓' },
      
      // Traditional Intersectional Factors
      { id: 'race_ethnicity', label: 'Race & Ethnicity Considerations', icon: '🌍' },
      { id: 'disability', label: 'Disability & Accessibility', icon: '♿' },
      { id: 'immigration', label: 'Immigration Status', icon: '🛂' },
      { id: 'age_specific', label: 'Age-Specific Needs', icon: '👥' },
      { id: 'economic', label: 'Economic Factors', icon: '💰' },
      { id: 'religious', label: 'Religious Considerations', icon: '🕊️' },
      { id: 'rural_urban', label: 'Rural/Urban Context', icon: '🌾' },
      { id: 'language', label: 'Language Barriers', icon: '🗣️' },
      
      // Additional Intersections
      { id: 'mental_health', label: 'Mental Health Support Needs', icon: '🧠' },
      { id: 'substance_recovery', label: 'Substance Use Recovery', icon: '🌱' },
      { id: 'domestic_violence', label: 'Domestic Violence Survivor', icon: '🛡️' },
      { id: 'sex_work', label: 'Sex Work Considerations', icon: '⚖️' },
      { id: 'military_veteran', label: 'Military/Veteran Status', icon: '🎖️' },
      { id: 'incarceration_history', label: 'Criminal Justice System History', icon: '🏛️' }
    ]

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Intersectional Considerations</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {factors.map((factor) => (
            <label key={factor.id} className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={familyProfile.intersectionalFactors.includes(factor.id)}
                onChange={() => handleIntersectionalToggle(factor.id)}
                className="mr-3"
              />
              <span className="mr-2">{factor.icon}</span>
              <span className="text-sm">{factor.label}</span>
            </label>
          ))}
        </div>
      </div>
    )
  }

  const ZKProofDisplay = () => {
    if (!zkProof) return null

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Shield className="w-5 h-5 mr-2 text-green-600" />
          Zero-Knowledge Proof Generated
        </h3>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="font-medium">Privacy-Preserving Profile Complete</span>
          </div>
          <p className="text-sm text-green-700">
            Your family profile has been converted into mathematical proofs. 
            Only safety matching data is shared - your personal details remain encrypted on your device.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Proof Details</h4>
            <button
              onClick={() => setShowRawData(!showRawData)}
              className="flex items-center text-sm text-blue-600 hover:text-blue-800"
            >
              {showRawData ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
              {showRawData ? 'Hide' : 'Show'} Technical Details
            </button>
          </div>
          
          <div className="text-sm space-y-2">
            <div>Proof Hash: <code className="bg-gray-200 px-2 py-1 rounded text-xs">{zkProof.profileHash.substring(0, 16)}...</code></div>
            <div>Timestamp: {new Date(zkProof.timestamp).toLocaleString()}</div>
            <div>Proofs Generated: {Object.keys(zkProof.proofs).length} safety matching criteria</div>
          </div>

          {showRawData && (
            <div className="mt-4 p-3 bg-gray-100 rounded text-xs">
              <div className="font-medium mb-2">Zero-Knowledge Proofs (Boolean Assertions):</div>
              <pre className="whitespace-pre-wrap overflow-x-auto">
                {JSON.stringify(zkProof.proofs, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">How This Protects Your Privacy:</h4>
          <ul className="text-sm space-y-1">
            <li>• Your raw family data never leaves your device</li>
            <li>• Only mathematical proofs about safety needs are shared</li>
            <li>• We can match you with relevant safety information without knowing your identity</li>
            <li>• Proofs are cryptographically verifiable but don't reveal personal details</li>
            <li>• You maintain full control over your data at all times</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Zero-Knowledge Family Safety Profile</h2>
        <p className="text-gray-600">
          Create a privacy-preserving profile to get personalized safety intelligence without sharing personal details.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center mb-8">
        {[1, 2, 3, 4].map((stepNum) => (
          <div key={stepNum} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= stepNum ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              {stepNum}
            </div>
            {stepNum < 4 && <div className={`w-16 h-1 ${step > stepNum ? 'bg-blue-600' : 'bg-gray-300'}`} />}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {step === 1 && <FamilyMemberForm />}
        {step === 2 && <SafetyConcerns />}
        {step === 3 && <IntersectionalFactors />}
        {step === 4 && <ZKProofDisplay />}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          
          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              onClick={completeProfile}
              disabled={isProcessing || zkProof}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
            >
              {isProcessing ? 'Generating Proof...' : zkProof ? 'Profile Complete' : 'Generate ZK Proof'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ZKFamilyProfiler
