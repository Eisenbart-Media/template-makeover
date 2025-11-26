"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TemplateButton } from "../ui/TemplateButton";
import { useState, type FormEvent } from "react";

interface BusinessHours {
  day: string;
  hours: string;
}

interface ContactSectionProps {
  businessName: string;
  phone?: string;
  email?: string;
  address?: string;
  businessHours?: BusinessHours[];
  className?: string;
  onSubmit?: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const defaultHours: BusinessHours[] = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const ContactSection = ({
  businessName,
  phone = "(555) 123-4567",
  email = "info@example.com",
  address = "123 Main Street, Anytown, ST 12345",
  businessHours,
  className,
  onSubmit,
}: ContactSectionProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const displayHours = businessHours && businessHours.length > 0 ? businessHours : defaultHours;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (onSubmit) {
      await onSubmit(formData);
    }

    // Simulate submission delay for demo
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <SectionWrapper background="white" className={className} id="contact">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Contact Us
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Ready to get started? Reach out to us today for a free consultation and
          quote. We&apos;re here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-sm border border-slate-200 bg-white",
                    "text-slate-900 placeholder:text-slate-400",
                    "focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent",
                    "transition-all duration-200"
                  )}
                  placeholder="John Doe"
                  aria-required="true"
                  tabIndex={0}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-sm border border-slate-200 bg-white",
                    "text-slate-900 placeholder:text-slate-400",
                    "focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent",
                    "transition-all duration-200"
                  )}
                  placeholder="john@example.com"
                  aria-required="true"
                  tabIndex={0}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-3 rounded-sm border border-slate-200 bg-white",
                  "text-slate-900 placeholder:text-slate-400",
                  "focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent",
                  "transition-all duration-200"
                )}
                placeholder="(555) 123-4567"
                tabIndex={0}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={cn(
                  "w-full px-4 py-3 rounded-sm border border-slate-200 bg-white resize-none",
                  "text-slate-900 placeholder:text-slate-400",
                  "focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent",
                  "transition-all duration-200"
                )}
                placeholder="Tell us about your project or how we can help..."
                aria-required="true"
                tabIndex={0}
              />
            </div>

            {/* Submit Button */}
            <div>
              {submitted ? (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-sm border border-emerald-100">
                  <svg
                    className="w-5 h-5 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-emerald-800 font-medium">
                    Thank you! We&apos;ll be in touch soon.
                  </span>
                </div>
              ) : (
                <TemplateButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </TemplateButton>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-2">
          <div className="bg-slate-50 rounded-lg p-8 h-full">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--template-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--template-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Phone</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-slate-900 font-medium hover:text-[var(--template-primary)] transition-colors"
                    tabIndex={0}
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--template-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--template-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-slate-900 font-medium hover:text-[var(--template-primary)] transition-colors break-all"
                    tabIndex={0}
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--template-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--template-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Address</p>
                  <p className="text-slate-900 font-medium">{address}</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-semibold text-slate-900 mb-4">
                Business Hours
              </h4>
              <ul className="space-y-2">
                {displayHours.map((item) => (
                  <li
                    key={item.day}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-slate-600">{item.day}</span>
                    <span className="font-medium text-slate-900">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency CTA */}
            <div className="mt-8 p-4 bg-[var(--template-primary)]/5 rounded-lg border border-[var(--template-primary)]/10">
              <p className="text-sm font-medium text-[var(--template-primary)] mb-1">
                Need urgent assistance?
              </p>
              <p className="text-xs text-slate-600">
                Call us directly for same-day service availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

