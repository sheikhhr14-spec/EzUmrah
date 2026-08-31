export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8" style={{ background: 'var(--midnight)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4" style={{ color: 'var(--gold)' }}>
              <span className="text-2xl">🕋</span>
              <span style={{ fontFamily: 'var(--font-playfair), serif' }}>EzUmrah</span>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>
              Cloud-based travel CRM for Umrah, Hajj, and holiday travel agencies. Built by EzTechify to bring your agency from manual processes to a modern cloud system.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com/company/eztechify" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all hover:text-[var(--gold)]" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid var(--border)', color: 'var(--text-dim)' }} aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--cream)' }}>Product</p>
            <ul className="space-y-3">
              <li><a href="/#modules" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>CRM Modules</a></li>
              <li><a href="/#integrations" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>GDS Integrations</a></li>
              <li><a href="/#pricing" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Pricing</a></li>
              <li><a href="/changelog" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Changelog</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--cream)' }}>Services</p>
            <ul className="space-y-3">
              <li><a href="/#services" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Custom CRM</a></li>
              <li><a href="/#services" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Travel Websites</a></li>
              <li><a href="/#services" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>GDS Integration</a></li>
              <li><a href="/#services" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Mobile Apps</a></li>
              <li><a href="/#services" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>White-Label</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--cream)' }}>Support &amp; Legal</p>
            <ul className="space-y-3">
              <li><a href="/help-centre" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Help Centre</a></li>
              <li><a href="/onboarding-guide" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Onboarding Guide</a></li>
              <li><a href="/privacy-policy" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Terms of Service</a></li>
              <li><a href="/#contact" className="text-sm transition-colors hover:text-[var(--gold)]" style={{ color: 'var(--text-faint)' }}>Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--text-faint)' }}>© 2026 EzUmrah — All rights reserved.</p>
          <p className="text-sm" style={{ color: 'var(--text-faint)' }}>A product of <span style={{ color: 'var(--gold)' }}>EzTechify</span> · Built with care for the Ummah</p>
        </div>
      </div>
    </footer>
  );
}
