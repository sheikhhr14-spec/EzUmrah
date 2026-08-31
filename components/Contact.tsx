'use client';

import { useState, FormEvent } from 'react';
import { useLang } from './LanguageContext';

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xppzwyvz', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid var(--border)' }}
                >
                  📧
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--cream)' }}>
                    {t('contact.email_label')}
                  </div>
                  <a href="mailto:umrah@eztechify.com" className="text-sm hover:text-[var(--gold)] transition-colors" style={{ color: 'var(--text-dim)' }}>
                    umrah@eztechify.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)' }}
                >
                  📞
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--cream)' }}>
                    {t('contact.phone_label')}
                  </div>
                  <a href="tel:+966500000000" className="text-sm hover:text-[var(--gold)] transition-colors" style={{ color: 'var(--text-dim)' }}>
                    +966 50 000 0000
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid var(--border)' }}
                >
                  🕐
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--cream)' }}>
                    {t('contact.hours_label')}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-dim)' }}>
                    {t('contact.hours_value')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: 'rgba(6,11,20,0.6)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: 'rgba(6,11,20,0.6)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>
                {t('contact.form.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+966 50 000 0000"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: 'rgba(6,11,20,0.6)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: 'rgba(6,11,20,0.6)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>
                {t('contact.form.message')}
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                style={{
                  background: 'rgba(6,11,20,0.6)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-gold w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : t('contact.form.submit')}
            </button>

            {status === 'success' && (
              <div className="text-sm text-center p-3 rounded-xl" style={{ background: 'rgba(13,148,136,0.1)', color: 'var(--teal-light)' }}>
                {t('contact.form.success')}
              </div>
            )}

            {status === 'error' && (
              <div className="text-sm text-center p-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>
                {t('contact.form.error')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
