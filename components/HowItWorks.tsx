'use client';

import { useLang } from './LanguageContext';

const steps = [
  { num: '01', icon: '🚀', title: 'Sign Up Free', desc: 'Create your account in 60 seconds. No credit card required.' },
  { num: '02', icon: '📥', title: 'Import Your Data', desc: 'Upload your existing bookings, contacts, and suppliers via CSV.' },
  { num: '03', icon: '⚙️', title: 'Configure Your Modules', desc: 'Enable the modules you need. Customize workflows for your agency.' },
  { num: '04', icon: '🎉', title: 'Start Booking', desc: 'Create your first booking, send your first quotation, and go live.' },
];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how" className="section relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">{t('how.eyebrow')}</span>
          <h2 className="section-title">{t('how.title')}</h2>
          <p className="section-subtitle">{t('how.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 left-full w-full h-0.5 -z-10"
                  style={{ background: 'linear-gradient(to right, var(--gold-glow), transparent)' }}
                />
              )}
              <div className="glass-card p-8 text-center h-full">
                <div
                  className="text-4xl font-bold mb-4 opacity-30"
                  style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}
                >
                  {step.num}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
