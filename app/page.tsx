import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies Worldwide',
  description:
    'EzUmrah is the all-in-one cloud CRM for travel agencies worldwide managing Umrah, Hajj, and holiday packages. Group bookings, flight management, hotel, visa, transport, invoicing, quotations, documents, and task management. Trusted by 850+ agencies in 120+ countries.',
  alternates: { canonical: '/' },
};

const moduleHighlights = [
  { icon: '👥', title: 'Group Bookings', desc: 'Manage groups from 1 to 500+ pilgrims with seat allocation, room sharing, and group-wise invoicing.', href: '/modules' },
  { icon: '✈️', title: 'Flight Management', desc: 'Manual flight entry or GDS API integration. Generate PNRs, print tickets, and send e-tickets automatically.', href: '/modules' },
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
        <div className="py-6 sm:py-8" style={{ background: 'var(--midnight)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <p className="text-center text-xs sm:text-sm mb-4" style={{ color: 'var(--text-faint)' }}>
              Trusted by travel agencies &amp; GDS partners worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12">
              {trustLogos.map((logo) => (
                <span key={logo} className="text-sm sm:text-lg font-semibold" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-playfair), serif' }}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Why EzUmrah section */}
        <section className="section relative">
          <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.2 }} />
          <div className="container relative z-10">
            <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
              <span className="section-eyebrow">Why EzUmrah</span>
              <h2 className="section-title">From Spreadsheets to a Cloud System in One Day</h2>
              <p className="section-subtitle">
                Travel agencies worldwide still run on Excel sheets, WhatsApp groups, and paper files. EzUmrah replaces all of that with a proper cloud CRM — built specifically for Umrah, Hajj, and holiday package operators.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: '📊', title: 'Stop Losing Data in Spreadsheets', desc: 'Every booking, every pilgrim, every document — stored securely in the cloud. Your team sees the same data in real-time, whether they&apos;re in the office or on the go.' },
                { icon: '⚡', title: '10x Faster Operations', desc: 'Create professional quotations in 2 minutes. Generate branded invoices in seconds. Track payments, send reminders, and manage installment plans — all automated.' },
                { icon: '🌍', title: 'Built for Global Agencies', desc: 'Multi-currency support. Works from any country. GDS integrations with Amadeus, Sabre, Galileo, and Travelport. Whether you operate from London, Karachi, or Kuala Lumpur — EzUmrah adapts.' },
              ].map((card, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                  <div className="glass-card p-6 sm:p-8 text-center h-full">
                    <div className="text-3xl sm:text-4xl mb-4 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>{card.icon}</div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{card.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-dim)' }}>{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Module highlights */}
        <section className="section relative" style={{ background: 'var(--midnight2)' }}>
          <div className="container relative z-10">
            <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
              <span className="section-eyebrow">CRM Modules</span>
              <h2 className="section-title">Nine Modules. One Dashboard. Zero Spreadsheets.</h2>
              <p className="section-subtitle">
                Every tool a travel agency needs to run Umrah, Hajj, and holiday packages — from lead capture to departure day.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {moduleHighlights.map((mod, i) => (
                <ScrollReveal key={i} animation="scale-in" delay={i * 100}>
                  <a href={mod.href} className="glass-card p-6 sm:p-8 block h-full">
                    <div className="text-3xl sm:text-4xl mb-4">{mod.icon}</div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{mod.title}</h3>
                    <p className="text-xs sm:text-sm mb-4" style={{ color: 'var(--text-dim)' }}>{mod.desc}</p>
                    <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>Learn more →</span>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={200} className="text-center mt-8 sm:mt-10">
              <a href="/modules" className="btn-gold text-sm sm:text-base">Explore All 9 Modules</a>
            </ScrollReveal>
          </div>
        </section>

        {/* GDS integration teaser */}
        <section className="section relative">
          <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.15 }} />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
              <ScrollReveal animation="slide-right">
                <span className="section-eyebrow">GDS Integrations</span>
                <h2 className="section-title text-left">Connect to the World&apos;s Largest Travel Inventory</h2>
                <p className="text-sm mb-6" style={{ color: 'var(--text-dim)' }}>
                  We integrate Amadeus, Sabre, Galileo, and Travelport directly into your EzUmrah CRM. Search live flight inventory, compare pricing across airlines, and book — all from your dashboard.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Real-time flight search and pricing', 'PNR generation and e-ticket delivery', 'Hotel and car rental integrations', 'Custom API development for other providers'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-dim)' }}>
                      <span style={{ color: 'var(--teal-light)' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a href="/integrations" className="btn-gold text-sm">See All Integrations</a>
              </ScrollReveal>

              <ScrollReveal animation="slide-left" delay={150}>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {['Amadeus', 'Sabre', 'Galileo', 'Travelport'].map((name) => (
                    <div key={name} className="glass-card p-6 sm:p-8 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 text-xl sm:text-2xl font-bold" style={{ background: 'linear-gradient(135deg, rgba(184,146,63,0.1), rgba(13,148,136,0.1))', border: '1px solid var(--border)', color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>
                        {name.charAt(0)}
                      </div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--cream)' }}>{name}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How it works teaser */}
        <section className="section relative" style={{ background: 'var(--midnight2)' }}>
          <div className="container relative z-10">
            <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
              <span className="section-eyebrow">Getting Started</span>
              <h2 className="section-title">From Signup to First Booking in 4 Steps</h2>
              <p className="section-subtitle">No technical knowledge needed. Your team can be up and running in under a day.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { num: '01', icon: '📝', title: 'Create Your Account', desc: 'Sign up in 2 minutes. Verify your travel agency license. Get activated within 4 hours.' },
                { num: '02', icon: '👥', title: 'Add Your Team', desc: 'Invite staff members, assign roles, and set permissions. Everyone sees only what they need.' },
                { num: '03', icon: '📦', title: 'Create Your First Package', desc: 'Build Umrah, Hajj, or holiday packages with flights, hotels, transport, and visa details.' },
                { num: '04', icon: '📤', title: 'Invoice & Go Live', desc: 'Print branded invoices, send confirmation notifications, and track every booking to departure.' },
              ].map((step, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                  <div className="glass-card p-6 sm:p-8 h-full relative">
                    <div className="absolute top-4 right-4 text-3xl font-bold opacity-10" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>{step.num}</div>
                    <div className="text-3xl sm:text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{step.title}</h3>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--text-dim)' }}>{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={200} className="text-center mt-8 sm:mt-10">
              <a href="/onboarding-guide" className="btn-outline text-sm">Read Full Onboarding Guide</a>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="section relative">
          <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.2 }} />
          <div className="container relative z-10">
            <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
              <span className="section-eyebrow">Pricing</span>
              <h2 className="section-title">Simple Plans. No Hidden Fees.</h2>
              <p className="section-subtitle">Flat monthly pricing. No per-booking commissions. Cancel anytime. 14-day free trial.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Starter', price: '79', desc: 'For small agencies launching their first Umrah or Hajj program.', features: ['Up to 200 pilgrims/season', '3 staff accounts', 'All CRM modules included', 'Invoice & notifications', 'Document vault'], popular: false },
                { name: 'Agency Pro', price: '199', desc: 'For growing agencies with multiple programs and online presence.', features: ['Up to 1,000 pilgrims/season', '15 staff accounts', 'Everything in Starter', 'GDS flight search', 'White-label portal', 'Pilgrim mobile app'], popular: true },
                { name: 'Enterprise', price: '499', desc: 'For large operators handling thousands of pilgrims.', features: ['Unlimited pilgrims', 'Unlimited staff', 'Everything in Agency Pro', 'Hajj quota management', 'Multi-agency sub-accounts', 'Dedicated account manager'], popular: false },
              ].map((plan, i) => (
                <ScrollReveal key={i} animation="scale-in" delay={i * 120} className={plan.popular ? 'glow-gold' : ''}>
                  <div className={`glass-card p-6 sm:p-8 h-full relative ${plan.popular ? 'pricing-card' : ''}`} style={{ borderColor: plan.popular ? 'rgba(184, 146, 63, 0.3)' : 'var(--border)', borderWidth: plan.popular ? '2px' : '1px' }}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap" style={{ background: 'var(--gold)', color: '#ffffff' }}>
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-lg font-bold mb-2 mt-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{plan.name}</h3>
                    <p className="text-xs mb-4" style={{ color: 'var(--text-dim)' }}>{plan.desc}</p>
                    <div className="mb-6">
                      <span className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>${plan.price}</span>
                      <span className="text-sm" style={{ color: 'var(--text-faint)' }}> / month</span>
                    </div>
                    <ul className="space-y-2.5 mb-8">
                      {plan.features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-dim)' }}>
                          <span style={{ color: 'var(--teal-light)' }}>✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                    <a href="/pricing" className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all ${plan.popular ? 'btn-gold' : 'btn-outline'}`} style={{ width: '100%' }}>
                      Start Free Trial
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={200} className="text-center mt-8 sm:mt-10">
              <a href="/pricing" className="btn-outline text-sm">See Full Pricing & Comparison</a>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials teaser */}
        <section className="section relative" style={{ background: 'var(--midnight2)' }}>
          <div className="container relative z-10">
            <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
              <span className="section-eyebrow">Customer Stories</span>
              <h2 className="section-title">Agencies That Switched to EzUmrah</h2>
              <p className="section-subtitle">From spreadsheets and WhatsApp chaos to a proper cloud CRM.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                { text: 'We used to manage 200 pilgrims in Excel. Now everything is in EzUmrah — bookings, visas, invoices, documents. Time savings alone justified the switch within the first month.', name: 'Ahmed Al-Khalidi', role: 'Director, Madinat Travel — Riyadh', initials: 'AK' },
                { text: 'The quotation module alone saved us 10 hours a week. We create quotes in 2 minutes, send them by email, and track which leads opened them. Conversion up 40%.', name: 'Fatima Hassan', role: 'CEO, Baraka Umrah Tours — London', initials: 'FH' },
                { text: 'EzTechify built us a custom travel website with Sabre integration. Our customers now search flights live on our site. Best investment we made in 10 years.', name: 'Sufyan Idris', role: 'Tech Lead, Ihram Digital — Kuala Lumpur', initials: 'SI' },
              ].map((item, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                  <article className="glass-card p-6 sm:p-8 h-full">
                    <div className="text-lg mb-4" style={{ color: 'var(--gold)' }}>★★★★★</div>
                    <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text)' }}>&ldquo;{item.text}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold2))', color: '#ffffff' }}>
                        {item.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-sm" style={{ color: 'var(--cream)' }}>{item.name}</div>
                        <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{item.role}</div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={200} className="text-center mt-8 sm:mt-10">
              <a href="/testimonials" className="btn-outline text-sm">Read More Stories</a>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA section */}
        <section className="section relative">
          <div className="container relative z-10">
            <ScrollReveal animation="scale-in" className="max-w-3xl mx-auto text-center">
              <div className="glass-card p-8 sm:p-12 glow-gold">
                <h2 className="text-xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>
                  Ready to Modernize Your Travel Agency?
                </h2>
                <p className="text-sm sm:text-base mb-8" style={{ color: 'var(--text-dim)' }}>
                  Start your 14-day free trial today. No credit card required. Full access to all 9 CRM modules. Cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/pricing" className="btn-gold text-sm sm:text-base">Start Free 14-Day Trial</a>
                  <a href="/contact" className="btn-outline text-sm sm:text-base">Talk to Us</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
