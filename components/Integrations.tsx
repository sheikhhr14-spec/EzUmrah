const integrations = [
  { name: 'Amadeus', desc: 'Access the world\u2019s largest GDS with 200+ airlines and real-time pricing.' },
  { name: 'Sabre', desc: 'Connect to Sabre\u2019s vast travel network for flights, hotels, and car rentals.' },
  { name: 'Galileo', desc: 'Integrate Travelport Galileo for comprehensive travel inventory management.' },
  { name: 'Travelport', desc: 'Multi-GDS platform with Smartpoint and universal API integration.' },
];

export default function Integrations() {
  return (
    <section id="integrations" className="section relative" style={{ background: 'var(--midnight2)' }}>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">GDS Integrations</span>
          <h2 className="section-title">Connect to Global Travel Inventory</h2>
          <p className="section-subtitle">We integrate the world\u2019s leading GDS systems into your EzUmrah CRM or custom travel website. Real-time flight search, pricing, and booking.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integ, i) => (
            <div key={i} className="glass-card p-8 text-center fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(13,148,136,0.1))', border: '1px solid var(--border)', color: 'var(--gold)', fontFamily: 'var(--font-playfair), serif' }}>
                {integ.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--cream)' }}>{integ.name}</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>{integ.desc}</p>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ background: 'rgba(13,148,136,0.1)', color: 'var(--teal-light)', border: '1px solid rgba(13,148,136,0.2)' }}>
                ✓ Available
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
