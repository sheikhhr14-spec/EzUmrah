'use client';

import { useState } from 'react';

const faqs = [
  { q: 'What is EzUmrah?', a: 'EzUmrah is a cloud-based CRM software specifically built for travel agencies that manage Umrah, Hajj, and holiday packages. It includes modules for group bookings, flight management, hotel reservations, visa tracking, transport, invoicing, quotations, document vault, and task management — all in one dashboard.' },
  { q: 'Can EzUmrah integrate with GDS systems?', a: 'Yes, EzUmrah offers integration with major Global Distribution Systems including Amadeus, Sabre, Galileo, and Travelport. This allows agencies to access real-time flight inventory and pricing directly from their CRM dashboard. GDS integration is available on Agency Pro and Enterprise plans.' },
  { q: 'Is EzUmrah suitable for Hajj management?', a: "Absolutely. EzUmrah includes Hajj-specific features such as quota management, Mina tent allocation, Arafat logistics, and group tracking. It is used by agencies handling hundreds to thousands of pilgrims. The Enterprise plan includes the full Hajj quota management module." },
  { q: 'Does EzUmrah offer white-label solutions?', a: "Yes, EzUmrah provides white-label booking portals and mobile apps that can be branded with your agency's logo, colors, and domain. This is available in the Agency Pro and Enterprise plans. Your customers see your brand throughout the booking experience." },
  { q: 'What is the pricing of EzUmrah?', a: 'EzUmrah offers three plans: Starter at $79/month, Agency Pro at $199/month (most popular), and Enterprise at $499/month. All plans include a 14-day free trial with no credit card required. Annual billing saves 20%. There are no per-booking commissions or setup fees.' },
  { q: 'Can I customize EzUmrah for my specific needs?', a: 'Yes. EzTechify offers custom development services to tailor EzUmrah to your unique workflow, build custom travel websites, integrate additional APIs, or create branded mobile apps. Every custom project starts with a discovery call to understand your requirements.' },
  { q: 'Which countries does EzUmrah support?', a: 'EzUmrah is a globally available cloud platform used by travel agencies in 120+ countries including the UK, USA, Saudi Arabia, India, Pakistan, Turkey, Malaysia, Indonesia, Egypt, and the UAE. It supports multi-currency invoicing and is accessible worldwide.' },
  { q: 'How long does it take to set up EzUmrah?', a: 'Most agencies are up and running in under a day. Sign up takes 2 minutes, account activation takes up to 4 hours (for license verification), and the full setup process — configuring your CRM, importing data, and adding your first pilgrim — takes a few hours. Check our onboarding guide for a detailed walkthrough.' },
  { q: 'Is my data secure?', a: 'Yes. All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We implement strict access controls, regular security audits, and automated backups. Document vault access is role-based, and we comply with GDPR and applicable local data protection laws.' },
  { q: 'Can I cancel anytime?', a: 'Yes. There are no long-term contracts. You can cancel your subscription at any time, and it takes effect at the end of your current billing cycle. Upon cancellation, you have 30 days to export your data before it is permanently deleted.' },
  { q: 'Do you offer training and support?', a: 'Yes. Starter plans get standard support, Agency Pro gets priority support, and Enterprise gets a dedicated account manager with 24/7 priority support. We also provide a full onboarding guide, help centre with articles, and live walkthroughs for larger teams.' },
  { q: 'What if I need a feature that is not available?', a: "If you need a feature that is not in the standard CRM, our custom development team can build it for you. We've built everything from custom reporting dashboards to full white-label travel websites. Reach out through our contact form to discuss your requirements." },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((item, i) => (
        <div key={i} className="glass-card overflow-hidden">
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="text-base font-semibold" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>
              {item.q}
            </span>
            <span className="flex-shrink-0 ml-4 text-2xl transition-transform duration-300"
              style={{ color: 'var(--gold)', transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              +
            </span>
          </button>
          <div className="overflow-hidden transition-all duration-400"
            style={{ maxHeight: openIndex === i ? '400px' : '0px', opacity: openIndex === i ? 1 : 0 }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
