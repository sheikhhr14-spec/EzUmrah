import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Customer Stories — Travel Agencies Using EzUmrah',
  description:
    'Read how travel agencies worldwide switched from spreadsheets to EzUmrah CRM. From 200 to 2,000+ pilgrims, see how EzUmrah transformed operations, saved time, and increased bookings.',
  alternates: { canonical: '/testimonials' },
};

const testimonials = [
  {
    text: 'We used to manage 200 pilgrims in Excel. Now everything is in EzUmrah — bookings, visas, invoices, documents. We print professional invoices in seconds and email them directly from the system. The time savings alone justified the switch within the first month.',
    name: 'Ahmed Al-Khalidi', role: 'Director, Madinat Travel — Riyadh, KSA', initials: 'AK',
  },
  {
    text: 'The quotation module alone saved us 10 hours a week. We create quotes in 2 minutes, send them by email, and track which leads opened them. Our conversion rate went up 40% because we can follow up at the right moment.',
    name: 'Fatima Hassan', role: 'CEO, Baraka Umrah Tours — London, UK', initials: 'FH',
  },
  {
    text: 'EzTechify built us a custom travel website with Sabre integration. Our customers now search flights live on our site and we get the bookings straight into our EzUmrah CRM. Best investment we made in 10 years of business.',
    name: 'Sufyan Idris', role: 'Tech Lead, Ihram Digital — Kuala Lumpur, MY', initials: 'SI',
  },
  {
    text: 'We handle 2,000+ pilgrims every Hajj season. The Hajj quota management and multi-agency sub-accounts feature lets us coordinate with our sub-agents without chaos. The Enterprise plan paid for itself in the first season.',
    name: 'Omar Al-Farsi', role: 'Operations Manager, Dar Al-Salam Travel — Dubai, UAE', initials: 'OF',
  },
  {
    text: 'As a small agency, the Starter plan gave us everything we needed. The document vault means no more lost passports — everything is in the cloud. Our team can work from home or the office and see the same data.',
    name: 'Aisha Khan', role: 'Founder, Safar Umrah — Karachi, Pakistan', initials: 'AK',
  },
  {
    text: 'The white-label portal transformed our brand. Our customers now book on our own website with our logo, not on a third-party platform. We look like a much bigger company than we are.',
    name: 'Yusuf Rahman', role: 'CEO, Al-Rahman Travels — Istanbul, Turkey', initials: 'YR',
  },
];

const stats = [
  { value: '850+', label: 'Agencies Using EzUmrah' },
  { value: '42K+', label: 'Pilgrims Managed' },
  { value: '120+', label: 'Countries Served' },
  { value: '4.9★', label: 'Average User Rating' },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
        <div className="container py-16">
          <div className="text-center mb-16">
            <span className="section-eyebrow">Customer Stories</span>
            <h1 className="section-title">Agencies That Switched to EzUmrah</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              From spreadsheets and WhatsApp chaos to a proper cloud CRM. Here&apos;s what happens when travel agencies move their operations to EzUmrah.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>{stat.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-faint)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((item, i) => (
              <article key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="text-lg mb-4" style={{ color: 'var(--gold)' }}>★★★★★</div>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text)' }}>&ldquo;{item.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: 'var(--midnight)' }}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--cream)' }}>{item.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{item.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-sm mb-6" style={{ color: 'var(--text-dim)' }}>Want to join these agencies?</p>
            <a href="/pricing" className="btn-gold text-base">Start Your Free Trial</a>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
