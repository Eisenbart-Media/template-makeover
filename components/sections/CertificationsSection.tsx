import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";

export interface Certification {
  id: string;
  name: string;
  logo?: string;
  href?: string;
}

interface CertificationsSectionProps {
  businessName: string;
  headline?: string;
  subheadline?: string;
  certifications?: Certification[];
  className?: string;
}

const defaultCertifications: Certification[] = [
  { id: "1", name: "Licensed & Bonded" },
  { id: "2", name: "Fully Insured" },
  { id: "3", name: "BBB Accredited" },
  { id: "4", name: "EPA Certified" },
  { id: "5", name: "OSHA Compliant" },
  { id: "6", name: "Manufacturer Certified" },
];

const CertificationBadge = ({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) => {
  const iconVariants = [
    <svg key="shield" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    <svg key="badge" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>,
    <svg key="star" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>,
    <svg key="award" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>,
    <svg key="check" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="cert" className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>,
  ];

  const content = (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg h-full",
        "bg-white border border-slate-100 shadow-sm",
        "group-hover:border-[var(--template-primary)]/30 group-hover:shadow-md",
        "transition-all duration-300 active:scale-[0.98]"
      )}
    >
      {certification.logo ? (
        <img
          src={certification.logo}
          alt={certification.name}
          className={cn(
            "h-10 sm:h-12 w-auto object-contain",
            "grayscale group-hover:grayscale-0 transition-all duration-300"
          )}
        />
      ) : (
        <div
          className={cn(
            "text-slate-400 group-hover:text-[var(--template-primary)]",
            "transition-colors duration-300"
          )}
        >
          {iconVariants[index % iconVariants.length]}
        </div>
      )}
      <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-slate-600 text-center leading-tight">
        {certification.name}
      </span>
    </div>
  );

  if (certification.href) {
    return (
      <a
        href={certification.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        tabIndex={0}
        aria-label={`View ${certification.name} certification`}
      >
        {content}
      </a>
    );
  }

  return <div className="group">{content}</div>;
};

export const CertificationsSection = ({
  businessName,
  headline,
  subheadline,
  certifications,
  className,
}: CertificationsSectionProps) => {
  const displayCertifications =
    certifications && certifications.length > 0 ? certifications : defaultCertifications;
  const displayHeadline = headline || "Certifications & Credentials";
  const displaySubheadline =
    subheadline ||
    `${businessName} maintains the highest standards of professionalism and compliance.`;

  return (
    <SectionWrapper background="light" className={className} id="certifications">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Trusted & Verified
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {displayHeadline}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{displaySubheadline}</p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {displayCertifications.map((cert, index) => (
          <CertificationBadge key={cert.id} certification={cert} index={index} />
        ))}
      </div>

      {/* Trust Note */}
      <div className="mt-10 text-center">
        <p className="text-slate-500 text-sm">
          All certifications and licenses are current and verifiable upon request.
        </p>
      </div>
    </SectionWrapper>
  );
};




