const services = [
  { icon: '🔧', title: 'Custom Travel CRM', desc: "Bespoke CRM built specifically for your agency's workflow, branding, and requirements." },
  { icon: '🌐', title: 'Travel Website with Search', desc: 'Full-featured travel website with flight, hotel, and package search for your customers.' },
  { icon: '🔌', title: 'GDS API Integration', desc: 'Connect Amadeus, Sabre, Galileo, or Travelport to your existing CRM or website.' },
  { icon: '🏷️', title: 'White-Label Solutions', desc: 'Your own branded booking platform powered by our infrastructure.' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Branded pilgrim apps for iOS and Android with itinerary and notifications.' },
];

export default function Services() {
  return (
    <section id="services" className="section relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">Custom Development</span>
          <h2 className="section-title">Need More Than the Standard CRM?</h2>
          <p className="section-subtitle">We build custom travel technology solutions tailored to your exact business needs. From bespoke CRMs to full travel websites with live search engines.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((svc, i) => (
            <div key={i} className="glass-card p-8 flex gap-5 fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)' }}>
                {svc.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>{svc.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-dim)' }}>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-gold text-base">Discuss Your Project</a>
        </div>
      </div>
    </section>
  );
}
