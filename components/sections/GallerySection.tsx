"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "../ui/SectionWrapper";
import { useState } from "react";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
  beforeSrc?: string;
}

interface GallerySectionProps {
  businessName: string;
  headline?: string;
  subheadline?: string;
  images?: GalleryImage[];
  categories?: string[];
  className?: string;
}

const defaultImages: GalleryImage[] = [
  { id: "1", src: "", alt: "Project 1", category: "Residential" },
  { id: "2", src: "", alt: "Project 2", category: "Commercial" },
  { id: "3", src: "", alt: "Project 3", category: "Residential" },
  { id: "4", src: "", alt: "Project 4", category: "Renovation" },
  { id: "5", src: "", alt: "Project 5", category: "Commercial" },
  { id: "6", src: "", alt: "Project 6", category: "Renovation" },
];

const PlaceholderImage = ({ index, category }: { index: number; category?: string }) => {
  const colors = [
    "from-blue-500 to-blue-600",
    "from-emerald-500 to-emerald-600",
    "from-amber-500 to-amber-600",
    "from-rose-500 to-rose-600",
    "from-violet-500 to-violet-600",
    "from-cyan-500 to-cyan-600",
  ];
  
  return (
    <div
      className={cn(
        "w-full h-full bg-gradient-to-br flex items-center justify-center",
        colors[index % colors.length]
      )}
    >
      <div className="text-center text-white/80">
        <svg
          className="w-12 h-12 mx-auto mb-2 opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm font-medium">{category || "Project"}</span>
      </div>
    </div>
  );
};

const ImageCard = ({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-lg sm:rounded-xl aspect-square",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--template-primary)] focus-visible:ring-offset-2",
        "active:scale-[0.98] transition-transform"
      )}
      tabIndex={0}
      aria-label={`View ${image.alt}`}
    >
      {image.src ? (
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <PlaceholderImage index={index} category={image.category} />
      )}

      {/* Overlay - Always visible on mobile for better UX */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent",
          "sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300",
          "flex items-end justify-between p-2 sm:p-4"
        )}
      >
        <span className="text-white font-medium text-xs sm:text-sm truncate mr-2">{image.alt}</span>
        <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white flex-shrink-0">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </span>
      </div>

      {/* Category Badge */}
      {image.category && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-white/90 backdrop-blur-sm rounded text-slate-700">
            {image.category}
          </span>
        </div>
      )}
    </button>
  );
};

const Lightbox = ({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Close preview"
        tabIndex={0}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {image.src ? (
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <div className="w-full aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
            <div className="text-center text-white/60">
              <svg
                className="w-20 h-20 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-lg">{image.alt}</p>
            </div>
          </div>
        )}

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
          <p className="text-white font-medium">{image.alt}</p>
          {image.category && (
            <p className="text-white/70 text-sm">{image.category}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export const GallerySection = ({
  businessName,
  headline,
  subheadline,
  images,
  categories,
  className,
}: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayImages = images && images.length > 0 ? images : defaultImages;
  const displayHeadline = headline || "Our Work";
  const displaySubheadline =
    subheadline ||
    `Browse through our portfolio of completed projects and see the quality craftsmanship ${businessName} delivers.`;

  // Get unique categories
  const uniqueCategories =
    categories ||
    Array.from(new Set(displayImages.map((img) => img.category).filter(Boolean))) as string[];

  // Filter images by category
  const filteredImages = activeCategory
    ? displayImages.filter((img) => img.category === activeCategory)
    : displayImages;

  return (
    <SectionWrapper background="light" className={className} id="gallery">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Portfolio
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {displayHeadline}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{displaySubheadline}</p>
      </div>

      {/* Category Filter */}
      {uniqueCategories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-1">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-3 sm:px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px]",
              activeCategory === null
                ? "bg-[var(--template-primary)] text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 active:bg-slate-200 border border-slate-200"
            )}
            tabIndex={0}
          >
            All Projects
          </button>
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-3 sm:px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px]",
                activeCategory === category
                  ? "bg-[var(--template-primary)] text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 active:bg-slate-200 border border-slate-200"
              )}
              tabIndex={0}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {filteredImages.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            index={index}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </SectionWrapper>
  );
};




