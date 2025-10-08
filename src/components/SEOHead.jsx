import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Vector for Good - Privacy-First Safety Intelligence | Queer Intelligence (QI)",
  description = "Revolutionary Queer Intelligence (QI) framework empowering LGBTQ+ communities with AI-powered safety intelligence. NVIDIA Inception member providing global safety data for 195+ countries.",
  keywords = "LGBTQ+ safety, queer intelligence, AI safety, privacy-first technology, Vector for Good, IQSF, NVIDIA Inception, QSi map, zero-knowledge privacy, AI agents, safety intelligence",
  image = "/apple-touch-icon.png",
  url = "https://vector-for-good.vercel.app",
  type = "website",
  structuredData = null
}) => {
  const fullTitle = title.includes('Vector for Good') ? title : `${title} | Vector for Good`;
  const fullUrl = url.startsWith('http') ? url : `https://vector-for-good.vercel.app${url}`;
  const fullImage = image.startsWith('http') ? image : `https://vector-for-good.vercel.app${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Vector for Good" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@VectorForGood" />
      <meta name="twitter:creator" content="@LeviHankins" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Vector for Good PBC" />
      <meta name="publisher" content="Vector for Good PBC" />
      <meta name="copyright" content="© 2025 Vector for Good PBC. All rights reserved." />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Pre-configured SEO for different pages
export const HomePageSEO = () => (
  <SEOHead
    title="Vector for Good - Privacy-First Safety Intelligence | Queer Intelligence (QI) | LGBTQ+ AI Platform"
    description="Revolutionary Queer Intelligence (QI) framework empowering LGBTQ+ communities worldwide. AI-powered safety intelligence, zero-knowledge privacy, and global QSi map covering 195+ countries. NVIDIA Inception member."
    keywords="LGBTQ+ safety, queer intelligence, AI safety, privacy-first technology, Vector for Good, IQSF, NVIDIA Inception, QSi map, zero-knowledge privacy, AI agents, safety intelligence, LGBTQ+ travel safety, queer community protection"
    url="/"
  />
);

export const QSiMapSEO = () => (
  <SEOHead
    title="QSi Map - Global LGBTQ+ Safety Intelligence | Vector for Good"
    description="Interactive QSi Map with comprehensive LGBTQ+ safety data for 195+ countries. Real-time safety intelligence, travel advisories, and community resources powered by Queer Intelligence (QI)."
    keywords="QSi map, LGBTQ+ safety map, queer travel safety, global LGBTQ+ data, safety intelligence, travel advisories, LGBTQ+ friendly countries, queer safety index"
    url="/qsi-map"
  />
);

export const QueerIntelligenceSEO = () => (
  <SEOHead
    title="Queer Intelligence (QI) - Revolutionary AI Framework | Vector for Good"
    description="Introducing Queer Intelligence (QI) - the world's first AI framework designed by and for LGBTQ+ communities. Empathy-centered technology, cultural competency, and community empowerment."
    keywords="queer intelligence, QI framework, LGBTQ+ AI, empathy-centered technology, cultural competency, AI for good, inclusive AI, queer tech, LGBTQ+ innovation"
    url="/queer-intelligence"
  />
);

export const AIAgentsSEO = () => (
  <SEOHead
    title="AI Agent Teams - Multi-LLM Collaboration | Vector for Good"
    description="Advanced AI agent teams powered by GPT-4, Gemini, and Claude with NVIDIA Inception acceleration. Real-time safety analysis, community support, and intelligent assistance for LGBTQ+ communities."
    keywords="AI agents, multi-LLM collaboration, GPT-4, Gemini, Claude, NVIDIA Inception, AI safety analysis, LGBTQ+ AI assistance, intelligent agents, community support AI"
    url="/ai-agents"
  />
);

export const JaneGoodallSEO = () => (
  <SEOHead
    title="Jane Goodall Memorial - Honoring Our Inspiration | Vector for Good"
    description="A heartfelt memorial to Dr. Jane Goodall (1934-2024), whose legacy of compassion and advocacy continues to inspire Vector for Good's mission to protect vulnerable communities worldwide."
    keywords="Jane Goodall memorial, Dr. Jane Goodall, conservation legacy, compassion, advocacy, Vector for Good inspiration, protecting vulnerable communities, environmental justice"
    url="/jane-goodall-memorial"
  />
);

export const EnterpriseSEO = () => (
  <SEOHead
    title="Enterprise Solutions - Fortune 500 LGBTQ+ Safety Intelligence | Vector for Good"
    description="Enterprise-grade LGBTQ+ safety intelligence for Fortune 500 companies. Comprehensive risk assessment, employee safety, global operations support, and diversity & inclusion insights."
    keywords="enterprise LGBTQ+ safety, Fortune 500 solutions, corporate diversity, employee safety, global operations, risk assessment, D&I insights, enterprise AI, business intelligence"
    url="/enterprise"
  />
);

export const ContactSEO = () => (
  <SEOHead
    title="Contact Vector for Good - Get Started with QI Platform"
    description="Contact Vector for Good to start your enterprise pilot program. Global headquarters in Tallinn, Estonia and Dover, Delaware. Call 619-83-QUEER (619-837-8337) or chat with Quinn AI."
    keywords="contact Vector for Good, enterprise pilot, LGBTQ+ safety consultation, Quinn AI chat, 619-83-QUEER, Tallinn headquarters, Dover Delaware office, get started"
    url="/contact"
  />
);

export default SEOHead;
