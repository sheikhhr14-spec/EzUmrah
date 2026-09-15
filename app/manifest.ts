import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies',
    short_name: 'EzUmrah',
    description:
      'The all-in-one cloud CRM for travel agencies managing Umrah, Hajj, and holiday packages.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafb',
    theme_color: '#f8fafb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
