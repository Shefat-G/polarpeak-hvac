import Image from 'next/image';
import type { TeamMember } from '@/lib/data';

type TeamMemberCardProps = {
  member: TeamMember;
};

/**
 * Team profile card for the About page.
 */
export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <Image
        src={member.image.src}
        alt={member.image.alt}
        width={member.image.width}
        height={member.image.height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="h-56 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold">{member.name}</h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-accent-700">
          {member.role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
      </div>
    </article>
  );
}
