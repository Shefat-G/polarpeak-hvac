import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2, Phone } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import CertificationBadge from '@/components/CertificationBadge';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import TeamMemberCard from '@/components/TeamMemberCard';
import {
  certifications,
  contactInfo,
  placeholderImage,
  stats,
  teamMembers,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Our Columbus HVAC Team',
  description:
    'PolarPeak HVAC has served central Ohio since 2009 with NATE-certified technicians, upfront pricing and 24/7 emergency service. Meet the team and see our certifications.',
  alternates: { canonical: '/about' },
};

const storyHighlights = [
  'Founded in Columbus in 2009 by a master technician',
  'One team for repairs, installations, ducts and air quality',
  'No commissioned salespeople — technicians are paid to fix things',
];

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="About PolarPeak"
        title="Central Ohio's Heating & Cooling Specialists Since 2009"
        description="We are a locally owned, family-run HVAC company in Columbus. No call centres, no commissioned sales pitches — just NATE-certified technicians who fix systems properly and price them honestly."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={contactInfo.phoneHref} className="btn btn-accent px-7 text-base">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Now: {contactInfo.phoneDisplay}
          </a>
          <Link href="/services" className="btn btn-outline-light px-7 text-base">
            See Our Services
          </Link>
        </div>
      </PageHeader>

      {/* Company story */}
      <section className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2
              id="story-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Built on the Jobs Other Companies Turned Down
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Marcus Delgado started PolarPeak out of a single van in 2009 after
                twelve years installing commercial rooftop units. He kept running
                into the same problem: homeowners being told their equipment was
                beyond saving when a $300 repair would have done the job.
              </p>
              <p>
                So we built the company around a simple rule — diagnose the whole
                system, show the customer the reading, and let them decide. Fifteen
                years later that approach has served more than 10,000 homes across
                Columbus, Dublin, Westerville, Gahanna and Hilliard.
              </p>
              <p>
                Today we run a fleet of fully stocked service trucks, a live 24/7
                dispatch desk and a crew that lives in the neighbourhoods we serve.
                Same technicians, same phone number, same honest pricing.
              </p>
            </div>

            <ul className="mt-7 space-y-3">
              {storyHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={placeholderImage(800, 600, 'PolarPeak Service Fleet', '1E3A5F', 'F97316')}
            alt="PolarPeak HVAC service vans parked outside the Columbus, Ohio office"
            width={800}
            height={600}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-3xl shadow-card-lg"
          />
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary" aria-label="Company milestones">
        <div className="container-page grid gap-8 py-12 sm:grid-cols-3">
          {stats.map(({ value, label, description, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </span>
              <div>
                <p className="text-2xl font-extrabold text-white">{value}</p>
                <p className="text-sm font-semibold text-white/90">{label}</p>
                <p className="text-xs text-white/60">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-slate-50" aria-labelledby="team-heading">
        <div className="container-page">
          <SectionHeading
            id="team-heading"
            eyebrow="Meet the Team"
            title="The People Who Show Up at Your Door"
            description="Background-checked, drug-tested and NATE-certified. Every technician wears shoe covers, lays drop cloths and walks you through the repair before starting."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="section-padding bg-white"
        aria-labelledby="certifications-heading"
      >
        <div className="container-page">
          <SectionHeading
            id="certifications-heading"
            eyebrow="Certifications"
            title="Licensed, Certified & Independently Verified"
            description="Credentials you can look up. We keep every licence, certification and insurance certificate on file and current."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <CertificationBadge
                key={certification.name}
                certification={certification}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Work With a Team You Can Trust?"
        description="Join more than 10,000 central Ohio homeowners who call PolarPeak first. Free written estimates, no overtime charges and a 1-year warranty on every repair."
      />
    </main>
  );
}
