'use client';

import { useState, useEffect } from 'react';
import { useLang } from './LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#modules', label: t('nav.modules') },
    { href: '#integrations', label: t('nav.integrations') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(6,11,20,0.97)' : 'rgba(6,11,20,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent',
      }}
    >
      <div className="container flex items-center justify-between" style={{ height: '72px' }}>
        <a href="#product" className="flex items-center gap-2 text-xl font-bold" style={{ color: 'var(--gold)' }}>
          <span className="text-2xl">🕋</span>
          <span style={{ fontFamily: 'var(--font-playfair), serif' }}>{t('nav.brand')}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[var(--gold)]"
              style={{ color: 'var(--text-dim)' }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-sm font-medium px-3 py-1.5 rounded-lg border transition-all hover:text-[var(--gold)] hover:border-[var(--gold)]"
            style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'عربي' : 'English'}
          </button>
          <a href="#pricing" className="btn-gold text-sm">
            {t('nav.getStarted')}
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-[var(--gold)] transition-transform" style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
          <span className="block w-6 h-0.5 bg-[var(--gold)] transition-opacity" style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-[var(--gold)] transition-transform" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(6px, -6px)' : '' }} />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden flex flex-col gap-4 px-6 py-6"
          style={{
            background: 'rgba(6,11,20,0.98)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium"
              style={{ color: 'var(--text-dim)' }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { toggleLang(); setMobileOpen(false); }}
            className="text-sm font-medium text-left"
            style={{ color: 'var(--text-dim)' }}
          >
            {lang === 'en' ? 'عربي' : 'English'}
          </button>
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="btn-gold text-sm justify-center">
            {t('nav.getStarted')}
          </a>
        </div>
      )}
    </nav>
  );
}
