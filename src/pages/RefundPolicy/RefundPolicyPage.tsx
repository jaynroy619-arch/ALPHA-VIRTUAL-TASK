import React from 'react';
import { RefreshCcw, CheckCircle, HelpCircle, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppLink, createEmailLink } from '../../utils/contactLinks';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
          Fair Practice Policy
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-2 mb-3">
          Refund & Cancellation Policy
        </h1>
        <p className="text-xs font-mono text-neutral-400">
          Last Updated: March 2026 · Alpha Virtual Task
        </p>
      </div>

      <div className="space-y-8 text-neutral-300 text-sm leading-relaxed">
        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <RefreshCcw className="w-5 h-5 text-[#e5be53]" />
            1. Service Nature & Customized Work
          </h2>
          <p>
            Because Alpha Virtual Task provides custom human labor, data research, and administrative services tailored to specific client parameters, services delivered cannot be restocked or returned once work has been performed. Therefore, automatic or unconditional refunds are not provided.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#e5be53]" />
            2. Revisions & Resolution First
          </h2>
          <p>
            Our top motto is &ldquo;Your Trust Our Priority&rdquo;. If any delivered work contains errors, omissions, or falls short of the written requirements agreed upon before starting, our first course of action is always prompt, diligent revision at no extra charge until the scope is satisfied.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#e5be53]" />
            3. Project Cancellation Circumstances
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-neutral-400">
            <li>
              <strong>Prior to Work Commencement:</strong> If a project is cancelled by the client before any active work or data processing begins, any pre-paid amounts will be refunded after deduction of any third-party transaction or banking fees.
            </li>
            <li>
              <strong>Mid-Project Cancellation:</strong> If a cancellation is requested while work is actively in progress, the client is responsible for compensating the pro-rated proportion of work completed up to that point. Any balance will be refunded accordingly.
            </li>
            <li>
              <strong>Mutual Agreement:</strong> Any specific refund or milestone cancellation terms explicitly noted in an agreed project statement will supersede general policy.
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#e5be53]" />
            4. How to Request an Adjustment or Resolution
          </h2>
          <p className="mb-4">
            If you have questions regarding a project invoice, delivery dispute, or wish to request adjustments, please reach out directly:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={createWhatsAppLink(undefined, 'Regarding project resolution / refund discussion')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-500"
            >
              WhatsApp Us
            </a>
            <a
              href={createEmailLink(undefined, { message: 'Regarding project resolution / refund discussion' })}
              className="px-4 py-2 rounded-lg bg-neutral-800 text-white font-medium text-xs hover:bg-neutral-700 border border-neutral-700"
            >
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
