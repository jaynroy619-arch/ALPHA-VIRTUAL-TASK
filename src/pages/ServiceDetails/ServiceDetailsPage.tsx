import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  ListChecks,
  PackageCheck,
  Users,
  Workflow,
  HelpCircle,
  Database,
  FolderDown,
  Sparkles,
  LayoutGrid,
  Repeat,
  Cpu,
  Server,
  FileSpreadsheet,
  Search,
  Mic,
  Languages,
  CheckCheck,
  ShieldCheck,
  FileCheck2,
} from 'lucide-react';
import { getServiceById, SERVICES_DATA } from '../../data/services';
import { WorkWithUsChoice } from '../../components/WorkWithUs/WorkWithUsChoice';
import { WorkWithUsButton, WhatsAppButton, EmailButton, CallButton } from '../../components/ContactButtons/ContactButtons';
import { FAQAccordion } from '../../components/FAQ/FAQAccordion';

const ICON_MAP: Record<string, React.ElementType> = {
  Database,
  FolderDown,
  Sparkles,
  LayoutGrid,
  Repeat,
  Cpu,
  Server,
  FileSpreadsheet,
  Search,
  Mic,
  Languages,
  CheckCheck,
  ShieldCheck,
  FileCheck2,
};

export const ServiceDetailsPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : undefined;

  useEffect(() => {
    if (service) {
      document.title = `${service.name} Services | Alpha Virtual Task`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = ICON_MAP[service.iconName] || Database;
  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Back Link */}
      <div className="mb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-[#f3de8a] transition-colors py-1 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Service Header Block */}
      <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-black border border-[#d4af37]/35 p-6 sm:p-10 lg:p-12 mb-12 shadow-2xl overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded bg-[#d4af37]/15 text-[#f3de8a] border border-[#d4af37]/30">
              {service.category}
            </span>
            <span className="text-xs text-neutral-500 font-mono">Service Code: {service.id}</span>
          </div>

          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-neutral-900 border border-[#d4af37]/40 flex items-center justify-center text-[#e5be53] shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                {service.name}
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 mt-2 leading-relaxed max-w-2xl">
                {service.shortDesc}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed pt-2">
            {service.description}
          </p>

          {/* Quick CTA Actions right in hero */}
          <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-neutral-800">
            <WorkWithUsButton serviceName={service.name} size="md" label={`Discuss ${service.name}`} />
            <WhatsAppButton serviceName={service.name} size="md" label="WhatsApp Inquiry" />
            <EmailButton serviceName={service.name} size="md" label="Email Inquiry" />
          </div>
        </div>
      </div>

      {/* Structured Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
        {/* Left Column (8 cols): Detailed Scope & Deliverables */}
        <div className="lg:col-span-8 space-y-10">
          {/* 1. What We Can Help With */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#e5be53]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                What We Help With
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {service.whatWeHelpWith.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs sm:text-sm text-neutral-300"
                >
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Typical Tasks */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white">
                <ListChecks className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                Typical Tasks & Scope
              </h2>
            </div>
            <ul className="space-y-3">
              {service.typicalTasks.map((task, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 text-sm text-neutral-300"
                >
                  <span className="text-xs font-mono text-[#e5be53] font-bold">0{idx + 1}.</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Deliverables & Suitable Customers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Deliverables */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-[#d4af37]/25">
              <div className="flex items-center gap-2.5 mb-4 text-[#e5be53]">
                <PackageCheck className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Deliverables</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suitable Customers */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-center gap-2.5 mb-4 text-neutral-300">
                <Users className="w-5 h-5 text-[#e5be53]" />
                <h3 className="text-lg font-bold text-white">Suitable For</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                {service.suitableCustomers.map((cust, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                    <span>{cust}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Simple Process Steps */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
            <div className="flex items-center gap-3 mb-6">
              <Workflow className="w-5 h-5 text-[#e5be53]" />
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                How We Deliver This Service
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.simpleProcess.map((step) => (
                <div key={step.step} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="text-xs font-mono font-bold text-[#e5be53] mb-1">
                    Step {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Service-specific FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-5 h-5 text-[#e5be53]" />
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Questions on {service.name}
                </h2>
              </div>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80">
                    <h4 className="text-sm font-bold text-white mb-1.5">{faq.question}</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sticky Column (4 cols): Direct Service-Specific Contact Box */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-[#d4af37]/40 p-6 sm:p-7 shadow-[0_10px_35px_rgba(212,175,55,0.1)]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#f3de8a] mb-2 font-semibold">
                Direct Inquiry
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Work With Us on {service.name}
              </h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Connect directly with our team. We will review your sample records and discuss pricing and delivery in your preferred currency.
              </p>

              <WorkWithUsChoice serviceName={service.name} />
            </div>

            {/* Related Services Recommendation */}
            <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-4">
                Complementary Services
              </h4>
              <div className="space-y-3">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.id}`}
                    className="block p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-[#d4af37]/40 transition-colors group"
                  >
                    <div className="text-xs font-bold text-white group-hover:text-[#f3de8a] transition-colors">
                      {rel.name}
                    </div>
                    <div className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                      {rel.shortDesc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
