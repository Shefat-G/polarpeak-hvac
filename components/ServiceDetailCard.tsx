import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { contactInfo, type Service } from '@/lib/data';

type ServiceDetailCardProps = {
  service: Service;
  /** Alternate the image/text order on the /services page for readability. */
  reversed?: boolean;
};

/**
 * Long-form service block used on /services. The id matches the service slug
 * so the homepage "Learn More" links can jump straight to it.
 */
export default function ServiceDetailCard({
  service,
  reversed = false,
}: ServiceDetailCardProps) {
  const Icon = service.icon;

  return (
    <article
      id={service.slug}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card"
    >
      <div className="grid items-stretch lg:grid-cols-2">
        <div className={reversed ? 'lg:order-2' : ''}>
          <Image
            src={service.image.src}
            alt={service.image.alt}
            width={service.image.width}
            height={service.image.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-56 w-full object-cover sm:h-72 lg:h-full lg:min-h-[22rem]"
          />
        </div>

        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-accent-700">
                {service.priceNote}
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            {service.longDescription}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm font-medium text-slate-700"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-navy">
              Book This Service
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={contactInfo.phoneHref} className="btn btn-outline-navy">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contactInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
