export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 islamic-pattern" style={{ opacity: 0.3 }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,11,20,0.9) 0%, rgba(12,18,34,0.95) 100%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl" style={{ background: 'rgba(184,146,63,0.1)' }} />

      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--cream)' }}>
          Ready to Move Your Agency to the Cloud?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-dim)' }}>
          EzUmrah helps you manage pilgrims, bookings, invoices, and documents — all from one dashboard. Or let us build you a custom solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="btn-gold text-base">Start Free 14-Day Trial</a>
          <a href="#contact" className="btn-outline text-base">Discuss Custom Project</a>
        </div>
      </div>
    </section>
  );
}
