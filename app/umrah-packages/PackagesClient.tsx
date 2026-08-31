'use client';

import { useState } from 'react';

type PackageId = 'riyadh-3' | 'riyadh-5' | 'lahore-7' | 'lahore-14';
type FilterTab = 'all' | 'riyadh' | 'lahore';

interface ItineraryDay {
  day: string;
  title: string;
  desc: string;
  icon: string;
}

interface Package {
  id: PackageId;
  origin: 'Riyadh' | 'Lahore';
  duration: string;
  days: number;
  nights: number;
  transport: 'Bus' | 'Flight';
  price: string;
  priceUnit: string;
  priceUSD: string;
  hotelMakkah: string;
  hotelMadinah: string;
  tag: string;
  tagColor: string;
  popular: boolean;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

const packages: Package[] = [
  {
    id: 'riyadh-3',
    origin: 'Riyadh',
    duration: '3 Days / 2 Nights',
    days: 3,
    nights: 2,
    transport: 'Bus',
    price: 'SAR 950',
    priceUnit: 'per person',
    priceUSD: '~$250',
    hotelMakkah: '3★ Hotel near Haram (2 nights)',
    hotelMadinah: 'Day visit (no overnight)',
    tag: 'Express',
    tagColor: '#0d7c4e',
    popular: false,
    highlights: [
      'Round-trip bus transport from Riyadh',
      '2 nights hotel in Makkah near Haram',
      'Day visit to Madinah (Masjid an-Nabawi)',
      'Umrah performance assistance',
      'Experienced group guide',
    ],
    itinerary: [
      { day: 'Day 1', title: 'Riyadh → Makkah', desc: 'Early morning departure from Riyadh by luxury bus (approx. 7 hours). Arrive in Makkah, check into hotel near Masjid al-Haram. Enter Ihram at Miqat and perform Umrah (Tawaf + Sa\'i).', icon: '🚌' },
      { day: 'Day 2', title: 'Makkah — Spiritual Day', desc: 'Full day in Makkah. Attend prayers at Masjid al-Haram, perform additional Tawaf, and spend time in spiritual reflection. Overnight at hotel.', icon: '🕋' },
      { day: 'Day 3', title: 'Madinah → Riyadh', desc: 'Early morning bus to Madinah (approx. 5 hours). Visit Masjid an-Nabawi, pray at the Rawdah, then depart for Riyadh by bus (approx. 8 hours).', icon: '🕌' },
    ],
    inclusions: [
      'Round-trip luxury bus transport',
      '2 nights hotel in Makkah (sharing basis)',
      'Daily breakfast',
      'Madinah day visit with Masjid an-Nabawi',
      'Group guide assistance',
      'Ihram guidance and Umrah briefing',
    ],
    exclusions: [
      'Umrah visa fees',
      'Lunch and dinner',
      'Travel insurance',
      'Personal expenses',
      'Additional Ziyarat tours',
    ],
  },
  {
    id: 'riyadh-5',
    origin: 'Riyadh',
    duration: '5 Days / 2 Nights',
    days: 5,
    nights: 2,
    transport: 'Bus',
    price: 'SAR 1,450',
    priceUnit: 'per person',
    priceUSD: '~$385',
    hotelMakkah: '3★ Hotel near Haram (1 night)',
    hotelMadinah: '3★ Hotel near Haram (1 night)',
    tag: 'Value',
    tagColor: '#c9a96a',
    popular: true,
    highlights: [
      'Round-trip bus transport from Riyadh',
      '1 night hotel in Makkah near Haram',
      '1 night hotel in Madinah near Masjid an-Nabawi',
      'Full Ziyarat tour in Madinah',
      'Umrah performance assistance',
    ],
    itinerary: [
      { day: 'Day 1', title: 'Riyadh → Makkah', desc: 'Early morning departure from Riyadh by luxury bus. Arrive in Makkah, check into hotel. Enter Ihram at Miqat and perform Umrah.', icon: '🚌' },
      { day: 'Day 2', title: 'Makkah — Prayers & Tawaf', desc: 'Full day in Makkah. Prayers at Masjid al-Haram, additional Tawaf, spiritual time. Overnight at Makkah hotel.', icon: '🕋' },
      { day: 'Day 3', title: 'Makkah → Madinah', desc: 'Morning departure to Madinah by bus (approx. 5 hours). Check into hotel near Masjid an-Nabawi. Evening prayers at the Prophet\'s Mosque.', icon: '🚐' },
      { day: 'Day 4', title: 'Madinah — Ziyarat Tour', desc: 'Guided Ziyarat tour: Mount Uhud, Quba Mosque, Baqi Cemetery, Masjid Qiblatayn, and Jabal al-Nour viewpoint. Overnight at Madinah hotel.', icon: '⛰️' },
      { day: 'Day 5', title: 'Madinah → Riyadh', desc: 'Morning prayers at Masjid an-Nabawi, then depart for Riyadh by bus (approx. 8 hours). Arrive Riyadh by evening.', icon: '🚌' },
    ],
    inclusions: [
      'Round-trip luxury bus transport',
      '1 night hotel in Makkah (sharing basis)',
      '1 night hotel in Madinah (sharing basis)',
      'Daily breakfast',
      'Full Ziyarat tour in Madinah',
      'Makkah to Madinah transport',
      'Group guide assistance',
      'Ihram guidance and Umrah briefing',
    ],
    exclusions: [
      'Umrah visa fees',
      'Lunch and dinner',
      'Travel insurance',
      'Personal expenses',
      'Additional Ziyarat tours',
    ],
  },
  {
    id: 'lahore-7',
    origin: 'Lahore',
    duration: '7 Days / 6 Nights',
    days: 7,
    nights: 6,
    transport: 'Flight',
    price: 'PKR 165,000',
    priceUnit: 'per person',
    priceUSD: '~$590',
    hotelMakkah: '4★ Hotel near Haram (3 nights)',
    hotelMadinah: '4★ Hotel near Haram (3 nights)',
    tag: 'Popular',
    tagColor: '#0d7c4e',
    popular: false,
    highlights: [
      'Return flights: Lahore ↔ Jeddah',
      '3 nights hotel in Makkah (4★ near Haram)',
      '3 nights hotel in Madinah (4★ near Haram)',
      'Airport transfers both ways',
      'Makkah to Madinah transport with Ziyarat stops',
      'Full Ziyarat tour in Madinah',
      'Equal days in Makkah and Madinah',
    ],
    itinerary: [
      { day: 'Day 1', title: 'Lahore → Jeddah → Makkah', desc: 'Flight from Lahore to Jeddah. Airport transfer to Makkah (approx. 1.5 hours). Hotel check-in near Haram. Enter Ihram and perform Umrah.', icon: '✈️' },
      { day: 'Day 2', title: 'Makkah — Tawaf & Prayers', desc: 'Full day at Masjid al-Haram. Perform Tawaf, Sa\'i, and daily prayers. Spiritual reflection time.', icon: '🕋' },
      { day: 'Day 3', title: 'Makkah — Spiritual Day', desc: 'Additional Tawaf, prayers, and time at the Haram. Optional visit to Jabal al-Nour and Cave of Hira.', icon: '🕌' },
      { day: 'Day 4', title: 'Makkah → Madinah (with Ziyarat)', desc: 'Check out and travel to Madinah by coach. En-route Ziyarat stops at Bir Ali (Miqat), Aqeeq Mosque. Check into Madinah hotel near Masjid an-Nabawi.', icon: '🚐' },
      { day: 'Day 5', title: 'Madinah — Prophet\'s Mosque', desc: 'Full day at Masjid an-Nabawi. Prayers at the Rawdah, visit Prophet\'s grave, Salam at Rawdah Rasool.', icon: '🕌' },
      { day: 'Day 6', title: 'Madinah — Ziyarat Tour', desc: 'Guided Ziyarat: Mount Uhud, Quba Mosque, Baqi Cemetery, Masjid Qiblatayn, Seven Mosques. Return to hotel.', icon: '⛰️' },
      { day: 'Day 7', title: 'Madinah → Jeddah → Lahore', desc: 'Morning prayers. Transfer to Jeddah airport (approx. 4 hours). Return flight to Lahore.', icon: '✈️' },
    ],
    inclusions: [
      'Return flights: Lahore ↔ Jeddah (economy)',
      '3 nights 4★ hotel in Makkah (sharing basis)',
      '3 nights 4★ hotel in Madinah (sharing basis)',
      'All airport transfers (Jeddah ↔ Makkah, Madinah ↔ Jeddah)',
      'Makkah to Madinah transport with Ziyarat stops',
      'Full Ziyarat tour in Madinah',
      'Daily breakfast and dinner',
      'Experienced guide throughout',
      'Ihram guidance and Umrah briefing',
    ],
    exclusions: [
      'Umrah visa fees (approx. $120)',
      'Travel insurance',
      'Lunch',
      'Personal expenses',
      'Optional tours (Jabal al-Nour, etc.)',
      'Single room supplement',
    ],
  },
  {
    id: 'lahore-14',
    origin: 'Lahore',
    duration: '14 Days / 13 Nights',
    days: 14,
    nights: 13,
    transport: 'Flight',
    price: 'PKR 295,000',
    priceUnit: 'per person',
    priceUSD: '~$1,050',
    hotelMakkah: '4★ Hotel near Haram (7 nights)',
    hotelMadinah: '4★ Hotel near Haram (7 nights)',
    tag: 'Premium',
    tagColor: '#c9a96a',
    popular: false,
    highlights: [
      'Return flights: Lahore ↔ Jeddah',
      '7 nights hotel in Makkah (4★ near Haram)',
      '7 nights hotel in Madinah (4★ near Haram)',
      'All airport transfers both ways',
      'Makkah to Madinah transport with Ziyarat stops',
      'Extended Ziyarat tours in Madinah',
      '7 days in Makkah + 7 days in Madinah',
      'Daily breakfast and dinner',
    ],
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
    inclusions: [
      'Return flights: Lahore ↔ Jeddah (economy)',
      '7 nights 4★ hotel in Makkah (sharing basis)',
      '7 nights 4★ hotel in Madinah (sharing basis)',
      'All airport transfers (Jeddah ↔ Makkah, Madinah ↔ Jeddah)',
      'Makkah to Madinah transport with Ziyarat stops',
      'Two full Ziyarat tours in Madinah',
      'Daily breakfast and dinner',
      'Experienced guide throughout',
      'Ihram guidance and Umrah briefing',
      'Welcome kit (Ihram, prayer mat, tasbeeh)',
    ],
    exclusions: [
      'Umrah visa fees (approx. $120)',
      'Travel insurance',
      'Lunch',
      'Personal expenses',
      'Optional tours',
      'Single room supplement',
    ],
  },
];

export default function PackagesClient() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [expandedId, setExpandedId] = useState<PackageId | null>(null);

  const filtered = activeTab === 'all'
    ? packages
    : packages.filter((p) => p.origin.toLowerCase() === activeTab);

  const lightColors = {
    bg: '#f8fafb',
    bgAlt: '#eef2f6',
    card: '#ffffff',
    text: '#1a1a2e',
    textDim: '#64748b',
    textFaint: '#94a3b8',
    border: '#e2e8f0',
    primary: '#0d7c4e',
    primaryLight: '#f0fdf4',
    gold: '#c9a96a',
    goldLight: '#fef9ee',
    danger: '#ef4444',
    dangerLight: '#fef2f2',
  };

  const inputBase = {
    background: '#f8fafb',
    border: `1px solid ${lightColors.border}`,
    color: lightColors.text,
  };

  return (
    <div style={{ background: lightColors.bg, color: lightColors.text, minHeight: '100vh', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      {/* ===== Light Header ===== */}
      <header
        className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          borderBottom: `1px solid ${lightColors.border}`,
          boxShadow: '0 1px 12px rgba(0,0,0,0.04)',
        }}
      >
        <div className="container flex items-center justify-between" style={{ height: '68px' }}>
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
              style={{ background: `linear-gradient(135deg, ${lightColors.primaryLight}, ${lightColors.goldLight})`, border: `1px solid ${lightColors.border}` }}
            >
              🕋
            </div>
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif', color: lightColors.text }}>
              EzUmrah
            </span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/umrah-packages', label: 'Packages', active: true },
              { href: '/pricing', label: 'CRM Pricing' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <a key={link.href} href={link.href}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all"
                style={{
                  color: link.active ? lightColors.primary : lightColors.textDim,
                  background: link.active ? lightColors.primaryLight : 'transparent',
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="/contact" className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
              style={{ background: lightColors.primary, color: '#fff' }}
            >
              Book Now
            </a>
          </div>
          <a href="/contact" className="md:hidden text-xs font-semibold px-4 py-2 rounded-lg"
            style={{ background: lightColors.primary, color: '#fff' }}>
            Book
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: `linear-gradient(180deg, ${lightColors.primaryLight} 0%, ${lightColors.bg} 100%)`, position: 'relative', overflow: 'hidden' }}>
        {/* Decorative shapes */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: `radial-gradient(circle, ${lightColors.primaryLight} 0%, transparent 70%)`, opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: `radial-gradient(circle, ${lightColors.goldLight} 0%, transparent 70%)`, opacity: 0.5 }} />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: '#fff', border: `1px solid ${lightColors.border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <span className="text-sm font-semibold" style={{ color: lightColors.primary }}>📅 Umrah Season 2026</span>
            <span className="text-sm" style={{ color: lightColors.textFaint }}>|</span>
            <span className="text-sm" style={{ color: lightColors.textDim }}>Now booking</span>
          </div>

          <h1 className="mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: lightColors.text, lineHeight: 1.15 }}>
            Umrah Packages from <span style={{ color: lightColors.primary }}>Riyadh</span> & <span style={{ color: lightColors.primary }}>Lahore</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8" style={{ fontSize: '1.05rem', color: lightColors.textDim, lineHeight: 1.7 }}>
            Choose from 3-day express packages to 14-day premium journeys. Hotels near Haram, bus or flight transport, Ziyarat tours, and experienced guides — all included.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-4">
            {[
              { num: '4', label: 'Package Options' },
              { num: '3-14', label: 'Days Duration' },
              { num: '4★', label: 'Hotel Quality' },
              { num: '100%', label: 'Halal Service' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold" style={{ color: lightColors.primary, fontFamily: 'var(--font-playfair), serif' }}>{stat.num}</div>
                <div className="text-xs" style={{ color: lightColors.textFaint }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Filter Tabs ===== */}
      <div style={{ background: '#fff', borderBottom: `1px solid ${lightColors.border}`, position: 'sticky', top: '68px', zIndex: 100 }}>
        <div className="container py-4">
          <div className="flex items-center gap-2 sm:gap-3 justify-center">
            {([
              { id: 'all', label: 'All Packages', count: packages.length },
              { id: 'riyadh', label: 'From Riyadh', count: packages.filter(p => p.origin === 'Riyadh').length },
              { id: 'lahore', label: 'From Lahore', count: packages.filter(p => p.origin === 'Lahore').length },
            ] as { id: FilterTab; label: string; count: number }[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300"
                style={{
                  background: activeTab === tab.id ? lightColors.primary : '#f1f5f9',
                  color: activeTab === tab.id ? '#fff' : lightColors.textDim,
                  border: `1px solid ${activeTab === tab.id ? lightColors.primary : lightColors.border}`,
                }}
              >
                {tab.label} <span style={{ opacity: 0.6 }}>({tab.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Package Cards ===== */}
      <section style={{ padding: '48px 0 80px' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filtered.map((pkg, idx) => (
              <div
                key={pkg.id}
                className="rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: lightColors.card,
                  border: `1px solid ${lightColors.border}`,
                  boxShadow: pkg.popular
                    ? `0 12px 48px rgba(13, 124, 78, 0.12), 0 0 0 2px ${lightColors.primary}`
                    : '0 4px 24px rgba(0,0,0,0.06)',
                  opacity: 0,
                  animation: `lightReveal 0.6s cubic-bezier(0.16,1,0.3,1) ${idx * 100}ms forwards`,
                }}
              >
                {/* Card header */}
                <div style={{
                  background: pkg.popular
                    ? `linear-gradient(135deg, ${lightColors.primary} 0%, #0a6b40 100%)`
                    : `linear-gradient(135deg, ${lightColors.primaryLight} 0%, ${lightColors.goldLight} 100%)`,
                  padding: '24px 28px',
                  position: 'relative',
                }}>
                  {pkg.popular && (
                    <span style={{ position: 'absolute', top: '16px', right: '16px', background: lightColors.gold, color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      ★ Most Popular
                    </span>
                  )}
                  <div className="flex items-start justify-between mb-3" style={{ gap: '16px' }}>
                    <div>
                      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                        style={{ background: pkg.popular ? 'rgba(255,255,255,0.2)' : '#fff', color: pkg.popular ? '#fff' : pkg.tagColor }}>
                        {pkg.tag}
                      </span>
                      <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: pkg.popular ? '#fff' : lightColors.text, marginBottom: '4px' }}>
                        {pkg.duration}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: pkg.popular ? 'rgba(255,255,255,0.85)' : lightColors.textDim }}>
                        {pkg.origin} → Makkah + Madinah
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-playfair), serif', color: pkg.popular ? '#fff' : lightColors.primary }}>
                        {pkg.price}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: pkg.popular ? 'rgba(255,255,255,0.7)' : lightColors.textFaint }}>
                        {pkg.priceUnit} · {pkg.priceUSD}
                      </div>
                    </div>
                  </div>

                  {/* Quick info badges */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-3 py-1.5 rounded-lg" style={{ background: pkg.popular ? 'rgba(255,255,255,0.15)' : '#fff', color: pkg.popular ? '#fff' : lightColors.textDim }}>
                      {pkg.transport === 'Bus' ? '🚌 By Bus' : '✈️ By Flight'}
                    </span>
                    <span className="text-xs px-3 py-1.5 rounded-lg" style={{ background: pkg.popular ? 'rgba(255,255,255,0.15)' : '#fff', color: pkg.popular ? '#fff' : lightColors.textDim }}>
                      🏨 Hotel Included
                    </span>
                    <span className="text-xs px-3 py-1.5 rounded-lg" style={{ background: pkg.popular ? 'rgba(255,255,255,0.15)' : '#fff', color: pkg.popular ? '#fff' : lightColors.textDim }}>
                      🕌 Ziyarat Tour
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '24px 28px' }}>
                  {/* Highlights */}
                  <h4 className="text-sm font-bold mb-3" style={{ color: lightColors.text }}>Package Highlights</h4>
                  <ul className="space-y-2.5 mb-6">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: lightColors.textDim }}>
                        <span style={{ color: lightColors.primary, fontWeight: 700, fontSize: '0.85rem', marginTop: '1px' }}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Hotel info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-xl" style={{ background: lightColors.bgAlt }}>
                      <div className="text-xs font-semibold mb-1" style={{ color: lightColors.textFaint, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Makkah Hotel</div>
                      <div className="text-sm font-medium" style={{ color: lightColors.text }}>{pkg.hotelMakkah}</div>
                    </div>
                    <div className="p-3 rounded-xl" style={{ background: lightColors.bgAlt }}>
                      <div className="text-xs font-semibold mb-1" style={{ color: lightColors.textFaint, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Madinah Hotel</div>
                      <div className="text-sm font-medium" style={{ color: lightColors.text }}>{pkg.hotelMadinah}</div>
                    </div>
                  </div>

                  {/* Expandable itinerary */}
                  <button
                    onClick={() => setExpandedId(expandedId === pkg.id ? null : pkg.id)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-xl transition-all"
                    style={{ background: lightColors.primaryLight, border: `1px solid ${lightColors.border}` }}
                  >
                    <span className="text-sm font-semibold" style={{ color: lightColors.primary }}>
                      📋 View {pkg.days}-Day Itinerary
                    </span>
                    <span style={{ color: lightColors.primary, transition: 'transform 0.3s', transform: expandedId === pkg.id ? 'rotate(180deg)' : 'none' }}>
                      ▼
                    </span>
                  </button>

                  {expandedId === pkg.id && (
                    <div className="mt-4 space-y-3">
                      {pkg.itinerary.map((item, i) => (
                        <div key={i} className="flex gap-3 p-3 rounded-xl" style={{ background: lightColors.bgAlt }}>
                          <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                            style={{ background: '#fff', border: `1px solid ${lightColors.border}` }}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: lightColors.primary, color: '#fff' }}>{item.day}</span>
                              <span className="text-sm font-semibold" style={{ color: lightColors.text }}>{item.title}</span>
                            </div>
                            <p className="text-xs leading-relaxed" style={{ color: lightColors.textDim }}>{item.desc}</p>
                          </div>
                        </div>
                      ))}

                      {/* Inclusions / Exclusions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <h5 className="text-xs font-bold mb-2" style={{ color: lightColors.primary, textTransform: 'uppercase', letterSpacing: '0.05em' }}>✓ What's Included</h5>
                          <ul className="space-y-1.5">
                            {pkg.inclusions.map((inc, i) => (
                              <li key={i} className="text-xs flex items-start gap-2" style={{ color: lightColors.textDim }}>
                                <span style={{ color: lightColors.primary }}>✓</span> {inc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-xs font-bold mb-2" style={{ color: lightColors.danger, textTransform: 'uppercase', letterSpacing: '0.05em' }}>✗ Not Included</h5>
                          <ul className="space-y-1.5">
                            {pkg.exclusions.map((exc, i) => (
                              <li key={i} className="text-xs flex items-start gap-2" style={{ color: lightColors.textFaint }}>
                                <span style={{ color: lightColors.danger }}>✗</span> {exc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a href="/contact" className="flex-1 text-center text-sm font-semibold py-3.5 rounded-xl transition-all"
                      style={{ background: lightColors.primary, color: '#fff', boxShadow: `0 4px 16px rgba(13,124,78,0.2)` }}>
                      Book This Package
                    </a>
                    <a href="/contact" className="flex-1 text-center text-sm font-semibold py-3.5 rounded-xl transition-all"
                      style={{ border: `1px solid ${lightColors.border}`, color: lightColors.text, background: '#fff' }}>
                      Ask a Question
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Route Map Section ===== */}
      <section style={{ background: '#fff', padding: '64px 0', borderTop: `1px solid ${lightColors.border}` }}>
        <div className="container text-center">
          <h2 className="mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: lightColors.text }}>
            Your Spiritual Journey Route
          </h2>
          <p className="max-w-xl mx-auto mb-10" style={{ fontSize: '0.95rem', color: lightColors.textDim }}>
            Every package covers the sacred route from your city to Makkah and Madinah.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Riyadh route */}
            <div className="p-6 rounded-2xl" style={{ background: lightColors.primaryLight, border: `1px solid ${lightColors.border}` }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: lightColors.primary, fontFamily: 'var(--font-playfair), serif' }}>
                🚌 From Riyadh (by Bus)
              </h3>
              <div className="flex items-center justify-center gap-2 flex-wrap text-sm" style={{ color: lightColors.textDim }}>
                <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: lightColors.text }}>Riyadh</span>
                <span>→</span>
                <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: lightColors.text }}>Makkah</span>
                <span>→</span>
                <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: lightColors.text }}>Madinah</span>
                <span>→</span>
                <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: lightColors.text }}>Riyadh</span>
              </div>
              <p className="text-xs mt-4" style={{ color: lightColors.textFaint }}>Approx. 7 hours Riyadh → Makkah · 5 hours Makkah → Madinah</p>
            </div>

            {/* Lahore route */}
            <div className="p-6 rounded-2xl" style={{ background: lightColors.goldLight, border: `1px solid ${lightColors.border}` }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#b8860b', fontFamily: 'var(--font-playfair), serif' }}>
                ✈️ From Lahore (by Flight)
              </h3>
              <div className="flex items-center justify-center gap-2 flex-wrap text-sm" style={{ color: lightColors.textDim }}>
                <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: lightColors.text }}>Lahore</span>
                <span>→</span>
                <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: lightColors.text }}>Jeddah</span>
                <span>→</span>
                <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: lightColors.text }}>Makkah</span>
                <span>→</span>
                <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: lightColors.text }}>Madinah</span>
                <span>→</span>
                <span className="font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: lightColors.text }}>Lahore</span>
              </div>
              <p className="text-xs mt-4" style={{ color: lightColors.textFaint }}>Flight: Lahore → Jeddah · Transfer: Jeddah → Makkah (1.5 hrs)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section style={{ background: lightColors.bgAlt, padding: '64px 0' }}>
        <div className="container text-center">
          <h2 className="mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: lightColors.text }}>
            Why Book With EzUmrah?
          </h2>
          <p className="max-w-xl mx-auto mb-10" style={{ fontSize: '0.95rem', color: lightColors.textDim }}>
            Trusted by 850+ travel agencies worldwide. We handle every detail so you can focus on your spiritual journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: '🏨', title: 'Hotels Near Haram', desc: 'Walking distance to Masjid al-Haram and Masjid an-Nabawi' },
              { icon: '🧭', title: 'Expert Guides', desc: 'Experienced group leaders for Umrah and Ziyarat' },
              { icon: '🚐', title: 'All Transport', desc: 'Bus, flight, airport transfers, and inter-city travel' },
              { icon: '💬', title: '24/7 Support', desc: 'WhatsApp support throughout your journey' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl text-center transition-all duration-300"
                style={{ background: '#fff', border: `1px solid ${lightColors.border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold mb-2" style={{ color: lightColors.text }}>{item.title}</h3>
                <p className="text-xs" style={{ color: lightColors.textDim }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ background: `linear-gradient(135deg, ${lightColors.primary} 0%, #0a6b40 100%)`, padding: '64px 0' }}>
        <div className="container text-center">
          <h2 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'var(--font-playfair), serif', fontWeight: 700, color: '#fff' }}>
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="max-w-xl mx-auto mb-8" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>
            Contact us today to book your Umrah package. Our team will guide you through visa requirements, payment options, and departure dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="text-sm font-semibold py-3.5 px-8 rounded-xl transition-all"
              style={{ background: '#fff', color: lightColors.primary }}>
              📩 Contact Us to Book
            </a>
            <a href="/" className="text-sm font-semibold py-3.5 px-8 rounded-xl transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#fff', background: 'transparent' }}>
              Learn About Our CRM
            </a>
          </div>
        </div>
      </section>

      {/* ===== Light Footer ===== */}
      <footer style={{ background: '#0f172a', padding: '48px 0 32px' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: 'rgba(13,124,78,0.15)', border: '1px solid rgba(13,124,78,0.2)' }}>🕋</div>
                <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-playfair), serif', color: '#fff' }}>EzUmrah</span>
              </div>
              <p className="text-sm" style={{ color: '#94a3b8' }}>
                Cloud travel CRM and Umrah packages for agencies worldwide. Trusted by 850+ agencies in 120+ countries.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3" style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/umrah-packages', label: 'Umrah Packages' },
                  { href: '/pricing', label: 'CRM Pricing' },
                  { href: '/contact', label: 'Contact' },
                  { href: '/faq', label: 'FAQ' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm transition-colors" style={{ color: '#94a3b8' }}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3" style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Get in Touch</h4>
              <p className="text-sm mb-2" style={{ color: '#94a3b8' }}>We respond within 4 business hours.</p>
              <a href="/contact" className="inline-block text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
                style={{ background: lightColors.primary, color: '#fff' }}>
                Contact Us
              </a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }} className="text-center">
            <p className="text-xs" style={{ color: '#64748b' }}>
              © 2026 EzUmrah by EzTechify. All rights reserved. · <a href="/privacy-policy" style={{ color: '#64748b' }}>Privacy</a> · <a href="/terms-of-service" style={{ color: '#64748b' }}>Terms</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Keyframes for light reveal */}
      <style>{`
        @keyframes lightReveal {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
