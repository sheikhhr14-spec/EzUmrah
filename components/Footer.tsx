'use client';

import { useLang } from './LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative pt-16 pb-8" style={{ background: 'var(--midnight)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4" style={{ color: 'var(--gold)' }}>
              <span className="text-2xl">🕋</span>
              <span style={{ fontFamily: 'var(--font-playfair), serif' }}>{t('nav.brand')}</span>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/eztechify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all hover:text-[var(--gold)]"
                style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid var(--border)', color: 'var(--text-dim)' }}
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--cream)' }}>{t('footer.product')}</p>
            <ul className="space-y-3">
              {[
                { href: '#modules', label: t('footer.crm') },
                { href: '#integrations', label: t('footer.gds') },
                { href: '#pricing', label: t('footer.pricing') },
                { href: '#', label: t('footer.changelog') },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--cream)' }}>{t('footer.services')}</p>
            <ul className="space-y-3">
              {[
                { href: '#services', label: t('footer.custom_crm') },
                { href: '#services', label: t('footer.websites') },
                { href: '#services', label: t('footer.gds_api') },
                { href: '#services', label: t('footer.mobile_apps') },
                { href: '#services', label: t('footer.whitelabel') },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--cream)' }}>{t('footer.support')}</p>
            <ul className="space-y-3">
              {[
                { href: '#', label: t('footer.help') },
                { href: '#', label: t('footer.guide') },
                { href: '#', label: t('footer.privacy') },
                { href: '#', label: t('footer.terms') },
                { href: '#contact', label: t('footer.contact') },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-faint)' }}>{t('footer.copy')}</p>
          <p
            className="text-sm"
            style={{ color: 'var(--text-faint)' }}
            dangerouslySetInnerHTML={{ __html: t('footer.powered') }}
          />
        </div>
      </div>
    </footer>
  );
}
