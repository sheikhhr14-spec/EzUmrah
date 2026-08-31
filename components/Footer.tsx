'use client';
export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10" style={{ background: 'var(--midnight)' }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201, 169, 106, 0.2) 50%, transparent 100%)' }}
      />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(201, 169, 106, 0.15) 0%, rgba(201, 169, 106, 0.05) 100%)',
                  border: '1px solid rgba(201, 169, 106, 0.2)',
                }}
              >
                🕋
              </div>
              <span className="text-lg font-bold" style={{
                fontFamily: 'var(--font-playfair), serif',
                background: 'linear-gradient(135deg, #f8f6f1 0%, #c9a96a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                EzUmrah
              </span>
            </a>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-dim)' }}>
              Cloud-based travel CRM for Umrah, Hajj, and holiday travel agencies worldwide. Built by EzTechify.
            </p>
            <a href="https://linkedin.com/company/eztechify" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300"
              style={{
                background: 'rgba(201, 169, 106, 0.06)',
                border: '1px solid rgba(201, 169, 106, 0.1)',
                color: 'var(--text-dim)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 169, 106, 0.3)';
                e.currentTarget.style.color = 'var(--gold2)';
                e.currentTarget.style.background = 'rgba(201, 169, 106, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 169, 106, 0.1)';
                e.currentTarget.style.color = 'var(--text-dim)';
                e.currentTarget.style.background = 'rgba(201, 169, 106, 0.06)';
              }}
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--cream)' }}>Product</p>
            <ul className="space-y-3">
              {[
                { label: 'CRM Modules', href: '/modules' },
                { label: 'GDS Integrations', href: '/integrations' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Changelog', href: '/changelog' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors duration-300" style={{ color: 'var(--text-faint)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold2)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-faint)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--cream)' }}>Services</p>
            <ul className="space-y-3">
              {[
                { label: 'Custom CRM', href: '/services' },
                { label: 'Travel Websites', href: '/services' },
                { label: 'GDS Integration', href: '/services' },
                { label: 'Mobile Apps', href: '/services' },
                { label: 'White-Label', href: '/services' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors duration-300" style={{ color: 'var(--text-faint)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold2)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-faint)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--cream)' }}>Support &amp; Legal</p>
            <ul className="space-y-3">
              {[
                { label: 'Help Centre', href: '/help-centre' },
                { label: 'Onboarding Guide', href: '/onboarding-guide' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Customer Stories', href: '/testimonials' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href} className="text-sm transition-colors duration-300" style={{ color: 'var(--text-faint)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold2)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-faint)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(201, 169, 106, 0.06)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>© 2026 EzUmrah — All rights reserved.</p>
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
            A product of <span style={{
              background: 'linear-gradient(135deg, #c9a96a, #d8bd7e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 600,
            }}>EzTechify</span> · Built with care for the Ummah
          </p>
        </div>
      </div>
    </footer>
  );
}
