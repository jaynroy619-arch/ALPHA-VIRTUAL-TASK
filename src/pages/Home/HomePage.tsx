import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Workflow,
  Sparkles,
  MessageCircle,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Clock,
  Layers,
  Award,
} from 'lucide-react';
import { HeroVisual25D } from '../../components/Hero/HeroVisual25D';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
import { SERVICES_DATA } from '../../data/services';
import { MAIN_FAQS } from '../../data/faq';
import { HowItWorksTimeline } from '../../components/Timeline/HowItWorksTimeline';
import { FAQAccordion } from '../../components/FAQ/FAQAccordion';
import { WorkWithUsButton, WhatsAppButton, EmailButton, CallButton } from '../../components/ContactButtons/ContactButtons';
import { BUSINESS_INFO } from '../../utils/contactLinks';

export const HomePage: React.FC = () => {
  // Select top featured services for home spotlight
  const featuredServices = SERVICES_DATA.slice(0, 6);

  const valueFeatures = [
    {
      title: 'Professional Service',
      description: 'Dedicated virtual execution conducted with enterprise rigor, strict confidentiality, and integrity.',
      icon: Shield,
    },
    {
      title: 'Organized Workflow',
      description: 'Structured file management, clear milestones, and systematic data pipelines.',
      icon: Workflow,
    },
    {
      title: 'Attention to Detail',
      description: 'Dual-pass human inspection ensures typographic precision and calculation accuracy.',
      icon: Sparkles,
    },
    {
      title: 'Clear Communication',
      description: 'Direct access via WhatsApp and email with zero ticketing bottlenecks or robotic replies.',
      icon: MessageCircle,
    },
    {
      title: 'Flexible Solutions',
      description: 'Customized to your exact file formats, tools, deadlines, and volume requirements.',
      icon: Sliders,
    },
    {
      title: 'Quality-Focused Work',
      description: 'Zero tolerance for sloppy formatting; our motto is "Your Trust Our Priority".',
      icon: CheckCircle2,
    },
  ];

  const whyChoosePoints = [
    {
      num: '01',
      title: 'Professional Approach',
      text: 'Every project receives dedicated operational focus. We handle your business data with utmost security and ethical responsibility.',
    },
    {
      num: '02',
      title: 'Attention to Detail',
      text: 'From cell number types in spreadsheets to punctuation in transcripts, we catch the discrepancies other providers overlook.',
    },
    {
      num: '03',
      title: 'Organized Work',
      text: 'Clean folder hierarchies, standard naming conventions, and well-commented files make outputs immediately ready to use.',
    },
    {
      num: '04',
      title: 'Clear Communication',
      text: 'No complex portals or wait times. Chat directly with the coordinator responsible for your task.',
    },
    {
      num: '05',
      title: 'Flexible Service',
      text: 'Whether you require a one-off quick fix or continuous weekly catalog maintenance, we adapt seamlessly.',
    },
    {
      num: '06',
      title: 'Quality-Focused Delivery',
      text: 'We do not consider a task finished until you review the deliverable and verify that every expectation has been met.',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-[#d4af37]/10 via-[#d4af37]/5 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-[#f3de8a] uppercase">
                  Professional Virtual & Data Services
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] text-balance">
                Reliable Data & Virtual Services for{' '}
                <span className="gold-gradient-text">Your Business</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl text-balance">
                Accurate, organized and professional data solutions designed to help businesses and individuals save time and work efficiently.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <WorkWithUsButton size="lg" label="Work With Us" />

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-base border border-neutral-700 hover:border-neutral-500 transition-all duration-200"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Small Direct Contact Actions */}
              <div className="pt-4 border-t border-neutral-800/80">
                <div className="text-xs text-neutral-400 mb-3 uppercase tracking-wider font-mono">
                  Direct Inquiries:
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <WhatsAppButton size="sm" label="WhatsApp" />
                  <EmailButton size="sm" label="Email" />
                  <CallButton size="sm" label="Call" />
                  <span className="text-xs text-neutral-500 font-mono hidden sm:inline ml-2">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 2.5D Visual Composition */}
            <div className="lg:col-span-5">
              <HeroVisual25D />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE-BASED TRUST SECTION (Zero Fake Stats) */}
      <section className="py-16 bg-neutral-950/70 border-y border-neutral-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
              The Alpha Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
              Why Businesses Rely on Us
            </h2>
            <p className="text-neutral-400 text-sm mt-2">
              Delivering disciplined execution grounded in precision, responsiveness, and absolute confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#d4af37]/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-[#d4af37]/30 flex items-center justify-center text-[#e5be53] mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#f3de8a] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SPOTLIGHT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
              Tailored Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
              Our Services
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Professional solutions for everyday data and virtual work requirements.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#f3de8a] hover:text-white transition-colors group shrink-0"
          >
            <span>View All 14 Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} featured={index === 0 || index === 2} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 hover:border-[#d4af37]/60 font-semibold text-sm transition-all"
          >
            <span>Explore All 14 Virtual & Data Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. HOW IT WORKS TIMELINE */}
      <section className="py-20 bg-neutral-950/80 border-t border-neutral-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
              Simple 5-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
              How It Works
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              No complicated registrations or lengthy setup. Go from inquiry to completed deliverables in five straightforward steps.
            </p>
          </div>

          <HowItWorksTimeline showCTA={false} />
        </div>
      </section>

      {/* 5. WHY ALPHA VIRTUAL TASK (6 Points) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
              Built for Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
              Why Alpha Virtual Task?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              We founded Alpha Virtual Task on a single guiding principle: your trust is our highest priority. We focus on transparent pricing, clear human communication, and high-precision outcomes.
            </p>

            <div className="p-5 rounded-xl bg-neutral-900/90 border border-[#d4af37]/30 space-y-3">
              <div className="text-xs font-mono text-[#f3de8a] uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Operating Windows</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Direct phone and WhatsApp support active {BUSINESS_INFO.operatingHours}. Prompt email replies around the clock.
              </p>
              <div className="pt-2">
                <WorkWithUsButton size="sm" variant="gold" label="Discuss a Task" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoosePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-[#d4af37]/40 transition-colors shadow-sm"
              >
                <div className="text-xs font-mono font-bold text-[#e5be53] mb-1">
                  {item.num}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ PREVIEW SECTION */}
      <section className="py-20 bg-neutral-950/60 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm mt-2">
              Everything you need to know about working with us.
            </p>
          </div>

          <FAQAccordion items={MAIN_FAQS.slice(0, 5)} showSupportCallout={true} />

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f3de8a] hover:underline"
            >
              <span>View all questions and answers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CONVERSION CTA BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-[#d4af37]/40 p-8 sm:p-12 lg:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(212,175,55,0.15)] overflow-hidden">
          {/* Subtle gold flare */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f3de8a]">
              Start Without Friction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white text-balance">
              Let's Discuss Your Project Today
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed text-balance">
              Tell us what you need. Reach out directly on WhatsApp, Email, or Phone to receive an honest estimate and timeline.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <WorkWithUsButton size="lg" label="Work With Us" />
              <WhatsAppButton size="lg" label="Chat on WhatsApp" />
            </div>

            <div className="pt-4 text-xs font-mono text-neutral-400">
              Primary Currency: {BUSINESS_INFO.primaryCurrency} · Secondary: {BUSINESS_INFO.secondaryCurrency}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
