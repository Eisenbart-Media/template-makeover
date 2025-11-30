"use client";

import { cn } from "@/lib/utils";
import { StarRating } from "../ui/StarRating";
import { TemplateButton } from "../ui/TemplateButton";
import { SectionWrapper } from "../ui/SectionWrapper";
import { useState } from "react";

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
}

interface ReviewsSectionProps {
  businessName: string;
  googleBusinessUrl?: string;
  reviews?: Review[];
  averageRating?: number;
  totalReviews?: number;
  className?: string;
}

const defaultReviews: Review[] = [
  {
    id: "1",
    author: "Sarah M.",
    rating: 5,
    text: "Absolutely outstanding service! They arrived on time, were incredibly professional, and the quality of work exceeded my expectations. I've already recommended them to all my neighbors.",
    date: "2 weeks ago",
    profilePhoto: undefined,
  },
  {
    id: "2",
    author: "James K.",
    rating: 5,
    text: "I've used many services over the years, but this company stands out. Fair pricing, excellent communication, and they left my property spotless. Will definitely use again.",
    date: "1 month ago",
    profilePhoto: undefined,
  },
  {
    id: "3",
    author: "Maria L.",
    rating: 4,
    text: "Very happy with the work done. The team was friendly and knowledgeable. They took the time to explain everything and made sure I was satisfied before leaving.",
    date: "1 month ago",
    profilePhoto: undefined,
  },
];

const ReviewCard = ({
  review,
  expanded,
  onToggle,
}: {
  review: Review;
  expanded: boolean;
  onToggle: () => void;
}) => {
  const shouldTruncate = review.text.length > 180;
  const displayText =
    shouldTruncate && !expanded ? `${review.text.slice(0, 180)}...` : review.text;

  return (
    <article className="bg-white rounded-xl border border-slate-100 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {review.profilePhoto ? (
            <img
              src={review.profilePhoto}
              alt={review.author}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[var(--template-primary)] to-[var(--template-secondary)] flex items-center justify-center text-white font-semibold text-base sm:text-lg">
              {review.author.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 truncate text-sm sm:text-base">{review.author}</h4>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
            <StarRating rating={review.rating} size="sm" />
            <span className="text-slate-400 text-xs">{review.date}</span>
          </div>
        </div>

        {/* Google Icon */}
        <div className="flex-shrink-0 hidden sm:block">
          <svg
            className="w-6 h-6 text-slate-300"
            viewBox="0 0 24 24"
            aria-label="Google Review"
          >
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-slate-600 text-sm leading-relaxed">{displayText}</p>

      {shouldTruncate && (
        <button
          onClick={onToggle}
          className="mt-3 text-[var(--template-primary)] text-sm font-medium hover:underline focus:outline-none focus:underline min-h-[44px] -mb-2 flex items-center"
          tabIndex={0}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
};

export const ReviewsSection = ({
  businessName,
  googleBusinessUrl,
  reviews,
  averageRating = 4.8,
  totalReviews = 127,
  className,
}: ReviewsSectionProps) => {
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());

  const displayReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;

  const handleToggleExpand = (reviewId: string) => {
    setExpandedReviews((prev) => {
      const next = new Set(prev);
      if (next.has(reviewId)) {
        next.delete(reviewId);
      } else {
        next.add(reviewId);
      }
      return next;
    });
  };

  return (
    <SectionWrapper background="light" className={className} id="reviews">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what {businessName} customers
          have to say about their experience.
        </p>

        {/* Overall Rating */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="text-center pr-3 sm:pr-4 border-r border-slate-200">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">{averageRating}</div>
              <StarRating rating={averageRating} size="sm" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-slate-900">Google Rating</div>
              <div className="text-xs text-slate-500">{totalReviews} reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
        {displayReviews.slice(0, 3).map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            expanded={expandedReviews.has(review.id)}
            onToggle={() => handleToggleExpand(review.id)}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <TemplateButton
          variant="outline"
          size="md"
          href={googleBusinessUrl || `https://www.google.com/search?q=${encodeURIComponent(businessName)}+reviews`}
          className="gap-3"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          View More Reviews on Google
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </TemplateButton>
      </div>
    </SectionWrapper>
  );
};

