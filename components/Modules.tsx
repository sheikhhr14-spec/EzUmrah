const modules = [
  {
    icon: '👥',
    title: 'Group Bookings',
    desc: 'Manage groups from 1 to 500+ pilgrims. Seat allocation, room sharing, guide assignments, and group-wise invoicing.',
    features: ['Add pilgrims individually or bulk upload', 'Room & seat allocation', 'Group-wise payment tracking'],
  },
  {
    icon: '✈️',
    title: 'Flight Management',
    desc: 'Enter flight details manually or connect via GDS API. Generate PNRs, print tickets, and send e-tickets by email.',
    features: ['Manual flight entry & editing', 'PNR & ticket number tracking', 'Auto email e-tickets to pilgrims'],
  },
  {
    icon: '🏨',
    title: 'Hotel Management',
    desc: 'Track hotel bookings in Mecca, Medina, and beyond. Room types, check-in/out dates, and proximity to Haram.',
    features: ['Hotel database with star ratings', 'Room allocation per pilgrim', 'Distance filter from Haram'],
  },
  {
    icon: '🛂',
    title: 'Visa Management',
    desc: 'Track visa status for every pilgrim. Upload documents, monitor approvals, and get expiry alerts.',
    features: ['Document upload & storage', 'Visa status tracking', 'Auto reminders for expiry'],
  },
  {
    icon: '🚌',
    title: 'Transport & Ziyarat',
    desc: 'Manage airport transfers, inter-city buses, and Ziyarat tours. Assign vehicles, drivers, and routes.',
    features: ['Vehicle & driver assignment', 'Route planning for Ziyarat', 'Pickup time notifications'],
  },
  {
    icon: '📋',
    title: 'Documents Vault',
    desc: 'Secure cloud storage for passports, IDs, health certs, Mahram docs, and vaccination records.',
    features: ['Upload & organize by pilgrim', 'Expiry date alerts', 'Download & print anytime'],
  },
  {
    icon: '📝',
    title: 'Quotations & Leads',
    desc: 'Capture leads, send professional quotations, track follow-ups, and convert inquiries into confirmed bookings.',
    features: ['Lead capture form', 'Professional PDF quotations', 'Follow-up reminders & tasks'],
  },
  {
    icon: '📄',
    title: 'Invoicing & Payments',
    desc: 'Generate branded invoices, track payments, send reminders, and manage installment plans.',
    features: ['Branded invoice generation', 'Payment tracking & reminders', 'Installment plan management'],
  },
  {
    icon: '✅',
    title: 'Tasks & Team',
    desc: "Assign tasks to team members, set deadlines, and track what's done. Never drop the ball on a booking again.",
    features: ['Task assignment & deadlines', 'Team activity log', 'Internal notes & comments'],
  },
];

export default function Modules() {
  return (
    <section id="modules" className="section relative" style={{ background: 'var(--midnight2)' }}>
      <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.1 }} />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">CRM Modules</span>
          <h2 className="section-title">Everything Your Agency Needs in One Dashboard</h2>
          <p className="section-subtitle">Stop juggling spreadsheets, WhatsApp chats, and paper files. EzUmrah gives you a proper cloud CRM with every module a travel agency needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <div key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0" style={{ background: 'rgba(184,146,63,0.08)', border: '1px solid var(--border)' }}>
                  {mod.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{mod.title}</h3>
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
      </div>
    </section>
  );
}
