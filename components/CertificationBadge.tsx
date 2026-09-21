import type { Certification } from '@/lib/data';

type CertificationBadgeProps = {
  certification: Certification;
};

/**
 * Credential / certification badge for the About page.
 */
export default function CertificationBadge({
  certification,
}: CertificationBadgeProps) {
  const Icon = certification.icon;

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-200 bg-white">
        <Icon className="h-5 w-5 text-accent-600" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-bold text-primary">{certification.name}</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {certification.detail}
        </p>
      </div>
    </div>
  );
}
