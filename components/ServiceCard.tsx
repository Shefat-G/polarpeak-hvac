import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/data';

type ServiceCardProps = {
  service: Service;
};

/**
 * Homepage service card: icon, title, short description and a "Learn More"
 * link that deep-links to the matching block on /services.
 */
export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary transition-colors group-hover:bg-accent">
        <Icon className="h-7 w-7 text-white" aria-hidden="true" />
      </span>

      <h3 className="mt-6 text-xl font-bold">{service.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {service.description}
      </p>

      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-accent-700">
        {service.priceNote}
      </p>

      <Link
        href={`/services#${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-accent"
      >
        Learn More
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
        <span className="sr-only"> about {service.title}</span>
      </Link>
    </article>
  );
}
