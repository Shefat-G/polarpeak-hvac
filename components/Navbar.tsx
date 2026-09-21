'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clock, Menu, Phone, Snowflake, X } from 'lucide-react';
import { contactInfo, navLinks } from '@/lib/data';

/**
 * Sticky site header with a utility bar, desktop navigation and a
 * mobile hamburger menu. Client component because the mobile menu and the
 * active-route highlighting need state/router hooks.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Utility bar */}
      <div className="hidden bg-primary-900 text-white lg:block">
        <nav
          aria-label="Emergency contact"
          className="container-page flex items-center justify-between py-2 text-xs"
        >
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>24/7 Emergency Service Available — No Overtime Charges</span>
          </p>
          <p className="text-white/70">{contactInfo.license}</p>
        </nav>
      </div>

      {/* Main navigation bar */}
      <div className="bg-primary">
        <nav
          aria-label="Main navigation"
          className="container-page flex items-center justify-between gap-4 py-3.5"
        >
          {/* Logo (text based) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Snowflake className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <span className="leading-none">
              Polar
              <span className="text-accent">Peak</span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/60">
                HVAC Services
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`text-sm font-semibold transition-colors ${
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-white/85 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>{contactInfo.phoneDisplay}</span>
            </a>
            <Link href="/contact" className="btn btn-accent px-5 py-3">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div id="mobile-menu" className="border-t border-white/10 md:hidden">
            <ul className="container-page flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`block border-b border-white/10 py-3.5 text-base font-semibold transition-colors ${
                      isActive(link.href)
                        ? 'text-accent'
                        : 'text-white hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="container-page flex flex-col gap-3 pb-5">
              <a
                href={contactInfo.phoneHref}
                className="btn btn-accent w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now: {contactInfo.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="btn btn-outline-light w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

