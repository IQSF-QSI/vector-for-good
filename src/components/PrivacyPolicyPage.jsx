import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is fundamental to our mission. Learn how we protect your data with zero-knowledge architecture.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: October 7, 2025
          </div>
        </div>

        {/* Privacy Principles */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Privacy Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Lock className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Zero-Knowledge Architecture</h3>
                <p className="text-gray-600 text-sm">
                  We never see your personal data. All processing happens on your device using cryptographic proofs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Eye className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600 text-sm">
                  We're open about what data we collect, how we use it, and how we protect it.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Database className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Minimization</h3>
                <p className="text-gray-600 text-sm">
                  We collect only what's necessary and delete data when it's no longer needed.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <UserCheck className="w-6 h-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">User Control</h3>
                <p className="text-gray-600 text-sm">
                  You have complete control over your data and can delete it at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero-Knowledge Proofs</h3>
                <p className="text-gray-600 mb-3">
                  When you use our QSi Map with personalized features, we receive only cryptographic proofs 
                  about your safety needs—never your actual personal information.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">What we receive:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Mathematical proofs that you have certain safety needs</li>
                    <li>• Encrypted hashes that cannot be reversed to reveal personal data</li>
                    <li>• Anonymous usage patterns for improving our algorithms</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg mt-3">
                  <h4 className="font-medium text-red-900 mb-2">What we never see:</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Your identity, location, or personal characteristics</li>
                    <li>• Family composition or relationship details</li>
                    <li>• Specific safety concerns or vulnerabilities</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
                <p className="text-gray-600 mb-3">
                  We collect minimal technical information to provide and improve our services:
                </p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• IP address (anonymized after 24 hours)</li>
                  <li>• Browser type and version</li>
                  <li>• Device type and operating system</li>
                  <li>• Usage analytics (aggregated and anonymized)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-600">
                  When you contact us for enterprise services, we collect only the information 
                  you voluntarily provide (name, email, organization) to respond to your inquiry.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Intelligence</h3>
                <p className="text-gray-600">
                  Zero-knowledge proofs help us provide personalized safety scores without 
                  compromising your privacy. We use these proofs to match you with relevant 
                  safety information while keeping your identity completely anonymous.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Improvement</h3>
                <p className="text-gray-600">
                  Aggregated, anonymized usage data helps us improve our algorithms and 
                  identify areas where we can better serve the LGBTQ+ community.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
                <p className="text-gray-600">
                  We use contact information only to respond to your inquiries and provide 
                  requested services. We never sell or share your contact information.
                </p>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Encryption</h3>
                <p className="text-gray-600">
                  All data transmission uses TLS 1.3 encryption. Personal data is encrypted 
                  on your device before any processing begins.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Controls</h3>
                <p className="text-gray-600">
                  Access to our systems is strictly limited to authorized personnel who 
                  require it for their job functions. All access is logged and monitored.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Retention</h3>
                <p className="text-gray-600">
                  We retain data only as long as necessary to provide our services. 
                  Anonymous usage analytics are retained for up to 2 years for service improvement.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-green-800 mb-4">
                You have the following rights regarding your data:
              </p>
              <ul className="text-green-700 space-y-2">
                <li>• <strong>Access:</strong> Request information about data we have about you</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate data</li>
                <li>• <strong>Deletion:</strong> Request deletion of your data</li>
                <li>• <strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li>• <strong>Objection:</strong> Object to processing of your data</li>
                <li>• <strong>Restriction:</strong> Request restriction of data processing</li>
              </ul>
              <p className="text-green-700 mt-4">
                To exercise these rights, contact us at privacy@vectorforgood.com
              </p>
            </div>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We use minimal third-party services to operate our platform:
            </p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900">Hosting & Infrastructure</h4>
                <p className="text-gray-600 text-sm">
                  We use secure cloud hosting providers that comply with SOC 2 and ISO 27001 standards.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium text-gray-900">Analytics</h4>
                <p className="text-gray-600 text-sm">
                  We use privacy-focused analytics that don't track individual users or store personal data.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@vectorforgood.com</p>
                <p><strong>Address:</strong> Vector for Good Privacy Team</p>
                <p className="text-sm text-gray-500 mt-4">
                  We will respond to all privacy inquiries within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Policy Updates</h3>
                  <p className="text-yellow-800 text-sm">
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    material changes by posting the new policy on this page and updating the 
                    "Last updated" date. Your continued use of our services after any changes 
                    constitutes acceptance of the new policy.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
