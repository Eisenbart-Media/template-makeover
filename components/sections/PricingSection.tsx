import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TemplateButton } from "../ui/TemplateButton";

export interface PricingPlan {
  id: string;
  name: string;
  description?: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

interface PricingSectionProps {
  businessName: string;
  headline?: string;
  subheadline?: string;
  plans?: PricingPlan[];
  note?: string;
  className?: string;
}

const defaultPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Basic",
    description: "Essential coverage for routine needs",
    price: "$99",
    period: "per visit",
    features: [
      "Standard service call",
      "Basic diagnostics",
      "Parts at retail price",
      "30-day labor warranty",
      "Mon-Fri scheduling",
    ],
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
  {
    id: "2",
    name: "Premium",
    description: "Most popular for homeowners",
    price: "$49",
    period: "per month",
    features: [
      "Priority scheduling",
      "Annual maintenance included",
      "15% discount on parts",
      "1-year labor warranty",
      "24/7 emergency support",
      "No overtime charges",
    ],
    popular: true,
    ctaText: "Choose Premium",
    ctaHref: "#contact",
  },
  {
    id: "3",
    name: "Commercial",
    description: "Tailored solutions for businesses",
    price: "Custom",
    period: "pricing",
    features: [
      "Dedicated account manager",
      "Same-day service guarantee",
      "20% discount on all services",
      "Extended warranties available",
      "Quarterly system reviews",
      "Priority emergency response",
      "Flexible billing options",
    ],
    ctaText: "Contact Sales",
    ctaHref: "#contact",
  },
];

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <article
      className={cn(
        "relative rounded-xl overflow-hidden",
        "flex flex-col h-full",
        plan.popular
          ? "bg-gradient-to-b from-[var(--template-primary)] to-[var(--template-primary)]/90 text-white shadow-xl lg:scale-105 z-10 ring-4 ring-[var(--template-primary)]/20"
          : "bg-white border border-slate-200 text-slate-900 shadow-sm"
      )}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-0 right-0 left-0">
          <div className="bg-[var(--template-secondary)] text-[var(--template-secondary-foreground)] text-center py-1.5 text-xs font-semibold uppercase tracking-wider">
            Most Popular
          </div>
        </div>
      )}

      <div className={cn("p-5 sm:p-6 lg:p-8 flex flex-col flex-1", plan.popular && "pt-8 sm:pt-10")}>
        {/* Plan Name */}
        <h3
          className={cn(
            "text-lg sm:text-xl font-bold mb-1",
            plan.popular ? "text-white" : "text-slate-900"
          )}
        >
          {plan.name}
        </h3>

        {/* Description */}
        {plan.description && (
          <p
            className={cn(
              "text-sm mb-3 sm:mb-4",
              plan.popular ? "text-white/80" : "text-slate-600"
            )}
          >
            {plan.description}
          </p>
        )}

        {/* Price */}
        <div className="mb-5 sm:mb-6">
          <span
            className={cn(
              "text-3xl sm:text-4xl font-bold",
              plan.popular ? "text-white" : "text-slate-900"
            )}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span
              className={cn(
                "text-sm ml-1",
                plan.popular ? "text-white/70" : "text-slate-500"
              )}
            >
              /{plan.period}
            </span>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-1">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5 sm:gap-3">
              <svg
                className={cn(
                  "w-5 h-5 flex-shrink-0 mt-0.5",
                  plan.popular ? "text-[var(--template-secondary)]" : "text-[var(--template-primary)]"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span
                className={cn(
                  "text-sm",
                  plan.popular ? "text-white/90" : "text-slate-600"
                )}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <TemplateButton
          variant={plan.popular ? "secondary" : "primary"}
          size="lg"
          href={plan.ctaHref}
          className={cn(
            "w-full justify-center",
            plan.popular &&
              "bg-white text-[var(--template-primary)] hover:bg-white/90"
          )}
        >
          {plan.ctaText || "Get Started"}
        </TemplateButton>
      </div>
    </article>
  );
};

export const PricingSection = ({
  businessName,
  headline,
  subheadline,
  plans,
  note,
  className,
}: PricingSectionProps) => {
  const displayPlans = plans && plans.length > 0 ? plans : defaultPlans;
  const displayHeadline = headline || "Simple, Transparent Pricing";
  const displaySubheadline =
    subheadline ||
    `Choose the plan that works best for you. All plans include our commitment to quality service.`;
  const displayNote =
    note ||
    "Prices shown are starting prices. Final pricing may vary based on your specific needs.";

  return (
    <SectionWrapper background="light" className={className} id="pricing">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Pricing Plans
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {displayHeadline}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{displaySubheadline}</p>
      </div>

      {/* Pricing Cards */}
      <div
        className={cn(
          "grid gap-4 sm:gap-6 lg:gap-2 items-stretch",
          displayPlans.length === 2
            ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
            : displayPlans.length === 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {displayPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Note */}
      <div className="mt-10 text-center">
        <p className="text-slate-500 text-sm">{displayNote}</p>
        <p className="text-slate-600 mt-2">
          Have questions?{" "}
          <a
            href="#contact"
            className="text-[var(--template-primary)] font-medium hover:underline"
            tabIndex={0}
          >
            Contact us
          </a>{" "}
          for a custom quote.
        </p>
      </div>
    </SectionWrapper>
  );
};



