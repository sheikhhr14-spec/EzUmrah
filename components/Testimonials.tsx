const testimonials = [
  {
    text: 'We used to manage 200 pilgrims in Excel. Now everything is in EzUmrah — bookings, visas, invoices, documents. We print professional invoices in seconds and email them directly from the system.',
    name: 'Ahmed Al-Khalidi',
    role: 'Director, Madinat Travel — Riyadh, KSA',
    initials: 'AK',
  },
  {
    text: 'The quotation module alone saved us 10 hours a week. We create quotes in 2 minutes, send them by email, and track which leads opened them. Our conversion rate went up 40%.',
    name: 'Fatima Hassan',
    role: 'CEO, Baraka Umrah Tours — London, UK',
    initials: 'FH',
  },
  {
    text: 'EzTechify built us a custom travel website with Sabre integration. Our customers now search flights live on our site and we get the bookings straight into our EzUmrah CRM. Best investment we made.',
    name: 'Sufyan Idris',
    role: 'Tech Lead, Ihram Digital — Kuala Lumpur, MY',
    initials: 'SI',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section relative">
      <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.15 }} />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">Customer Stories</span>
          <h2 className="section-title">Agencies That Switched to EzUmrah</h2>
          <p className="section-subtitle">From spreadsheets and WhatsApp chaos to a proper cloud CRM.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <article key={i} className="glass-card p-8 fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-lg mb-4" style={{ color: 'var(--gold)' }}>★★★★★</div>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text)' }}>&ldquo;{item.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: 'var(--midnight)' }}>
                  {item.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--cream)' }}>{item.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{item.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
