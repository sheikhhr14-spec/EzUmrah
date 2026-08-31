const steps = [
  { num: '01', icon: '📝', title: 'Create Your Account', desc: 'Sign up in 2 minutes. Verify your travel agency license. We activate your account within 4 hours.' },
  { num: '02', icon: '⚙️', title: 'Configure Your CRM', desc: 'Add your team, upload your logo, set up package templates, and configure your invoice branding.' },
  { num: '03', icon: '👤', title: 'Add Your First Pilgrim', desc: 'Enter pilgrim details, upload documents, assign flights & hotels, and generate your first quotation.' },
  { num: '04', icon: '📤', title: 'Invoice & Go Live', desc: 'Print branded invoices, send confirmation emails, and track every booking to departure day.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">Getting Started</span>
          <h2 className="section-title">From Signup to First Booking in 4 Steps</h2>
          <p className="section-subtitle">No technical knowledge needed. Your team can be up and running in under a day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 -z-10" style={{ background: 'linear-gradient(to right, var(--gold-glow), transparent)' }} />
              )}
              <div className="glass-card p-8 text-center h-full">
                <div className="text-4xl font-bold mb-4 opacity-30" style={{ color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>{step.num}</div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-dim)' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
