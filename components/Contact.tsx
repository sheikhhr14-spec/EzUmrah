'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
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
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title">Let&apos;s Talk About Your Travel Agency</h2>
          <p className="section-subtitle">Have questions or need a custom solution? Reach out to our team and we&apos;ll get back to you within 24 hours.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 mb-6">
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>
              We&apos;d Love to Hear From You
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>
              Whether you&apos;re looking for a ready-to-use CRM, a custom-built travel platform, or GDS integration, our team is here to help. We serve agencies of all sizes — from startups to large operators.
            </p>
            <p className="text-xs" style={{ color: 'var(--text-faint)' }}>We typically respond within 4 business hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>Full Name</label>
              <input type="text" name="name" required placeholder="Your full name" className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ background: 'rgba(6,11,20,0.6)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>Email Address</label>
              <input type="email" name="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ background: 'rgba(6,11,20,0.6)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>Subject</label>
              <input type="text" name="subject" placeholder="What is this about?" className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ background: 'rgba(6,11,20,0.6)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>Your Message</label>
              <textarea name="message" required rows={5} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none" style={{ background: 'rgba(6,11,20,0.6)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn-gold w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="text-sm text-center p-3 rounded-xl" style={{ background: 'rgba(13,148,136,0.1)', color: 'var(--teal-light)' }}>
                Thank you! Your message has been sent. We&apos;ll get back to you within 24 hours.
              </div>
            )}

            {status === 'error' && (
              <div className="text-sm text-center p-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>
                Something went wrong. Please try again or reach out via our contact form.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
