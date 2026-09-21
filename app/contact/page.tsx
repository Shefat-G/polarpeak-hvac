import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Zap } from 'lucide-react';
import BusinessHours from '@/components/BusinessHours';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import PageHeader from '@/components/PageHeader';
import { contactInfo, siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact PolarPeak HVAC in Columbus, Ohio. Call (614) 555-0192 for 24/7 emergency service or request a free quote online — we respond within 15 minutes during business hours.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="Contact Us"
        title="Talk to a Real Dispatcher, Not a Voicemail"
        description="Call for emergencies, or send us the details of the job and we will call you back with availability and a price range. We answer the phone 24 hours a day, 365 days a year."
      />

      <section className="section-padding bg-slate-50" aria-label="Contact form and details">
        <div className="container-page grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form */}
          <ContactForm />

          {/* Contact details sidebar */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
              <h2 className="text-lg font-bold">Get in Touch</h2>

              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Phone
                    </span>
                    <a
                      href={contactInfo.phoneHref}
                      className="text-base font-bold text-primary transition-colors hover:text-accent"
                    >
                      {contactInfo.phoneDisplay}
                    </a>
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Email
                    </span>
                    <a
                      href={contactInfo.emailHref}
                      className="font-semibold text-primary transition-colors hover:text-accent"
                    >
                      {contactInfo.email}
                    </a>
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Office
                    </span>
                    <address className="not-italic font-semibold text-primary">
                      {contactInfo.addressLine1}
                      <br />
                      {contactInfo.addressLine2}
                    </address>
                  </span>
                </li>
              </ul>

              <p className="mt-6 border-t border-slate-100 pt-5 text-xs leading-relaxed text-slate-500">
                {siteConfig.serviceArea}
              </p>
            </div>

            <BusinessHours />

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-7">
              <h2 className="flex items-center gap-2.5 text-lg font-bold text-accent-800">
                <Zap className="h-5 w-5" aria-hidden="true" />
                HVAC Emergency?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-accent-800">
                Skip the form and call our emergency line. We dispatch a fully
                stocked truck immediately with a 60-minute response window across
                central Ohio — no overtime charges.
              </p>
              <a
                href={contactInfo.phoneHref}
                className="btn btn-accent mt-5 w-full text-base"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now: {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 md:pb-24" aria-label="Office location map">
        <div className="container-page">
          <MapEmbed />
        </div>
      </section>
    </main>
  );
}
