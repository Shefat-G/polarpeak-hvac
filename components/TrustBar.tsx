import { stats } from '@/lib/data';

/**
 * Trust bar — three headline proof points shown directly beneath the hero.
 * Anchors the credibility claims that the rest of the page expands on.
 */
export default function TrustBar() {
  return (
    <section className="border-b border-slate-100 bg-white" aria-label="Company facts">
      <div className="container-page">
        {/* A <ul>/<li> list: every direct child of the list is an <li>. */}
        <ul className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map(({ value, label, description, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-4 px-2 py-7 sm:justify-center sm:px-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </span>
              <p className="text-2xl font-extrabold leading-none text-primary sm:text-3xl">
                {value}{' '}
                <span className="text-base font-bold sm:text-lg">{label}</span>
                <span className="mt-1.5 block text-sm font-normal text-slate-500">
                  {description}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
