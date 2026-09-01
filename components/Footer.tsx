'use client';

// ===== Payment Method SVG Icons =====
const VisaIcon = () => (
  <svg viewBox="0 0 48 16" width="40" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="13" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" fill="#1A1F71" letterSpacing="0.5">VISA</text>
  </svg>
);

const MastercardIcon = () => (
  <svg viewBox="0 0 40 26" width="38" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="13" r="11" fill="#EB001B" />
    <circle cx="25" cy="13" r="11" fill="#F79E1B" opacity="0.9" />
    <path d="M20 4.5a11 11 0 0 1 0 17 11 11 0 0 1 0-17z" fill="#FF5F00" />
  </svg>
);

const AmexIcon = () => (
  <svg viewBox="0 0 40 26" width="38" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="26" rx="3" fill="#1F72CD" />
    <text x="5" y="11" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="900" fill="#FFFFFF" letterSpacing="0.3">AMEX</text>
    <text x="5" y="20" fontFamily="Arial, sans-serif" fontSize="5" fontWeight="700" fill="#FFFFFF" opacity="0.7" letterSpacing="0.5"> EXPRESS</text>
  </svg>
);

const DiscoverIcon = () => (
  <svg viewBox="0 0 48 16" width="44" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="12" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#231F20" letterSpacing="0.2">DISC</text>
    <circle cx="34" cy="8" r="6" fill="#F68121" />
    <text x="28" y="12" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="#FFFFFF">OVER</text>
  </svg>
);

const BtcIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#F7931A" />
    <path d="M15.5 8.2c.2-1.3-.8-2-2.2-2l.4-1.6-1-.2-.4 1.6-.8-.2.4-1.6-1-.2-.4 1.6c-.2 0-.4 0-.6.1l-1.3-.3-.2 1s.8.1.8.1c.4 0 .5.4.5.5l-.2.6-.1.5-.6 2.4c0 .2-.2.4-.5.3l-.8-.2-.4 1.1 1.3.3c.2 0 .5.1.7.1l-.4 1.6 1 .2.4-1.6.8.2-.4 1.6 1 .2.4-1.6c1.7.2 3 .1 3.5-1.3.4-1.1-.2-1.7-1-1.9.5-.3.9-.8.7-1.9zm-1.5 3.8c-.3 1.1-2.2.5-2.8.4l.5-2c.6.1 2.6.4 2.3 1.6zm-.3-3c-.3 1-1.8.5-2.3.4l.5-1.8c.5.1 2.1.3 1.8 1.4z" fill="#FFFFFF" />
  </svg>
);

const SolIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 8.2c.1-.1.2-.2.4-.2h11.3c.2 0 .3.1.4.2l1.4 1.4c.2.2.2.5 0 .7l-9.3 9.3c-.2.2-.5.2-.7 0l-1.4-1.4c-.1-.1-.1-.2-.1-.3s0-.2.1-.3l7.9-7.9c.1-.1.1-.2.1-.3s0-.2-.1-.3l-1.4-1.4c-.2-.2-.5-.2-.7 0l-7.9 7.9c-.1.1-.2.1-.3.1s-.2 0-.3-.1l-1.4-1.4c-.2-.2-.2-.5 0-.7L5.5 8.2z" fill="#9945FF" />
    <path d="M8.2 4.5c.1-.1.2-.1.3-.1h11.3c.2 0 .3.1.4.2l1.4 1.4c.2.2.2.5 0 .7l-9.3 9.3c-.2.2-.5.2-.7 0l-1.4-1.4c-.2-.2-.2-.5 0-.7l7.9-7.9c.1-.1.1-.2.1-.3s0-.2-.1-.3l-1.4-1.4c-.2-.2-.5-.2-.7 0l-7.9 7.9c-.1.1-.2.1-.3.1s-.2 0-.3-.1l-1.4-1.4c-.2-.2-.2-.5 0-.7l2.7-2.7z" fill="#14F195" />
  </svg>
);

const UsdtIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#26A17B" />
    <path d="M12 6.5c-2.9 0-5.2.6-5.2 1.3v2c0 .7 2.3 1.3 5.2 1.3s5.2-.6 5.2-1.3v-2c0-.7-2.3-1.3-5.2-1.3z" fill="#FFFFFF" />
    <path d="M12 12.2c-1.4 0-2.7-.1-3.7-.4v1.8c.9.2 2.1.4 3.2.4v3c0 .2.2.4.5.4s.5-.2.5-.4v-3c1.1 0 2.3-.1 3.2-.4v-1.8c-1 .3-2.3.4-3.7.4z" fill="#FFFFFF" />
  </svg>
);

const paymentMethods = [
  { name: 'Visa', icon: <VisaIcon /> },
  { name: 'Mastercard', icon: <MastercardIcon /> },
  { name: 'American Express', icon: <AmexIcon /> },
  { name: 'Discover', icon: <DiscoverIcon /> },
  { name: 'Bitcoin', icon: <BtcIcon /> },
  { name: 'Solana', icon: <SolIcon /> },
  { name: 'USDT', icon: <UsdtIcon /> },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10" style={{ background: 'var(--midnight)' }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(184, 146, 63, 0.2) 50%, transparent 100%)' }}
      />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(184, 146, 63, 0.15) 0%, rgba(184, 146, 63, 0.05) 100%)',
                  border: '1px solid rgba(184, 146, 63, 0.2)',
                }}
              >
                🕋
              </div>
              <span className="text-lg font-bold" style={{
                fontFamily: 'var(--font-playfair), serif',
                background: 'linear-gradient(135deg, #0f172a 0%, #b8923f 100%)',
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
                background: 'rgba(184, 146, 63, 0.06)',
                border: '1px solid rgba(184, 146, 63, 0.1)',
                color: 'var(--text-dim)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(184, 146, 63, 0.3)';
                e.currentTarget.style.color = 'var(--gold2)';
                e.currentTarget.style.background = 'rgba(184, 146, 63, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(184, 146, 63, 0.1)';
                e.currentTarget.style.color = 'var(--text-dim)';
                e.currentTarget.style.background = 'rgba(184, 146, 63, 0.06)';
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

        {/* ===== Payment Methods ===== */}
        <div className="mb-8 pt-8" style={{ borderTop: '1px solid rgba(184, 146, 63, 0.06)' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--cream)' }}>
            We Accept
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="flex items-center justify-center px-3.5 py-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid var(--border)',
                  minHeight: '42px',
                  minWidth: '58px',
                }}
                title={method.name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(184, 146, 63, 0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {method.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(184, 146, 63, 0.06)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>© 2026 EzUmrah — All rights reserved.</p>
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
            A product of <span style={{
              background: 'linear-gradient(135deg, #b8923f, #d4b27a)',
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
