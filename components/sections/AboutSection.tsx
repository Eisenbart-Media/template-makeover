import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TemplateButton } from "../ui/TemplateButton";

interface Stat {
  value: string;
  label: string;
}

interface AboutSectionProps {
  businessName: string;
  headline?: string;
  story?: string;
  mission?: string;
  image?: string;
  stats?: Stat[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

const defaultStats: Stat[] = [
  { value: "15+", label: "Years Experience" },
  { value: "5,000+", label: "Projects Completed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export const AboutSection = ({
  businessName,
  headline,
  story,
  mission,
  image,
  stats,
  ctaText = "Learn More About Us",
  ctaHref = "#contact",
  className,
}: AboutSectionProps) => {
  const displayStats = stats && stats.length > 0 ? stats : defaultStats;
  const displayHeadline = headline || `About ${businessName}`;
  const displayStory =
    story ||
    `Founded with a commitment to excellence, ${businessName} has been serving our community with pride for over 15 years. What started as a small family operation has grown into a trusted name in the industry, but our core values remain unchanged.`;
  const displayMission =
    mission ||
    "We believe in honest pricing, quality workmanship, and treating every customer like family. Our team of certified professionals brings expertise, reliability, and a genuine care for your satisfaction to every job.";

  return (
    <SectionWrapper background="light" className={className} id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            {image ? (
              <img
                src={image}
                alt={`${businessName} team`}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            ) : (
              <div className="w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-[var(--template-primary)] to-[var(--template-secondary)] flex items-center justify-center">
                <div className="text-center text-white/90">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="text-lg font-medium">Our Team</p>
                </div>
              </div>
            )}
          </div>

          {/* Decorative Elements - Hidden on mobile to prevent overflow */}
          <div
            className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--template-secondary)]/20 rounded-lg -z-10"
            aria-hidden="true"
          />
          <div
            className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-2 border-[var(--template-primary)]/20 rounded-lg -z-10"
            aria-hidden="true"
          />
        </div>

        {/* Content Side */}
        <div>
          {/* Section Label */}
          <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Our Story
          </p>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            {displayHeadline}
          </h2>

          {/* Story */}
          <p className="text-slate-600 leading-relaxed mb-4">{displayStory}</p>

          {/* Mission */}
          <p className="text-slate-600 leading-relaxed mb-8">{displayMission}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {displayStats.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "text-center p-4 rounded-lg",
                  "bg-white border border-slate-100 shadow-sm"
                )}
              >
                <span className="block text-2xl font-bold text-[var(--template-primary)]">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <TemplateButton variant="primary" size="md" href={ctaHref}>
            {ctaText}
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </TemplateButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

