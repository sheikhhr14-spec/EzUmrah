'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/umrah-packages', label: 'Packages' },
    { href: '/modules', label: 'Modules' },
    { href: '/integrations', label: 'Integrations' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/services', label: 'Services' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(7, 8, 13, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201, 169, 106, 0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <div className="container flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(201, 169, 106, 0.15) 0%, rgba(201, 169, 106, 0.05) 100%)',
              border: '1px solid rgba(201, 169, 106, 0.2)',
            }}
          >
            🕋
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: '0 0 20px rgba(201, 169, 106, 0.3)' }}
            />
          </div>
          <span className="text-lg font-bold tracking-tight" style={{
            fontFamily: 'var(--font-playfair), serif',
            background: 'linear-gradient(135deg, #f8f6f1 0%, #c9a96a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            EzUmrah
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300"
              style={{ color: 'var(--text-dim)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--cream)';
                e.currentTarget.style.background = 'rgba(201, 169, 106, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-dim)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="/pricing" className="btn-gold text-sm ml-3" style={{ padding: '10px 24px' }}>
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px transition-transform duration-300" style={{
            background: 'var(--gold)',
            transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : '',
          }} />
          <span className="block w-5 h-px transition-opacity duration-300" style={{
            background: 'var(--gold)',
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span className="block w-5 h-px transition-transform duration-300" style={{
            background: 'var(--gold)',
            transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : '',
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: mobileOpen ? '400px' : '0px',
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div
          className="flex flex-col gap-1 px-6 py-6"
          style={{
            background: 'rgba(7, 8, 13, 0.97)',
            backdropFilter: 'blur(24px) saturate(160%)',
            borderBottom: '1px solid rgba(201, 169, 106, 0.08)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium px-4 py-3 rounded-xl transition-all"
              style={{ color: 'var(--text-dim)' }}
            >
              {link.label}
            </a>
          ))}
          <a href="/pricing" onClick={() => setMobileOpen(false)} className="btn-gold text-sm justify-center mt-3">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
