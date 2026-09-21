import {
  Award,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock,
  DollarSign,
  Droplets,
  Flame,
  Leaf,
  PhoneCall,
  ShieldCheck,
  Snowflake,
  Star,
  Users,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Company / contact details                                                  */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  name: 'PolarPeak HVAC',
  tagline: 'Fast, Reliable HVAC Service — 24/7 Emergency Repairs',
  url: 'https://www.polarpeakhvac.com',
  city: 'Columbus',
  state: 'Ohio',
  serviceArea:
    'Serving Columbus, Dublin, Westerville, Gahanna, Hilliard, Reynoldsburg and all of central Ohio.',
} as const;

export const contactInfo = {
  phoneDisplay: '(614) 555-0192',
  phoneHref: 'tel:+16145550192',
  email: 'service@polarpeakhvac.com',
  emailHref: 'mailto:service@polarpeakhvac.com',
  addressLine1: '2450 West Broad Street',
  addressLine2: 'Columbus, OH 43204',
  mapQuery: '2450 West Broad Street, Columbus, OH 43204',
  license: 'Ohio HVAC License #48291',
} as const;

/* -------------------------------------------------------------------------- */
/*  Images                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Builds a placehold.co URL. Every image on the site is rendered through
 * next/image, which requires an explicit width and height — those are passed
 * straight through here so the two values always stay in sync.
 */
export function placeholderImage(
  width: number,
  height: number,
  text: string,
  background = '1E3A5F',
  foreground = 'FFFFFF',
): string {
  return `https://placehold.co/${width}x${height}/${background}/${foreground}/png?text=${encodeURIComponent(
    text,
  )}`;
}

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  slug: string;
  title: string;
  /** One-liner used on the homepage service cards. */
  description: string;
  /** Longer copy used on the /services page. */
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  priceNote: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const services: Service[] = [
  {
    slug: 'ac-repair',
    title: 'AC Repair',
    description:
      'Fast diagnostics and same-day air conditioning repairs for every major brand, so your home is cool again today.',
    longDescription:
      'When an air conditioner quits in the middle of an Ohio heat wave, waiting is not an option. Our trucks carry the most common compressors, capacitors and fan motors, so most AC repairs are finished on the first visit — no waiting around for parts.',
    icon: Snowflake,
    features: [
      'Same-day diagnostics and repair',
      'All makes and models serviced',
      'Refrigerant leak detection and recharge',
      '1-year parts and labour warranty',
    ],
    priceNote: 'Diagnostics from $89',
    image: {
      src: placeholderImage(640, 420, 'AC Repair', '17304F', 'FFFFFF'),
      alt: 'PolarPeak HVAC technician repairing a residential air conditioning condenser',
      width: 640,
      height: 420,
    },
  },
  {
    slug: 'heating-installation',
    title: 'Heating Installation',
    description:
      'High-efficiency furnaces, heat pumps and boilers sized correctly and installed by NATE-certified technicians.',
    longDescription:
      'An oversized or undersized furnace costs you money every single month. We run a full load calculation, walk you through three equipment options at three price points, and handle every rebate and permit so the install is code-compliant and warranty-safe.',
    icon: Flame,
    features: [
      'Free in-home estimate and load calculation',
      'Furnaces, heat pumps, boilers and mini-splits',
      'Energy rebate paperwork handled for you',
      'Up to 10-year parts warranty',
    ],
    priceNote: 'Free written estimates',
    image: {
      src: placeholderImage(640, 420, 'Heating Installation', '17304F', 'FFFFFF'),
      alt: 'New high-efficiency furnace being installed in a Columbus home',
      width: 640,
      height: 420,
    },
  },
  {
    slug: 'furnace-tune-up',
    title: 'Furnace Tune-Up',
    description:
      'Our 21-point precision tune-up lowers energy bills, extends equipment life and prevents mid-winter breakdowns.',
    longDescription:
      'Nine out of ten winter breakdowns we see were preventable. Our 21-point tune-up cleans the burners, verifies combustion and carbon monoxide levels, tests the heat exchanger and dials in airflow so the system runs safely and efficiently all season.',
    icon: Wrench,
    features: [
      '21-point inspection and cleaning',
      'Carbon monoxide and safety testing',
      'Heat exchanger and blower inspection',
      'Priority scheduling for tune-up customers',
    ],
    priceNote: 'From $99 per system',
    image: {
      src: placeholderImage(640, 420, 'Furnace Tune-Up', '17304F', 'FFFFFF'),
      alt: 'HVAC technician performing a 21-point furnace tune-up',
      width: 640,
      height: 420,
    },
  },
  {
    slug: 'duct-cleaning',
    title: 'Duct Cleaning',
    description:
      'Whole-home duct cleaning that removes dust, pet dander and construction debris from your air distribution system.',
    longDescription:
      'Dirty ductwork re-contaminates a clean home every time the blower runs. We use negative-pressure vacuum equipment with rotating brush heads, seal the system while we work, and finish with before-and-after photos so you can see exactly what came out of your vents.',
    icon: Wind,
    features: [
      'Negative-pressure whole-home vacuum',
      'Before-and-after photos provided',
      'Dryer vent cleaning available',
      'Optional antimicrobial sanitising treatment',
    ],
    priceNote: 'From $349 for a whole home',
    image: {
      src: placeholderImage(640, 420, 'Duct Cleaning', '17304F', 'FFFFFF'),
      alt: 'Technician cleaning residential air ducts with professional vacuum equipment',
      width: 640,
      height: 420,
    },
  },
  {
    slug: 'emergency-service',
    title: 'Emergency Service',
    description:
      '24/7 emergency HVAC repair with a 60-minute response window anywhere in the Columbus metro area.',
    longDescription:
      'Our emergency line is answered by a real dispatcher, never a voicemail box. A fully stocked truck is dispatched immediately, you receive a live text with your technician name and photo, and there are no after-hours overtime surcharges — the quoted price is the price.',
    icon: Zap,
    features: [
      'Available 24 hours a day, 365 days a year',
      '60-minute response across central Ohio',
      'Fully stocked service trucks',
      'No overtime or holiday surcharges',
    ],
    priceNote: 'No overtime charges',
    image: {
      src: placeholderImage(640, 420, '24/7 Emergency Service', '17304F', 'FFFFFF'),
      alt: 'PolarPeak HVAC emergency service van responding at night',
      width: 640,
      height: 420,
    },
  },
  {
    slug: 'air-quality-testing',
    title: 'Air Quality Testing',
    description:
      'Indoor air quality testing plus purification, humidification and ventilation solutions for healthier air.',
    longDescription:
      'Dust, mould spores, humidity swings and stale air all show up as allergy symptoms and higher utility bills. We measure particulate levels, humidity and air exchange room by room, then recommend only the equipment that actually solves the problem you have.',
    icon: Droplets,
    features: [
      'Room-by-room airborne particle testing',
      'Humidity and ventilation audit',
      'HEPA filtration and UV purification',
      'Allergy and asthma relief solutions',
    ],
    priceNote: 'Testing from $149',
    image: {
      src: placeholderImage(640, 420, 'Air Quality Testing', '17304F', 'FFFFFF'),
      alt: 'Air quality testing monitor measuring indoor particulate levels',
      width: 640,
      height: 420,
    },
  },
];

/** Convenience list used by the contact form's "service needed" dropdown. */
export const serviceOptions: string[] = services.map((service) => service.title);

/* -------------------------------------------------------------------------- */
/*  Trust bar                                                                  */
/* -------------------------------------------------------------------------- */

export type Stat = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const stats: Stat[] = [
  {
    value: '15+',
    label: 'Years Experience',
    description: 'Serving central Ohio homeowners since 2009',
    icon: Clock,
  },
  {
    value: '10,000+',
    label: 'Homes Served',
    description: 'Across Columbus and every surrounding suburb',
    icon: Users,
  },
  {
    value: '4.9★',
    label: 'Average Rating',
    description: 'From more than 800 verified customer reviews',
    icon: Star,
  },
];

/* -------------------------------------------------------------------------- */
/*  Why choose us                                                              */
/* -------------------------------------------------------------------------- */

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const whyChooseUs: Benefit[] = [
  {
    title: 'Same-Day Service',
    description:
      'Call before noon and a PolarPeak truck is at your door the same day. Our live dispatchers book real two-hour arrival windows — never an all-day wait.',
    icon: CalendarCheck,
    points: [
      'Live dispatch 7 days a week',
      'Real two-hour arrival windows',
      'Text updates on the way to your home',
    ],
  },
  {
    title: 'Certified Technicians',
    description:
      'Every technician is NATE-certified, EPA 608 certified for refrigerant handling, background-checked and drug tested before they ever enter your home.',
    icon: BadgeCheck,
    points: [
      'NATE-certified and factory trained',
      'Background-checked team',
      'Shoe covers and drop cloths on every job',
    ],
  },
  {
    title: 'Upfront Pricing',
    description:
      'You see the full written price before we pick up a single tool. No hidden fees, no surprise line items and no overtime charges after 5 PM.',
    icon: DollarSign,
    points: [
      'Written quote approved before work starts',
      'No overtime, weekend or holiday fees',
      'Repairs backed by a 1-year warranty',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                               */
/* -------------------------------------------------------------------------- */

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  serviceUsed: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    location: 'Westerville, OH',
    rating: 5,
    serviceUsed: 'AC Repair',
    quote:
      'Our AC died on the hottest Saturday of the summer and we had a newborn in the house. I called at 8 AM and the technician was in the driveway by 10. He found a failed capacitor, had one on the truck, and we had cold air by noon. The invoice matched the phone quote to the dollar.',
    initials: 'SM',
  },
  {
    name: 'David Reyes',
    location: 'Dublin, OH',
    rating: 5,
    serviceUsed: 'Heating Installation',
    quote:
      'Three companies quoted us a new furnace and PolarPeak was the only one who actually measured the house and explained the load calculation. They handled the rebate paperwork and left the basement cleaner than they found it. Our winter gas bill dropped noticeably.',
    initials: 'DR',
  },
  {
    name: 'Jennifer Kowalski',
    location: 'Gahanna, OH',
    rating: 5,
    serviceUsed: 'Furnace Tune-Up',
    quote:
      'We have used PolarPeak for three years of tune-ups now. Same technician every time, he remembers our system, and he tells us honestly what does not need replacing yet. That is rare in this industry and it is why we stopped shopping around.',
    initials: 'JK',
  },
];

/* -------------------------------------------------------------------------- */
/*  How it works (used on the services page)                                   */
/* -------------------------------------------------------------------------- */

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Call or Book Online',
    description:
      'Reach a live dispatcher 24/7. Tell us what the system is doing and we confirm a two-hour arrival window on the spot.',
    icon: PhoneCall,
  },
  {
    step: '02',
    title: 'Full System Diagnosis',
    description:
      'Your technician tests the complete system — airflow, refrigerant, electrical and safety components — not just the symptom you noticed.',
    icon: Wrench,
  },
  {
    step: '03',
    title: 'Written Upfront Quote',
    description:
      'You receive a written price for the repair and, where relevant, replacement options at multiple price points. Nothing happens until you approve it.',
    icon: DollarSign,
  },
  {
    step: '04',
    title: 'Same-Day Repair',
    description:
      'Most repairs are completed on the first visit from stock carried on our trucks, and every repair carries a 1-year parts and labour warranty.',
    icon: CheckCircle2,
  },
];

/* -------------------------------------------------------------------------- */
/*  About page                                                                 */
/* -------------------------------------------------------------------------- */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Marcus Delgado',
    role: 'Founder & Master Technician',
    bio: 'Founded PolarPeak in 2009 after 12 years in commercial HVAC. NATE-certified in four specialties and still runs emergency calls on weekends.',
    image: {
      src: placeholderImage(400, 400, 'Marcus Delgado', '1E3A5F', 'F97316'),
      alt: 'Portrait of Marcus Delgado, founder and master technician',
      width: 400,
      height: 400,
    },
  },
  {
    name: 'Dana Whitfield',
    role: 'Service Manager',
    bio: 'Runs the dispatch desk and the 60-minute emergency promise. Fifteen years of field service operations and the reason our arrival windows hold.',
    image: {
      src: placeholderImage(400, 400, 'Dana Whitfield', '1E3A5F', 'F97316'),
      alt: 'Portrait of Dana Whitfield, service manager',
      width: 400,
      height: 400,
    },
  },
  {
    name: 'Tyler Brooks',
    role: 'Lead Installation Technician',
    bio: 'Has commissioned more than 1,400 furnaces, heat pumps and mini-split systems. Load-calculation specialist and rebate paperwork wizard.',
    image: {
      src: placeholderImage(400, 400, 'Tyler Brooks', '1E3A5F', 'F97316'),
      alt: 'Portrait of Tyler Brooks, lead installation technician',
      width: 400,
      height: 400,
    },
  },
  {
    name: 'Priya Raman',
    role: 'Indoor Air Quality Specialist',
    bio: 'Certified in residential air balancing and ventilation design. Builds the duct cleaning, filtration and humidity plans that fix allergy complaints.',
    image: {
      src: placeholderImage(400, 400, 'Priya Raman', '1E3A5F', 'F97316'),
      alt: 'Portrait of Priya Raman, indoor air quality specialist',
      width: 400,
      height: 400,
    },
  },
];

export type Certification = {
  name: string;
  detail: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    name: 'NATE Certified',
    detail: 'North American Technician Excellence',
    icon: Award,
  },
  {
    name: 'EPA Section 608',
    detail: 'Certified refrigerant handling',
    icon: ShieldCheck,
  },
  {
    name: 'BBB A+ Accredited',
    detail: 'Better Business Bureau accredited business',
    icon: BadgeCheck,
  },
  {
    name: 'Licensed & Insured',
    detail: 'Ohio HVAC License #48291',
    icon: CheckCircle2,
  },
  {
    name: 'ENERGY STAR Partner',
    detail: 'High-efficiency equipment installers',
    icon: Leaf,
  },
  {
    name: 'Google Guaranteed',
    detail: 'Background-checked and insured crew',
    icon: Star,
  },
];

/* -------------------------------------------------------------------------- */
/*  Opening hours                                                              */
/* -------------------------------------------------------------------------- */

export type BusinessHour = {
  day: string;
  hours: string;
  highlight?: boolean;
};

export const businessHours: BusinessHour[] = [
  { day: 'Monday – Friday', hours: '7:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Sunday', hours: '9:00 AM – 5:00 PM' },
  { day: 'Emergency Service', hours: '24 hours / 7 days', highlight: true },
];





