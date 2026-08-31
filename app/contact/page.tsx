import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch with EzUmrah',
  description:
    'Contact EzUmrah for questions about our travel CRM, custom development services, GDS integration, or white-label solutions. We respond within 4 business hours.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
        <div className="container py-16">
          <div className="text-center mb-16">
            <span className="section-eyebrow">Get in Touch</span>
            <h1 className="section-title">Let&apos;s Talk About Your Travel Agency</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Have questions or need a custom solution? Reach out to our team and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ContactClient />
        </div>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
