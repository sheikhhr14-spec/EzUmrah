'use client';

import { useLang } from './LanguageContext';

const services = [
  { icon: '🔧', title: 'Custom CRM Development', desc: 'Need features beyond the standard CRM? We build custom modules tailored to your agency\u2019s unique workflow.' },
  { icon: '🌐', title: 'Travel Website Development', desc: 'Get a modern, SEO-optimized travel website with live flight search and booking engine.' },
  { icon: '🔌', title: 'GDS API Integration', desc: 'Connect Amadeus, Sabre, Galileo, or Travelport to your website or CRM for real-time inventory.' },
  { icon: '📱', title: 'Mobile App Development', desc: 'White-label iOS and Android apps for your agency brand with full CRM sync.' },
  { icon: '🏷️', title: 'White-Label Solutions', desc: 'Brand the entire EzUmrah platform with your logo, colors, and domain.' },
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="section relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">{t('services.eyebrow')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((svc, i) => (
            <div
              key={i}
              className="glass-card p-8 flex gap-5 fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)' }}
              >
                {svc.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>
                  {svc.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-gold text-base">
            {t('services.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
