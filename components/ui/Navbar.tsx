'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleToggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			className={cn(
				'sticky top-0 z-50 backdrop-blur border-b border-slate-200/60 bg-slate-50/80',
				'shadow-md shadow-slate-900/5',
				className
			)}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4">
				{/* Logo */}
				<div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
					{logo && (
						<a
							href={logo.href ?? '#'}
							className="flex items-center gap-2 sm:gap-3 text-slate-900 font-semibold text-base sm:text-lg min-h-[44px]"
							tabIndex={0}
							aria-label={logo.text || 'Home'}
						>
							{logo.src ? (
								<img
									src={logo.src}
									alt={logo.alt ?? 'Logo'}
									className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg object-cover flex-shrink-0"
								/>
							) : (
								<span className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-[var(--template-primary)]/10 text-[var(--template-primary)] text-lg sm:text-xl flex-shrink-0">
									{logo.text?.slice(0, 1)}
								</span>
							)}
							{logo.text && (
								<span className="hidden sm:inline truncate max-w-[200px]">
									{logo.text}
								</span>
							)}
						</a>
					)}
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-6 text-sm font-medium text-slate-700">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className={cn(
								'transition-colors duration-200 py-2 px-1',
								link.secondary
									? 'text-slate-500 hover:text-slate-900'
									: 'text-slate-700 hover:text-[var(--template-primary)]'
							)}
							tabIndex={0}
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Desktop CTA */}
				<div className="hidden md:block flex-shrink-0">
					{cta ? (
						<a
							href={cta.href}
							className="inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full bg-[var(--template-secondary)] text-[var(--template-secondary-foreground)] text-sm font-semibold shadow-lg shadow-[var(--template-secondary)]/30 transition-all duration-200 hover:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--template-secondary)]/60"
							tabIndex={0}
						>
							{cta.label}
						</a>
					) : (
						<div className="w-20 lg:w-24" />
					)}
				</div>

				{/* Mobile Menu Button - 44px minimum touch target */}
				<button
					type="button"
					onClick={handleToggleMobileMenu}
					className="md:hidden p-2.5 -mr-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
					aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={isMobileMenuOpen}
				>
					{isMobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={cn(
					'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
					isMobileMenuOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0'
				)}
			>
				<div className="px-4 pb-6 pt-2 space-y-1 bg-slate-50/95 backdrop-blur-sm border-t border-slate-100">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={handleCloseMobileMenu}
							className={cn(
								'block px-4 py-3.5 rounded-lg text-base font-medium transition-colors min-h-[48px] flex items-center',
								link.secondary
									? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200'
									: 'text-slate-700 hover:text-[var(--template-primary)] hover:bg-[var(--template-primary)]/5 active:bg-[var(--template-primary)]/10'
							)}
							tabIndex={0}
						>
							{link.label}
						</a>
					))}
					{cta && (
						<a
							href={cta.href}
							onClick={handleCloseMobileMenu}
							className="block mt-4 px-4 py-4 rounded-lg text-center text-base font-semibold bg-[var(--template-secondary)] text-[var(--template-secondary-foreground)] shadow-md shadow-[var(--template-secondary)]/20 min-h-[52px] flex items-center justify-center active:opacity-90"
							tabIndex={0}
						>
							{cta.label}
						</a>
					)}
				</div>
			</div>
		</nav>
	);
};
