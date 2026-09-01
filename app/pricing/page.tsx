import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Pricing — Simple Plans for Travel Agencies of All Sizes',
  description:
    'EzUmrah pricing: Starter at $79/month, Agency Pro at $199/month (most popular), and Enterprise at $499/month. All plans include a 14-day free trial with no credit card. Flat monthly pricing, no per-booking commissions, no setup fees.',
  alternates: { canonical: '/pricing' },
};

const plans = [
  {
    name: 'Starter', price: '79',
    desc: 'For small agencies launching their first Umrah or Hajj program.',
    features: [
      { text: 'Up to 200 pilgrims/season', included: true },
      { text: '3 staff accounts', included: true },
      { text: 'All 9 CRM modules included', included: true },
      { text: 'Invoice generation Invoice generation & email notifications', included: true },
      { text: 'Document vault', included: true },
      { text: 'Lead & quotation management', included: true },
      { text: 'Basic task management', included: true },
      { text: 'White-label portal', included: false },
      { text: 'GDS flight API', included: false },
    ],
    popular: false, btn: 'Start Free Trial',
  },
  {
    name: 'Agency Pro', price: '199',
    desc: 'For growing agencies with multiple programs and online presence needs.',
    features: [
      { text: 'Up to 1,000 pilgrims/season', included: true },
      { text: '15 staff accounts', included: true },
      { text: 'Everything in Starter', included: true },
      { text: 'White-label booking portal', included: true },
      { text: 'GDS flight search (Amadeus/Sabre)', included: true },
      { text: 'WhatsApp Business API', included: true },
      { text: 'Advanced analytics & reports', included: true },
      { text: 'Pilgrim mobile app (branded)', included: true },
    ],
    popular: true, btn: 'Start Free Trial',
  },
  {
    name: 'Enterprise', price: '499',
    desc: 'For large operators handling thousands of pilgrims with custom requirements.',
    features: [
      { text: 'Unlimited pilgrims', included: true },
      { text: 'Unlimited staff accounts', included: true },
      { text: 'Everything in Agency Pro', included: true },
      { text: 'Hajj quota management', included: true },
      { text: 'Multi-agency sub-accounts', included: true },
      { text: 'Custom API & webhooks', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Priority 24/7 support', included: true },
    ],
    popular: false, btn: 'Contact Sales',
  },
];

const comparison = [
  { feature: 'Pilgrims per season', starter: '200', pro: '1,000', enterprise: 'Unlimited' },
  { feature: 'Staff accounts', starter: '3', pro: '15', enterprise: 'Unlimited' },
  { feature: 'All CRM modules', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Invoice generation', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Document vault', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Lead & quotation management', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Task management', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
  { feature: 'White-label portal', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'GDS flight API', starter: '—', pro: 'Amadeus/Sabre', enterprise: 'All GDS' },
  { feature: 'WhatsApp Business API', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Advanced analytics', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Pilgrim mobile app', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Hajj quota management', starter: '—', pro: '—', enterprise: '✓' },
  { feature: 'Multi-agency sub-accounts', starter: '—', pro: '—', enterprise: '✓' },
  { feature: 'Custom API & webhooks', starter: '—', pro: '—', enterprise: '✓' },
  { feature: 'Dedicated account manager', starter: '—', pro: '—', enterprise: '✓' },
  { feature: 'Support level', starter: 'Standard', pro: 'Priority', enterprise: '24/7 Priority' },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
        <div className="container py-16">
          <div className="text-center mb-16">
            <span className="section-eyebrow">Pricing</span>
            <h1 className="section-title">Simple Plans. No Hidden Fees.</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Flat monthly pricing. No per-booking commissions. No setup fees. Cancel anytime. Every plan includes all 9 CRM modules — you only pay more as you grow.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {plans.map((plan, i) => (
              <div key={i} className={`glass-card p-8 relative ${plan.popular ? 'glow-gold' : ''}`} style={{ borderColor: plan.popular ? 'rgba(184,146,63,0.3)' : 'var(--border)', borderWidth: plan.popular ? '2px' : '1px' }}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--gold)', color: '#ffffff' }}>
                    Most Popular
                  </div>
                )}
                <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{plan.name}</h2>
                <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>${plan.price}</span>
                  <span className="text-sm" style={{ color: 'var(--text-faint)' }}> / month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: feat.included ? 'var(--text-dim)' : 'var(--text-faint)' }}>
                      <span style={{ color: feat.included ? 'var(--teal-light)' : '#ef4444' }}>{feat.included ? '✓' : '✕'}</span>
                      {feat.text}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all ${plan.popular ? 'btn-gold' : 'btn-outline'}`}>
                  {plan.btn}
                </a>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>Full Feature Comparison</h2>
            <div className="glass-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th className="text-left p-4 text-sm font-semibold" style={{ color: 'var(--cream)' }}>Feature</th>
                    <th className="text-center p-4 text-sm font-semibold" style={{ color: 'var(--cream)' }}>Starter</th>
                    <th className="text-center p-4 text-sm font-semibold" style={{ color: 'var(--gold)' }}>Agency Pro</th>
                    <th className="text-center p-4 text-sm font-semibold" style={{ color: 'var(--cream)' }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < comparison.length - 1 ? '1px solid rgba(184,146,63,0.06)' : 'none' }}>
                      <td className="p-4 text-sm" style={{ color: 'var(--text-dim)' }}>{row.feature}</td>
                      <td className="p-4 text-sm text-center" style={{ color: row.starter === '—' ? 'var(--text-faint)' : row.starter === '✓' ? 'var(--teal-light)' : 'var(--text-dim)' }}>{row.starter}</td>
                      <td className="p-4 text-sm text-center" style={{ color: row.pro === '—' ? 'var(--text-faint)' : row.pro === '✓' ? 'var(--teal-light)' : 'var(--text-dim)' }}>{row.pro}</td>
                      <td className="p-4 text-sm text-center" style={{ color: row.enterprise === '—' ? 'var(--text-faint)' : row.enterprise === '✓' ? 'var(--teal-light)' : 'var(--text-dim)' }}>{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm max-w-2xl mx-auto" style={{ color: 'var(--text-dim)' }}>
              All plans include a 14-day free trial. No credit card required. Annual billing saves 20%.<br />
              <strong>Need a custom solution?</strong> <a href="/contact" style={{ color: 'var(--gold)' }}>Talk to us about bespoke development</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
