import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-500 mb-10 text-sm">Last updated: 2026</p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <p>
              These Terms of Service govern the use of services provided by Krayora. By engaging our services, making a payment, or entering into a project with us, you agree to the terms outlined below.
            </p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Parties</h2>
              <p className="mb-4">These services are provided by Krayora, represented by Soham Nilesh Kamble and Pranav Rajeev Nair.</p>
              <p>The “Client” refers to any individual or business that engages Krayora for website development or related services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Scope of Services</h2>
              <p className="mb-4">Krayora agrees to deliver website development services as defined and agreed upon before the start of a project. This may include website type, number of pages, and features explicitly listed.</p>
              <p className="mb-4">Only the items explicitly agreed upon are included. Any additional work not listed is considered extra and will be charged separately.</p>
              <p>Domains are registered in the client’s name and email. Krayora retains no ownership after project completion and full payment.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Project Timeline</h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-slate-400">
                <li>Work begins only after the agreed advance payment is received.</li>
                <li>Standard delivery timeline is approximately two weeks unless stated otherwise.</li>
                <li>Delays caused by the client, including late content, approvals, or feedback, will automatically extend the timeline.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Payments</h2>
              <p className="mb-4">Payment terms are as follows:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-slate-400">
                <li>30% advance payment before work begins</li>
                <li>Remaining balance payable before final delivery or handover</li>
              </ul>
              <p className="mt-4">Website files, credentials, and access will be shared only after full payment is received.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Refund Policy</h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-slate-400">
                <li>Advance payments are non-refundable once work has started.</li>
                <li>If a project is cancelled midway, the advance is forfeited.</li>
                <li>Any completed work beyond the advance may be billed separately.</li>
                <li>No refunds are provided after design approval.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Ownership and Rights</h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-slate-400">
                <li>Ownership of the website, design, and source files transfers to the client only after full payment.</li>
                <li>Until full payment is received, all work remains the property of Krayora.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Client Content Responsibility</h2>
              <p className="mb-4">The client is responsible for providing all text, images, logos, and materials used on the website and confirms they have legal rights to them.</p>
              <p>Krayora is not liable for copyright or legal issues arising from client-supplied materials.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">8. Support and Maintenance</h2>
              <p className="mb-4">Free post-delivery support is provided for 15 days after launch.</p>
              <p>Any changes or updates requested after this period will be chargeable.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">9. No Guarantees</h2>
              <p>Krayora does not guarantee business growth, search engine rankings, sales, leads, or revenue.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">10. Limitation of Liability</h2>
              <p className="mb-4">Krayora’s maximum liability is limited to the total amount paid for the project.</p>
              <p>Krayora is not responsible for hosting downtime, domain issues, third-party services, or client business losses.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">11. Termination</h2>
              <p className="mb-4">Either party may terminate the engagement with written notice.</p>
              <p>Payments already made are non-refundable.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">12. Jurisdiction</h2>
              <p>All disputes shall fall under the jurisdiction of the courts of Goa, India.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">13. Acceptance</h2>
              <p>By making a payment, engaging our services, or continuing with a project, the client confirms acceptance of these Terms of Service.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;