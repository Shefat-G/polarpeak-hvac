import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { whyChooseUs } from '@/lib/data';

/**
 * "Why Choose Us" — three-column value proposition block with icons.
 */
export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-us-heading">
      <div className="container-page">
        <SectionHeading
          id="why-us-heading"
          eyebrow="Why Choose Us"
          title="Three Reasons Columbus Homeowners Keep Our Number"
          description="We built PolarPeak around the three complaints people have about HVAC contractors: slow scheduling, unqualified technicians and prices that change after the work starts."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {whyChooseUs.map(({ title, description, icon: Icon, points }) => (
            <article
              key={title}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-card-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50">
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </span>

              <h3 className="mt-6 text-xl font-bold">{title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {description}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
