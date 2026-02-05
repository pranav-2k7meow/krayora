import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 mb-10 text-sm">Last updated: 2026</p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <p>
              At Krayora, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or contact us.
            </p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect limited personal information when you choose to share it with us, including:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-slate-400">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business details you voluntarily provide</li>
                <li>Any information submitted through contact or consultation forms</li>
              </ul>
              <p className="mt-4">We may also collect basic, non-personal information such as browser type, device information, and general usage data to understand how our website is used.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-slate-400">
                <li>Respond to inquiries and consultation requests</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and user experience</li>
                <li>Maintain internal records</li>
              </ul>
              <p className="mt-4">We do not sell, rent, or trade your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Cookies and Analytics</h2>
              <p className="mb-4">Our website may use basic cookies or analytics tools to understand traffic and improve performance. These tools collect anonymous usage data and do not personally identify you.</p>
              <p>You can choose to disable cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Data Sharing</h2>
              <p className="mb-4">We only share your information when necessary to operate our services, such as:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-slate-400">
                <li>Email or communication tools used to respond to you</li>
                <li>Analytics services to understand website performance</li>
              </ul>
              <p className="mt-4">All such services follow standard data protection practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Data Security</h2>
              <p>We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-slate-400">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction or deletion of your information</li>
                <li>Withdraw consent for us to contact you</li>
              </ul>
              <p className="mt-4">To exercise these rights, you can contact us using the details below.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Third-Party Links</h2>
              <p>Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
              <p className="mb-2">If you have any questions about this Privacy Policy or how we handle your data, you can contact us at:</p>
              <p className="font-medium text-indigo-600">Email: hello@krayora.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;