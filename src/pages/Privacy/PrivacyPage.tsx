import React from 'react';
import { Shield, Lock, Eye, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/contactLinks';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
          Legal & Trust
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-2 mb-3">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-neutral-400">
          Last Updated: March 2026 · Alpha Virtual Task
        </p>
      </div>

      <div className="space-y-8 text-neutral-300 text-sm leading-relaxed">
        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#e5be53]" />
            1. Overview
          </h2>
          <p>
            At Alpha Virtual Task (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take your privacy and the confidentiality of your business data seriously. This website operates strictly as an informational and direct-inquiry interface. We do not require customer logins, accounts, or profile registrations.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#e5be53]" />
            2. Information We Receive Through Direct Communication
          </h2>
          <p className="mb-3">
            When you initiate contact with us through WhatsApp, email, or telephone, we may receive information you voluntarily provide, including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
            <li>Your name, business title, and organization name</li>
            <li>Your contact telephone / WhatsApp number and email address</li>
            <li>Project files, spreadsheets, documents, audio recordings, or guidelines shared for quoting and execution</li>
            <li>Project requirements, specifications, and feedback</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#e5be53]" />
            3. How We Use & Protect Your Information
          </h2>
          <p className="mb-3">
            Any records, files, or contact details provided to Alpha Virtual Task are used solely for:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
            <li>Assessing and providing transparent price quotes for requested virtual and data services</li>
            <li>Executing agreed tasks (data entry, cleaning, formatting, transcription, research, etc.)</li>
            <li>Communicating project status and delivering finalized outputs</li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, monetize, or disclose your personal or proprietary business information to third-party advertisers or brokers.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#e5be53]" />
            4. Data Retention & Deletion
          </h2>
          <p>
            Upon successful project delivery and client sign-off, client source materials and working files are retained only for a reasonable period to facilitate requested revisions or backups, after which they can be permanently removed upon client request.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3">5. Contact Regarding Privacy</h2>
          <p>
            If you have any questions regarding this Privacy Policy or wish to request the deletion of files shared during a project, please email us directly at{' '}
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#f3de8a] hover:underline">
              {BUSINESS_INFO.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};
