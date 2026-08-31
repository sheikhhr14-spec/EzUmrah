import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for EzUmrah — Cloud Travel CRM for Umrah & Hajj Agencies. Read the terms governing your use of our platform.',
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
      <div className="container max-w-4xl py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--cream)' }}>Terms of Service</h1>
        <p className="text-sm mb-4" style={{ color: 'var(--text-faint)' }}>Last updated: January 2026</p>

        <div className="space-y-6" style={{ color: 'var(--text-dim)' }}>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>1. Acceptance of Terms</h2>
            <p>By accessing or using EzUmrah, you agree to be bound by these Terms of Service. If you do not agree, you may not use our platform. These terms constitute a legally binding agreement between you and EzTechify.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>2. Service Description</h2>
            <p>EzUmrah is a cloud-based CRM platform designed for travel agencies managing Umrah, Hajj, and holiday packages. Our services include group booking management, flight management, hotel reservations, visa tracking, transport scheduling, invoicing, quotations, document vault, and task management.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>3. Subscription & Billing</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>We offer three plans: Starter ($79/month), Agency Pro ($199/month), and Enterprise ($499/month).</li>
              <li>All plans include a 14-day free trial. No credit card is required to start a trial.</li>
              <li>Billing is monthly or annually (annual billing saves 20%).</li>
              <li>You can upgrade, downgrade, or cancel your subscription at any time.</li>
              <li>No refunds for partial billing periods. Cancellations take effect at the end of the current billing cycle.</li>
              <li>Prices are in USD. We reserve the right to adjust pricing with 30 days notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>4. Acceptable Use</h2>
            <p>You agree to use EzUmrah only for lawful purposes. You are responsible for the accuracy of all data entered, including pilgrim information, visa documents, and financial records. You must not:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Use the platform to store false or fraudulent documents.</li>
              <li>Attempt to access other agencies&apos; data or circumvent security measures.</li>
              <li>Use the service to violate any local, national, or international law.</li>
              <li>Resell or redistribute access without authorization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>5. Data Ownership</h2>
            <p>You retain full ownership of all data you enter into EzUmrah, including pilgrim records, bookings, invoices, and documents. We do not claim ownership of your data. You may export your data at any time. We act as a data processor on your behalf.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>6. Service Availability</h2>
            <p>We target 99.9% uptime for our platform. Scheduled maintenance is performed during low-traffic hours with advance notice. We are not liable for downtime caused by third-party services (GDS providers, payment processors) or events beyond our control.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>7. Intellectual Property</h2>
            <p>EzUmrah, EzTechify, and all related branding, software, and content are the intellectual property of EzTechify. You may not copy, modify, or distribute our software without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>8. Limitation of Liability</h2>
            <p>EzUmrah is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities. Our total liability is limited to the amount you paid in the preceding 12 months.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>9. Termination</h2>
            <p>Either party may terminate the agreement at any time. Upon termination, your data will be available for export for 30 days, after which it will be permanently deleted. We reserve the right to suspend or terminate accounts that violate these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>10. Governing Law</h2>
            <p>These Terms are governed by international commerce laws. Any disputes will be resolved through arbitration, unless otherwise agreed in writing.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>11. Changes to Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of significant changes via email or in-app notification at least 30 days before they take effect.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>12. Contact</h2>
            <p>For questions about these Terms, please reach out through our <a href="/#contact" style={{ color: 'var(--gold)' }}>contact form</a>.</p>
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
