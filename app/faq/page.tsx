import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ — Everything You Need to Know About EzUmrah',
  description:
    'Answers to common questions about EzUmrah CRM: features, GDS integration, Hajj management, white-label solutions, pricing, customization, and global availability for travel agencies worldwide.',
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
        <div className="container py-16">
          <div className="text-center mb-16">
            <span className="section-eyebrow">Frequently Asked Questions</span>
            <h1 className="section-title">Everything You Need to Know About EzUmrah</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Direct answers to the most common questions. If you can&apos;t find what you&apos;re looking for, our team is a message away.
            </p>
          </div>
          <FAQClient />
          <div className="text-center mt-16">
            <p className="text-sm mb-4" style={{ color: 'var(--text-faint)' }}>Still have questions?</p>
            <a href="/contact" className="btn-gold text-sm">Get in Touch</a>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
