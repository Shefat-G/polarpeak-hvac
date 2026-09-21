import { Clock } from 'lucide-react';
import { businessHours } from '@/lib/data';

/**
 * Business hours card used on the contact page sidebar.
 */
export default function BusinessHours() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
      <h2 className="flex items-center gap-2.5 text-lg font-bold">
        <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
        Business Hours
      </h2>

      <dl className="mt-5 divide-y divide-slate-100">
        {businessHours.map(({ day, hours, highlight }) => (
          <div key={day} className="flex items-center justify-between gap-4 py-3 text-sm">
            <dt className={highlight ? 'font-bold text-accent-700' : 'text-slate-500'}>
              {day}
            </dt>
            <dd className={highlight ? 'font-bold text-accent-700' : 'font-semibold text-primary'}>
              {hours}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 rounded-lg bg-accent-50 p-4 text-xs leading-relaxed text-accent-800">
        Emergency calls are answered by a live dispatcher 24 hours a day — including
        holidays — with no overtime charges.
      </p>
    </div>
  );
}
