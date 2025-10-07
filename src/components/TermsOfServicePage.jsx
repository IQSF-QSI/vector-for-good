import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle, Users, Globe } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These terms govern your use of Vector for Good's safety intelligence platform and services.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: October 7, 2025
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Points</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Community Access</h3>
                <p className="text-gray-600 text-sm">
                  Our QSi Map and basic safety intelligence are free for personal use by LGBTQ+ individuals and communities.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Privacy Protection</h3>
                <p className="text-gray-600 text-sm">
                  We're committed to protecting your privacy through zero-knowledge architecture and minimal data collection.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Guidelines</h3>
                <p className="text-gray-600 text-sm">
                  We maintain a safe, inclusive environment for all users and prohibit harmful or discriminatory content.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Globe className="w-6 h-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Service</h3>
                <p className="text-gray-600 text-sm">
                  Our services are available worldwide, subject to local laws and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using Vector for Good's services, including our website, QSi Map, 
              zero-knowledge demonstrations, and enterprise solutions, you agree to be bound by 
              these Terms of Service and our Privacy Policy.
            </p>
            <p className="text-gray-600">
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          {/* Description of Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">QSi Map (Free Service)</h3>
                <p className="text-gray-600">
                  Our Queer Safety Index Map provides global safety intelligence for LGBTQ+ 
                  individuals, families, and communities. This service is free for personal, 
                  non-commercial use.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero-Knowledge Demonstrations</h3>
                <p className="text-gray-600">
                  Interactive demonstrations of our privacy-preserving technology, allowing 
                  users to experience zero-knowledge proofs without sharing personal data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Solutions</h3>
                <p className="text-gray-600">
                  Advanced safety intelligence services for organizations, including real-time 
                  risk assessments, custom integrations, and dedicated support.
                </p>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Acceptable Use</h3>
                <p className="text-gray-600 mb-3">You agree to use our services only for lawful purposes and in accordance with these terms. You will not:</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Use our services to harm, harass, or discriminate against any individual or group</li>
                  <li>• Attempt to reverse engineer or compromise our zero-knowledge systems</li>
                  <li>• Share false or misleading safety information</li>
                  <li>• Use our services for commercial purposes without proper licensing</li>
                  <li>• Violate any applicable laws or regulations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Security</h3>
                <p className="text-gray-600">
                  For enterprise services requiring accounts, you are responsible for maintaining 
                  the security of your login credentials and for all activities under your account.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Data</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 mb-4">
                Our commitment to privacy is fundamental to our mission. Please review our 
                Privacy Policy for detailed information about how we protect your data.
              </p>
              <div className="space-y-2 text-blue-700">
                <p>• We use zero-knowledge architecture to protect your personal information</p>
                <p>• We collect minimal data necessary to provide our services</p>
                <p>• We never sell or share your personal data with third parties</p>
                <p>• You maintain control over your data and can request deletion at any time</p>
              </div>
            </div>
          </section>

          {/* Safety Information Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Safety Information Disclaimer</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Important Safety Notice</h3>
                  <div className="text-yellow-800 space-y-2">
                    <p>
                      Our safety intelligence is provided for informational purposes only and 
                      should not be your sole source of safety information. Safety conditions 
                      can change rapidly, and local circumstances may vary significantly.
                    </p>
                    <p>
                      Always use multiple sources of information, trust your instincts, and 
                      consult local LGBTQ+ organizations and authorities when making safety decisions.
                    </p>
                    <p>
                      Vector for Good is not responsible for any harm that may result from 
                      reliance on our safety intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Content</h3>
                <p className="text-gray-600">
                  All content, features, and functionality of our services, including but not 
                  limited to text, graphics, logos, software, and algorithms, are owned by 
                  Vector for Good and protected by copyright and other intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Content</h3>
                <p className="text-gray-600">
                  Any content you provide through our services remains your property. However, 
                  you grant us a license to use this content to provide and improve our services, 
                  subject to our privacy commitments.
                </p>
              </div>
            </div>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
            <p className="text-gray-600 mb-4">
              We strive to maintain high availability of our services, but we cannot guarantee 
              uninterrupted access. We may temporarily suspend or restrict access for maintenance, 
              updates, or other operational reasons.
            </p>
            <p className="text-gray-600">
              We reserve the right to modify, suspend, or discontinue any aspect of our services 
              at any time, with or without notice.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, Vector for Good shall not be liable for:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Any indirect, incidental, special, or consequential damages</li>
                <li>• Any loss of profits, data, or business opportunities</li>
                <li>• Any damages resulting from reliance on safety information</li>
                <li>• Any damages exceeding the amount paid for our services (if any)</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-4">
              You may stop using our services at any time. For enterprise accounts, you may 
              terminate your agreement according to the terms of your service contract.
            </p>
            <p className="text-gray-600">
              We may terminate or suspend your access to our services if you violate these 
              terms or engage in harmful behavior toward our community.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-600">
              These terms are governed by the laws of the jurisdiction where Vector for Good 
              is incorporated, without regard to conflict of law principles. Any disputes will 
              be resolved through binding arbitration or in the courts of that jurisdiction.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We may update these Terms of Service from time to time to reflect changes in 
              our services, legal requirements, or business practices.
            </p>
            <p className="text-gray-600">
              We will notify you of material changes by posting the updated terms on our 
              website and updating the "Last updated" date. Your continued use of our services 
              after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@vectorforgood.com</p>
                <p><strong>Address:</strong> Vector for Good Legal Team</p>
                <p className="text-sm text-gray-500 mt-4">
                  We will respond to all legal inquiries within 30 days.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
