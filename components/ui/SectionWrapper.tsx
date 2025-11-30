"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";

type SectionBackground = "white" | "light" | "dark" | "primary" | "gradient";

interface SectionWrapperProps {
  children: ReactNode;
  background?: SectionBackground;
  className?: string;
  innerClassName?: string;
  id?: string;
  as?: "section" | "footer" | "header" | "div";
  noPadding?: boolean;
  animate?: boolean;
}

const backgroundClasses: Record<SectionBackground, string> = {
  white: "bg-white text-slate-900",
  light: "bg-slate-50 text-slate-900",
  dark: "bg-slate-900 text-white",
  primary:
    "bg-[var(--template-primary)] text-[var(--template-primary-foreground)]",
  gradient:
    "bg-gradient-to-br from-[var(--template-primary)] to-[var(--template-secondary)] text-[var(--template-primary-foreground)]",
};

export const SectionWrapper = ({
  children,
  background = "white",
  className,
  innerClassName,
  id,
  as: Component = "section",
  noPadding = false,
  animate = true,
}: SectionWrapperProps) => {
  const [inView, setInView] = useState(false);
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animate]);

  const animationClasses = animate
    ? cn(
        "transition-all duration-700 ease-out will-change-transform will-change-opacity",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )
    : "";

  return (
    <Component
      ref={wrapperRef}
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        backgroundClasses[background],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl",
          !noPadding && "px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24",
          animationClasses,
          innerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
};

interface SectionDividerProps {
  direction?: "up" | "down";
  fillColor?: string;
  className?: string;
}

export const SectionDivider = ({
  direction = "down",
  fillColor = "currentColor",
  className,
}: SectionDividerProps) => {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 h-12 md:h-16 -z-0 overflow-hidden",
        direction === "down" ? "-bottom-1" : "-top-1 rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill={fillColor}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
      </svg>
    </div>
  );
};

