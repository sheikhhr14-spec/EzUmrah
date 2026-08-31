import type { MetadataRoute } from 'next';

const SITE_URL = 'https://umrah.eztechify.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${SITE_URL}/#modules`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_URL}/#services`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/#integrations`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/#pricing`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_URL}/#testimonials`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${SITE_URL}/#faq`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${SITE_URL}/#contact`, lastModified, changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, lastModified, changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${SITE_URL}/terms-of-service`, lastModified, changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${SITE_URL}/help-centre`, lastModified, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${SITE_URL}/onboarding-guide`, lastModified, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${SITE_URL}/changelog`, lastModified, changeFrequency: 'monthly' as const, priority: 0.4 },
  ];
}
