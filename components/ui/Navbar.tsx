'use client';

import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface NavbarLink {
	label: string;
	href: string;
	secondary?: boolean;
}

interface NavbarProps {
	logo?: {
		src?: string;
		alt?: string;
		text?: string;
		href?: string;
	};
	links?: NavbarLink[];
	cta?: NavbarLink;
	className?: string;
}

export const Navbar = ({ logo, links = [], cta, className }: NavbarProps) => {
	return (
		<nav
			className={cn(
				'sticky top-0 z-50 backdrop-blur border-b border-slate-200/60 bg-slate-50/80',
				'shadow-md shadow-slate-900/5',
				className
			)}
		>
			<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
				<div className="flex items-center gap-4">
					{logo && (
						<a
							href={logo.href ?? '#'}
							className="flex items-center gap-3 text-slate-900 font-semibold text-lg"
						>
							{logo.src ? (
								<img
									src={logo.src}
									alt={logo.alt ?? 'Logo'}
									className="h-10 w-10 rounded-lg object-cover"
								/>
							) : (
								<span className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--template-primary)]/10 text-[var(--template-primary)] text-xl">
									{logo.text?.slice(0, 1)}
								</span>
							)}
							{logo.text && (
								<span className="hidden sm:inline">
									{logo.text}
								</span>
							)}
						</a>
					)}
				</div>

				<div className="flex-1 flex items-center justify-center gap-6 text-sm font-medium text-slate-700">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className={cn(
								'transition-colors duration-200',
								link.secondary
									? 'text-slate-500 hover:text-slate-900'
									: 'text-slate-700 hover:text-[var(--template-primary)]'
							)}
						>
							{link.label}
						</a>
					))}
				</div>

				{cta ? (
					<a
						href={cta.href}
						className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--template-secondary)] text-[var(--template-secondary-foreground)] text-sm font-semibold shadow-lg shadow-[var(--template-secondary)]/30 transition-all duration-200 hover:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--template-secondary)]/60"
					>
						{cta.label}
					</a>
				) : (
					<div className="w-24" />
				)}
			</div>
		</nav>
	);
};
