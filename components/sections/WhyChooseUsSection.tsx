import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  businessName: string;
  headline?: string;
  subheadline?: string;
  features?: Feature[];
  className?: string;
}

const defaultFeatures: Feature[] = [
  {
    id: "1",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind. We meet all industry standards.",
  },
  {
    id: "2",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fast Response Times",
    description: "We respect your time. Expect prompt arrivals, efficient work, and minimal disruption to your day.",
  },
  {
    id: "3",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. We provide detailed quotes upfront so you know exactly what to expect.",
  },
  {
    id: "4",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Satisfaction Guaranteed",
    description: "Your happiness is our priority. We stand behind our work with a 100% satisfaction guarantee.",
  },
  {
    id: "5",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Expert Technicians",
    description: "Our team undergoes continuous training to stay current with the latest techniques and technologies.",
  },
  {
    id: "6",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "24/7 Availability",
    description: "Emergencies don't wait, and neither do we. Available around the clock when you need us most.",
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="text-center group">
      {/* Icon Container */}
      <div
        className={cn(
          "w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-full flex items-center justify-center",
          "bg-[var(--template-primary)]/10 text-[var(--template-primary)]",
          "group-hover:bg-[var(--template-primary)] group-hover:text-white",
          "transition-all duration-300 ease-out",
          "[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7"
        )}
      >
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
};

export const WhyChooseUsSection = ({
  businessName,
  headline,
  subheadline,
  features,
  className,
}: WhyChooseUsSectionProps) => {
  const displayFeatures = features && features.length > 0 ? features : defaultFeatures;
  const displayHeadline = headline || "Why Choose Us";
  const displaySubheadline =
    subheadline ||
    `Discover what sets ${businessName} apart and why our customers trust us with their most important projects.`;

  return (
    <SectionWrapper background="white" className={cn("relative", className)} id="why-us">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--template-primary) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            The {businessName} Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {displayHeadline}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{displaySubheadline}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12">
          {displayFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};




