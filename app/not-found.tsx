import Link from 'next/link';
import { ArrowLeft, Home, Phone } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex flex-1 items-center bg-slate-50 py-20 md:py-28"
    >
      <div className="container-page text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          This Page Went Offline
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600">
          The page you are looking for has moved or never existed. Our heating and
          cooling team is still here 24/7 — let us get you back on track.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-navy px-7 text-base">
            <Home className="h-5 w-5" aria-hidden="true" />
            Back to Homepage
          </Link>
          <Link href="/services" className="btn btn-outline-navy px-7 text-base">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Browse Services
          </Link>
          <a href={contactInfo.phoneHref} className="btn btn-accent px-7 text-base">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}
