import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

type TemplateButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type TemplateButtonSize = "sm" | "md" | "lg";

interface TemplateButtonProps extends ComponentProps<"button"> {
  variant?: TemplateButtonVariant;
  size?: TemplateButtonSize;
  href?: string;
}

const variantClasses: Record<TemplateButtonVariant, string> = {
  primary:
    "bg-[var(--template-primary)] text-[var(--template-primary-foreground)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-[var(--template-secondary)] text-[var(--template-secondary-foreground)] hover:brightness-110 active:brightness-95",
  outline:
    "bg-transparent border-2 border-[var(--template-primary)] text-[var(--template-primary)] hover:bg-[var(--template-primary)] hover:text-[var(--template-primary-foreground)]",
  ghost:
    "bg-transparent text-[var(--template-primary)] hover:bg-[var(--template-primary)]/10",
};

const sizeClasses: Record<TemplateButtonSize, string> = {
  sm: "px-3 sm:px-4 py-2 text-sm min-h-[40px]",
  md: "px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base min-h-[44px]",
  lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[48px]",
};

export const TemplateButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: TemplateButtonProps) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 font-medium tracking-wide",
    "rounded-sm transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--template-primary)] focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "cursor-pointer select-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        tabIndex={0}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      tabIndex={0}
      aria-label={typeof children === "string" ? children : undefined}
      {...props}
    >
      {children}
    </button>
  );
};

