import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';

export const metadata: Metadata = {
  title: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies Worldwide',
  description:
    'EzUmrah is the all-in-one cloud CRM for travel agencies worldwide managing Umrah, Hajj, and holiday packages. Group bookings, flight management, hotel, visa, transport, invoicing, quotations, documents, and task management. Trusted by 850+ agencies in 120+ countries.',
  alternates: { canonical: '/' },
};

const moduleHighlights = [
  { icon: '👥', title: 'Group Bookings', desc: 'Manage groups from 1 to 500+ pilgrims with seat allocation, room sharing, and group-wise invoicing.', href: '/modules' },
  { icon: '✈️', title: 'Flight Management', desc: 'Manual flight entry or GDS API integration. Generate PNRs, print tickets, and email e-tickets automatically.', href: '/modules' },
  { icon: '🛂', title: 'Visa Management', desc: 'Track visa status for every pilgrim. Upload documents, monitor approvals, and get expiry alerts.', href: '/modules' },
  { icon: '📄', title: 'Invoicing & Payments', desc: 'Generate branded invoices, track payments, send reminders, and manage installment plans.', href: '/modules' },
];

const trustLogos = ['Amadeus', 'Sabre', 'Travelport', 'Galileo', 'Saudi Tourism', 'Nusuk'];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Trust bar */}
        <div className="py-8" style={{ background: 'var(--midnight)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <p className="text-center text-sm mb-4" style={{ color: 'var(--text-faint)' }}>
              Trusted by travel agencies &amp; GDS partners worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {trustLogos.map((logo) => (
                <span key={logo} className="text-lg font-semibold" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-playfair), serif' }}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Why EzUmrah section — original content */}
        <section className="section relative">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <span className="section-eyebrow">Why EzUmrah</span>
              <h2 className="section-title">From Spreadsheets to a Cloud System in One Day</h2>
              <p className="section-subtitle">
                Travel agencies worldwide still run on Excel sheets, WhatsApp groups, and paper files. EzUmrah replaces all of that with a proper cloud CRM — built specifically for Umrah, Hajj, and holiday package operators. No more lost bookings, missed visa deadlines, or invoicing chaos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="glass-card p-8 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>Stop Losing Data in Spreadsheets</h3>
                <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
                  Every booking, every pilgrim, every document — stored securely in the cloud. Your team sees the same data in real-time, whether they&apos;re in the office or on the go.
                </p>
              </div>
              <div className="glass-card p-8 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>10x Faster Operations</h3>
                <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
                  Create professional quotations in 2 minutes. Generate branded invoices in seconds. Track payments, send reminders, and manage installment plans — all automated.
                </p>
              </div>
              <div className="glass-card p-8 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>Built for Global Agencies</h3>
                <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
                  Multi-currency support. Works from any country. GDS integrations with Amadeus, Sabre, Galileo, and Travelport. Whether you operate from London, Karachi, or Kuala Lumpur — EzUmrah adapts to your workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Module highlights — links to /modules */}
        <section className="section relative" style={{ background: 'var(--midnight2)' }}>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <span className="section-eyebrow">CRM Modules</span>
              <h2 className="section-title">Nine Modules. One Dashboard. Zero Spreadsheets.</h2>
              <p className="section-subtitle">
                Every tool a travel agency needs to run Umrah, Hajj, and holiday packages — from lead capture to departure day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {moduleHighlights.map((mod, i) => (
                <a key={i} href={mod.href} className="glass-card p-8 block transition-all hover:scale-[1.02] fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="text-4xl mb-4">{mod.icon}</div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{mod.title}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>{mod.desc}</p>
                  <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>Learn more →</span>
                </a>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="/modules" className="btn-gold text-base">Explore All 9 Modules</a>
            </div>
          </div>
        </section>

        {/* GDS integration teaser */}
        <section className="section relative">
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <span className="section-eyebrow">GDS Integrations</span>
                <h2 className="section-title text-left">Connect to the World&apos;s Largest Travel Inventory</h2>
                <p className="text-sm mb-6" style={{ color: 'var(--text-dim)' }}>
                  We integrate Amadeus, Sabre, Galileo, and Travelport directly into your EzUmrah CRM. Search live flight inventory, compare pricing across airlines, and book — all from your dashboard. No more switching between tabs or calling agents for quotes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-dim)' }}><span style={{ color: 'var(--teal-light)' }}>✓</span> Real-time flight search and pricing</li>
                  <li className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-dim)' }}><span style={{ color: 'var(--teal-light)' }}>✓</span> PNR generation and e-ticket delivery</li>
                  <li className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-dim)' }}><span style={{ color: 'var(--teal-light)' }}>✓</span> Hotel and car rental integrations</li>
                  <li className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-dim)' }}><span style={{ color: 'var(--teal-light)' }}>✓</span> Custom API development for other providers</li>
                </ul>
                <a href="/integrations" className="btn-gold text-sm">See All Integrations</a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Amadeus', 'Sabre', 'Galileo', 'Travelport'].map((name) => (
                  <div key={name} className="glass-card p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl font-bold" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(13,148,136,0.1))', border: '1px solid var(--border)', color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>
                      {name.charAt(0)}
                    </div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--cream)' }}>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works teaser */}
        <section className="section relative" style={{ background: 'var(--midnight2)' }}>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <span className="section-eyebrow">Getting Started</span>
              <h2 className="section-title">From Signup to First Booking in 4 Steps</h2>
              <p className="section-subtitle">No technical knowledge needed. Your team can be up and running in under a day.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', icon: '📝', title: 'Create Your Account', desc: 'Sign up in 2 minutes. Verify your travel agency license. We activate within 4 hours.' },
                { num: '02', icon: '⚙️', title: 'Configure Your CRM', desc: 'Add your team, upload your logo, set up package templates, and configure invoice branding.' },
                { num: '03', icon: '👤', title: 'Add Your First Pilgrim', desc: 'Enter pilgrim details, upload documents, assign flights & hotels, generate quotations.' },
                { num: '04', icon: '📤', title: 'Invoice & Go Live', desc: 'Print branded invoices, send confirmation notifications, and track every booking to departure.' },
              ].map((step, i) => (
                <div key={i} className="glass-card p-8 text-center fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-4xl font-bold mb-4 opacity-30" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>{step.num}</div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-dim)' }}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="/onboarding-guide" className="btn-outline text-sm">Read the Full Onboarding Guide</a>
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="section relative">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <span className="section-eyebrow">Pricing</span>
              <h2 className="section-title">Simple Plans. No Hidden Fees.</h2>
              <p className="section-subtitle">Flat monthly pricing. No per-booking commissions. No setup fees. Cancel anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Starter', price: '79', desc: 'For small agencies launching their first Umrah or Hajj program.', features: ['Up to 200 pilgrims/season', '3 staff accounts', 'All CRM modules included', 'Invoice Invoice & email notifications', 'Document vault'], popular: false },
                { name: 'Agency Pro', price: '199', desc: 'For growing agencies with multiple programs and online presence needs.', features: ['Up to 1,000 pilgrims/season', '15 staff accounts', 'White-label portal', 'GDS flight search', 'WhatsApp Business API'], popular: true },
                { name: 'Enterprise', price: '499', desc: 'For large operators handling thousands of pilgrims.', features: ['Unlimited pilgrims', 'Unlimited staff accounts', 'Hajj quota management', 'Multi-agency sub-accounts', 'Dedicated account manager'], popular: false },
              ].map((plan, i) => (
                <div key={i} className={`glass-card p-8 relative ${plan.popular ? 'glow-gold' : ''}`} style={{ borderColor: plan.popular ? 'rgba(201,168,76,0.3)' : 'var(--border)', borderWidth: plan.popular ? '2px' : '1px' }}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--gold)', color: 'var(--midnight)' }}>Most Popular</div>
                  )}
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{plan.name}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>${plan.price}</span>
                    <span className="text-sm" style={{ color: 'var(--text-faint)' }}> / month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-dim)' }}>
                        <span style={{ color: 'var(--teal-light)' }}>✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <a href="/pricing" className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all ${plan.popular ? 'btn-gold' : 'btn-outline'}`}>
                    View Details
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial highlight */}
        <section className="section relative" style={{ background: 'var(--midnight2)' }}>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <span className="section-eyebrow">Customer Stories</span>
              <h2 className="section-title">Agencies That Switched to EzUmrah</h2>
              <p className="section-subtitle">From spreadsheets and WhatsApp chaos to a proper cloud CRM.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: 'We used to manage 200 pilgrims in Excel. Now everything is in EzUmrah — bookings, visas, invoices, documents. We print professional invoices in seconds.', name: 'Ahmed Al-Khalidi', role: 'Director, Madinat Travel — Riyadh', initials: 'AK' },
                { text: 'The quotation module alone saved us 10 hours a week. We create quotes in 2 minutes, send them by email, and track which leads opened them. Conversion up 40%.', name: 'Fatima Hassan', role: 'CEO, Baraka Umrah Tours — London', initials: 'FH' },
                { text: 'EzTechify built us a custom travel website with Sabre integration. Our customers search flights live and bookings go straight into our EzUmrah CRM.', name: 'Sufyan Idris', role: 'Tech Lead, Ihram Digital — Kuala Lumpur', initials: 'SI' },
              ].map((item, i) => (
                <article key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-lg mb-4" style={{ color: 'var(--gold)' }}>★★★★★</div>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text)' }}>&ldquo;{item.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: 'var(--midnight)' }}>{item.initials}</div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: 'var(--cream)' }}>{item.name}</div>
                      <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{item.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="/testimonials" className="btn-outline text-sm">Read More Stories</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.3 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,11,20,0.9) 0%, rgba(12,18,34,0.95) 100%)' }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl" style={{ background: 'rgba(201,168,76,0.1)' }} />
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--cream)' }}>
              Ready to Move Your Agency to the Cloud?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-dim)' }}>
              Join 850+ travel agencies using EzUmrah to manage pilgrims, bookings, invoices, and documents — all from one dashboard. Or let us build you a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/pricing" className="btn-gold text-base">Start Free 14-Day Trial</a>
              <a href="/contact" className="btn-outline text-base">Discuss Custom Project</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
