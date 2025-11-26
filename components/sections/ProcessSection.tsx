import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";

interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProcessSectionProps {
  businessName: string;
  headline?: string;
  subheadline?: string;
  steps?: ProcessStep[];
  className?: string;
}

const defaultSteps: ProcessStep[] = [
  {
    id: "1",
    number: 1,
    title: "Contact Us",
    description: "Reach out by phone or through our online form. We'll respond promptly to discuss your needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    id: "2",
    number: 2,
    title: "Free Estimate",
    description: "We'll assess your situation and provide a detailed, no-obligation quote with transparent pricing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: "3",
    number: 3,
    title: "Schedule Service",
    description: "Choose a time that works best for you. We offer flexible scheduling to fit your busy life.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "4",
    number: 4,
    title: "Job Complete",
    description: "Our experts complete the work to the highest standards. We clean up and ensure your satisfaction.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const StepCard = ({
  step,
  isLast,
}: {
  step: ProcessStep;
  isLast: boolean;
}) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connector Line (hidden on last item and mobile) */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-slate-200"
          aria-hidden="true"
        />
      )}

      {/* Step Number Circle */}
      <div
        className={cn(
          "relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6",
          "bg-gradient-to-br from-[var(--template-primary)] to-[var(--template-secondary)]",
          "text-white shadow-lg",
          "group-hover:scale-110 transition-transform duration-300"
        )}
      >
        {step.icon || (
          <span className="text-2xl font-bold">{step.number}</span>
        )}

        {/* Step Number Badge - positioned on the circle */}
        <div
          className={cn(
            "absolute -top-1 -right-1 z-20",
            "w-7 h-7 rounded-full bg-white border-2 border-[var(--template-primary)]",
            "flex items-center justify-center text-sm font-bold text-[var(--template-primary)]",
            "shadow-md"
          )}
        >
          {step.number}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
        {step.description}
      </p>
    </div>
  );
};

const MobileStepCard = ({
  step,
  isLast,
}: {
  step: ProcessStep;
  isLast: boolean;
}) => {
  return (
    <div className="relative flex gap-4">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Circle */}
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
            "bg-gradient-to-br from-[var(--template-primary)] to-[var(--template-secondary)]",
            "text-white shadow-md"
          )}
        >
          {step.icon || (
            <span className="text-lg font-bold">{step.number}</span>
          )}
        </div>

        {/* Connector Line */}
        {!isLast && (
          <div
            className="w-0.5 flex-1 min-h-[40px] bg-gradient-to-b from-[var(--template-primary)]/40 to-[var(--template-primary)]/10"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div className={cn("flex-1 pb-8", isLast && "pb-0")}>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

export const ProcessSection = ({
  businessName,
  headline,
  subheadline,
  steps,
  className,
}: ProcessSectionProps) => {
  const displaySteps = steps && steps.length > 0 ? steps : defaultSteps;
  const displayHeadline = headline || "How It Works";
  const displaySubheadline =
    subheadline ||
    `Working with ${businessName} is simple and straightforward. Here's what you can expect.`;

  return (
    <SectionWrapper background="light" className={className} id="process">
      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Our Process
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {displayHeadline}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{displaySubheadline}</p>
      </div>

      {/* Desktop Timeline (horizontal) */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-8">
        {displaySteps.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            isLast={index === displaySteps.length - 1}
          />
        ))}
      </div>

      {/* Mobile Timeline (vertical) */}
      <div className="lg:hidden max-w-md mx-auto">
        {displaySteps.map((step, index) => (
          <MobileStepCard
            key={step.id}
            step={step}
            isLast={index === displaySteps.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

