const plans = [
  {
    name: 'Starter',
    price: '79',
    desc: 'For small agencies launching their first Umrah or Hajj program.',
    features: [
      { text: 'Up to 200 pilgrims/season', included: true },
      { text: '3 staff accounts', included: true },
      { text: 'All CRM modules included', included: true },
      { text: 'Invoice generation & email', included: true },
      { text: 'Document vault', included: true },
      { text: 'Lead & quotation management', included: true },
      { text: 'Basic task management', included: true },
      { text: 'White-label portal', included: false },
      { text: 'GDS flight API', included: false },
    ],
    popular: false,
    btn: 'Start Free Trial',
  },
  {
    name: 'Agency Pro',
    price: '199',
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
    popular: true,
    btn: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: '499',
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
    popular: false,
    btn: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section relative" style={{ background: 'var(--midnight2)' }}>
      <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.1 }} />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="section-title">Simple Plans. No Hidden Fees.</h2>
          <p className="section-subtitle">Flat monthly pricing. No per-booking commissions. No setup fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`glass-card p-8 relative fade-up ${plan.popular ? 'glow-gold' : ''}`}
              style={{ animationDelay: `${i * 0.1}s`, borderColor: plan.popular ? 'rgba(184,146,63,0.3)' : 'var(--border)', borderWidth: plan.popular ? '2px' : '1px' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--gold)', color: '#ffffff' }}>
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{plan.name}</h3>
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
              <a href={plan.btn === 'Contact Sales' ? '#contact' : '#contact'} className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all ${plan.popular ? 'btn-gold' : 'btn-outline'}`}>
                {plan.btn}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm max-w-2xl mx-auto" style={{ color: 'var(--text-dim)' }}>
          All plans include a 14-day free trial. No credit card required. Annual billing saves 20%.<br />
          <strong>Need a custom solution?</strong> <a href="#contact" style={{ color: 'var(--gold)' }}>Talk to us about bespoke development</a>.
        </p>
      </div>
    </section>
  );
}
