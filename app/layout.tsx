import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cairo } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo', display: 'swap' });

const SITE_URL = 'https://umrah.eztechify.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies | EzTechify',
    template: '%s | EzUmrah',
  },
  description:
    'EzUmrah is the all-in-one cloud CRM for travel agencies managing Umrah, Hajj, and holiday packages. Group bookings, flight management, hotel, visa, transport, invoicing, quotations, documents, and task management. Custom travel website and GDS integration services by EzTechify.',
  keywords: [
    'Umrah CRM',
    'Hajj CRM',
    'travel agency software',
    'Umrah booking system',
    'Hajj management software',
    'travel CRM',
    'pilgrimage management',
    'Umrah group booking',
    'travel agency CRM',
    'cloud travel software',
    'Umrah invoice software',
    'travel quotation software',
    'visa management system',
    'hotel booking CRM',
    'flight booking CRM',
    'Amadeus integration',
    'Sabre integration',
    'Galileo integration',
    'Travelport integration',
    'GDS API',
    'travel website development',
    'Umrah travel portal',
    'Hajj travel portal',
    'Islamic travel software',
    'pilgrimage CRM',
    'group booking software',
    'travel document management',
    'travel task management',
    'EzTechify',
    'EzUmrah',
    'Umrah SaaS',
    'Hajj SaaS',
    'travel agency automation',
    'Umrah package management',
    'Ziyarat management',
    'transport booking software',
    'travel payment system',
    'multi-currency travel software',
    'white label travel portal',
    'travel mobile app',
    'Umrah mobile app',
    'Hajj mobile app',
    'Saudi eVisa integration',
    'Nusuk integration',
    'Mecca hotel booking',
    'Medina hotel booking',
    'Haram hotel CRM',
    'Umrah travel agency software',
    'Hajj travel agency software',
    'Islamic travel CRM',
    'Muslim travel software',
    'Umrah group management',
    'Hajj quota management',
    'Mina tent management',
    'Arafat logistics software',
    'travel BI analytics',
    'travel reporting software',
    'Umrah lead management',
    'travel sales CRM',
    'travel itinerary builder',
    'travel package builder',
    'travel reservation system',
    'travel PNR management',
    'travel ticketing software',
    'travel agent portal',
    'travel B2B software',
    'travel B2C software',
    'online travel booking engine',
  ],
  authors: [{ name: 'EzTechify', url: 'https://eztechify.com' }],
  creator: 'EzTechify',
  publisher: 'EzTechify',
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'ar': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: SITE_URL,
    siteName: 'EzUmrah',
    title: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies',
    description:
      'The all-in-one cloud CRM for travel agencies managing Umrah, Hajj, and holiday packages. Group bookings, flights, hotels, visas, invoicing, quotations, and document management.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies',
    description:
      'The all-in-one cloud CRM for travel agencies managing Umrah, Hajj, and holiday packages.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EzUmrah',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    description:
      'EzUmrah is a cloud-based CRM software specifically built for travel agencies that manage Umrah, Hajj, and holiday packages. It includes modules for group bookings, flight management, hotel reservations, visa tracking, transport, invoicing, quotations, document vault, and task management.',
    offers: [
      { '@type': 'Offer', name: 'Starter Plan', price: '79', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Agency Pro Plan', price: '199', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Enterprise Plan', price: '499', priceCurrency: 'USD' },
    ],
    author: {
      '@type': 'Organization',
      name: 'EzTechify',
      url: 'https://eztechify.com',
      email: 'umrah@eztechify.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1247',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EzTechify',
    url: 'https://eztechify.com',
    logo: `${SITE_URL}/logo.png`,
    email: 'umrah@eztechify.com',
    sameAs: ['https://linkedin.com/company/eztechify'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is EzUmrah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EzUmrah is a cloud-based CRM software specifically built for travel agencies that manage Umrah, Hajj, and holiday packages. It includes modules for group bookings, flight management, hotel reservations, visa tracking, transport, invoicing, quotations, document vault, and task management.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can EzUmrah integrate with GDS systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, EzUmrah offers integration with major Global Distribution Systems including Amadeus, Sabre, Galileo, and Travelport. This allows agencies to access real-time flight inventory and pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is EzUmrah suitable for Hajj management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. EzUmrah includes Hajj-specific features such as quota management, Mina tent allocation, Arafat logistics, and group tracking. It is used by agencies handling hundreds to thousands of pilgrims.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does EzUmrah offer white-label solutions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, EzUmrah provides white-label booking portals and mobile apps that can be branded with your agency\u2019s logo and colors. This is available in the Agency Pro and Enterprise plans.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the pricing of EzUmrah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EzUmrah offers three plans: Starter at $79/month, Agency Pro at $199/month (most popular), and Enterprise at $499/month. All plans include a 14-day free trial with no credit card required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I migrate from my current system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer free data migration from spreadsheets, other CRMs, and legacy systems. Our team handles the entire process for you.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'CRM Modules', item: `${SITE_URL}/#modules` },
      { '@type': 'ListItem', position: 3, name: 'Pricing', item: `${SITE_URL}/#pricing` },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {jsonLd.map((data, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
        ))}
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${cairo.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
