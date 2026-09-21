import { Quote, Star } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/lib/data';

/**
 * Customer reviews. Rating stars are rendered from the numeric rating so the
 * markup stays accessible ("5 out of 5 stars") instead of relying on glyphs.
 */
export default function Testimonials() {
  return (
    <section
      className="section-padding bg-slate-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="What Our Columbus Customers Say"
          description="More than 800 verified reviews and a 4.9 average rating across Google, Facebook and the Better Business Bureau."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ name, location, rating, serviceUsed, quote, initials }) => (
            <figure
              key={name}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card"
            >
              <Quote className="h-9 w-9 text-accent-200" aria-hidden="true" />

              <div className="mt-5 flex items-center gap-3">
                <span
                  className="flex gap-0.5"
                  role="img"
                  aria-label={`Rated ${rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < rating
                          ? 'fill-accent text-accent'
                          : 'text-slate-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  {serviceUsed}
                </span>
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-primary">{name}</span>
                  <span className="block text-xs text-slate-500">{location}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
