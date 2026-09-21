import SectionHeading from '@/components/SectionHeading';
import { processSteps } from '@/lib/data';

/**
 * Four-step "how it works" strip shown on the services page.
 */
export default function ProcessSteps() {
  return (
    <section className="section-padding bg-white" aria-labelledby="process-heading">
      <div className="container-page">
        <SectionHeading
          id="process-heading"
          eyebrow="How It Works"
          title="From First Call to Cold Air in Four Steps"
          description="No diagnostic-fee games, no mystery pricing and no all-day waiting windows. Here is exactly what happens when you call PolarPeak."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ step, title, description, icon: Icon }) => (
            <li
              key={step}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7"
            >
              <span className="absolute right-6 top-5 text-3xl font-extrabold text-primary-100">
                {step}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
