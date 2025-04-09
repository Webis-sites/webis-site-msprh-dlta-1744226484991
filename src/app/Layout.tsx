import React, { ReactNode } from 'react';
import { Metadata, Viewport } from 'next';
import { Inter, Heebo } from 'next/font/google';
import clsx from 'clsx';
import { NextSeo } from 'next-seo';

// Font configuration
const inter = Inter({ subsets: ['latin'] });
const heebo = Heebo({ subsets: ['hebrew'] });

// Metadata configuration
export const metadata: Metadata = {
  title: 'מספרה דלתא | עיצוב שיער מקצועי',
  description: 'מספרה דלתא - מספרה מקצועית עם שירות אישי ואיכותי. תספורות, צבע, טיפולי שיער ועוד.',
  keywords: 'מספרה, עיצוב שיער, תספורת, צבע שיער, טיפולי שיער, מספרה דלתא',
  authors: [{ name: 'מספרה דלתא', url: 'https://www.delta-barbershop.co.il' }],
  creator: 'מספרה דלתא',
  publisher: 'מספרה דלתא',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://www.delta-barbershop.co.il'),
  alternates: {
    canonical: '/',
    languages: {
      'he-IL': '/',
    },
  },
  openGraph: {
    title: 'מספרה דלתא | עיצוב שיער מקצועי',
    description: 'מספרה דלתא - מספרה מקצועית עם שירות אישי ואיכותי. תספורות, צבע, טיפולי שיער ועוד.',
    url: 'https://www.delta-barbershop.co.il',
    siteName: 'מספרה דלתא',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: 'https://www.delta-barbershop.co.il/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'מספרה דלתא',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מספרה דלתא | עיצוב שיער מקצועי',
    description: 'מספרה דלתא - מספרה מקצועית עם שירות אישי ואיכותי. תספורות, צבע, טיפולי שיער ועוד.',
    images: ['https://www.delta-barbershop.co.il/images/twitter-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#588C7E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Schema for local business
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'מספרה דלתא',
  image: 'https://www.delta-barbershop.co.il/images/storefront.jpg',
  '@id': 'https://www.delta-barbershop.co.il',
  url: 'https://www.delta-barbershop.co.il',
  telephone: '+972-123-456-789',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'רחוב הרצל 123',
    addressLocality: 'תל אביב',
    postalCode: '6120101',
    addressCountry: 'IL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.0853,
    longitude: 34.7818,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  priceRange: '₪₪',
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <NextSeo
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, maximum-scale=5',
            },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={clsx(
          heebo.className,
          'bg-background text-foreground min-h-screen',
          'flex flex-col rtl'
        )}
      >
        <header className="sticky top-0 z-50 w-full">
          <div className="glassmorphism-nav border-b border-primary/10 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="neumorphic-logo flex items-center">
                  <h1 className="text-2xl font-bold text-primary">מספרה דלתא</h1>
                </div>
                <nav className="hidden md:block">
                  <ul className="flex space-x-8 space-x-reverse">
                    {['ראשי', 'שירותים', 'גלריה', 'מחירון', 'צור קשר'].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item}`}
                          className="neumorphic-link relative px-2 py-1 text-lg font-medium text-foreground transition-all duration-300 hover:text-primary"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="neumorphic-button md:hidden">
                  <button
                    aria-label="פתח תפריט"
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                  >
                    <span className="sr-only">פתח תפריט</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">{children}</div>
        </main>

        <footer className="bg-primary/5 border-t border-primary/10">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-xl font-bold">מספרה דלתא</h3>
                <p className="mb-4 text-foreground/80">
                  מספרה מקצועית עם שירות אישי ואיכותי. תספורות, צבע, טיפולי שיער ועוד.
                </p>
                <div className="flex space-x-4 space-x-reverse">
                  {['facebook', 'instagram', 'whatsapp'].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="neumorphic-social-icon flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-primary"
                      aria-label={social}
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">שעות פעילות</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>ראשון - חמישי</span>
                    <span>09:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>שישי</span>
                    <span>09:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>שבת</span>
                    <span>סגור</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">צור קשר</h3>
                <address className="not-italic">
                  <p className="mb-2">רחוב הרצל 123, תל אביב</p>
                  <p className="mb-2">
                    <a href="tel:+972123456789" className="hover:text-primary">
                      טלפון: 123-456-789
                    </a>
                  </p>
                  <p className="mb-2">
                    <a href="mailto:info@delta-barbershop.co.il" className="hover:text-primary">
                      דוא"ל: info@delta-barbershop.co.il
                    </a>
                  </p>
                </address>
              </div>
            </div>
            <div className="mt-8 border-t border-primary/10 pt-8 text-center">
              <p className="text-sm text-foreground/70">
                © {new Date().getFullYear()} מספרה דלתא. כל הזכויות שמורות.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}