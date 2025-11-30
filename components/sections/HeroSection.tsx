import { cn } from '@/lib/utils';
import { TemplateButton } from '../ui/TemplateButton';

interface HeroSectionProps {
	businessName: string;
	headline?: string;
	subheadline?: string;
	ctaText?: string;
	ctaHref?: string;
	secondaryCtaText?: string;
	secondaryCtaHref?: string;
	backgroundImage?: string;
	className?: string;
}

export const HeroSection = ({
	businessName,
	headline,
	subheadline,
	ctaText = 'Get Started',
	ctaHref = '#contact',
	secondaryCtaText,
	secondaryCtaHref,
	backgroundImage,
	className,
}: HeroSectionProps) => {
	const displayHeadline = headline || `Welcome to ${businessName}`;
	const displaySubheadline =
		subheadline ||
		'Professional services you can trust. Quality workmanship and exceptional customer care.';

	return (
		<section
			className={cn(
				'relative min-h-[85vh] flex items-center justify-center overflow-hidden',
				className
			)}
		>
			{/* Background Layer */}
			<div className="absolute inset-0 -z-10">
				{backgroundImage ? (
					<>
						<img
							src={backgroundImage}
							alt=""
							className="absolute inset-0 w-full h-full object-cover"
							aria-hidden="true"
						/>
						<div
							className="absolute inset-0 bg-gradient-to-br from-[var(--template-primary)]/90 via-[var(--template-primary)]/75 to-[var(--template-secondary)]/80"
							aria-hidden="true"
						/>
					</>
				) : (
					<>
						{/* Abstract geometric background */}
						<div
							className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"
							aria-hidden="true"
						/>
						{/* Decorative elements */}
						<div
							className="absolute top-0 right-0 w-1/2 h-full bg-[var(--template-primary)]/5 -skew-x-12 translate-x-1/4"
							aria-hidden="true"
						/>
						<div
							className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--template-secondary)]/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"
							aria-hidden="true"
						/>
						<div
							className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--template-primary)]/8 rounded-full blur-2xl"
							aria-hidden="true"
						/>
					</>
				)}
			</div>

			{/* Content */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
				<div className="max-w-3xl">
					{/* Accent line */}
					<div
						className={cn(
							'w-16 h-1 mb-8 rounded-full',
							backgroundImage
								? 'bg-white/80'
								: 'bg-[var(--template-primary)]'
						)}
						aria-hidden="true"
					/>

					{/* Business name tag */}
					<p
						className={cn(
							'text-sm font-semibold tracking-[0.2em] uppercase mb-4',
							backgroundImage
								? 'text-white/70'
								: 'text-[var(--template-primary)]'
						)}
					>
						{businessName}
					</p>

					{/* Headline */}
					<h1
						className={cn(
							'text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6',
							backgroundImage ? 'text-white' : 'text-slate-900'
						)}
					>
						{displayHeadline}
					</h1>

					{/* Subheadline */}
					<p
						className={cn(
							'text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl',
							backgroundImage ? 'text-white/85' : 'text-slate-600'
						)}
					>
						{displaySubheadline}
					</p>

					{/* CTAs */}
					<div className="flex flex-wrap gap-4">
						<TemplateButton
							variant={backgroundImage ? 'secondary' : 'primary'}
							size="lg"
							href={ctaHref}
						>
							{ctaText}
							<svg
								className="w-5 h-5 ml-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</TemplateButton>

						{secondaryCtaText && (
							<TemplateButton
								variant={backgroundImage ? 'ghost' : 'outline'}
								size="lg"
								href={secondaryCtaHref}
								className={
									backgroundImage
										? 'text-white border-white/30 hover:bg-white/10'
										: ''
								}
							>
								{secondaryCtaText}
							</TemplateButton>
						)}
					</div>
				</div>
			</div>

			{/* Bottom decorative wave */}
			<div
				className="absolute bottom-0 left-0 right-0 h-16 md:h-24"
				aria-hidden="true"
			>
				<svg
					className="absolute bottom-0 w-full h-full text-white"
					viewBox="0 0 1440 74"
					fill="currentColor"
					preserveAspectRatio="none"
				>
					<path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" />
				</svg>
			</div>
		</section>
	);
};
