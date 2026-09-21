import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';

/**
 * Homepage — hero, services overview, why choose us, testimonials and the
 * emergency CTA band. The navbar and footer live in the root layout.
 */
export default function HomePage() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
