import { cn } from "@/lib/utils";
import { TemplateButton } from "../ui/TemplateButton";

interface MapSectionProps {
  businessName: string;
  address?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
  googleMapsUrl?: string;
  className?: string;
}

export const MapSection = ({
  businessName,
  address = "123 Main Street, Anytown, ST 12345",
  phone = "(555) 123-4567",
  latitude = 40.7128,
  longitude = -74.006,
  googleMapsUrl,
  className,
}: MapSectionProps) => {
  // Create Google Maps embed URL
  const embedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  // Create Google Maps directions URL
  const directionsUrl =
    googleMapsUrl ||
    `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <section
      className={cn("relative bg-slate-900 overflow-hidden", className)}
      id="location"
    >
      {/* Mobile Layout: Stacked */}
      <div className="lg:hidden">
        {/* Map - smaller on mobile */}
        <div className="relative h-[250px] sm:h-[300px]">
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${businessName} location on Google Maps`}
          />
        </div>

        {/* Info Card - Below map on mobile */}
        <div className="bg-white p-5 sm:p-6">
          <p className="text-[var(--template-primary)] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Visit Us
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">
            {businessName}
          </h2>

          {/* Address */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
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
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                Address
              </p>
              <p className="text-slate-900 font-medium leading-snug text-sm sm:text-base">
                {address}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
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
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                Phone
              </p>
              <a
                href={`tel:${phone}`}
                className="text-slate-900 font-medium hover:text-[var(--template-primary)] transition-colors text-sm sm:text-base"
                tabIndex={0}
              >
                {phone}
              </a>
            </div>
          </div>

          {/* Directions Button */}
          <TemplateButton
            variant="primary"
            size="md"
            href={directionsUrl}
            className="w-full justify-center"
          >
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
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Get Directions
          </TemplateButton>
        </div>
      </div>

      {/* Desktop Layout: Overlay */}
      <div className="hidden lg:block">
        <div className="relative h-[600px]">
          {/* Google Maps Embed */}
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${businessName} location on Google Maps`}
          />

          {/* Gradient Overlay for better readability */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Info Card Overlay */}
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
              <div className="max-w-md pointer-events-auto">
                <div className="bg-white rounded-lg shadow-2xl p-8 relative overflow-hidden">
                  {/* Accent corner */}
                  <div
                    className="absolute top-0 left-0 w-1 h-full bg-[var(--template-primary)]"
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="relative">
                    <p className="text-[var(--template-primary)] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                      Visit Us
                    </p>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                      {businessName}
                    </h2>

                    {/* Address */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
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
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                          Address
                        </p>
                        <p className="text-slate-900 font-medium leading-snug">
                          {address}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
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
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                          Phone
                        </p>
                        <a
                          href={`tel:${phone}`}
                          className="text-slate-900 font-medium hover:text-[var(--template-primary)] transition-colors"
                          tabIndex={0}
                        >
                          {phone}
                        </a>
                      </div>
                    </div>

                    {/* Directions Button */}
                    <TemplateButton
                      variant="primary"
                      size="md"
                      href={directionsUrl}
                      className="w-full justify-center"
                    >
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
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      Get Directions
                    </TemplateButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-1 bg-gradient-to-r from-[var(--template-primary)] via-[var(--template-secondary)] to-[var(--template-primary)]"
        aria-hidden="true"
      />
    </section>
  );
};

