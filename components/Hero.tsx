'use client';

import { useLang } from './LanguageContext';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const { t, lang } = useLang();

  const stats = [
    { value: t('hero.stat1'), label: t('hero.stat1_label'), suffix: '+' },
    { value: t('hero.stat2'), label: t('hero.stat2_label'), suffix: '+' },
    { value: t('hero.stat3'), label: t('hero.stat3_label'), suffix: '+' },
    { value: t('hero.stat4'), label: t('hero.stat4_label'), suffix: '%' },
  ];

  return (
    <section
      id="product"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060b14 0%, #0c1222 50%, #111a2e 100%)' }}
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.3 }} />
      <div className="absolute inset-0 grid-pattern" />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(201,168,76,0.08)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(13,148,136,0.06)' }}
      />

      <div className="container relative z-10 text-center" style={{ paddingTop: '100px' }}>
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 fade-up"
          style={{
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.2)',
            color: 'var(--gold)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
          <span className="text-sm font-medium">{t('hero.badge')}</span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-up"
          style={{
            fontFamily: 'var(--font-playfair), serif',
            color: 'var(--cream)',
            lineHeight: 1.1,
            animationDelay: '0.1s',
          }}
        >
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl mb-10 fade-up max-w-3xl mx-auto"
          style={{ color: 'var(--text-dim)', animationDelay: '0.2s' }}
        >
          {t('hero.subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up" style={{ animationDelay: '0.3s' }}>
          <a href="#pricing" className="btn-gold text-base">
            {t('hero.cta1')}
          </a>
          <a href="#how" className="btn-outline text-base">
            {t('hero.cta2')}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 fade-up" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl md:text-5xl font-bold mb-2"
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  color: 'var(--gold)',
                }}
              >
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm" style={{ color: 'var(--text-faint)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--midnight))' }}
      />
    </section>
  );
}
