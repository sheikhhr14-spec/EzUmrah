'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(() => {}, { threshold: 0.3 });
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: '42K+', label: 'Pilgrims' },
    { value: '120+', label: 'Countries' },
    { value: '4.9★', label: 'Rating' },
  ];

  const mockupRows = [
    { initials: 'AK', name: 'Ahmed Khalid', meta: 'Economy Umrah • JED→JFK', status: 'Booked', statusColor: 'rgba(13, 124, 78, 0.15)', textColor: '#0d7c4e' },
    { initials: 'FH', name: 'Fatima Hassan', meta: 'Medina Combo • Group of 4', status: 'Pending', statusColor: 'rgba(184, 146, 63, 0.15)', textColor: '#d4b27a' },
    { initials: 'OU', name: 'Omar Usman', meta: 'Hajj Package • Group of 12', status: 'Visa', statusColor: 'rgba(96, 165, 250, 0.15)', textColor: '#60a5fa' },
    { initials: 'MN', name: 'Mariam Nofal', meta: 'Ramadan Umrah • Solo', status: 'Booked', statusColor: 'rgba(13, 124, 78, 0.15)', textColor: '#0d7c4e' },
    { initials: 'YR', name: 'Yusuf Rahman', meta: 'Holiday Package • Family 5', status: 'Quote', statusColor: 'rgba(184, 146, 63, 0.15)', textColor: '#d4b27a' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, #f1f5f9 0%, #f8fafb 60%, #f8fafb 100%)' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.25 }} />
      <div className="absolute inset-0 grid-pattern" />
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(184, 146, 63, 0.4) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(13, 124, 78, 0.3) 0%, transparent 70%)' }}
      />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 z-[5]"
        style={{ background: 'linear-gradient(to bottom, var(--midnight) 0%, transparent 100%)' }}
      />

      <div className="container relative z-10" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Left — Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 fade-up"
              style={{
                background: 'rgba(184, 146, 63, 0.05)',
                border: '1px solid rgba(184, 146, 63, 0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: 'var(--gold)' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--gold)' }} />
              </span>
              <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--gold2)' }}>
                Cloud CRM for Umrah &amp; Hajj Agencies — Worldwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.5rem] md:text-6xl lg:text-[4rem] font-bold mb-6 fade-up leading-[1.05] tracking-tight"
              style={{
                fontFamily: 'var(--font-playfair), serif',
                color: 'var(--cream)',
                animationDelay: '0.1s',
              }}
            >
              Ditch the spreadsheets.
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #b8923f 0%, #d4b27a 40%, #d4b27a 60%, #d4b27a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}>
                Run your agency
              </span>
              <br />
              from the cloud.
            </h1>

            {/* Subhead */}
            <p className="text-lg mb-10 max-w-xl lg:max-w-lg fade-up leading-relaxed"
              style={{ color: 'var(--text-dim)', animationDelay: '0.2s' }}
            >
              The all-in-one CRM for travel agencies managing Umrah, Hajj, and holiday packages. Bookings, invoices, visas, hotels, transport, documents — all in one beautifully designed dashboard.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up mb-16"
              style={{ animationDelay: '0.3s' }}
            >
              <a href="/pricing" className="btn-gold text-base">
                Start Free 14-Day Trial
                <span className="text-base">→</span>
              </a>
              <a href="/services" className="btn-outline text-base">
                Need a Custom Solution?
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold mb-1 tracking-tight"
                    style={{
                      fontFamily: 'var(--font-playfair), serif',
                      background: 'linear-gradient(135deg, #0f172a 0%, #b8923f 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--text-faint)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="fade-up relative" style={{ animationDelay: '0.35s' }}>
            {/* Glow behind card */}
            <div className="absolute -inset-4 rounded-[28px] blur-2xl opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(184, 146, 63, 0.3) 0%, transparent 70%)' }}
            />

            <div className="relative rounded-[20px] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 251, 0.85) 100%)',
                backdropFilter: 'blur(20px) saturate(140%)',
                border: '1px solid rgba(184, 146, 63, 0.12)',
                boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5), 0 0 60px rgba(184, 146, 63, 0.08)',
              }}
            >
              {/* Browser top bar */}
              <div className="flex items-center gap-2 px-5 py-3.5"
                style={{ borderBottom: '1px solid rgba(184, 146, 63, 0.06)' }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(239, 68, 68, 0.6)' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(234, 179, 8, 0.6)' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(34, 197, 94, 0.6)' }} />
                <div className="ml-3 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-md" style={{ background: 'rgba(184, 146, 63, 0.15)' }} />
                  <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--text-dim)' }}>
                    EzUmrah CRM Dashboard
                  </span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5">
                {/* Tabs */}
                <div className="flex gap-2 mb-5">
                  {['All Pilgrims', 'Bookings', 'Visas', 'Invoices'].map((tab, i) => (
                    <button key={tab}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-300"
                      style={{
                        background: i === 0 ? 'rgba(184, 146, 63, 0.08)' : 'transparent',
                        border: i === 0 ? '1px solid rgba(184, 146, 63, 0.15)' : '1px solid transparent',
                        color: i === 0 ? 'var(--gold2)' : 'var(--text-faint)',
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Pilgrim rows */}
                <div className="space-y-1">
                  {mockupRows.map((row, i) => (
                    <div key={i}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-300 hover:bg-white/[0.02]"
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(184, 146, 63, 0.2) 0%, rgba(184, 146, 63, 0.05) 100%)',
                          border: '1px solid rgba(184, 146, 63, 0.1)',
                          color: 'var(--gold2)',
                        }}
                      >
                        {row.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate" style={{ color: 'var(--cream)' }}>{row.name}</div>
                        <div className="text-xs truncate" style={{ color: 'var(--text-faint)' }}>{row.meta}</div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg flex-shrink-0"
                        style={{
                          background: row.statusColor,
                          color: row.textColor,
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom stats bar */}
                <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid rgba(184, 146, 63, 0.06)' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--teal2)' }} />
                    <span className="text-xs" style={{ color: 'var(--text-faint)' }}>Live data · Updated 2m ago</span>
                  </div>
                  <span className="text-xs font-medium" style={{ color: 'var(--gold2)' }}>12 active bookings</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[5]"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--midnight))' }}
      />
    </section>
  );
}
