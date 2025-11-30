"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";
import { useState, useRef, useEffect } from "react";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  businessName: string;
  headline?: string;
  subheadline?: string;
  faqs?: FaqItem[];
  className?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    id: "1",
    question: "What areas do you service?",
    answer: "We proudly serve the greater metropolitan area and surrounding communities within a 50-mile radius. If you're unsure whether we cover your location, please give us a call and we'll be happy to help.",
  },
  {
    id: "2",
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all our services. Our technician will assess your needs, explain the options, and provide a detailed quote before any work begins.",
  },
  {
    id: "3",
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed, bonded, and insured. We maintain all required certifications and carry comprehensive liability insurance for your protection and peace of mind.",
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, checks, and cash. For larger projects, we also offer financing options with approved credit. Payment is due upon completion of work.",
  },
  {
    id: "5",
    question: "Do you offer emergency services?",
    answer: "Yes, we offer 24/7 emergency services for urgent situations. Our emergency response team is always ready to help, day or night. Additional fees may apply for after-hours calls.",
  },
  {
    id: "6",
    question: "What is your warranty policy?",
    answer: "We stand behind our work with a comprehensive warranty. Parts are covered by manufacturer warranties, and our labor is guaranteed for a minimum of one year. Specific warranty terms vary by service.",
  },
];

const AccordionItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        "border-b border-slate-200 last:border-b-0",
        "transition-colors duration-200",
        isOpen && "bg-slate-50/50"
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between gap-3 sm:gap-4 py-4 sm:py-6 px-4 sm:px-6 text-left",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--template-primary)] focus-visible:ring-offset-2 rounded-sm",
          "min-h-[56px] active:bg-slate-50/80"
        )}
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <span
          className={cn(
            "text-sm sm:text-base font-medium transition-colors duration-200 pr-2",
            isOpen ? "text-[var(--template-primary)]" : "text-slate-900"
          )}
        >
          {faq.question}
        </span>

        {/* Toggle Icon */}
        <span
          className={cn(
            "flex-shrink-0 w-7 h-7 sm:w-6 sm:h-6 rounded-full flex items-center justify-center",
            "transition-all duration-300 ease-out",
            isOpen
              ? "bg-[var(--template-primary)] text-white rotate-180"
              : "bg-slate-100 text-slate-500"
          )}
        >
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {/* Answer Content */}
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ height }}
      >
        <div ref={contentRef} className="pb-5 sm:pb-6 px-4 sm:px-6">
          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FaqSection = ({
  businessName,
  headline,
  subheadline,
  faqs,
  className,
}: FaqSectionProps) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;
  const displayHeadline = headline || "Frequently Asked Questions";
  const displaySubheadline =
    subheadline ||
    `Got questions? We've got answers. Here are some of the most common questions we receive about ${businessName}.`;

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper background="white" className={className} id="faq">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {displayHeadline}
          </h2>
          <p className="text-slate-600">{displaySubheadline}</p>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-200 overflow-hidden">
          {displayFaqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-600 mb-2">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--template-primary)] font-medium hover:underline"
            tabIndex={0}
          >
            Contact us directly
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

