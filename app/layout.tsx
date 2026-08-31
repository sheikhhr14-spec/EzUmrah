import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

const SITE_URL = 'https://umrah.eztechify.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies Worldwide | EzTechify',
    template: '%s | EzUmrah',
  },
  description:
    'EzUmrah is the all-in-one cloud CRM for travel agencies worldwide managing Umrah, Hajj, and holiday packages. Group bookings, flight management, hotel, visa, transport, invoicing, quotations, documents, and task management. Custom travel website and GDS integration services by EzTechify.',
  keywords: [
    'Umrah CRM', 'Hajj CRM', 'travel agency software', 'Umrah booking system', 'Hajj management software',
    'travel CRM', 'pilgrimage management', 'Umrah group booking', 'travel agency CRM', 'cloud travel software',
    'Umrah invoice software', 'travel quotation software', 'visa management system', 'hotel booking CRM',
    'flight booking CRM', 'Amadeus integration', 'Sabre integration', 'Galileo integration', 'Travelport integration',
    'GDS API integration', 'travel website development', 'Umrah travel portal', 'Hajj travel portal', 'Islamic travel software',
    'pilgrimage CRM', 'group booking software', 'travel document management', 'travel task management',
    'EzTechify', 'EzUmrah', 'Umrah SaaS', 'Hajj SaaS', 'travel agency automation', 'Umrah package management',
    'Ziyarat management', 'transport booking software', 'travel payment system', 'multi-currency travel software',
    'white label travel portal', 'travel mobile app', 'Umrah mobile app', 'Hajj mobile app',
    'Mecca hotel booking', 'Medina hotel booking', 'Haram hotel CRM',
    'Umrah travel agency software', 'Hajj travel agency software', 'Islamic travel CRM',
    'Muslim travel software', 'Umrah group management', 'Hajj quota management', 'Mina tent management',
    'Arafat logistics software', 'travel BI analytics', 'travel reporting software', 'Umrah lead management',
    'travel sales CRM', 'travel itinerary builder', 'travel package builder', 'travel reservation system',
    'travel PNR management', 'travel ticketing software', 'travel agent portal', 'travel B2B software',
    'travel B2C software', 'online travel booking engine', 'pilgrim management software',
    'Umrah document vault', 'Hajj document management', 'travel invoice software',
    'Umrah CRM UK', 'Umrah CRM USA', 'Umrah CRM India', 'Umrah CRM Pakistan', 'Umrah CRM Turkey',
    'Umrah CRM Malaysia', 'Umrah CRM Indonesia', 'Umrah CRM Egypt', 'Umrah CRM UAE', 'Umrah CRM Saudi Arabia',
    'Hajj CRM UK', 'Hajj CRM USA', 'Hajj CRM India', 'Hajj CRM Pakistan', 'Hajj CRM Malaysia',
    'travel agency software UK', 'travel agency software USA', 'travel agency software India',
    'travel agency software Pakistan', 'travel agency software UAE', 'travel agency software Malaysia',
    'Islamic travel technology', 'halal travel software', 'Muslim pilgrimage software',
    'Umrah management system', 'Hajj management system', 'travel CRM global', 'travel CRM worldwide',
    'cloud CRM for travel agents', 'SaaS travel CRM', 'best travel CRM software', 'travel CRM for small agencies',
    'travel CRM for large operators', 'Umrah booking platform', 'Hajj booking platform',
    'pilgrim tracking software', 'visa tracking system', 'travel document storage',
    'GDS integration services', 'Amadeus API integration', 'Sabre API integration',
    'white label travel booking engine', 'travel API integration', 'travel software development company',
    'custom travel CRM development', 'travel website design', 'Umrah website development',
    'best Umrah CRM software', 'top travel CRM 2026', 'Umrah CRM pricing', 'travel CRM comparison',
    'Umrah booking software', 'Hajj booking software', 'pilgrimage booking system',
    'travel agency management system', 'Umrah operator software', 'Hajj operator software',
    'Saudi Arabia travel software', 'Middle East travel CRM', 'GCC travel software',
    'Umrah visa management', 'Hajj visa tracking', 'Umrah document management system',
    'travel agency digital transformation', 'cloud Umrah management', 'Umrah SaaS platform',
  ],
  authors: [{ name: 'EzTechify', url: 'https://eztechify.com' }],
  creator: 'EzTechify',
  publisher: 'EzTechify',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-GB': '/',
      'en': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en'],
    url: SITE_URL,
    title: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies Worldwide',
    description:
      'The all-in-one cloud CRM for travel agencies worldwide managing Umrah, Hajj, and holiday packages. Group bookings, flights, hotels, visas, invoicing, quotations, and document management. Trusted by 850+ agencies in 120+ countries.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies Worldwide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies Worldwide',
    description: 'The all-in-one cloud CRM for travel agencies worldwide managing Umrah, Hajj, and holiday packages. Trusted by 850+ agencies in 120+ countries.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  category: 'technology',
  other: {
    'distribution': 'global',
    'rating': 'general',
    'revisit-after': '3 days',
    'language': 'English',
    'coverage': 'Worldwide',
    'target': 'global',
    'audience': 'travel agencies, tour operators, Umrah and Hajj service providers worldwide',
    'geo.distribution': 'global',
    'referrer': 'origin-when-cross-origin',
  },
};

const jsonLd = [
  // WebSite schema with SearchAction for AI/SERP
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EzUmrah',
    url: SITE_URL,
    description: 'Cloud-based CRM for Umrah, Hajj, and holiday travel agencies worldwide.',
    publisher: { '@type': 'Organization', name: 'EzTechify', url: 'https://eztechify.com' },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/faq?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  // SoftwareApplication — detailed for AI citations
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EzUmrah',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Travel CRM',
    operatingSystem: 'Web',
    url: SITE_URL,
    description: 'EzUmrah is a cloud-based CRM software built for travel agencies worldwide managing Umrah, Hajj, and holiday packages. It includes 9 modules: group bookings, flight management, hotel reservations, visa tracking, transport, invoicing, quotations, document vault, and task management. Trusted by 850+ agencies in 120+ countries.',
    offers: [
      { '@type': 'Offer', name: 'Starter Plan', price: '79', priceCurrency: 'USD', description: 'Up to 200 pilgrims, 3 staff accounts, all CRM modules' },
      { '@type': 'Offer', name: 'Agency Pro Plan', price: '199', priceCurrency: 'USD', description: 'Up to 1,000 pilgrims, 15 staff, GDS integration, white-label portal' },
      { '@type': 'Offer', name: 'Enterprise Plan', price: '499', priceCurrency: 'USD', description: 'Unlimited pilgrims, Hajj quota management, dedicated account manager' },
    ],
    author: { '@type': 'Organization', name: 'EzTechify', url: 'https://eztechify.com' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1247', bestRating: '5', worstRating: '1' },
    audience: { '@type': 'BusinessAudience' },
    areaServed: [
      { '@type': 'Place', name: 'Worldwide' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'Pakistan' },
      { '@type': 'Country', name: 'Turkey' },
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    featureList: [
      'Group bookings management (1 to 500+ pilgrims)',
      'Flight management with GDS integration',
      'Hotel reservations in Mecca, Medina, and worldwide',
      'Visa tracking and document management',
      'Transport and Ziyarat tour management',
      'Branded invoicing and payment tracking',
      'Lead capture and quotation generation',
      'Encrypted document vault',
      'Task and team management with role-based permissions',
      'Hajj quota and Mina tent management',
      'White-label booking portals and mobile apps',
      'Multi-currency invoicing support',
    ],
  },
  // Organization
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EzTechify',
    url: 'https://eztechify.com',
    logo: `${SITE_URL}/icon.svg`,
    sameAs: ['https://linkedin.com/company/eztechify'],
    areaServed: 'Worldwide',
    knowsAbout: [
      'Umrah travel CRM', 'Hajj management software', 'GDS integration',
      'Travel agency software', 'Islamic travel technology', 'Pilgrimage management',
      'White-label travel platforms', 'Travel website development',
    ],
  },
  // FAQPage — optimized for AI/LLM citation
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is EzUmrah?', acceptedAnswer: { '@type': 'Answer', text: 'EzUmrah is a cloud-based CRM software specifically built for travel agencies that manage Umrah, Hajj, and holiday packages. It includes 9 modules: group bookings, flight management, hotel reservations, visa tracking, transport, invoicing, quotations, document vault, and task management. It is used by 850+ agencies in 120+ countries.' } },
      { '@type': 'Question', name: 'Can EzUmrah integrate with GDS systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, EzUmrah offers integration with major Global Distribution Systems including Amadeus, Sabre, Galileo, and Travelport. This allows agencies to access real-time flight inventory and pricing directly from their CRM dashboard. GDS integration is available on Agency Pro and Enterprise plans.' } },
      { '@type': 'Question', name: 'Is EzUmrah suitable for Hajj management?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. EzUmrah includes Hajj-specific features such as quota management, Mina tent allocation, Arafat logistics, and group tracking. It is used by agencies handling hundreds to thousands of pilgrims. The Enterprise plan includes the full Hajj quota management module.' } },
      { '@type': 'Question', name: 'Does EzUmrah offer white-label solutions?', acceptedAnswer: { '@type': 'Answer', text: "Yes, EzUmrah provides white-label booking portals and mobile apps that can be branded with your agency's logo, colors, and domain. This is available in the Agency Pro and Enterprise plans. Your customers see your brand throughout the booking experience." } },
      { '@type': 'Question', name: 'What is the pricing of EzUmrah?', acceptedAnswer: { '@type': 'Answer', text: 'EzUmrah offers three plans: Starter at $79/month, Agency Pro at $199/month (most popular), and Enterprise at $499/month. All plans include a 14-day free trial with no credit card required. Annual billing saves 20%. There are no per-booking commissions or setup fees.' } },
      { '@type': 'Question', name: 'Can I customize EzUmrah for my specific needs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. EzTechify offers custom development services to tailor EzUmrah to your unique workflow, build custom travel websites, integrate additional APIs, or create branded mobile apps. Every custom project starts with a discovery call to understand your requirements.' } },
      { '@type': 'Question', name: 'Which countries does EzUmrah support?', acceptedAnswer: { '@type': 'Answer', text: 'EzUmrah is a globally available cloud platform used by travel agencies in 120+ countries including the UK, USA, Saudi Arabia, India, Pakistan, Turkey, Malaysia, Indonesia, Egypt, and the UAE. It supports multi-currency invoicing and is accessible worldwide.' } },
      { '@type': 'Question', name: 'How long does it take to set up EzUmrah?', acceptedAnswer: { '@type': 'Answer', text: 'Most agencies are up and running in under a day. Sign up takes 2 minutes, account activation takes up to 4 hours for license verification, and the full setup process takes a few hours.' } },
      { '@type': 'Question', name: 'Is my data secure with EzUmrah?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We implement strict access controls, regular security audits, and automated backups. Document vault access is role-based, and we comply with GDPR and applicable local data protection laws.' } },
      { '@type': 'Question', name: 'Can I cancel my EzUmrah subscription anytime?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. There are no long-term contracts. You can cancel your subscription at any time, and it takes effect at the end of your current billing cycle. Upon cancellation, you have 30 days to export your data.' } },
      { '@type': 'Question', name: 'Does EzUmrah offer training and support?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Starter plans get support, Agency Pro gets priority support, and Enterprise gets a dedicated account manager with 24/7 priority support. We also provide a full onboarding guide, help centre with articles, and live walkthroughs for larger teams.' } },
      { '@type': 'Question', name: 'What if I need a feature that is not available in EzUmrah?', acceptedAnswer: { '@type': 'Answer', text: "If you need a feature that is not in the standard CRM, our custom development team can build it for you. We've built everything from custom reporting dashboards to full white-label travel websites. Reach out through our contact form to discuss your requirements." } },
    ],
  },
  // BreadcrumbList — site structure for AI
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'CRM Modules', item: `${SITE_URL}/modules` },
      { '@type': 'ListItem', position: 3, name: 'GDS Integrations', item: `${SITE_URL}/integrations` },
      { '@type': 'ListItem', position: 4, name: 'Pricing', item: `${SITE_URL}/pricing` },
      { '@type': 'ListItem', position: 5, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 6, name: 'FAQ', item: `${SITE_URL}/faq` },
      { '@type': 'ListItem', position: 7, name: 'Contact', item: `${SITE_URL}/contact` },
    ],
  },
  // TouristProduct — Umrah packages for AI/SEO
  {
    "@context": "https://schema.org",
    "@type": "TouristProduct",
    name: "EzUmrah Umrah Packages 2026",
    url: `${SITE_URL}/umrah-packages`,
    description: "Affordable Umrah packages from Riyadh and Lahore. 3-day and 5-day bus packages from Riyadh, 7-day and 14-day flight packages from Lahore. Hotels, transport, Ziyarat, and airport transfers included.",
    offers: [
      { "@type": "Offer", name: "3-Day Express — Riyadh to Makkah + Madinah by Bus", price: "950", priceCurrency: "SAR" },
      { "@type": "Offer", name: "5-Day Value — Riyadh to Makkah + Madinah by Bus", price: "1450", priceCurrency: "SAR" },
      { "@type": "Offer", name: "7-Day Package — Lahore to Makkah + Madinah by Flight", price: "165000", priceCurrency: "PKR" },
      { "@type": "Offer", name: "14-Day Premium — Lahore to Makkah + Madinah by Flight", price: "295000", priceCurrency: "PKR" },
    ],
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
  },

];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {jsonLd.map((data, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
        ))}
        <meta name="theme-color" content="#07080d" />
        <meta name="geo.distribution" content="global" />
        <meta name="geo.placename" content="Worldwide" />
        <meta name="ICBM" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="global" />
        <meta name="audience" content="travel agencies, tour operators, Umrah and Hajj service providers worldwide" />
        <meta name="distribution" content="global" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="en-US" href={SITE_URL} />
        <link rel="alternate" hrefLang="en-GB" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <meta name="msvalidate.01" content="EzUmrah Travel CRM" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.variable} style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <div style={{ fontFamily: playfair.variable }}>{children}</div>
      </body>
    </html>
  );
}
