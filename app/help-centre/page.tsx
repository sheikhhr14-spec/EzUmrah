import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Centre',
  description: 'EzUmrah Help Centre — Find guides, tutorials, FAQs, and support resources for your Umrah & Hajj travel CRM.',
};

const helpCategories = [
  {
    icon: '🚀',
    title: 'Getting Started',
    articles: [
      'How to create your EzUmrah account',
      'Verifying your travel agency license',
      'Adding your first team members',
      'Setting up your agency branding and logo',
    ],
  },
  {
    icon: '👥',
    title: 'Managing Pilgrims & Groups',
    articles: [
      'Adding pilgrims individually vs bulk upload',
      'Setting up group bookings',
      'Room and seat allocation guide',
      'Managing mutawwif and guide assignments',
    ],
  },
  {
    icon: '✈️',
    title: 'Flights & GDS',
    articles: [
      'Manual flight entry walkthrough',
      'Connecting Amadeus GDS integration',
      'Connecting Sabre GDS integration',
      'Generating and sending e-tickets',
    ],
  },
  {
    icon: '📄',
    title: 'Invoicing & Documents',
    articles: [
      'Creating branded invoices',
      'Setting up installment plans',
      'Uploading pilgrim documents to the vault',
      'Document expiry alerts configuration',
    ],
  },
  {
    icon: '📝',
    title: 'Leads & Quotations',
    articles: [
      'Capturing leads from your website',
      'Creating professional PDF quotations',
      'Tracking quotation open rates',
      'Setting up follow-up reminders',
    ],
  },
  {
    icon: '⚙️',
    title: 'Account & Settings',
    articles: [
      'Managing staff permissions and roles',
      'Configuring notification preferences',
      'Exporting your data',
      'Cancelling or upgrading your subscription',
    ],
  },
];

export default function HelpCentre() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
      <div className="container py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--cream)' }}>Help Centre</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-dim)' }}>Find guides, tutorials, and answers to common questions about using EzUmrah.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((cat, i) => (
            <div key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{cat.title}</h2>
              <ul className="space-y-3">
                {cat.articles.map((article, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-dim)' }}>
                      → {article}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm mb-4" style={{ color: 'var(--text-faint)' }}>Can&apos;t find what you&apos;re looking for?</p>
          <a href="/#contact" className="btn-gold text-sm">Contact Support</a>
        </div>
      </div>
    </div>
  );
}
