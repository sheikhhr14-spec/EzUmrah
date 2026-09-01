import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'GDS Integrations — Amadeus, Sabre, Galileo & Travelport',
  description:
    'EzUmrah integrates with Amadeus, Sabre, Galileo, and Travelport for real-time flight search, pricing, and booking. Connect your travel CRM to the world\'s largest GDS systems and search live inventory from your dashboard.',
  alternates: { canonical: '/integrations' },
};

const integrations = [
  {
    name: 'Amadeus', letter: 'A',
    desc: 'Access the world\u2019s largest GDS with 200+ airlines, real-time pricing, and comprehensive hotel inventory.',
    features: ['Real-time flight search across 200+ airlines', 'Hotel bookings worldwide', 'Car rental and transfer integration', 'Amadeus Web Services API', 'PNR creation and e-ticket delivery'],
  },
  {
    name: 'Sabre', letter: 'S',
    desc: 'Connect to Sabre\u2019s vast travel network for flights, hotels, and car rentals with competitive pricing.',
    features: ['Sabre REST and SOAP APIs', 'Bargain Finder Max for cheap flight search', 'Hotel property descriptions and booking', 'Sabre Red 360 integration support', 'Group booking tools'],
  },
  {
    name: 'Galileo', letter: 'G',
    desc: 'Integrate Travelport Galileo for comprehensive travel inventory management and booking.',
    features: ['Travelport Universal API', 'Flight, hotel, and car search', 'Galileo Smartpoint integration', 'Multi-GDS support', 'Fare quoting and booking'],
  },
  {
    name: 'Travelport', letter: 'T',
    desc: 'Multi-GDS platform with Smartpoint and universal API integration for maximum coverage.',
    features: ['Travelport Universal API', 'Access to low-cost carriers', 'Branded fares and ancillaries', 'Smartpoint workspace integration', 'Multi-content aggregation'],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
        <div className="container py-16">
          <div className="text-center mb-16">
            <span className="section-eyebrow">GDS Integrations</span>
            <h1 className="section-title">Connect to Global Travel Inventory</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              We integrate the world\u2019s leading GDS systems directly into your EzUmrah CRM or custom travel website. Search live flight inventory, compare pricing across airlines, generate PNRs, and deliver e-tickets — all from one dashboard. No more switching between browser tabs or calling agents for quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {integrations.map((integ, i) => (
              <div key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(184,146,63,0.1), rgba(13,148,136,0.1))', border: '1px solid var(--border)', color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>
                    {integ.letter}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{integ.name}</h2>
                    <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mt-1" style={{ background: 'rgba(13,148,136,0.1)', color: 'var(--teal-light)', border: '1px solid rgba(13,148,136,0.2)' }}>
                      ✓ Available
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>{integ.desc}</p>
                <ul className="space-y-2">
                  {integ.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-dim)' }}>
                      <span style={{ color: 'var(--teal-light)' }}>✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 max-w-3xl mx-auto mt-12 text-center">
            <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>
              Need a Custom GDS Integration?
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--text-dim)' }}>
              If your preferred provider isn&apos;t listed here, we can build a custom API integration. We&apos;ve connected niche regional carriers, consolidator platforms, and direct airline APIs. Tell us what you need.
            </p>
            <a href="/contact" className="btn-gold text-sm">Request Custom Integration</a>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
