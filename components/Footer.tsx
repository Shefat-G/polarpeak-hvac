import Link from 'next/link';
import { Clock, Mail, MapPin, Phone, Snowflake } from 'lucide-react';
import { contactInfo, navLinks, services, siteConfig } from '@/lib/data';

/**
 * Site footer: brand block, quick links, service links and contact details
 * with the copyright bar.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-extrabold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Snowflake className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <span>
              Polar<span className="text-accent-300">Peak</span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed">{siteConfig.serviceArea}</p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services navigation">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Our Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Contact Us
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a
                href={contactInfo.phoneHref}
                className="font-semibold text-white transition-colors hover:text-accent"
              >
                {contactInfo.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={contactInfo.emailHref} className="transition-colors hover:text-accent">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <address className="not-italic">
                {contactInfo.addressLine1}
                <br />
                {contactInfo.addressLine2}
              </address>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                Mon – Fri: 7 AM – 8 PM
                <br />
                Sat – Sun: 8 AM – 5 PM
                <br />
                <span className="font-semibold text-accent">Emergencies: 24/7</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/50">{contactInfo.license} • Licensed, bonded &amp; insured</p>
        </div>
      </div>
    </footer>
  );
}
