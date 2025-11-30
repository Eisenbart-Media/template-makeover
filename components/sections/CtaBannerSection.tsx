import { cn } from "@/lib/utils";
import { TemplateButton } from "../ui/TemplateButton";

type BannerVariant = "emergency" | "promo" | "default";

interface CtaBannerSectionProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  phone?: string;
  variant?: BannerVariant;
  className?: string;
}

export const CtaBannerSection = ({
  headline,
  subheadline,
  ctaText = "Contact Us",
  ctaHref = "#contact",
  secondaryCtaText,
  secondaryCtaHref,
  phone,
  variant = "default",
  className,
}: CtaBannerSectionProps) => {
  const isEmergency = variant === "emergency";
  const isPromo = variant === "promo";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        isEmergency
          ? "bg-gradient-to-r from-rose-600 to-rose-700"
          : isPromo
          ? "bg-gradient-to-r from-[var(--template-secondary)] to-[var(--template-primary)]"
          : "bg-gradient-to-r from-[var(--template-primary)] to-[var(--template-secondary)]",
        className
      )}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Emergency Badge */}
            {isEmergency && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                24/7 Emergency Service
              </div>
            )}

            {/* Promo Badge */}
            {isPromo && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                Limited Time Offer
              </div>
            )}

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
              {headline}
            </h2>

            {/* Subheadline */}
            {subheadline && (
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl">{subheadline}</p>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Phone (for emergency) */}
            {isEmergency && phone && (
              <a
                href={`tel:${phone}`}
                className={cn(
                  "inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg",
                  "bg-white text-rose-600 font-bold text-base sm:text-lg",
                  "hover:bg-rose-50 active:bg-rose-100 transition-colors duration-200",
                  "shadow-lg w-full sm:w-auto min-h-[52px]"
                )}
                tabIndex={0}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {phone}
              </a>
            )}

            {/* Primary CTA */}
            {!isEmergency && (
              <TemplateButton
                variant="secondary"
                size="lg"
                href={ctaHref}
                className="bg-white text-[var(--template-primary)] hover:bg-white/90"
              >
                {ctaText}
                <svg
                  className="w-5 h-5"
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
            )}

            {/* Secondary CTA */}
            {secondaryCtaText && (
              <TemplateButton
                variant="outline"
                size="lg"
                href={secondaryCtaHref}
                className="border-white/40 text-white hover:bg-white/10"
              >
                {secondaryCtaText}
              </TemplateButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};




