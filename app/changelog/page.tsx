import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'EzUmrah Changelog — Track the latest updates, new features, bug fixes, and improvements to the EzUmrah CRM platform.',
};

const releases = [
  {
    version: 'v2.4.0',
    date: 'January 2026',
    type: 'Feature Release',
    changes: [
      { type: 'new', text: 'White-label booking portal now available for Agency Pro and Enterprise plans' },
      { type: 'new', text: 'WhatsApp Business API integration for automated booking notifications' },
      { type: 'new', text: 'Pilgrim mobile app (iOS & Android) with branded itinerary and push notifications' },
      { type: 'improve', text: 'Faster quotation builder — now creates PDFs in under 2 seconds' },
      { type: 'improve', text: 'Dashboard analytics redesigned with real-time charts and exportable reports' },
      { type: 'fix', text: 'Fixed issue where document expiry alerts were not sending for some users' },
    ],
  },
  {
    version: 'v2.3.0',
    date: 'November 2025',
    type: 'Feature Release',
    changes: [
      { type: 'new', text: 'Hajj quota management module for Enterprise plan' },
      { type: 'new', text: 'Multi-agency sub-accounts for large operators' },
      { type: 'new', text: 'Custom API access and webhook notifications' },
      { type: 'improve', text: 'Bulk pilgrim upload now supports 500+ records at once' },
      { type: 'improve', text: 'Invoice templates now support Arabic text rendering' },
      { type: 'fix', text: 'Fixed room allocation conflict when editing group bookings' },
    ],
  },
  {
    version: 'v2.2.0',
    date: 'September 2025',
    type: 'Feature Release',
    changes: [
      { type: 'new', text: 'GDS integration with Amadeus and Sabre for real-time flight search' },
      { type: 'new', text: 'Advanced analytics and reporting module' },
      { type: 'new', text: 'Installment plan management for invoices' },
      { type: 'improve', text: 'Document vault upgraded with 50GB and 500GB tiers' },
      { type: 'fix', text: 'Fixed email delivery issues for quotation notifications' },
    ],
  },
  {
    version: 'v2.1.0',
    date: 'July 2025',
    type: 'Feature Release',
    changes: [
      { type: 'new', text: 'Lead capture form integration' },
      { type: 'new', text: 'Professional PDF quotation generator' },
      { type: 'new', text: 'Follow-up reminders and task automation' },
      { type: 'improve', text: 'Hotel management now includes distance-from-Haram filter' },
      { type: 'fix', text: 'Fixed visa status tracking not updating for bulk uploads' },
    ],
  },
  {
    version: 'v2.0.0',
    date: 'May 2025',
    type: 'Major Release',
    changes: [
      { type: 'new', text: 'Complete platform redesign with Islamic-inspired dark theme' },
      { type: 'new', text: 'All 9 CRM modules launched: Group Bookings, Flights, Hotels, Visa, Transport, Documents, Quotations, Invoicing, Tasks' },
      { type: 'new', text: 'Bilingual support (English/Arabic) with RTL layout' },
      { type: 'improve', text: 'Platform migrated to cloud-native architecture for 99.9% uptime' },
    ],
  },
];

const typeConfig: Record<string, { label: string; color: string; bg: string }> = {
  new: { label: 'New', color: '#14b8a6', bg: 'rgba(13,148,136,0.1)' },
  improve: { label: 'Improved', color: '#c9a84c', bg: 'rgba(201,168,76,0.1)' },
  fix: { label: 'Fixed', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)' },
};

export default function Changelog() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
      <div className="container max-w-4xl py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--cream)' }}>Changelog</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-dim)' }}>Track the latest updates, new features, bug fixes, and improvements to EzUmrah.</p>

        <div className="space-y-8">
          {releases.map((release, i) => (
            <div key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-xl font-bold" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{release.version}</h2>
                <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', border: '1px solid var(--border)' }}>{release.type}</span>
                <span className="text-sm" style={{ color: 'var(--text-faint)' }}>{release.date}</span>
              </div>

              <ul className="space-y-3">
                {release.changes.map((change, j) => {
                  const cfg = typeConfig[change.type];
                  return (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0" style={{ background: cfg.bg, color: cfg.color, minWidth: '70px', textAlign: 'center' }}>
                        {cfg.label}
                      </span>
                      <span className="text-sm" style={{ color: 'var(--text-dim)' }}>{change.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
