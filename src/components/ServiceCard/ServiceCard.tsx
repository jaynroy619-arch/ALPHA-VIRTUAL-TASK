import React from 'react';
import { Link } from 'react-router-dom';
import {
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
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { ServiceItem } from '../../data/services';
import { WorkWithUsButton } from '../ContactButtons/ContactButtons';

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

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const IconComponent = ICON_MAP[service.iconName] || HelpCircle;

  return (
    <div
      className={`group relative rounded-2xl flex flex-col justify-between transition-all duration-300 card-3d-hover p-6 sm:p-7 ${
        featured
          ? 'bg-gradient-to-b from-neutral-900/95 via-neutral-950/95 to-black border border-[#d4af37]/45 shadow-[0_10px_30px_rgba(212,175,55,0.08)]'
          : 'bg-neutral-950/80 hover:bg-neutral-900/80 border border-neutral-800/80 hover:border-[#d4af37]/40 shadow-lg'
      }`}
    >
      <div>
        {/* Category kicker */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
            {service.category}
          </span>
          {featured && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#d4af37]/15 text-[#f3de8a] border border-[#d4af37]/30">
              Popular
            </span>
          )}
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-[#d4af37]/30 group-hover:border-[#d4af37] flex items-center justify-center text-[#e5be53] shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.12)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all">
            <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#f3de8a] transition-colors leading-snug">
              <Link to={`/services/${service.id}`} className="hover:underline focus:outline-none">
                {service.name}
              </Link>
            </h3>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-neutral-400 leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Preview Highlights */}
        <ul className="space-y-1.5 mb-6 text-xs text-neutral-400">
          {service.whatWeHelpWith.slice(0, 2).map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
              <span className="line-clamp-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer: "Learn More" & "Work With Us" */}
      <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
        <Link
          to={`/services/${service.id}`}
          className="text-xs font-semibold text-neutral-300 hover:text-[#f3de8a] inline-flex items-center gap-1 group/link transition-colors py-1"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <WorkWithUsButton
          serviceName={service.name}
          size="sm"
          variant={featured ? 'gold' : 'subtle'}
          label="Work With Us"
        />
      </div>
    </div>
  );
};
