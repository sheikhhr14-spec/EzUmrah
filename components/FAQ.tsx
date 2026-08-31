'use client';

import { useState } from 'react';

const faqs = [
  { q: 'What is EzUmrah?', a: 'EzUmrah is a cloud-based CRM software specifically built for travel agencies that manage Umrah, Hajj, and holiday packages. It includes modules for group bookings, flight management, hotel reservations, visa tracking, transport, invoicing, quotations, document vault, and task management.' },
  { q: 'Can EzUmrah integrate with GDS systems?', a: 'Yes, EzUmrah offers integration with major Global Distribution Systems including Amadeus, Sabre, Galileo, and Travelport. This allows agencies to access real-time flight inventory and pricing.' },
  { q: 'Is EzUmrah suitable for Hajj management?', a: 'Absolutely. EzUmrah includes Hajj-specific features such as quota management, Mina tent allocation, Arafat logistics, and group tracking. It is used by agencies handling hundreds to thousands of pilgrims.' },
  { q: 'Does EzUmrah offer white-label solutions?', a: "Yes, EzUmrah provides white-label booking portals and mobile apps that can be branded with your agency's logo and colors. This is available in the Agency Pro and Enterprise plans." },
  { q: 'What is the pricing of EzUmrah?', a: 'EzUmrah offers three plans: Starter at $79/month, Agency Pro at $199/month (most popular), and Enterprise at $499/month. All plans include a 14-day free trial with no credit card required.' },
  { q: 'Can I customize EzUmrah for my specific needs?', a: 'Yes. EzTechify offers custom development services to tailor EzUmrah to your unique workflow, build custom travel websites, integrate additional APIs, or create branded mobile apps.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">Frequently Asked Questions</span>
          <h2 className="section-title">Everything You Need to Know About EzUmrah</h2>
          <p className="section-subtitle">Direct answers to the most common questions – optimized for AI and search engines.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="glass-card overflow-hidden fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left" aria-expanded={openIndex === i}>
                <span className="text-base font-semibold" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{item.q}</span>
                <span className="flex-shrink-0 ml-4 text-2xl transition-transform" style={{ color: 'var(--gold)', transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openIndex === i ? '300px' : '0px' }}>
                <p className="px-6 pb-6 text-sm" style={{ color: 'var(--text-dim)' }}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
