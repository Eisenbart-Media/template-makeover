import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TemplateButton } from "../ui/TemplateButton";
import { MoveRight } from "lucide-react";

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  price?: string;
  href?: string;
}

interface ServicesSectionProps {
  businessName: string;
  headline?: string;
  subheadline?: string;
  services?: Service[];
  className?: string;
}

const defaultServices: Service[] = [
  {
    id: "1",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Residential Services",
    description: "Complete home solutions from routine maintenance to emergency repairs. We handle it all with care and expertise.",
    price: "From $99",
  },
  {
    id: "2",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial Services",
    description: "Keep your business running smoothly with our professional commercial services. Minimal downtime guaranteed.",
    price: "Custom Quote",
  },
  {
    id: "3",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Emergency Services",
    description: "Available 24/7 for urgent situations. Fast response times and reliable solutions when you need them most.",
    price: "Call Now",
  },
  {
    id: "4",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Maintenance Plans",
    description: "Preventive care to keep everything running perfectly. Save money and avoid unexpected breakdowns.",
    price: "From $29/mo",
  },
  {
    id: "5",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Installation",
    description: "Professional installation of new systems and equipment. Done right the first time, every time.",
  },
  {
    id: "6",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Inspections",
    description: "Thorough inspections to identify potential issues before they become costly problems.",
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <article
      className={cn(
        "group relative bg-white rounded-xl border border-slate-100 p-5 sm:p-6",
        "shadow-sm hover:shadow-lg hover:border-[var(--template-primary)]/20",
        "transition-all duration-300 ease-out"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5",
          "bg-[var(--template-primary)]/10 text-[var(--template-primary)]",
          "group-hover:bg-[var(--template-primary)] group-hover:text-white",
          "transition-colors duration-300",
          "[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8"
        )}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Price / CTA */}
      <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-slate-100">
        {service.price && (
          <span className="text-[var(--template-primary)] font-semibold text-sm">
            {service.price}
          </span>
        )}
        {service.href ? (
          <a
            href={service.href}
            className="group text-sm font-medium text-slate-600 hover:text-[var(--template-primary)] transition-colors inline-flex items-center gap-1 min-h-[44px] py-2"
            tabIndex={0}
          >
            Learn More
            <MoveRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        ) : (
          <MoveRight className="w-4 h-4 text-slate-400 transition-transform duration-200 hover:translate-x-1" />
        )}
      </div>
    </article>
  );
};

export const ServicesSection = ({
  businessName,
  headline,
  subheadline,
  services,
  className,
}: ServicesSectionProps) => {
  const displayServices = services && services.length > 0 ? services : defaultServices;
  const displayHeadline = headline || "Our Services";
  const displaySubheadline =
    subheadline ||
    `${businessName} offers a comprehensive range of professional services to meet all your needs.`;

  return (
    <SectionWrapper background="white" className={className} id="services">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          What We Offer
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {displayHeadline}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{displaySubheadline}</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {displayServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-slate-600 mb-4">
          Not sure what you need? We&apos;re happy to help.
        </p>
        <TemplateButton variant="outline" size="md" href="#contact">
          Get a Free Consultation
        </TemplateButton>
      </div>
    </SectionWrapper>
  );
};

