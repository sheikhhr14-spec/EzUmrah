import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ChatFloat from '@/components/ChatFloat';

export const metadata: Metadata = {
  title: 'CRM Modules — 9 Tools for Umrah & Hajj Travel Agencies',
  description:
    'Explore all 9 EzUmrah CRM modules: group bookings, flight management, hotel reservations, visa tracking, transport, document vault, quotations, invoicing, and task management. Built specifically for Umrah and Hajj travel agencies.',
  alternates: { canonical: '/modules' },
};

const modules = [
  {
    icon: '👥', title: 'Group Bookings',
    desc: 'Manage groups from 1 to 500+ pilgrims. Seat allocation, room sharing, guide assignments, and group-wise invoicing.',
    features: ['Add pilgrims individually or bulk upload via CSV', 'Room & seat allocation per pilgrim', 'Group-wise payment tracking and reminders', 'Assign mutawwif and guide to each group', 'Track group status from inquiry to departure'],
  },
  {
    icon: '✈️', title: 'Flight Management',
    desc: 'Enter flight details manually or connect via GDS API. Generate PNRs, print tickets, and send e-tickets by email.',
    features: ['Manual flight entry & editing', 'PNR & ticket number tracking', 'Auto email e-tickets to pilgrims', 'GDS integration for live flight search', 'Multi-leg and group flight booking support'],
  },
  {
    icon: '🏨', title: 'Hotel Management',
    desc: 'Track hotel bookings in Mecca, Medina, and beyond. Room types, check-in/out dates, and proximity to Haram.',
    features: ['Hotel database with star ratings', 'Room allocation per pilgrim', 'Distance filter from Haram', 'Check-in/check-out date management', 'Contracted rates and markup tracking'],
  },
  {
    icon: '🛂', title: 'Visa Management',
    desc: 'Track visa status for every pilgrim. Upload documents, monitor approvals, and get expiry alerts.',
    features: ['Document upload & secure storage', 'Visa status tracking (pending, approved, rejected)', 'Auto reminders for visa expiry', 'Bulk visa document generation', 'Saudi eVisa and Nusuk integration support'],
  },
  {
    icon: '🚌', title: 'Transport & Ziyarat',
    desc: 'Manage airport transfers, inter-city buses, and Ziyarat tours. Assign vehicles, drivers, and routes.',
    features: ['Vehicle & driver assignment', 'Route planning for Ziyarat tours', 'Pickup time notifications', 'Airport transfer coordination', 'Multi-leg transport scheduling'],
  },
  {
    icon: '📋', title: 'Documents Vault',
    desc: 'Secure cloud storage for passports, IDs, health certs, Mahram docs, and vaccination records.',
    features: ['Upload & organize by pilgrim', 'Expiry date alerts for passports & visas', 'Download & print anytime', 'Role-based access control', 'Encrypted storage with audit trail'],
  },
  {
    icon: '📝', title: 'Quotations & Leads',
    desc: 'Capture leads, send professional quotations, track follow-ups, and convert inquiries into confirmed bookings.',
    features: ['Lead capture form integration', 'Professional PDF quotation generation', 'Follow-up reminders & task automation', 'Quote open-rate tracking', 'Convert quotes to bookings in one click'],
  },
  {
    icon: '📄', title: 'Invoicing & Payments',
    desc: 'Generate branded invoices, track payments, send reminders, and manage installment plans.',
    features: ['Branded invoice generation with your logo', 'Payment tracking & automated reminders', 'Installment plan management', 'Multi-currency invoice support', 'Payment receipt email automation'],
  },
  {
    icon: '✅', title: 'Tasks & Team',
    desc: "Assign tasks to team members, set deadlines, and track what's done. Never drop the ball on a booking again.",
    features: ['Task assignment & deadline tracking', 'Team activity log and audit trail', 'Internal notes & comments per booking', 'Role-based permissions (admin, agent, staff)', 'Daily task summary emails'],
  },
];

export default function ModulesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: 'var(--midnight)', paddingTop: '100px' }}>
        <div className="container py-16">
          <div className="text-center mb-16">
            <span className="section-eyebrow">CRM Modules</span>
            <h1 className="section-title">Everything Your Agency Needs in One Dashboard</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Stop juggling spreadsheets, WhatsApp chats, and paper files. EzUmrah gives you a proper cloud CRM with every module a travel agency needs — from lead capture to departure day. Each module works standalone or seamlessly together as a complete agency management system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <div key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid var(--border)' }}>
                    {mod.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-1" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{mod.title}</h2>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>{mod.desc}</p>
                <ul className="space-y-2">
                  {mod.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-dim)' }}>
                      <span style={{ color: 'var(--teal-light)' }}>✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>All 9 modules are included in every plan — from Starter to Enterprise.</p>
            <a href="/pricing" className="btn-gold text-base">See Pricing</a>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
      <ChatFloat />
    </>
  );
}
