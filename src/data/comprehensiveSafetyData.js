// Comprehensive LGBTQ+ Safety Data for QSi Map
// Based on Equaldex Equality Index, ILGA-Europe Rainbow Map, and other authoritative sources

export const globalSafetyData = {
  // Top Tier - Safest Countries (Equality Index 75+)
  topTier: [
    {
      country: "Iceland",
      equalityIndex: 95,
      legalIndex: 100,
      publicOpinion: 90,
      safetyRating: "Excellent",
      cities: [
        {
          name: "Reykjavik",
          coordinates: [64.1466, -21.9426],
          safetyScore: 95,
          description: "World's most LGBTQ+ friendly capital with comprehensive legal protections",
          highlights: ["Marriage equality", "Full anti-discrimination laws", "Strong public support"],
          resources: ["Reykjavik Pride", "LGBTQ+ community centers", "24/7 support hotlines"]
        }
      ]
    },
    {
      country: "Norway",
      equalityIndex: 87,
      legalIndex: 88,
      publicOpinion: 87,
      safetyRating: "Excellent",
      cities: [
        {
          name: "Oslo",
          coordinates: [59.9139, 10.7522],
          safetyScore: 90,
          description: "Progressive Nordic capital with strong LGBTQ+ rights",
          highlights: ["Marriage equality since 2009", "Comprehensive hate crime laws", "High public acceptance"],
          resources: ["Oslo Pride", "LLH (National LGBTQ+ organization)", "Youth support services"]
        },
        {
          name: "Bergen",
          coordinates: [60.3913, 5.3221],
          safetyScore: 88,
          description: "Coastal city with vibrant LGBTQ+ community",
          highlights: ["Strong local LGBTQ+ scene", "University town with progressive values"],
          resources: ["Bergen Pride", "Student LGBTQ+ groups"]
        }
      ]
    },
    {
      country: "Uruguay",
      equalityIndex: 84,
      legalIndex: 94,
      publicOpinion: 74,
      safetyRating: "Excellent",
      cities: [
        {
          name: "Montevideo",
          coordinates: [-34.9011, -56.1645],
          safetyScore: 85,
          description: "South America's most progressive capital for LGBTQ+ rights",
          highlights: ["First country in Latin America with marriage equality", "Comprehensive gender identity law"],
          resources: ["Montevideo Pride", "LGBTQ+ advocacy organizations", "Government support programs"]
        }
      ]
    },
    {
      country: "Spain",
      equalityIndex: 83,
      legalIndex: 100,
      publicOpinion: 67,
      safetyRating: "Excellent",
      cities: [
        {
          name: "Madrid",
          coordinates: [40.4168, -3.7038],
          safetyScore: 88,
          description: "European LGBTQ+ capital with world-famous Pride celebration",
          highlights: ["Chueca district - LGBTQ+ neighborhood", "WorldPride host city", "Strong legal protections"],
          resources: ["Madrid Pride", "FELGTB", "Chueca community center"]
        },
        {
          name: "Barcelona",
          coordinates: [41.3851, 2.1734],
          safetyScore: 87,
          description: "Cosmopolitan city with vibrant LGBTQ+ scene",
          highlights: ["Eixample district LGBTQ+ area", "Progressive Catalonian policies"],
          resources: ["Barcelona Pride", "LGBTQ+ cultural centers", "Beach communities"]
        },
        {
          name: "Valencia",
          coordinates: [39.4699, -0.3763],
          safetyScore: 85,
          description: "Coastal city ranked among safest for LGBTQ+ digital nomads",
          highlights: ["Growing expat LGBTQ+ community", "Beach culture", "Affordable living"],
          resources: ["Valencia Pride", "International LGBTQ+ meetups"]
        }
      ]
    },
    {
      country: "Denmark",
      equalityIndex: 81,
      legalIndex: 93,
      publicOpinion: 69,
      safetyRating: "Excellent",
      cities: [
        {
          name: "Copenhagen",
          coordinates: [55.6761, 12.5683],
          safetyScore: 89,
          description: "Historic LGBTQ+ friendly city with progressive policies",
          highlights: ["First country to recognize same-sex unions (1989)", "Strong anti-discrimination laws"],
          resources: ["Copenhagen Pride", "LGBT Danmark", "Community support centers"]
        }
      ]
    }
  ],

  // High Safety Tier (Equality Index 60-74)
  highSafety: [
    {
      country: "Canada",
      equalityIndex: 79,
      legalIndex: 96,
      publicOpinion: 62,
      safetyRating: "Very Good",
      cities: [
        {
          name: "Toronto",
          coordinates: [43.6532, -79.3832],
          safetyScore: 85,
          description: "Major LGBTQ+ hub with Church-Wellesley Village",
          highlights: ["Historic LGBTQ+ district", "Strong legal protections", "Diverse community"],
          resources: ["Toronto Pride", "The 519 Community Centre", "LGBTQ+ health services"]
        },
        {
          name: "Vancouver",
          coordinates: [49.2827, -123.1207],
          safetyScore: 84,
          description: "West coast progressive city with strong LGBTQ+ community",
          highlights: ["Davie Village LGBTQ+ neighborhood", "Progressive BC policies"],
          resources: ["Vancouver Pride", "Qmunity", "LGBTQ+ resource centers"]
        },
        {
          name: "Montreal",
          coordinates: [45.5017, -73.5673],
          safetyScore: 83,
          description: "Francophone city with vibrant LGBTQ+ culture",
          highlights: ["Le Village LGBTQ+ district", "Bilingual LGBTQ+ services"],
          resources: ["Montreal Pride", "Fierté Montréal", "Community organizations"]
        }
      ]
    },
    {
      country: "Australia",
      equalityIndex: 78,
      legalIndex: 94,
      publicOpinion: 61,
      safetyRating: "Very Good",
      cities: [
        {
          name: "Sydney",
          coordinates: [-33.8688, 151.2093],
          safetyScore: 84,
          description: "Global LGBTQ+ destination with famous Mardi Gras",
          highlights: ["Oxford Street LGBTQ+ precinct", "Sydney Gay and Lesbian Mardi Gras", "Strong community"],
          resources: ["ACON", "Sydney Pride", "LGBTQ+ health services"]
        },
        {
          name: "Melbourne",
          coordinates: [-37.8136, 144.9631],
          safetyScore: 83,
          description: "Cultural capital with diverse LGBTQ+ scene",
          highlights: ["Fitzroy and Collingwood LGBTQ+ areas", "Progressive Victoria state policies"],
          resources: ["Melbourne Pride", "Thorne Harbour Health", "Community centers"]
        }
      ]
    },
    {
      country: "United Kingdom",
      equalityIndex: 69,
      legalIndex: 82,
      publicOpinion: 56,
      safetyRating: "Good",
      cities: [
        {
          name: "London",
          coordinates: [51.5074, -0.1278],
          safetyScore: 78,
          description: "Historic LGBTQ+ center with Soho district",
          highlights: ["Soho LGBTQ+ area", "Strong legal protections", "Diverse communities"],
          resources: ["London Pride", "Stonewall UK", "LGBTQ+ support services"],
          concerns: ["Recent policy rollbacks affecting trans rights"]
        },
        {
          name: "Brighton",
          coordinates: [50.8225, -0.1372],
          safetyScore: 82,
          description: "Seaside city known as UK's LGBTQ+ capital",
          highlights: ["High LGBTQ+ population", "Progressive local policies", "Vibrant scene"],
          resources: ["Brighton Pride", "LGBTQ+ community groups", "Support services"]
        }
      ]
    },
    {
      country: "Germany",
      equalityIndex: 73,
      legalIndex: 78,
      publicOpinion: 68,
      safetyRating: "Good",
      cities: [
        {
          name: "Berlin",
          coordinates: [52.5200, 13.4050],
          safetyScore: 82,
          description: "Progressive capital with vibrant LGBTQ+ scene and strong legal protections",
          highlights: ["Schöneberg LGBTQ+ district", "Marriage equality", "Strong anti-discrimination laws", "Vibrant nightlife"],
          resources: ["Berlin Pride (CSD)", "LGBTQ+ community centers", "Schwulenberatung Berlin", "Mann-O-Meter"],
          concerns: ["Some areas less accepting", "Occasional hate incidents"]
        }
      ]
    },
    {
      country: "Estonia",
      equalityIndex: 61,
      legalIndex: 65,
      publicOpinion: 57,
      safetyRating: "Good",
      cities: [
        {
          name: "Tallinn",
          coordinates: [59.4370, 24.7536],
          safetyScore: 75,
          description: "Digital-forward Baltic capital with growing LGBTQ+ acceptance",
          highlights: ["Civil unions recognized", "EU protections", "Tech-friendly environment", "Growing acceptance"],
          resources: ["Estonian LGBT Association", "Tallinn Pride", "Support organizations"],
          concerns: ["Traditional attitudes in some areas", "Limited rural acceptance"]
        }
      ]
    },
    {
      country: "United States",
      equalityIndex: 71,
      legalIndex: 85,
      publicOpinion: 56,
      safetyRating: "Variable",
      cities: [
        {
          name: "San Francisco",
          coordinates: [37.7749, -122.4194],
          safetyScore: 90,
          description: "Historic LGBTQ+ rights center with Castro district",
          highlights: ["Castro neighborhood", "Birthplace of LGBTQ+ rights movement", "Strong protections"],
          resources: ["SF Pride", "LGBTQ+ Community Center", "Health services"]
        },
        {
          name: "New York City",
          coordinates: [40.7128, -74.0060],
          safetyScore: 85,
          description: "Birthplace of modern LGBTQ+ rights movement",
          highlights: ["Greenwich Village", "Stonewall National Monument", "Diverse boroughs"],
          resources: ["NYC Pride", "LGBTQ+ Center", "Community organizations"]
        },
        {
          name: "Seattle",
          coordinates: [47.6062, -122.3321],
          safetyScore: 84,
          description: "Progressive Pacific Northwest city",
          highlights: ["Capitol Hill LGBTQ+ district", "Strong state protections"],
          resources: ["Seattle Pride", "LGBTQ+ organizations", "Support services"]
        },
        {
          name: "Las Vegas",
          coordinates: [36.1699, -115.1398],
          safetyScore: 78,
          description: "Entertainment capital with growing LGBTQ+ acceptance",
          highlights: ["The Fruit Loop LGBTQ+ district", "Nevada state protections", "Entertainment industry acceptance"],
          resources: ["Las Vegas Pride", "The Center Las Vegas", "LGBTQ+ nightlife venues"],
          concerns: ["Conservative areas outside city", "Tourism-focused acceptance"]
        },
        {
          name: "Des Moines",
          coordinates: [41.5868, -93.6250],
          safetyScore: 72,
          description: "Iowa capital with progressive policies and growing acceptance",
          highlights: ["Iowa marriage equality pioneer (2009)", "State anti-discrimination laws", "Growing LGBTQ+ community"],
          resources: ["Capital City Pride", "Iowa Safe Schools", "LGBTQ+ community organizations"],
          concerns: ["Rural Iowa less accepting", "Political climate variations"]
        },
        {
          name: "Omaha",
          coordinates: [41.2565, -95.9345],
          safetyScore: 68,
          description: "Nebraska's largest city with moderate LGBTQ+ acceptance",
          highlights: ["City non-discrimination ordinances", "Growing business support", "University presence"],
          resources: ["Omaha Pride", "LGBTQ+ community center", "Support groups"],
          concerns: ["Conservative state politics", "Limited statewide protections", "Rural areas less accepting"]
        },
        {
          name: "St. Louis",
          coordinates: [38.6270, -90.1994],
          safetyScore: 70,
          description: "Missouri city with established LGBTQ+ community and mixed acceptance",
          highlights: ["The Grove LGBTQ+ district", "City anti-discrimination laws", "Historic LGBTQ+ community"],
          resources: ["St. Louis Pride", "PROMO (statewide LGBTQ+ advocacy)", "Community centers"],
          concerns: ["Conservative state politics", "Limited statewide protections", "Rural Missouri challenges"]
        },
        {
          name: "Tuscaloosa",
          coordinates: [33.2098, -87.5692],
          safetyScore: 58,
          description: "Alabama college town with university-driven acceptance but state-level challenges",
          highlights: ["University of Alabama presence", "College town atmosphere", "Some local business support"],
          resources: ["University LGBTQ+ groups", "Student organizations", "Limited local resources"],
          concerns: ["Conservative state laws", "Limited legal protections", "Rural Alabama hostility", "Religious conservatism"]
        }
      ]
    }
  ],

  // Moderate Safety Tier (Equality Index 40-59)
  moderateSafety: [
    {
      country: "Taiwan",
      equalityIndex: 59,
      legalIndex: 67,
      publicOpinion: 51,
      safetyRating: "Good",
      cities: [
        {
          name: "Taipei",
          coordinates: [25.0330, 121.5654],
          safetyScore: 75,
          description: "First Asian city with marriage equality",
          highlights: ["First in Asia with marriage equality", "Growing LGBTQ+ acceptance", "Safe for digital nomads"],
          resources: ["Taiwan Pride", "LGBTQ+ advocacy groups", "Community centers"]
        },
        {
          name: "Kaohsiung",
          coordinates: [22.6273, 120.3014],
          safetyScore: 73,
          description: "Southern Taiwan's progressive city",
          highlights: ["Growing LGBTQ+ scene", "Safe environment"],
          resources: ["Local LGBTQ+ groups", "Pride events"]
        }
      ]
    },
    {
      country: "Japan",
      equalityIndex: 52,
      legalIndex: 53,
      publicOpinion: 51,
      safetyRating: "Moderate",
      cities: [
        {
          name: "Tokyo",
          coordinates: [35.6762, 139.6503],
          safetyScore: 70,
          description: "Modern metropolis with growing LGBTQ+ acceptance",
          highlights: ["Shinjuku Ni-chome district", "Some local partnership recognition", "Generally safe"],
          resources: ["Tokyo Pride", "LGBTQ+ organizations", "Community spaces"],
          concerns: ["Limited legal recognition", "Traditional social attitudes"]
        },
        {
          name: "Osaka",
          coordinates: [34.6937, 135.5023],
          safetyScore: 68,
          description: "Commercial hub with LGBTQ+ community",
          highlights: ["Growing acceptance", "Business-friendly environment"],
          resources: ["Kansai Pride", "Local LGBTQ+ groups"]
        }
      ]
    }
  ],

  // Caution Tier (Equality Index 20-39)
  cautionTier: [
    {
      country: "Russia",
      equalityIndex: 29,
      legalIndex: 35,
      publicOpinion: 23,
      safetyRating: "High Risk",
      cities: [
        {
          name: "Moscow",
          coordinates: [55.7558, 37.6176],
          safetyScore: 25,
          description: "Capital with severe restrictions on LGBTQ+ rights",
          highlights: [],
          resources: [],
          concerns: ["'Gay propaganda' laws", "Banned Pride events", "Discrimination legal", "Safety risks"]
        },
        {
          name: "St. Petersburg",
          coordinates: [59.9311, 30.3609],
          safetyScore: 23,
          description: "Cultural center with restrictive LGBTQ+ laws",
          concerns: ["Legal restrictions", "Social hostility", "Limited resources"]
        }
      ]
    }
  ],

  // High Risk Tier (Equality Index 0-19)
  highRisk: [
    {
      country: "Saudi Arabia",
      equalityIndex: 12,
      legalIndex: 3,
      publicOpinion: 22,
      safetyRating: "Extreme Risk",
      cities: [
        {
          name: "Riyadh",
          coordinates: [24.7136, 46.6753],
          safetyScore: 5,
          description: "Capital with severe criminalization of LGBTQ+ people",
          concerns: ["Death penalty possible", "Complete criminalization", "No legal protections", "Extreme danger"]
        }
      ]
    },
    {
      country: "Iran",
      equalityIndex: 5,
      legalIndex: 7,
      publicOpinion: 3,
      safetyRating: "Extreme Risk",
      cities: [
        {
          name: "Tehran",
          coordinates: [35.6892, 51.3890],
          safetyScore: 3,
          description: "Capital with death penalty for homosexuality",
          concerns: ["Death penalty", "Complete criminalization", "State persecution", "Extreme danger"]
        }
      ]
    }
  ]
};

// City-specific safety metrics
export const cityMetrics = {
  safetyFactors: [
    "Legal protections",
    "Public acceptance",
    "LGBTQ+ community presence",
    "Healthcare access",
    "Employment discrimination protections",
    "Housing discrimination protections",
    "Hate crime laws",
    "Police relations",
    "Religious tolerance",
    "Political climate"
  ],
  
  riskFactors: [
    "Criminalization of homosexuality",
    "Lack of anti-discrimination laws",
    "Religious extremism",
    "Political persecution",
    "Social hostility",
    "Limited healthcare access",
    "Police harassment",
    "Family rejection risks",
    "Employment discrimination",
    "Housing discrimination"
  ]
};

// Travel advisories and safety tips
export const travelAdvisories = {
  excellent: {
    description: "Fully safe for LGBTQ+ travelers with comprehensive legal protections",
    tips: ["Enjoy full freedom of expression", "Access to LGBTQ+ venues and events", "Strong community support available"]
  },
  veryGood: {
    description: "Generally safe with good legal protections and social acceptance",
    tips: ["Research local LGBTQ+ areas", "Connect with local community", "Be aware of regional variations"]
  },
  good: {
    description: "Mostly safe in urban areas with some legal protections",
    tips: ["Stay in LGBTQ+-friendly accommodations", "Research local laws", "Connect with LGBTQ+ organizations"]
  },
  moderate: {
    description: "Exercise caution, limited legal protections",
    tips: ["Be discreet in public", "Research local customs", "Have emergency contacts", "Stay in major cities"]
  },
  highRisk: {
    description: "Significant safety concerns, limited or no legal protections",
    tips: ["Extreme discretion required", "Avoid public displays of affection", "Have exit strategy", "Contact embassy if needed"]
  },
  extremeRisk: {
    description: "Severe criminalization and persecution, travel not recommended",
    tips: ["Avoid travel if possible", "If must travel, maintain complete discretion", "Have emergency evacuation plan"]
  }
};

export default globalSafetyData;
