import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { contactInfo, placeholderImage, siteConfig } from '@/lib/data';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const metaDescription =
  'Fast, reliable HVAC service in Columbus, Ohio. 24/7 emergency AC repair, heating installation, furnace tune-ups, duct cleaning and indoor air quality testing. Licensed, insured and NATE-certified. Call (614) 555-0192.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'PolarPeak HVAC | Columbus HVAC Repair, Installation & 24/7 Service',
    template: '%s | PolarPeak HVAC',
  },
  description: metaDescription,
  applicationName: siteConfig.name,
  keywords: [
    'HVAC Columbus Ohio',
    'AC repair Columbus',
    'furnace installation Columbus',
    'emergency HVAC service',
    'duct cleaning Columbus',
    'indoor air quality testing',
    'heating installation Ohio',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'PolarPeak HVAC | Fast, Reliable HVAC Service — 24/7 Emergency Repairs',
    description: metaDescription,
    images: [
      {
        url: placeholderImage(1200, 630, 'PolarPeak HVAC', '1E3A5F', 'F97316'),
        width: 1200,
        height: 630,
        alt: 'PolarPeak HVAC — Columbus, Ohio heating and cooling specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolarPeak HVAC | Columbus HVAC Repair & 24/7 Emergency Service',
    description: metaDescription,
    images: [placeholderImage(1200, 630, 'PolarPeak HVAC', '1E3A5F', 'F97316')],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'format-detection': 'telephone=yes',
  },
};

export const viewport: Viewport = {
  themeColor: '#1E3A5F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-white font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <Navbar />
        {children}
        <Footer />

        {/* Botpress Web Chat — chat bubble renders in the bottom-right corner */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v1/inject.js"
          strategy="lazyOnload"
        />
        <Script
          id="botpress-webchat-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.botpressWebChat.init({
                botId: 'demo-bot-id-placeholder',
                clientId: 'demo-bot-id-placeholder',
                hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
                messagingUrl: 'https://messaging.botpress.cloud',
                composerPlaceholder: 'Ask about HVAC service in Columbus...',
                botName: 'PolarPeak Assistant',
                avatarUrl: '${placeholderImage(64, 64, 'PP', '1E3A5F', 'F97316')}',
                phoneNumber: '${contactInfo.phoneDisplay}',
                themeName: 'prism',
                themeColor: '#F97316',
                useSessionStorage: true,
                enableConversationDeletion: true
              });
              // Replace 'demo-bot-id-placeholder' with real Botpress bot ID before going live
            `,
          }}
        />
      </body>
    </html>
  );
}

