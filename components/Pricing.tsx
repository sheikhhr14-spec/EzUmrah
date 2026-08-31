'use client';

import { useLang } from './LanguageContext';

const plans = [
  {
    nameKey: 'pricing.starter_name',
    priceKey: 'pricing.starter_price',
    descKey: 'pricing.starter_desc',
    features: [
      'Up to 500 pilgrims/month',
      'Group booking management',
      'Invoicing & quotations',
      'Email support',
      'Document vault (5GB)',
    ],
    popular: false,
  },
  {
    nameKey: 'pricing.pro_name',
    priceKey: 'pricing.pro_price',
    descKey: 'pricing.pro_desc',
    features: [
      'Up to 5,000 pilgrims/month',
      'All Starter features',
      'GDS integration (1 system)',
      'White-label portal',
      'Task management',
      'Priority support',
      'Document vault (50GB)',
    ],
    popular: true,
  },
  {
    nameKey: 'pricing.enterprise_name',
    priceKey: 'pricing.enterprise_price',
    descKey: 'pricing.enterprise_desc',
    features: [
      'Unlimited pilgrims',
      'All Agency Pro features',
      'All GDS integrations',
      'Custom modules',
      'Dedicated manager',
      'API access & vault (500GB)',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="section relative" style={{ background: 'var(--midnight2)' }}>
      <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.1 }} />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">{t('pricing.eyebrow')}</span>
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">{t('pricing.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`glass-card p-8 relative fade-up ${plan.popular ? 'glow-gold' : ''}`}
              style={{
                animationDelay: `${i * 0.1}s`,
                borderColor: plan.popular ? 'rgba(201,168,76,0.3)' : 'var(--border)',
                borderWidth: plan.popular ? '2px' : '1px',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'var(--gold)', color: 'var(--midnight)' }}
                >
                  {t('pricing.pro_popular')}
                </div>
              )}
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>
                {t(plan.nameKey)}
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>
                {t(plan.descKey)}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>
                  {t(plan.priceKey)}
                </span>
                <span className="text-sm" style={{ color: 'var(--text-faint)' }}> /month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-dim)' }}>
                    <span style={{ color: 'var(--teal-light)' }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all ${plan.popular ? 'btn-gold' : 'btn-outline'}`}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-10 text-sm max-w-2xl mx-auto"
          style={{ color: 'var(--text-faint)' }}
          dangerouslySetInnerHTML={{ __html: t('pricing.footer') }}
        />
      </div>
    </section>
  );
}
