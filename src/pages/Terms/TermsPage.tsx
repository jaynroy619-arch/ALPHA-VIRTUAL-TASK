import React from 'react';
import { FileText, CheckCircle, AlertCircle, RefreshCw, XCircle, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/contactLinks';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
          Agreement & Guidelines
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-2 mb-3">
          Terms & Conditions
        </h1>
        <p className="text-xs font-mono text-neutral-400">
          Last Updated: March 2026 · Alpha Virtual Task
        </p>
      </div>

      <div className="space-y-8 text-neutral-300 text-sm leading-relaxed">
        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#e5be53]" />
            1. Service Inquiries & Scope Definition
          </h2>
          <p>
            Alpha Virtual Task provides professional virtual and data services. By submitting an inquiry via WhatsApp, email, or telephone, you agree to engage in preliminary project discussions to clarify requirements, record formats, volume, and deliverables.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#e5be53]" />
            2. Pricing Discussions & Payment
          </h2>
          <p className="mb-2">
            Pricing is determined on a project-by-project basis depending on volume, technical complexity, source document quality, and turnaround urgency.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
            <li>Quotes are provided and mutually agreed upon prior to project initiation.</li>
            <li>We accept payments in {BUSINESS_INFO.primaryCurrency} and {BUSINESS_INFO.secondaryCurrency}.</li>
            <li>For large or multi-stage projects, advance milestones or deposits may be agreed upon before commencement.</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#e5be53]" />
            3. Customer-Provided Information & Accuracy
          </h2>
          <p>
            Clients are responsible for providing clear instructions, readable source files, and verifying that they have the legal right or authorization to possess and process the shared materials. We are not responsible for delays stemming from illegible scans, incomplete access credentials, or corrupt files.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-[#e5be53]" />
            4. Delivery Expectations & Revisions
          </h2>
          <p>
            We adhere to estimated delivery windows agreed upon before task commencement. Upon delivery of the completed files, clients have a review window (typically 5 to 7 business days) to review the work and request adjustments within the original scope. Revisions outside the initial scope may incur supplementary quotation.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-[#e5be53]" />
            5. Cancellation
          </h2>
          <p>
            Either party may request cancellation before work commences without penalty. If a cancellation is requested after substantial work has been completed, compensation corresponding to the work performed up to the cancellation notice will be settled.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#e5be53]" />
            6. Official Communication
          </h2>
          <p>
            Official communication is conducted via our registered WhatsApp ({BUSINESS_INFO.phoneDisplay}) and email ({BUSINESS_INFO.email}).
          </p>
        </section>
      </div>
    </div>
  );
};
