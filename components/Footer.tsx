'use client';

// ===== Payment Method SVG Icons (brand-accurate) =====

// Visa — navy italic wordmark on white card
const VisaIcon = () => (
  <svg viewBox="0 0 64 22" width="52" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
    <rect width="64" height="22" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
    <text x="7" y="16" fontFamily="Arial Black, Arial, sans-serif" fontSize="13" fontWeight="900" fontStyle="italic" fill="#1A1F71" letterSpacing="1">VISA</text>
  </svg>
);

// Mastercard — two interlocking circles on white card
const MastercardIcon = () => (
  <svg viewBox="0 0 64 22" width="52" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
    <rect width="64" height="22" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
    <circle cx="26" cy="11" r="7" fill="#EB001B" />
    <circle cx="38" cy="11" r="7" fill="#F79E1B" />
    <path d="M32 5.5a7 7 0 0 0 0 11 7 7 0 0 0 0-11z" fill="#FF5F00" />
  </svg>
);

// American Express — blue card with AMEX
const AmexIcon = () => (
  <svg viewBox="0 0 64 22" width="52" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="American Express">
    <rect width="64" height="22" rx="3" fill="#2E77BB" />
    <text x="8" y="16" fontFamily="Arial Black, Arial, sans-serif" fontSize="10" fontWeight="900" fill="#fff" letterSpacing="1.5">AMEX</text>
  </svg>
);

// Discover — white card, dark text, orange circle
const DiscoverIcon = () => (
  <svg viewBox="0 0 64 22" width="52" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Discover">
    <rect width="64" height="22" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
    <text x="5" y="15" fontFamily="Arial Black, Arial, sans-serif" fontSize="8" fontWeight="900" fill="#231F20" letterSpacing="0.3">DISCOVER</text>
    <circle cx="54" cy="11" r="8" fill="#F68121" opacity="0.9" />
  </svg>
);

// Bitcoin — orange circle with ₿
const BtcIcon = () => (
  <svg viewBox="0 0 64 22" width="52" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bitcoin">
    <rect width="64" height="22" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
    <circle cx="16" cy="11" r="8" fill="#F7931A" />
    <text x="12.5" y="15" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="900" fill="#fff">₿</text>
    <text x="28" y="15" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="700" fill="#F7931A" letterSpacing="0.5">BITCOIN</text>
  </svg>
);

// Solana — three horizontal gradient bars + text
const SolIcon = () => (
  <svg viewBox="0 0 64 22" width="52" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Solana">
    <rect width="64" height="22" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
    <g transform="translate(6, 5)">
      <rect x="0" y="0" width="14" height="2.5" rx="1" fill="#9945FF" />
      <rect x="0" y="4.5" width="14" height="2.5" rx="1" fill="#19FB9B" />
      <rect x="0" y="9" width="14" height="2.5" rx="1" fill="#14F195" />
    </g>
    <text x="26" y="15" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="700" fill="#9945FF" letterSpacing="0.5">SOLANA</text>
  </svg>
);

// USDT / Tether — green circle with T
const UsdtIcon = () => (
  <svg viewBox="0 0 64 22" width="52" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="USDT">
    <rect width="64" height="22" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
    <circle cx="16" cy="11" r="8" fill="#26A17B" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="900" fill="#fff">T</text>
    <text x="28" y="15" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="700" fill="#26A17B" letterSpacing="0.5">USDT</text>
  </svg>
);

// Bank Transfer — bank building with columns
const BankTransferIcon = () => (
  <svg viewBox="0 0 64 22" width="52" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bank Transfer">
    <rect width="64" height="22" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
    <g transform="translate(5, 3.5)">
      {/* roof */}
      <path d="M0 5 L11 0 L22 5 L22 6 L0 6 Z" fill="#475569" />
      {/* columns */}
      <rect x="2" y="7" width="2.5" height="7.5" fill="#64748B" />
      <rect x="6.5" y="7" width="2.5" height="7.5" fill="#64748B" />
      <rect x="11" y="7" width="2.5" height="7.5" fill="#64748B" />
      <rect x="15.5" y="7" width="2.5" height="7.5" fill="#64748B" />
      {/* base */}
      <rect x="-1" y="14.5" width="24" height="2" rx="0.5" fill="#475569" />
    </g>
    <text x="30" y="15" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="700" fill="#475569" letterSpacing="0.3">BANK</text>
    <text x="30" y="13" fontFamily="Arial, sans-serif" fontSize="5.5" fontWeight="600" fill="#94A3B8" letterSpacing="0.3" />
  </svg>
);

// Skrill — purple badge with Skrill text
const SkrillIcon = () => (
  <svg viewBox="0 0 64 22" width="52" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Skrill">
    <rect width="64" height="22" rx="3" fill="#862165" />
    <text x="8" y="16" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="900" fontStyle="italic" fill="#fff" letterSpacing="0.5">Skrill</text>
  </svg>
);

const paymentMethods = [
  { name: 'Visa', icon: <VisaIcon /> },
  { name: 'Mastercard', icon: <MastercardIcon /> },
  { name: 'American Express', icon: <AmexIcon /> },
  { name: 'Discover', icon: <DiscoverIcon /> },
  { name: 'Bank Transfer', icon: <BankTransferIcon /> },
  { name: 'Skrill', icon: <SkrillIcon /> },
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
                className="flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '6px 10px',
                  minHeight: '32px',
                }}
                title={method.name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(184, 146, 63, 0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
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
