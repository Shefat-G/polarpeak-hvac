import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/data';

/**
 * Homepage services overview — the six core services in a responsive grid.
 */
export default function ServicesSection() {
  return (
    <section className="section-padding bg-slate-50" aria-labelledby="services-heading">
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          eyebrow="Our Services"
          title="Complete HVAC Care for Every Season"
          description="Repairs, installations, maintenance and indoor air quality work — handled by one NATE-certified team that answers the phone 24 hours a day."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services" className="btn btn-navy px-8 text-base">
            Explore All Services
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
