'use client';

import { useLang } from './LanguageContext';

const modules = [
  { icon: '📋', title: 'Group Booking Management', desc: 'Manage group pilgrims, room allocations, and mutawwif assignments with ease.' },
  { icon: '✈️', title: 'Flight Management', desc: 'Track flights, PNRs, and airline bookings with GDS integration.' },
  { icon: '🏨', title: 'Hotel Reservations', desc: 'Book Mecca & Medina hotels with live availability and rate management.' },
  { icon: '📄', title: 'Visa & Document Tracking', desc: 'Upload, track, and manage visa applications and pilgrim documents.' },
  { icon: '🚌', title: 'Transport & Ziyarat', desc: 'Schedule airport transfers, buses, and Ziyarat tours efficiently.' },
  { icon: '💳', title: 'Invoicing & Payments', desc: 'Generate professional invoices, accept payments, track balances.' },
  { icon: '📊', title: 'Quotation Builder', desc: 'Create branded quotations in 2 minutes, email them, track opens.' },
  { icon: '✅', title: 'Task Management', desc: 'Assign tasks to your team, set deadlines, track progress.' },
];

export default function Modules() {
  const { t } = useLang();

  return (
    <section id="modules" className="section relative" style={{ background: 'var(--midnight2)' }}>
      <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.1 }} />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">{t('modules.eyebrow')}</span>
          <h2 className="section-title">{t('modules.title')}</h2>
          <p className="section-subtitle">{t('modules.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="glass-card p-6 fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  border: '1px solid var(--border)',
                }}
              >
                {mod.icon}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}
              >
                {mod.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
