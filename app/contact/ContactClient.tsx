'use client';

import { useState, FormEvent } from 'react';

const countries = [
  'United Kingdom', 'United States', 'Saudi Arabia', 'India', 'Pakistan', 'Turkey',
  'Malaysia', 'Indonesia', 'Egypt', 'United Arab Emirates', 'Bangladesh', 'Nigeria',
  'South Africa', 'Morocco', 'Algeria', 'Tunisia', 'Jordan', 'Lebanon', 'Iraq',
  'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Yemen', 'Sudan', 'Libya', 'Mauritania',
  'Senegal', 'Gambia', 'Mali', 'Chad', 'Niger', 'Ghana', 'Kenya', 'Tanzania',
  'Uganda', 'Ethiopia', 'Somalia', 'Afghanistan', 'Iran', 'Syria',
  'Palestine', 'Brunei', 'Singapore', 'Thailand', 'Philippines', 'Vietnam',
  'Australia', 'New Zealand', 'Canada', 'Germany', 'France', 'Spain', 'Italy',
  'Netherlands', 'Belgium', 'Switzerland', 'Sweden', 'Norway', 'Denmark',
  'Other / Not Listed',
];

export default function ContactClient() {
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

  const inputStyle = {
    background: 'rgba(7, 8, 13, 0.6)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card p-6 sm:p-8 mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>
          We&apos;d Love to Hear From You
        </h2>
        <p className="text-sm mb-6" style={{ color: 'var(--text-dim)' }}>
          We serve agencies of all sizes — from startups to large operators handling thousands of pilgrims. Tell us about your agency, your current workflow, and what you&apos;re looking for. We respond within 4 business hours.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(7, 8, 13, 0.5)' }}>
            <div className="text-2xl">⚡</div>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--cream)' }}>Response Time</div>
              <div className="text-xs" style={{ color: 'var(--text-faint)' }}>Within 4 business hours</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(7, 8, 13, 0.5)' }}>
            <div className="text-2xl">🌍</div>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--cream)' }}>Global Coverage</div>
              <div className="text-xs" style={{ color: 'var(--text-faint)' }}>Serving 120+ countries</div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>Full Name *</label>
            <input type="text" name="name" required placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>Email Address *</label>
            <input type="email" name="email" required placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={inputStyle}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>WhatsApp Number *</label>
            <input type="tel" name="whatsapp_number" required placeholder="+44 7xx xxx xxxx"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>Country *</label>
            <select name="country" required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={inputStyle}
              defaultValue=""
            >
              <option value="" disabled>Select your country</option>
              {countries.map((country) => (
                <option key={country} value={country} style={{ background: '#0b0d16' }}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>Subject</label>
          <input type="text" name="subject" placeholder="What is this about?"
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
            style={inputStyle}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--cream)' }}>Your Message *</label>
          <textarea name="message" required rows={6} placeholder="Tell us about your agency, your current workflow, and what you're looking for..."
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
            style={inputStyle}
          />
        </div>

        <button type="submit" disabled={status === 'sending'} className="btn-gold w-full" style={{ justifyContent: 'center' }}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && (
          <div className="text-sm text-center p-3 rounded-xl" style={{ background: 'rgba(45, 212, 191, 0.1)', color: 'var(--teal2)' }}>
            Thank you! Your message has been sent. We&apos;ll get back to you within 24 hours.
          </div>
        )}
        {status === 'error' && (
          <div className="text-sm text-center p-3 rounded-xl" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
