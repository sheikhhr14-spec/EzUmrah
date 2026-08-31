'use client';

import { useState } from 'react';
import { useLang } from './LanguageContext';

const faqs = [
  {
    q: 'What is EzUmrah?',
    a: 'EzUmrah is a cloud-based CRM software specifically built for travel agencies that manage Umrah, Hajj, and holiday packages. It includes modules for group bookings, flight management, hotel reservations, visa tracking, transport, invoicing, quotations, document vault, and task management.',
  },
  {
    q: 'Can EzUmrah integrate with GDS systems?',
    a: 'Yes, EzUmrah offers integration with major Global Distribution Systems including Amadeus, Sabre, Galileo, and Travelport. This allows agencies to access real-time flight inventory and pricing.',
  },
  {
    q: 'Is EzUmrah suitable for Hajj management?',
    a: 'Absolutely. EzUmrah includes Hajj-specific features such as quota management, Mina tent allocation, Arafat logistics, and group tracking. It is used by agencies handling hundreds to thousands of pilgrims.',
  },
  {
    q: 'Does EzUmrah offer white-label solutions?',
    a: 'Yes, EzUmrah provides white-label booking portals and mobile apps that can be branded with your agency\u2019s logo and colors. This is available in the Agency Pro and Enterprise plans.',
  },
  {
    q: 'What is the pricing of EzUmrah?',
    a: 'EzUmrah offers three plans: Starter at $79/month, Agency Pro at $199/month (most popular), and Enterprise at $499/month. All plans include a 14-day free trial with no credit card required.',
  },
  {
    q: 'Can I migrate from my current system?',
    a: 'Yes, we offer free data migration from spreadsheets, other CRMs, and legacy systems. Our team handles the entire process for you.',
  },
];

const faqsAr = [
  { q: 'ما هو إز عمرة؟', a: 'إز عمرة هو نظام إدارة علاقات عملاء سحابي مصمم خصيصًا لوكالات السفر التي تدير عمرة والحج والباقات السياحية. يشمل وحدات لإدارة الحجوزات الجماعية وإدارة الرحلات وحجوزات الفنادق وتتبع التأشيرات والنقل والفوترة وعروض الأسعار وخزينة المستندات وإدارة المهام.' },
  { q: 'هل يمكن لإز عمرة التكامل مع أنظمة GDS؟', a: 'نعم، يقدم إز عمرة تكاملاً مع أنظمة التوزيع العالمية الكبرى بما في ذلك Amadeus و Sabre و Galileo و Travelport. يتيح ذلك للوكالات الوصول إلى مخزون الرحلات والتسعير في الوقت الفعلي.' },
  { q: 'هل إز عمرة مناسب لإدارة الحج؟', a: 'بالتأكيد. يشمل إز عمرة ميزات خاصة بالحج مثل إدارة الحصص وتوزيع خيام منى ولوجستيات عرفات وتتبع المجموعات. يستخدمه وكالات تتعامل مع مئات إلى آلاف الحجاج.' },
  { q: 'هل يقدم إز عمرة حلول علامة بيضاء؟', a: 'نعم، يوفر إز عمرة بوابات حجز وتطبيقات جوال بعلامة بيضاء يمكن تمييزها بشعار وكالتك وألوانك. يتوفر ذلك في خطط Agency Pro و Enterprise.' },
  { q: 'ما هو تسعير إز عمرة؟', a: 'يقدم إز عمرة ثلاث خطط: المبتدئ بسعر 79$ شهريًا، و Agency Pro بسعر 199$ شهريًا (الأكثر شيوعًا)، و Enterprise بسعر 499$ شهريًا. تشمل جميع الخطط نسخة تجريبية مجانية لمدة 14 يومًا دون الحاجة إلى بطاقة ائتمان.' },
  { q: 'هل يمكنني الترحيل من نظامي الحالي؟', a: 'نعم، نقدم ترحيل بيانات مجاني من جداول البيانات وأنظمة إدارة علاقات العملاء الأخرى والأنظمة القديمة. يتولى فريقنا العملية بالكامل نيابة عنك.' },
];

export default function FAQ() {
  const { t, lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const data = lang === 'ar' ? faqsAr : faqs;

  return (
    <section id="faq" className="section relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">{t('faq.eyebrow')}</span>
          <h2 className="section-title">{t('faq.title')}</h2>
          <p className="section-subtitle">{t('faq.subtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {data.map((item, i) => (
            <div key={i} className="glass-card overflow-hidden fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 ml-4 text-2xl transition-transform"
                  style={{ color: 'var(--gold)', transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? '300px' : '0px' }}
              >
                <p className="px-6 pb-6 text-sm" style={{ color: 'var(--text-dim)' }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
