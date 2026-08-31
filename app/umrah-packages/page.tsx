import type { Metadata } from 'next';
import PackagesClient from './PackagesClient';

export const metadata: Metadata = {
  title: 'Umrah Packages 2026 — Affordable Umrah from Riyadh & Lahore | EzUmrah',
  description:
    'Book affordable Umrah packages from Riyadh and Lahore. 3-day and 5-day bus packages from Riyadh, 7-day and 14-day flight packages from Lahore. Hotels, transport, Ziyarat, and airport transfers included. Start your spiritual journey today.',
  keywords: [
    'Umrah packages 2026', 'Umrah from Riyadh', 'Umrah from Lahore', 'cheap Umrah packages',
    '3 day Umrah package', '5 day Umrah package', '7 day Umrah package', '14 day Umrah package',
    'Umrah by bus', 'Umrah by flight', 'Makkah Madinah package', 'Umrah with hotel',
    'Umrah Ziyarat package', 'Saudi Umrah package', 'Pakistan Umrah package',
    'Umrah from Saudi Arabia', 'Umrah from Pakistan', 'budget Umrah', 'Umrah deals',
  ],
  alternates: { canonical: '/umrah-packages' },
  openGraph: {
    title: 'Umrah Packages 2026 — From Riyadh & Lahore | EzUmrah',
    description: 'Affordable Umrah packages with hotels, transport, Ziyarat, and airport transfers. 3 to 14 day options available.',
    type: 'website',
  },
};

export default function UmrahPackagesPage() {
  return <PackagesClient />;
}
