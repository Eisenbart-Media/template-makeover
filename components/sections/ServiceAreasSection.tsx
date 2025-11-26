import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TemplateButton } from "../ui/TemplateButton";

interface ServiceArea {
  region?: string;
  cities: string[];
}

interface ServiceAreasSectionProps {
  businessName: string;
  headline?: string;
  subheadline?: string;
  areas?: ServiceArea[];
  note?: string;
  latitude?: number;
  longitude?: number;
  className?: string;
}

const defaultAreas: ServiceArea[] = [
  {
    region: "North County",
    cities: ["Riverside", "Northville", "Lakewood", "Pine Valley", "Oak Ridge"],
  },
  {
    region: "Central District",
    cities: ["Downtown", "Midtown", "Eastside", "Westgate", "University Heights"],
  },
  {
    region: "South County",
    cities: ["Southport", "Harbor View", "Bayshore", "Greenfield", "Sunset Hills"],
  },
  {
    region: "East County",
    cities: ["Eastlake", "Mountain View", "Valley Center", "Ridgemont", "Fairview"],
  },
];

export const ServiceAreasSection = ({
  businessName,
  headline,
  subheadline,
  areas,
  note,
  latitude = 40.7128,
  longitude = -74.006,
  className,
}: ServiceAreasSectionProps) => {
  const displayAreas = areas && areas.length > 0 ? areas : defaultAreas;
  const displayHeadline = headline || "Areas We Serve";
  const displaySubheadline =
    subheadline ||
    `${businessName} proudly serves customers throughout the greater metropolitan area and surrounding communities.`;
  const displayNote =
    note || "Don't see your area? Give us a call — we may still be able to help!";
  
  const mapEmbedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=11&output=embed`;

  return (
    <SectionWrapper background="white" className={className} id="service-areas">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Section Header */}
          <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Service Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {displayHeadline}
          </h2>
          <p className="text-slate-600 mb-6">{displaySubheadline}</p>

          {/* Google Maps Embed */}
          <div className="hidden lg:block">
            <div className="w-full aspect-square max-w-[280px] rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${businessName} service area map`}
              />
            </div>
          </div>
        </div>

        {/* Areas Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {displayAreas.map((area, index) => (
              <div
                key={index}
                className={cn(
                  "bg-slate-50 rounded-lg p-6",
                  "border border-slate-100 hover:border-[var(--template-primary)]/20",
                  "transition-colors duration-200"
                )}
              >
                {area.region && (
                  <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--template-primary)]" />
                    {area.region}
                  </h3>
                )}
                <ul className="space-y-1.5">
                  {area.cities.map((city, cityIndex) => (
                    <li
                      key={cityIndex}
                      className="text-slate-600 text-sm flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4 text-[var(--template-primary)]/60 flex-shrink-0"
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
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 p-4 bg-[var(--template-primary)]/5 rounded-lg border border-[var(--template-primary)]/10">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-[var(--template-primary)] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-slate-700 text-sm">{displayNote}</p>
                <TemplateButton
                  variant="ghost"
                  size="sm"
                  href="#contact"
                  className="mt-2 -ml-2"
                >
                  Contact Us
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
                </TemplateButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

