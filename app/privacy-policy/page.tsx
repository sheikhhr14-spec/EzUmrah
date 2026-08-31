import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
      <div className="container max-w-4xl py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--cream)' }}>Privacy Policy</h1>
        <p className="text-sm mb-4" style={{ color: 'var(--text-faint)' }}>Last updated: January 2026</p>

        <div className="space-y-6" style={{ color: 'var(--text-dim)' }}>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>1. Introduction</h2>
            <p>EzUmrah (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a cloud-based CRM software built by EzTechify for travel agencies managing Umrah, Hajj, and holiday packages. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>2. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Account Information:</strong> Name, WhatsApp number, country, travel agency name, and license number.</li>
              <li><strong>Pilgrim Data:</strong> Names, passport numbers, visa details, health certificates, and travel documents uploaded by your agency.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, device information, and interaction logs with our platform.</li>
              <li><strong>Payment Information:</strong> Billing details processed through our secure payment partners. We do not store full card numbers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>To provide and maintain the EzUmrah CRM platform and its modules.</li>
              <li>To process bookings, invoices, quotations, and document management.</li>
              <li>To communicate with you about your account, updates, and support requests.</li>
              <li>To improve our services, develop new features, and optimize user experience.</li>
              <li>To comply with legal obligations and protect against fraudulent activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>4. Data Storage & Security</h2>
            <p>Your data is stored on secure cloud servers with industry-standard encryption (AES-256 at rest, TLS 1.3 in transit). We implement strict access controls, regular security audits, and automated backups. All pilgrim documents are encrypted and access-controlled.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>5. Data Retention</h2>
            <p>We retain your data for as long as your account is active. Upon account termination, we provide a 30-day window for data export, after which all data is permanently deleted from our systems, except where legal obligations require longer retention.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Access your personal data and receive a copy.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your data (subject to legal requirements).</li>
              <li>Export your data in a standard machine-readable format.</li>
              <li>Object to certain processing of your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>7. GDPR & Saudi PDPL Compliance</h2>
            <p>EzUmrah complies with international data protection regulations including the EU General Data Protection Regulation (GDPR), and applicable local data protection laws in the regions where our customers operate. We process data based on your consent, contract necessity, and legitimate business interests.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>8. Cookies</h2>
            <p>We use essential cookies for platform functionality, analytics cookies to understand usage, and marketing cookies for personalized content. You can manage your cookie preferences at any time through our cookie consent tool.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>9. Third-Party Services</h2>
            <p>We integrate with GDS providers (Amadeus, Sabre, Galileo, Travelport), payment processors, and communication tools. Each third-party service has its own privacy policy, and we recommend reviewing them.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>10. Contact</h2>
            <p>For privacy-related questions or requests, please contact us through our <a href="/#contact" style={{ color: 'var(--gold)' }}>contact form</a>.</p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="btn-outline text-sm">← Back to Home</a>
        </div>
      </div>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
