import type { MetadataRoute } from 'next';

const SITE_URL = 'https://umrah.eztechify.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/#modules`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/#services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/#integrations`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/#pricing`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/#testimonials`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/#faq`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/#contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
