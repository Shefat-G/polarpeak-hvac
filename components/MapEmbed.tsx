import { MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/data';

/**
 * Google Maps embed.
 *
 * TODO (before going live): replace the src below with the exact embed URL
 * from Google Maps ("Share" → "Embed a map") for the real business address.
 * The query-based URL used here requires no API key, which keeps the demo
 * dependency-free.
 */
export default function MapEmbed() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contactInfo.mapQuery,
  )}&output=embed`;

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
      <div className="flex flex-col gap-1 border-b border-slate-200 bg-white px-7 py-5 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="flex items-center gap-2.5 text-lg font-bold">
          <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
          Visit Our Columbus Office
        </h2>
        <p className="text-sm text-slate-500">
          {contactInfo.addressLine1}, {contactInfo.addressLine2}
        </p>
      </div>

      <iframe
        src={embedSrc}
        title={`Google Map showing ${contactInfo.addressLine1}, ${contactInfo.addressLine2}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full border-0 sm:h-96"
      />
    </section>
  );
}
