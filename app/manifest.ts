import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies',
    short_name: 'EzUmrah',
    description:
      'The all-in-one cloud CRM for travel agencies managing Umrah, Hajj, and holiday packages.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060b14',
    theme_color: '#060b14',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
