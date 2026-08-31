import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';

export const metadata: Metadata = {
  title: 'Custom Development Services for Travel Agencies',
  description:
    'EzTechify offers custom travel CRM development, travel website design with live search, GDS API integration, white-label booking platforms, and branded mobile apps for Umrah and Hajj agencies worldwide.',
  alternates: { canonical: '/services' },
};

const services = [
  {
    icon: '🔧', title: 'Custom Travel CRM',
    desc: "Bespoke CRM built specifically for your agency's workflow, branding, and requirements.",
    features: ['Tailored to your exact operational workflow', 'Custom reports and dashboards', 'Your branding, colors, and logo throughout', 'Integration with your existing tools', 'Dedicated training and onboarding'],
  },
  {
    icon: '🌐', title: 'Travel Website with Search',
    desc: 'Full-featured travel website with flight, hotel, and package search for your customers.',
    features: ['Live flight search powered by GDS', 'Hotel and package booking engine', 'Payment gateway integration', 'Customer account portal', 'SEO-optimized and mobile responsive'],
  },
  {
    icon: '🔌', title: 'GDS API Integration',
    desc: 'Connect Amadeus, Sabre, Galileo, or Travelport to your existing CRM or website.',
    features: ['Amadeus API integration', 'Sabre API integration', 'Galileo and Travelport support', 'Custom API development for niche providers', 'Ongoing maintenance and support'],
  },
  {
    icon: '🏷️', title: 'White-Label Solutions',
    desc: 'Your own branded booking platform powered by our infrastructure.',
    features: ['Your domain, your logo, your brand', 'Customizable booking flow', 'Commission and markup controls', 'Sub-agent and B2B portal access', 'Full white-label mobile apps'],
  },
  {
    icon: '📱', title: 'Mobile App Development',
    desc: 'Branded pilgrim apps for iOS and Android with itinerary and notifications.',
    features: ['iOS and Android native apps', 'Pilgrim itinerary and documents access', 'Push notifications for booking updates', 'In-app payment and document upload', 'Branded with your agency identity'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
        <div className="container py-16">
          <div className="text-center mb-16">
            <span className="section-eyebrow">Custom Development</span>
            <h1 className="section-title">Need More Than the Standard CRM?</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              We build custom travel technology solutions tailored to your exact business needs. From bespoke CRMs to full travel websites with live search engines, GDS integrations, and branded mobile apps — EzTechify handles the full stack so you can focus on selling packages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((svc, i) => (
              <div key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex gap-5 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)' }}>
                    {svc.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-1" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{svc.title}</h2>
                    <p className="text-sm" style={{ color: 'var(--text-dim)' }}>{svc.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {svc.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-dim)' }}>
                      <span style={{ color: 'var(--teal-light)' }}>✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-sm mb-6 max-w-2xl mx-auto" style={{ color: 'var(--text-dim)' }}>
              Every project starts with a discovery call. We learn your workflow, understand your pain points, and propose a solution that fits your budget and timeline. No templates — just tailored technology.
            </p>
            <a href="/contact" className="btn-gold text-base">Discuss Your Project</a>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
