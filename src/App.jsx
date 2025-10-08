import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MinimalLayout from './components/MinimalLayout';
import StunningHomePage from './components/StunningHomePage';
import ContactPage from './components/ContactPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import QSiMapPage from './components/QSiMapPage';
import ZKDemoPage from './components/ZKDemoPage';
import EnhancedAIAgentsPage from './components/EnhancedAIAgentsPage';
import AboutPage from './components/AboutPage';
import IQSFPartnershipPage from './components/IQSFPartnershipPage';
import JaneGoodallMemorial from './components/JaneGoodallMemorial';
import EnterprisePage from './components/EnterprisePage';
import CareersPage from './components/CareersPage';
import ResourcesPage from './components/ResourcesPage';
import './index.css';

// Main App Component
function App() {
  return (
    <Router>
      <MinimalLayout>
        <Routes>
          <Route path="/" element={<StunningHomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/iqsf-partnership" element={<IQSFPartnershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/qsi-map" element={<QSiMapPage />} />
          <Route path="/zk-demo" element={<ZKDemoPage />} />
          <Route path="/ai-agents" element={<EnhancedAIAgentsPage />} />
          <Route path="/jane-goodall-memorial" element={<JaneGoodallMemorial />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </MinimalLayout>
    </Router>
  );
}

export default App;
