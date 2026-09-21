import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock, Phone, ShieldCheck, Star } from 'lucide-react';
import { contactInfo, placeholderImage } from '@/lib/data';

const highlights = [
  { icon: Clock, label: 'Same-Day Service' },
  { icon: BadgeCheck, label: 'Licensed & Insured' },
  { icon: Star, label: '4.9★ Locally Rated' },
];

/**
 * Full-width homepage hero. The background is a placeholder photograph
 * (next/image, explicit 1920x1080) underneath the brand navy gradient overlay.
 */
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-primary-950"
      aria-labelledby="hero-heading"
    >
      <Image
        src={placeholderImage(1920, 1080, 'HVAC Technician', '0E1F35', 'F97316')}
        alt="PolarPeak HVAC technician servicing an outdoor air conditioning unit"
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      {/* Brand gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary/95 to-primary-950/95"
        aria-hidden="true"
      />

      <div className="container-page relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy */}
          <div className="animate-fade-in-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              Serving Columbus &amp; Central Ohio Since 2009
            </p>

            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Columbus&rsquo;s Most Trusted{' '}
              <span className="text-accent">HVAC Company</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Fast, Reliable HVAC Service — 24/7 Emergency Repairs. From emergency
              AC repair to high-efficiency heating installation, our certified
              technicians keep central Ohio homes comfortable in every season.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-accent px-8 text-base">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href={contactInfo.phoneHref}
                className="btn btn-outline-light px-8 text-base"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now: {contactInfo.phoneDisplay}
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-semibold text-white/85"
                >
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency / booking card */}
          <div className="rounded-2xl border border-white/15 bg-white/95 p-7 shadow-card-lg backdrop-blur sm:p-9">
            <p className="eyebrow">24/7 Emergency Line</p>
            <p className="mt-3 text-2xl font-bold leading-snug text-primary">
              No heat or no cooling? We respond in 60 minutes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              A live dispatcher answers every call — never a voicemail box. Trucks
              are fully stocked, so most repairs are finished on the first visit
              with no overtime charges.
            </p>

            <a
              href={contactInfo.phoneHref}
              className="btn btn-accent mt-6 w-full text-base"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {contactInfo.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-outline-navy mt-3 w-full">
              Request a Free Quote
            </Link>

            <dl className="mt-7 space-y-3 border-t border-slate-200 pt-6 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">Mon – Fri</dt>
                <dd className="font-semibold text-primary">7:00 AM – 8:00 PM</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">Saturday</dt>
                <dd className="font-semibold text-primary">8:00 AM – 5:00 PM</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">Emergency</dt>
                <dd className="font-semibold text-accent">Open 24 Hours</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
