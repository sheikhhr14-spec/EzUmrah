'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [animatedStats, setAnimatedStats] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimatedStats(true);
        }
      },
      { threshold: 0.3 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: '42K+', label: 'Pilgrims Managed' },
    { value: '850+', label: 'Agencies Using It' },
    { value: '120+', label: 'Countries' },
    { value: '4.9★', label: 'User Rating' },
  ];

  const mockupRows = [
    { initials: 'AK', name: 'Ahmed Khalid', meta: 'Economy Umrah • JED→JFK • 15 Jun', status: 'Booked', color: 'rgba(13,148,136,0.15)' },
    { initials: 'FH', name: 'Fatima Hassan', meta: 'Medina Combo • Group of 4 • 22 Jun', status: 'Pending', color: 'rgba(201,168,76,0.15)' },
    { initials: 'OU', name: 'Omar Usman', meta: 'Hajj Package • Group of 12 • Aug', status: 'Visa', color: 'rgba(59,130,246,0.15)' },
    { initials: 'MN', name: 'Mariam Nofal', meta: 'Ramadan Umrah • Solo • 10 Mar', status: 'Booked', color: 'rgba(13,148,136,0.15)' },
    { initials: 'YR', name: 'Yusuf Rahman', meta: 'Holiday Package • Family 5 • Dec', status: 'Quote', color: 'rgba(201,168,76,0.15)' },
  ];

  const trustLogos = ['Amadeus', 'Sabre', 'Travelport', 'Galileo', 'Saudi Tourism', 'Nusuk'];

  return (
    <>
      <section id="product" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #060b14 0%, #0c1222 50%, #111a2e 100%)' }}>
        <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(201,168,76,0.08)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(13,148,136,0.06)' }} />

        <div className="container relative z-10" style={{ paddingTop: '120px' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 fade-up" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--gold)' }}>
                <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                <span className="text-sm font-medium">Cloud Travel CRM for Umrah & Hajj Agencies</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-up" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--cream)', lineHeight: 1.1, animationDelay: '0.1s' }}>
                Ditch the Spreadsheets.<br />Run Your Agency From the Cloud.
              </h1>

              <p className="text-lg mb-8 max-w-2xl lg:max-w-none fade-up" style={{ color: 'var(--text-dim)', animationDelay: '0.2s' }}>
                EzUmrah is the all-in-one CRM built for travel agencies managing Umrah, Hajj, and holiday packages. Bookings, invoices, visas, hotels, transport, documents, leads, and tasks — all in one Islamic-inspired dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up" style={{ animationDelay: '0.3s' }}>
                <a href="#pricing" className="btn-gold text-base">Start Free 14-Day Trial</a>
                <a href="#services" className="btn-outline text-base">Need a Custom Solution?</a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 fade-up" style={{ animationDelay: '0.4s' }}>
                {stats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--text-faint)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="glass-card p-0 overflow-hidden" style={{ background: 'rgba(12,18,34,0.8)' }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs" style={{ color: 'var(--text-dim)' }}>EzUmrah CRM Dashboard</span>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-4">
                    {['All Pilgrims', 'Bookings', 'Visas', 'Invoices'].map((tab, i) => (
                      <button key={tab} className={`text-xs px-3 py-1.5 rounded-lg ${i === 0 ? 'text-[var(--gold)]' : ''}`} style={{ background: i === 0 ? 'rgba(201,168,76,0.1)' : 'transparent', border: i === 0 ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent', color: i === 0 ? 'var(--gold)' : 'var(--text-faint)' }}>
                        {tab}
                      </button>
                    ))}
                  </div>
                  {mockupRows.map((row, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 px-2 rounded-lg mb-1" style={{ background: i % 2 === 0 ? 'rgba(6,11,20,0.3)' : 'transparent' }}>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: 'var(--midnight)' }}>
                        {row.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate" style={{ color: 'var(--cream)' }}>{row.name}</div>
                        <div className="text-xs truncate" style={{ color: 'var(--text-faint)' }}>{row.meta}</div>
                      </div>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: row.color, color: row.status === 'Booked' ? 'var(--teal-light)' : row.status === 'Pending' ? 'var(--gold)' : row.status === 'Visa' ? '#60a5fa' : 'var(--gold)' }}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, var(--midnight))' }} />
      </section>

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
    </>
  );
}
