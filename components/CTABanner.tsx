import Link from 'next/link';
import { Clock, Phone, Zap } from 'lucide-react';
import { contactInfo } from '@/lib/data';

type CTABannerProps = {
  title?: string;
  description?: string;
};

/**
 * Full-width emergency call-to-action band. Reused on the homepage, services,
 * about and contact pages with page-specific copy.
 */
export default function CTABanner({
  title = 'AC Broken? We Respond in 60 Minutes.',
  description = 'Our emergency line is answered by a live dispatcher 24 hours a day, 365 days a year. No overtime charges, no voicemail, no waiting until Monday.',
}: CTABannerProps) {
  return (
    <section className="bg-primary" aria-labelledby="cta-heading">
      <div className="container-page section-padding">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-300">
              <Zap className="h-4 w-4" aria-hidden="true" />
              24/7 Emergency Service
            </p>
            <h2
              id="cta-heading"
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {description}
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-white/70 lg:justify-start">
              <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
              Average emergency response time in central Ohio: 47 minutes
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
            <a
              href={contactInfo.phoneHref}
              className="btn btn-accent px-8 py-4 text-base"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now: {contactInfo.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="btn btn-outline-light px-8 py-4 text-base"
            >
              Book a Service Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
