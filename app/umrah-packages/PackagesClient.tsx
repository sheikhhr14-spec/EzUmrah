'use client';

import { useState, useEffect, useRef } from 'react';

type PackageId = 'riyadh-3' | 'riyadh-5' | 'lahore-7' | 'lahore-14';
type FilterTab = 'all' | 'riyadh' | 'lahore';

interface ItineraryDay { day: string; title: string; desc: string; icon: string; }
interface Package {
  id: PackageId; origin: 'Riyadh' | 'Lahore'; duration: string; days: number;
  transport: 'Bus' | 'Flight'; price: string; priceUnit: string; priceUSD: string;
  hotelMakkah: string; hotelMadinah: string; tag: string; tagColor: string;
  popular: boolean; weeklyDeparture: boolean; visaIncluded: boolean;
  highlights: string[]; itinerary: ItineraryDay[]; inclusions: string[]; exclusions: string[];
}

const packages: Package[] = [
  {
    id: 'riyadh-3', origin: 'Riyadh', duration: '3 Days', days: 3, transport: 'Bus',
    price: 'SAR 950', priceUnit: 'per person', priceUSD: '~$250',
    hotelMakkah: 'Hotel near Haram', hotelMadinah: 'Day visit (no overnight)',
    tag: 'Express', tagColor: '#0d7c4e', popular: false, weeklyDeparture: false, visaIncluded: false,
    highlights: ['Round-trip bus transport from Riyadh', 'Hotel in Makkah near Haram', 'Day visit to Madinah (Masjid an-Nabawi)', 'Umrah performance assistance', 'Experienced group guide'],
    itinerary: [
      { day: 'Day 1', title: 'Riyadh → Makkah', desc: 'Early morning departure from Riyadh by luxury bus (approx. 7 hours). Arrive in Makkah, check into hotel near Masjid al-Haram. Enter Ihram at Miqat and perform Umrah (Tawaf + Sa\'i).', icon: '🚌' },
      { day: 'Day 2', title: 'Makkah — Spiritual Day', desc: 'Full day in Makkah. Attend prayers at Masjid al-Haram, perform additional Tawaf, and spend time in spiritual reflection.', icon: '🕋' },
      { day: 'Day 3', title: 'Madinah → Riyadh', desc: 'Early morning bus to Madinah (approx. 5 hours). Visit Masjid an-Nabawi, pray at the Rawdah, then depart for Riyadh by bus (approx. 8 hours).', icon: '🕌' },
    ],
    inclusions: ['Round-trip luxury bus transport', 'Hotel in Makkah near Haram (sharing basis)', 'Daily breakfast', 'Madinah day visit with Masjid an-Nabawi', 'Group guide assistance', 'Ihram guidance and Umrah briefing'],
    exclusions: ['Umrah visa fees', 'Lunch and dinner', 'Travel insurance', 'Personal expenses', 'Additional Ziyarat tours'],
  },
  {
    id: 'riyadh-5', origin: 'Riyadh', duration: '5 Days', days: 5, transport: 'Bus',
    price: 'SAR 1,450', priceUnit: 'per person', priceUSD: '~$385',
    hotelMakkah: 'Hotel near Haram', hotelMadinah: 'Hotel near Haram',
    tag: 'Value', tagColor: '#c9a96a', popular: true, weeklyDeparture: true, visaIncluded: false,
    highlights: ['Weekly departures from Riyadh', 'Round-trip bus transport', 'Hotel in Makkah near Haram', 'Hotel in Madinah near Masjid an-Nabawi', 'Full Ziyarat tour in Madinah', 'Umrah performance assistance'],
    itinerary: [
      { day: 'Day 1', title: 'Riyadh → Makkah', desc: 'Early morning departure from Riyadh by luxury bus. Arrive in Makkah, check into hotel. Enter Ihram at Miqat and perform Umrah.', icon: '🚌' },
      { day: 'Day 2', title: 'Makkah — Prayers & Tawaf', desc: 'Full day in Makkah. Prayers at Masjid al-Haram, additional Tawaf, spiritual time.', icon: '🕋' },
      { day: 'Day 3', title: 'Makkah → Madinah', desc: 'Morning departure to Madinah by bus (approx. 5 hours). Check into hotel near Masjid an-Nabawi. Evening prayers at the Prophet\'s Mosque.', icon: '🚐' },
      { day: 'Day 4', title: 'Madinah — Ziyarat Tour', desc: 'Guided Ziyarat tour: Mount Uhud, Quba Mosque, Baqi Cemetery, Masjid Qiblatayn, and Jabal al-Nour viewpoint.', icon: '⛰️' },
      { day: 'Day 5', title: 'Madinah → Riyadh', desc: 'Morning prayers at Masjid an-Nabawi, then depart for Riyadh by bus (approx. 8 hours). Arrive Riyadh by evening.', icon: '🚌' },
    ],
    inclusions: ['Round-trip luxury bus transport', 'Hotel in Makkah near Haram (sharing basis)', 'Hotel in Madinah near Haram (sharing basis)', 'Daily breakfast', 'Full Ziyarat tour in Madinah', 'Makkah to Madinah transport', 'Group guide assistance', 'Ihram guidance and Umrah briefing'],
    exclusions: ['Umrah visa fees', 'Lunch and dinner', 'Travel insurance', 'Personal expenses', 'Additional Ziyarat tours'],
  },
  {
    id: 'lahore-7', origin: 'Lahore', duration: '7 Days / 6 Nights', days: 7, transport: 'Flight',
    price: 'PKR 165,000', priceUnit: 'per person', priceUSD: '~$590',
    hotelMakkah: 'Hotel near Haram', hotelMadinah: 'Hotel near Haram',
    tag: 'Popular', tagColor: '#0d7c4e', popular: false, weeklyDeparture: false, visaIncluded: true,
    highlights: ['Return flights: Lahore ↔ Jeddah', 'Umrah visa included', 'Hotel in Makkah near Haram', 'Hotel in Madinah near Haram', 'Airport transfers both ways', 'Makkah to Madinah transport with Ziyarat stops', 'Full Ziyarat tour in Madinah', 'Equal days in Makkah and Madinah'],
    itinerary: [
      { day: 'Day 1', title: 'Lahore → Jeddah → Makkah', desc: 'Flight from Lahore to Jeddah. Airport transfer to Makkah (approx. 1.5 hours). Hotel check-in near Haram. Enter Ihram and perform Umrah.', icon: '✈️' },
      { day: 'Day 2', title: 'Makkah — Tawaf & Prayers', desc: 'Full day at Masjid al-Haram. Perform Tawaf, Sa\'i, and daily prayers. Spiritual reflection time.', icon: '🕋' },
      { day: 'Day 3', title: 'Makkah — Spiritual Day', desc: 'Additional Tawaf, prayers, and time at the Haram. Optional visit to Jabal al-Nour and Cave of Hira.', icon: '🕌' },
      { day: 'Day 4', title: 'Makkah → Madinah (with Ziyarat)', desc: 'Check out and travel to Madinah by coach. En-route Ziyarat stops at Bir Ali (Miqat), Aqeeq Mosque. Check into Madinah hotel near Masjid an-Nabawi.', icon: '🚐' },
      { day: 'Day 5', title: 'Madinah — Prophet\'s Mosque', desc: 'Full day at Masjid an-Nabawi. Prayers at the Rawdah, visit Prophet\'s grave, Salam at Rawdah Rasool.', icon: '🕌' },
      { day: 'Day 6', title: 'Madinah — Ziyarat Tour', desc: 'Guided Ziyarat: Mount Uhud, Quba Mosque, Baqi Cemetery, Masjid Qiblatayn, Seven Mosques. Return to hotel.', icon: '⛰️' },
      { day: 'Day 7', title: 'Madinah → Jeddah → Lahore', desc: 'Morning prayers. Transfer to Jeddah airport (approx. 4 hours). Return flight to Lahore.', icon: '✈️' },
    ],
    inclusions: ['Return flights: Lahore ↔ Jeddah (economy)', 'Umrah visa included', 'Hotel in Makkah near Haram (sharing basis)', 'Hotel in Madinah near Haram (sharing basis)', 'All airport transfers (Jeddah ↔ Makkah, Madinah ↔ Jeddah)', 'Makkah to Madinah transport with Ziyarat stops', 'Full Ziyarat tour in Madinah', 'Daily breakfast and dinner', 'Experienced guide throughout', 'Ihram guidance and Umrah briefing'],
    exclusions: ['Travel insurance', 'Lunch', 'Personal expenses', 'Optional tours (Jabal al-Nour, etc.)', 'Single room supplement'],
  },
  {
    id: 'lahore-14', origin: 'Lahore', duration: '14 Days / 13 Nights', days: 14, transport: 'Flight',
    price: 'PKR 295,000', priceUnit: 'per person', priceUSD: '~$1,050',
    hotelMakkah: 'Hotel near Haram', hotelMadinah: 'Hotel near Haram',
    tag: 'Premium', tagColor: '#c9a96a', popular: false, weeklyDeparture: false, visaIncluded: true,
    highlights: ['Return flights: Lahore ↔ Jeddah', 'Umrah visa included', 'Hotel in Makkah near Haram', 'Hotel in Madinah near Haram', 'All airport transfers both ways', 'Makkah to Madinah transport with Ziyarat stops', 'Extended Ziyarat tours in Madinah', '7 days in Makkah + 7 days in Madinah', 'Daily breakfast and dinner'],
    itinerary: [
      { day: 'Day 1', title: 'Lahore → Jeddah → Makkah', desc: 'Flight from Lahore to Jeddah. Airport transfer to Makkah. Hotel check-in near Haram. Enter Ihram and perform Umrah.', icon: '✈️' },
      { day: 'Day 2', title: 'Makkah — Tawaf & Sa\'i', desc: 'Perform Tawaf and Sa\'i. Prayers at Masjid al-Haram. Spiritual reflection.', icon: '🕋' },
      { day: 'Day 3', title: 'Makkah — Spiritual Time', desc: 'Daily prayers, additional Tawaf, time at the Haram. Optional Jabal al-Nour visit.', icon: '🕌' },
      { day: 'Day 4', title: 'Makkah — Prayers', desc: 'Continue spiritual journey. Daily prayers at Masjid al-Haram.', icon: '🕋' },
      { day: 'Day 5', title: 'Makkah — Reflection', desc: 'Additional Tawaf, Quran recitation at Haram, peaceful spiritual time.', icon: '📖' },
      { day: 'Day 6', title: 'Makkah — Final Prayers', desc: 'Last full day in Makkah. Perform farewell Tawaf (Tawaf al-Wada).', icon: '🕌' },
      { day: 'Day 7', title: 'Makkah → Madinah (with Ziyarat)', desc: 'Check out and travel to Madinah by coach. En-route Ziyarat: Bir Ali, Aqeeq Mosque. Check into Madinah hotel.', icon: '🚐' },
      { day: 'Day 8', title: 'Madinah — Prophet\'s Mosque', desc: 'Full day at Masjid an-Nabawi. Prayers at the Rawdah, visit Prophet\'s grave.', icon: '🕌' },
      { day: 'Day 9', title: 'Madinah — Ziyarat Tour 1', desc: 'Guided Ziyarat: Mount Uhud, Martyrs of Uhud, Quba Mosque (first mosque in Islam).', icon: '⛰️' },
      { day: 'Day 10', title: 'Madinah — Ziyarat Tour 2', desc: 'Guided Ziyarat: Baqi Cemetery, Masjid Qiblatayn, Seven Mosques, Jabal Uhud viewpoint.', icon: '🕌' },
      { day: 'Day 11', title: 'Madinah — Spiritual Day', desc: 'Prayers at Masjid an-Nabawi, Quran recitation, peaceful reflection.', icon: '📖' },
      { day: 'Day 12', title: 'Madinah — Prayers', desc: 'Daily prayers at the Prophet\'s Mosque. Additional time at Rawdah.', icon: '🕌' },
      { day: 'Day 13', title: 'Madinah — Final Prayers', desc: 'Farewell prayers at Masjid an-Nabawi. Pack and prepare for departure.', icon: '🕋' },
      { day: 'Day 14', title: 'Madinah → Jeddah → Lahore', desc: 'Transfer to Jeddah airport (approx. 4 hours). Return flight to Lahore.', icon: '✈️' },
    ],
    inclusions: ['Return flights: Lahore ↔ Jeddah (economy)', 'Umrah visa included', 'Hotel in Makkah near Haram (sharing basis)', 'Hotel in Madinah near Haram (sharing basis)', 'All airport transfers (Jeddah ↔ Makkah, Madinah ↔ Jeddah)', 'Makkah to Madinah transport with Ziyarat stops', 'Two full Ziyarat tours in Madinah', 'Daily breakfast and dinner', 'Experienced guide throughout', 'Ihram guidance and Umrah briefing', 'Welcome kit (Ihram, prayer mat, tasbeeh)'],
    exclusions: ['Travel insurance', 'Lunch', 'Personal expenses', 'Optional tours', 'Single room supplement'],
  },
];

const inquiryCountries = ['Saudi Arabia','Pakistan','United Kingdom','United States','India','United Arab Emirates','Egypt','Malaysia','Indonesia','Turkey','Bangladesh','Nigeria','South Africa','Morocco','Jordan','Kuwait','Qatar','Bahrain','Oman','Canada','Germany','France','Other / Not Listed'];

/* ===== Scroll reveal hook ===== */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.style.opacity = '1'; el.style.transform = 'none'; return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.unobserve(el); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ===== Reveal wrapper component ===== */
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  useEffect(() => { if (ref.current && delay) ref.current.style.transitionDelay = `${delay}ms`; }, [delay]);
  return <div ref={ref} className={className} style={{ opacity: 0, transform: 'translateY(32px)' }}>{children}</div>;
}

export default function PackagesClient() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [expandedId, setExpandedId] = useState<PackageId | null>(null);
  const [inquiryStatus, setInquiryStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleInquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInquiryStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xppzwyvz', { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
      if (response.ok) { setInquiryStatus('success'); form.reset(); } else { setInquiryStatus('error'); }
    } catch { setInquiryStatus('error'); }
  };

  const filtered = activeTab === 'all' ? packages : packages.filter((p) => p.origin.toLowerCase() === activeTab);

  const C = {
    bg: '#f0f4f8', card: '#ffffff', text: '#0f172a', textDim: '#64748b', textFaint: '#94a3b8',
    border: '#e2e8f0', primary: '#0d7c4e', primaryDark: '#0a6b40', primaryLight: '#ecfdf5',
    gold: '#c9a96a', goldLight: '#fef9ee', danger: '#ef4444', dangerLight: '#fef2f2',
  };

  const inputStyle = { background: '#f8fafc', border: `1px solid ${C.border}`, color: C.text, borderRadius: '14px' };

  return (
    <div style={{ background: `linear-gradient(180deg, #f0f4f8 0%, #e8eef5 100%)`, color: C.text, minHeight: '100vh', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      <style>{`
        @keyframes pkgFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pkgGradientShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes pkgPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.85;transform:scale(0.97)} }
        @keyframes pkgShimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes pkgSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .pkg-card-anim { opacity:0; transform:translateY(28px); animation: pkgRevealUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes pkgRevealUp { to{opacity:1;transform:translateY(0)} }
        .pkg-glass { backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%); }
        .pkg-input:focus { border-color: ${C.primary} !important; box-shadow: 0 0 0 4px rgba(13,124,78,0.08) !important; }
        .pkg-card-hover { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
        .pkg-card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(13,124,78,0.12), 0 0 0 1px rgba(13,124,78,0.1); }
        .pkg-accordion { transition: max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease; }
        .pkg-badge-pulse { animation: pkgPulse 2.5s ease-in-out infinite; }
        .pkg-float { animation: pkgFloat 5s ease-in-out infinite; }
        .pkg-tab-active { transition: all 0.35s cubic-bezier(0.16,1,0.3,1); }
        @media (prefers-reduced-motion: reduce) { .pkg-card-anim, .pkg-float, .pkg-badge-pulse { animation: none !important; opacity:1 !important; transform:none !important; } }
      `}</style>

      {/* ===== Glass Header ===== */}
      <header className="fixed top-0 left-0 right-0 z-[1000] pkg-glass"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.60)',
          borderBottom: `1px solid ${scrolled ? C.border : 'transparent'}`,
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.04)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="container flex items-center justify-between" style={{ height: '68px' }}>
          <a href="/" className="flex items-center gap-2.5">
            <div className="pkg-float" style={{ width: '38px', height: '38px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', background: `linear-gradient(135deg, ${C.primaryLight}, ${C.goldLight})`, border: `1px solid ${C.border}` }}>🕋</div>
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif', color: C.text }}>EzUmrah</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {[{ href: '/', label: 'Home' }, { href: '/umrah-packages', label: 'Packages', active: true }, { href: '/pricing', label: 'CRM Pricing' }, { href: '/contact', label: 'Contact' }].map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300"
                style={{ color: l.active ? C.primary : C.textDim, background: l.active ? C.primaryLight : 'transparent' }}>{l.label}</a>
            ))}
            <a href="#inquiry" className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`, color: '#fff', boxShadow: '0 4px 16px rgba(13,124,78,0.2)' }}>Book Now</a>
          </div>
          <a href="#inquiry" className="md:hidden text-xs font-semibold px-4 py-2 rounded-lg" style={{ background: C.primary, color: '#fff' }}>Book</a>
        </div>
      </header>

      {/* ===== Hero — Animated Gradient Mesh ===== */}
      <section style={{ paddingTop: '130px', paddingBottom: '70px', position: 'relative', overflow: 'hidden' }}>
        {/* Animated gradient blobs */}
        <div className="pkg-float" style={{ position: 'absolute', top: '-60px', right: '-40px', width: '380px', height: '380px', borderRadius: '50%', background: `radial-gradient(circle, rgba(13,124,78,0.12) 0%, transparent 70%)` }} />
        <div className="pkg-float" style={{ position: 'absolute', bottom: '-40px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: `radial-gradient(circle, rgba(201,169,106,0.10) 0%, transparent 70%)`, animationDelay: '1.5s' }} />
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '200px', borderRadius: '50%', background: `radial-gradient(ellipse, rgba(13,124,78,0.04) 0%, transparent 70%)`, filter: 'blur(40px)' }} />

        <div className="container relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 pkg-glass"
              style={{ background: 'rgba(255,255,255,0.7)', border: `1px solid ${C.border}`, boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: C.primary }} className="pkg-badge-pulse" />
              <span className="text-sm font-semibold" style={{ color: C.primary }}>Umrah Season 2026 — Now Booking</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: C.text, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Umrah Packages from <br className="hidden sm:block" />
              <span style={{ background: `linear-gradient(135deg, ${C.primary} 0%, ${C.gold} 100%)`, backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'pkgGradientShift 4s ease-in-out infinite' }}>Riyadh & Lahore</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-2xl mx-auto mb-8" style={{ fontSize: '1.1rem', color: C.textDim, lineHeight: 1.7 }}>
              From 3-day express trips to 14-day premium journeys. Hotels near Haram, bus or flight transport, Ziyarat tours, and expert guides — all included.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[{ num: '4', label: 'Packages' }, { num: '3-14', label: 'Days' }, { num: '100%', label: 'Halal' }, { num: 'Weekly', label: 'Departures' }].map((s, i) => (
                <div key={s.label} className="text-center" style={{ animation: `pkgFloat 4s ease-in-out infinite ${i * 0.3}s` }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-playfair), serif', color: C.primary }}>{s.num}</div>
                  <div className="text-xs" style={{ color: C.textFaint, marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Filter Tabs — Sleek Pill ===== */}
      <div className="pkg-glass" style={{ position: 'sticky', top: '68px', zIndex: 100, background: 'rgba(255,255,255,0.75)', borderBottom: `1px solid ${C.border}` }}>
        <div className="container py-4">
          <div className="flex items-center gap-2 sm:gap-3 justify-center">
            {([{ id: 'all', label: 'All Packages', count: packages.length }, { id: 'riyadh', label: 'From Riyadh', count: 2 }, { id: 'lahore', label: 'From Lahore', count: 2 }] as { id: FilterTab; label: string; count: number }[]).map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="pkg-tab-active text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2.5 rounded-full"
                style={{ background: activeTab === tab.id ? `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})` : 'rgba(255,255,255,0.6)', color: activeTab === tab.id ? '#fff' : C.textDim, border: `1px solid ${activeTab === tab.id ? 'transparent' : C.border}`, boxShadow: activeTab === tab.id ? '0 4px 16px rgba(13,124,78,0.2)' : 'none' }}>
                {tab.label} <span style={{ opacity: 0.6 }}>({tab.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Package Cards ===== */}
      <section style={{ padding: '56px 0 80px' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filtered.map((pkg, idx) => (
              <div key={pkg.id} className="pkg-card-anim pkg-card-hover rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.85)', border: `1px solid ${C.border}`,
                  boxShadow: pkg.popular ? `0 12px 48px rgba(13,124,78,0.10), 0 0 0 2px ${C.primary}` : '0 4px 24px rgba(0,0,0,0.04)',
                  animationDelay: `${idx * 120}ms`, backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                }}
              >
                {/* Header gradient */}
                <div style={{
                  background: pkg.popular ? `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryDark} 100%)` : `linear-gradient(135deg, ${C.primaryLight} 0%, ${C.goldLight} 100%)`,
                  padding: '28px 32px', position: 'relative', overflow: 'hidden',
                }}>
                  {pkg.popular && <span style={{ position: 'absolute', top: '20px', right: '20px', background: C.gold, color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '5px 14px', borderRadius: '100px', letterSpacing: '0.08em', textTransform: 'uppercase' }} className="pkg-badge-pulse">★ Most Popular</span>}
                  <div className="flex items-start justify-between" style={{ gap: '16px' }}>
                    <div>
                      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3" style={{ background: pkg.popular ? 'rgba(255,255,255,0.2)' : '#fff', color: pkg.popular ? '#fff' : pkg.tagColor, backdropFilter: 'blur(8px)' }}>{pkg.tag}</span>
                      <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: pkg.popular ? '#fff' : C.text, marginBottom: '4px' }}>{pkg.duration}</h3>
                      <p style={{ fontSize: '0.9rem', color: pkg.popular ? 'rgba(255,255,255,0.85)' : C.textDim }}>{pkg.origin} → Makkah + Madinah</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-playfair), serif', color: pkg.popular ? '#fff' : C.primary }}>{pkg.price}</div>
                      <div style={{ fontSize: '0.75rem', color: pkg.popular ? 'rgba(255,255,255,0.7)' : C.textFaint }}>{pkg.priceUnit} · {pkg.priceUSD}</div>
                    </div>
                  </div>
                  {/* Animated badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs px-3 py-1.5 rounded-lg" style={{ background: pkg.popular ? 'rgba(255,255,255,0.15)' : '#fff', color: pkg.popular ? '#fff' : C.textDim }}>{pkg.transport === 'Bus' ? '🚌 By Bus' : '✈️ By Flight'}</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg" style={{ background: pkg.popular ? 'rgba(255,255,255,0.15)' : '#fff', color: pkg.popular ? '#fff' : C.textDim }}>🏨 Hotel Included</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg" style={{ background: pkg.popular ? 'rgba(255,255,255,0.15)' : '#fff', color: pkg.popular ? '#fff' : C.textDim }}>🕌 Ziyarat Tour</span>
                    {pkg.visaIncluded && <span className="text-xs px-3 py-1.5 rounded-lg pkg-badge-pulse" style={{ background: pkg.popular ? 'rgba(255,255,255,0.25)' : C.primary, color: '#fff', fontWeight: 600 }}>✓ Visa Included</span>}
                    {pkg.weeklyDeparture && <span className="text-xs px-3 py-1.5 rounded-lg pkg-badge-pulse" style={{ background: pkg.popular ? 'rgba(255,255,255,0.25)' : C.primary, color: '#fff', fontWeight: 600 }}>📅 Weekly Departures</span>}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '28px 32px' }}>
                  <h4 className="text-sm font-bold mb-3" style={{ color: C.text }}>Package Highlights</h4>
                  <ul className="space-y-2.5 mb-6">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: C.textDim }}>
                        <span style={{ color: C.primary, fontWeight: 700, fontSize: '0.85rem', marginTop: '1px', flexShrink: 0 }}>✓</span>{h}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="p-4 rounded-2xl" style={{ background: '#f8fafc', border: `1px solid ${C.border}` }}>
                      <div className="text-xs font-semibold mb-1" style={{ color: C.textFaint, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Makkah</div>
                      <div className="text-sm font-medium" style={{ color: C.text }}>{pkg.hotelMakkah}</div>
                    </div>
                    <div className="p-4 rounded-2xl" style={{ background: '#f8fafc', border: `1px solid ${C.border}` }}>
                      <div className="text-xs font-semibold mb-1" style={{ color: C.textFaint, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Madinah</div>
                      <div className="text-sm font-medium" style={{ color: C.text }}>{pkg.hotelMadinah}</div>
                    </div>
                  </div>

                  {/* Itinerary toggle */}
                  <button onClick={() => setExpandedId(expandedId === pkg.id ? null : pkg.id)}
                    className="w-full flex items-center justify-between py-3.5 px-5 rounded-2xl transition-all duration-300"
                    style={{ background: C.primaryLight, border: `1px solid ${C.border}` }}>
                    <span className="text-sm font-semibold" style={{ color: C.primary }}>📋 View {pkg.days}-Day Itinerary</span>
                    <span style={{ color: C.primary, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', transform: expandedId === pkg.id ? 'rotate(180deg)' : 'none' }}>▼</span>
                  </button>

                  {expandedId === pkg.id && (
                    <div className="mt-5 space-y-3 pkg-accordion" style={{ maxHeight: '2000px' }}>
                      {/* Timeline */}
                      <div style={{ position: 'relative', paddingLeft: '28px' }}>
                        <div style={{ position: 'absolute', left: '13px', top: '12px', bottom: '12px', width: '2px', background: `linear-gradient(to bottom, ${C.primary}, ${C.border})` }} />
                        {pkg.itinerary.map((item, i) => (
                          <div key={i} className="flex gap-3 mb-3" style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-28px', width: '28px', height: '28px', borderRadius: '50%', background: '#fff', border: `2px solid ${C.primary}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', zIndex: 1 }}>{item.icon}</div>
                            <div className="flex-1 p-3.5 rounded-2xl" style={{ background: '#f8fafc', border: `1px solid ${C.border}`, marginLeft: '12px' }}>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold px-2 py-0.5 rounded-md" style={{ background: C.primary, color: '#fff' }}>{item.day}</span>
                                <span className="text-sm font-semibold" style={{ color: C.text }}>{item.title}</span>
                              </div>
                              <p className="text-xs leading-relaxed" style={{ color: C.textDim }}>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Inclusions / Exclusions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                        <div className="p-4 rounded-2xl" style={{ background: C.primaryLight, border: `1px solid ${C.border}` }}>
                          <h5 className="text-xs font-bold mb-2" style={{ color: C.primary, textTransform: 'uppercase', letterSpacing: '0.05em' }}>✓ What's Included</h5>
                          <ul className="space-y-1.5">{pkg.inclusions.map((inc, i) => (<li key={i} className="text-xs flex items-start gap-2" style={{ color: C.textDim }}><span style={{ color: C.primary }}>✓</span> {inc}</li>))}</ul>
                        </div>
                        <div className="p-4 rounded-2xl" style={{ background: C.dangerLight, border: `1px solid ${C.border}` }}>
                          <h5 className="text-xs font-bold mb-2" style={{ color: C.danger, textTransform: 'uppercase', letterSpacing: '0.05em' }}>✗ Not Included</h5>
                          <ul className="space-y-1.5">{pkg.exclusions.map((exc, i) => (<li key={i} className="text-xs flex items-start gap-2" style={{ color: C.textFaint }}><span style={{ color: C.danger }}>✗</span> {exc}</li>))}</ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a href="#inquiry" className="flex-1 text-center text-sm font-semibold py-3.5 rounded-2xl transition-all duration-300"
                      style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`, color: '#fff', boxShadow: '0 4px 16px rgba(13,124,78,0.2)' }}>Book This Package</a>
                    <a href="#inquiry" className="flex-1 text-center text-sm font-semibold py-3.5 rounded-2xl transition-all duration-300"
                      style={{ border: `1px solid ${C.border}`, color: C.text, background: '#fff' }}>Ask a Question</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Route Map ===== */}
      <section style={{ background: 'rgba(255,255,255,0.6)', padding: '64px 0', borderTop: `1px solid ${C.border}` }} className="pkg-glass">
        <div className="container text-center">
          <Reveal>
            <h2 className="mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: C.text }}>Your Spiritual Journey Route</h2>
            <p className="max-w-xl mx-auto mb-10" style={{ fontSize: '0.95rem', color: C.textDim }}>Every package covers the sacred route from your city to Makkah and Madinah.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Reveal>
              <div className="p-8 rounded-3xl pkg-card-hover" style={{ background: C.primaryLight, border: `1px solid ${C.border}` }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: C.primary, fontFamily: 'var(--font-playfair), serif' }}>🚌 From Riyadh (by Bus)</h3>
                <div className="flex items-center justify-center gap-2 flex-wrap text-sm" style={{ color: C.textDim }}>
                  {['Riyadh', 'Makkah', 'Madinah', 'Riyadh'].map((city, i, arr) => (
                    <span key={city} className="flex items-center gap-2">
                      <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: C.text, border: `1px solid ${C.border}` }}>{city}</span>
                      {i < arr.length - 1 && <span style={{ color: C.primary, fontWeight: 700 }}>→</span>}
                    </span>
                  ))}
                </div>
                <p className="text-xs mt-4" style={{ color: C.textFaint }}>Approx. 7 hrs Riyadh → Makkah · 5 hrs Makkah → Madinah</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="p-8 rounded-3xl pkg-card-hover" style={{ background: C.goldLight, border: `1px solid ${C.border}` }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#b8860b', fontFamily: 'var(--font-playfair), serif' }}>✈️ From Lahore (by Flight)</h3>
                <div className="flex items-center justify-center gap-2 flex-wrap text-sm" style={{ color: C.textDim }}>
                  {['Lahore', 'Jeddah', 'Makkah', 'Madinah', 'Lahore'].map((city, i, arr) => (
                    <span key={city} className="flex items-center gap-2">
                      <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: C.text, border: `1px solid ${C.border}` }}>{city}</span>
                      {i < arr.length - 1 && <span style={{ color: C.gold, fontWeight: 700 }}>→</span>}
                    </span>
                  ))}
                </div>
                <p className="text-xs mt-4" style={{ color: C.textFaint }}>Flight: Lahore → Jeddah · Transfer: Jeddah → Makkah (1.5 hrs)</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section style={{ padding: '64px 0' }}>
        <div className="container text-center">
          <Reveal>
            <h2 className="mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: C.text }}>Why Book With EzUmrah?</h2>
            <p className="max-w-xl mx-auto mb-10" style={{ fontSize: '0.95rem', color: C.textDim }}>We handle every detail so you can focus on your spiritual journey.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[{ icon: '🏨', title: 'Hotels Near Haram', desc: 'Walking distance to Masjid al-Haram and Masjid an-Nabawi' }, { icon: '🧭', title: 'Expert Guides', desc: 'Experienced group leaders for Umrah and Ziyarat' }, { icon: '🚐', title: 'All Transport', desc: 'Bus, flight, airport transfers, and inter-city travel' }, { icon: '💬', title: '24/7 Support', desc: 'WhatsApp support throughout your journey' }].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-6 rounded-3xl text-center pkg-card-hover" style={{ background: 'rgba(255,255,255,0.7)', border: `1px solid ${C.border}`, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                  <div className="text-3xl mb-3 pkg-float" style={{ animationDelay: `${i * 0.4}s` }}>{item.icon}</div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: C.text }}>{item.title}</h3>
                  <p className="text-xs" style={{ color: C.textDim }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Inquiry Form — Glass Card ===== */}
      <section id="inquiry" style={{ padding: '64px 0 80px' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-4" style={{ background: C.primaryLight, border: `1px solid ${C.border}` }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: C.primary }} className="pkg-badge-pulse" />
                  <span className="text-sm font-semibold" style={{ color: C.primary }}>Quick Inquiry</span>
                </div>
                <h2 className="mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: C.text }}>Book Your Umrah Package</h2>
                <p className="max-w-lg mx-auto" style={{ fontSize: '0.95rem', color: C.textDim }}>Fill out the form below and our team will get back to you within 24 hours with availability, pricing confirmation, and next steps.</p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <form onSubmit={handleInquiry} className="rounded-3xl p-6 sm:p-8 space-y-5 pkg-glass"
                style={{ background: 'rgba(255,255,255,0.85)', border: `1px solid ${C.border}`, boxShadow: '0 12px 48px rgba(0,0,0,0.06)' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: C.text }}>Full Name *</label>
                    <input type="text" name="name" required placeholder="Your full name" className="pkg-input w-full px-4 py-3 text-sm outline-none transition-all" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: C.text }}>Email Address *</label>
                    <input type="email" name="email" required placeholder="you@example.com" className="pkg-input w-full px-4 py-3 text-sm outline-none transition-all" style={inputStyle} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: C.text }}>WhatsApp Number *</label>
                    <input type="tel" name="whatsapp_number" required placeholder="+44 7xx xxx xxxx" className="pkg-input w-full px-4 py-3 text-sm outline-none transition-all" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: C.text }}>Country *</label>
                    <select name="country" required className="pkg-input w-full px-4 py-3 text-sm outline-none transition-all" style={inputStyle} defaultValue="">
                      <option value="" disabled>Select your country</option>
                      {inquiryCountries.map((c) => (<option key={c} value={c} style={{ background: '#fff' }}>{c}</option>))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: C.text }}>Package of Interest *</label>
                    <select name="package" required className="pkg-input w-full px-4 py-3 text-sm outline-none transition-all" style={inputStyle} defaultValue="">
                      <option value="" disabled>Select a package</option>
                      <option value="3-Day Express — Riyadh by Bus (SAR 950)" style={{ background: '#fff' }}>3-Day Express — Riyadh by Bus (SAR 950)</option>
                      <option value="5-Day Value — Riyadh by Bus (SAR 1,450)" style={{ background: '#fff' }}>5-Day Value — Riyadh by Bus (SAR 1,450)</option>
                      <option value="7-Day — Lahore by Flight (PKR 165,000)" style={{ background: '#fff' }}>7-Day — Lahore by Flight (PKR 165,000)</option>
                      <option value="14-Day Premium — Lahore by Flight (PKR 295,000)" style={{ background: '#fff' }}>14-Day Premium — Lahore by Flight (PKR 295,000)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: C.text }}>Number of People *</label>
                    <select name="travelers" required className="pkg-input w-full px-4 py-3 text-sm outline-none transition-all" style={inputStyle} defaultValue="">
                      <option value="" disabled>How many people?</option>
                      <option value="1 person" style={{ background: '#fff' }}>1 person</option>
                      <option value="2 people" style={{ background: '#fff' }}>2 people</option>
                      <option value="3-5 people" style={{ background: '#fff' }}>3-5 people</option>
                      <option value="6-10 people" style={{ background: '#fff' }}>6-10 people</option>
                      <option value="10+ people (group)" style={{ background: '#fff' }}>10+ people (group)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: C.text }}>Preferred Travel Date</label>
                  <input type="date" name="preferred_date" className="pkg-input w-full px-4 py-3 text-sm outline-none transition-all" style={inputStyle} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: C.text }}>Additional Notes</label>
                  <textarea name="message" rows={4} placeholder="Any special requirements, questions, or preferences..." className="pkg-input w-full px-4 py-3 text-sm outline-none transition-all resize-none" style={inputStyle} />
                </div>
                <button type="submit" disabled={inquiryStatus === 'sending'}
                  className="w-full text-sm font-semibold py-4 rounded-2xl transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`, color: '#fff', boxShadow: '0 4px 16px rgba(13,124,78,0.2)', opacity: inquiryStatus === 'sending' ? 0.7 : 1 }}>
                  {inquiryStatus === 'sending' ? 'Sending...' : '📩 Send Inquiry'}
                </button>
                {inquiryStatus === 'success' && <div className="text-sm text-center p-4 rounded-2xl" style={{ background: C.primaryLight, color: C.primary }}>✅ Thank you! Your inquiry has been sent. We&apos;ll get back to you within 24 hours.</div>}
                {inquiryStatus === 'error' && <div className="text-sm text-center p-4 rounded-2xl" style={{ background: C.dangerLight, color: C.danger }}>Something went wrong. Please try again or contact us directly.</div>}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer style={{ background: '#0f172a', padding: '48px 0 32px' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: 'rgba(13,124,78,0.15)', border: '1px solid rgba(13,124,78,0.2)' }}>🕋</div>
                <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-playfair), serif', color: '#fff' }}>EzUmrah</span>
              </div>
              <p className="text-sm" style={{ color: '#94a3b8' }}>Cloud travel CRM and Umrah packages for agencies worldwide.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3" style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
              <ul className="space-y-2">{[{ href: '/', label: 'Home' }, { href: '/umrah-packages', label: 'Umrah Packages' }, { href: '/pricing', label: 'CRM Pricing' }, { href: '/contact', label: 'Contact' }, { href: '/faq', label: 'FAQ' }].map((l) => (<li key={l.href}><a href={l.href} className="text-sm transition-colors" style={{ color: '#94a3b8' }}>{l.label}</a></li>))}</ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3" style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Get in Touch</h4>
              <p className="text-sm mb-2" style={{ color: '#94a3b8' }}>We respond within 4 business hours.</p>
              <a href="/contact" className="inline-block text-sm font-semibold px-5 py-2.5 rounded-xl transition-all" style={{ background: C.primary, color: '#fff' }}>Contact Us</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }} className="text-center">
            <p className="text-xs" style={{ color: '#64748b' }}>© 2026 EzUmrah by EzTechify. All rights reserved. · <a href="/privacy-policy" style={{ color: '#64748b' }}>Privacy</a> · <a href="/terms-of-service" style={{ color: '#64748b' }}>Terms</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
