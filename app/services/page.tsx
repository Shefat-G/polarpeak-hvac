import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Phone } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import PageHeader from '@/components/PageHeader';
import ProcessSteps from '@/components/ProcessSteps';
import ServiceDetailCard from '@/components/ServiceDetailCard';
import { contactInfo, services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'HVAC Services in Columbus, OH',
  description:
    'AC repair, heating installation, furnace tune-ups, duct cleaning, 24/7 emergency service and air quality testing across Columbus and central Ohio. Upfront pricing, NATE-certified technicians.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="Our Services"
        title="HVAC Services in Columbus, Ohio"
        description="Six core services, one certified team. Every job starts with a full diagnosis and a written price you approve before any work begins — and every repair is backed by a 1-year parts and labour warranty."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-accent px-7 text-base">
            Get a Free Quote
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <a href={contactInfo.phoneHref} className="btn btn-outline-light px-7 text-base">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Now: {contactInfo.phoneDisplay}
          </a>
        </div>
      </PageHeader>

      <section className="section-padding bg-slate-50" aria-label="Service details">
        <div className="container-page flex flex-col gap-10">
          {services.map((service, index) => (
            <ServiceDetailCard
              key={service.slug}
              service={service}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <ProcessSteps />

      <CTABanner
        title="Not Sure Which Service You Need?"
        description="Describe the symptoms and our dispatcher will tell you honestly whether it is a repair, a tune-up or a replacement — before anyone is dispatched."
      />
    </main>
  );
}
