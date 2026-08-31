'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState({ essential: true, analytics: false, marketing: false });

  useEffect(() => {
    const saved = localStorage.getItem('cookie_consent');
    if (!saved) {
      setVisible(true);
    } else {
      try { setPrefs(JSON.parse(saved)); } catch {}
    }
  }, []);

  const acceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    setPrefs(all);
    localStorage.setItem('cookie_consent', JSON.stringify(all));
    setVisible(false);
  };

  const reject = () => {
    const min = { essential: true, analytics: false, marketing: false };
    setPrefs(min);
    localStorage.setItem('cookie_consent', JSON.stringify(min));
    setVisible(false);
  };

  const savePrefs = () => {
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    setShowModal(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[1100] p-4" style={{ animation: 'fadeUp 0.5s ease forwards' }}>
        <div className="max-w-5xl mx-auto p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ background: 'rgba(12,18,34,0.95)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
          <div className="flex-1">
            <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--cream)' }}>🍪 We Value Your Privacy</h3>
            <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
              EzUmrah uses cookies and similar technologies to enhance your experience, analyze traffic, and for marketing purposes. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button onClick={() => setShowModal(true)} className="text-sm px-4 py-2 rounded-xl transition-all hover:text-[var(--gold)]" style={{ color: 'var(--text-dim)' }}>Manage Preferences</button>
            <button onClick={reject} className="text-sm px-4 py-2 rounded-xl border transition-all hover:text-[var(--gold)] hover:border-[var(--gold)]" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}>Reject</button>
            <button onClick={acceptAll} className="btn-gold text-sm">Accept All</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }} onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
          <div className="glass-card p-8 max-w-md w-full" style={{ background: 'var(--midnight3)' }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>Cookie Preferences</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: 'rgba(6,11,20,0.5)' }}>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--cream)' }}>Essential Cookies</div>
                  <div className="text-xs" style={{ color: 'var(--text-faint)' }}>Required for basic functionality and security</div>
                </div>
                <span className="text-xs px-2 py-1 rounded" style={{ background: 'rgba(13,148,136,0.1)', color: 'var(--teal-light)' }}>On</span>
              </div>

              {[
                { key: 'analytics' as const, label: 'Analytics Cookies', desc: 'Help us understand how visitors interact with our site' },
                { key: 'marketing' as const, label: 'Marketing Cookies', desc: 'Used to deliver personalized advertisements' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 rounded-xl" style={{ background: 'rgba(6,11,20,0.5)' }}>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'var(--cream)' }}>{item.label}</div>
                    <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{item.desc}</div>
                  </div>
                  <button onClick={() => setPrefs({ ...prefs, [item.key]: !prefs[item.key] })} className="relative w-12 h-6 rounded-full transition-colors" style={{ background: prefs[item.key] ? 'var(--gold)' : 'var(--midnight4)' }}>
                    <span className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform" style={{ transform: prefs[item.key] ? 'translateX(24px)' : 'translateX(2px)' }} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="btn-outline text-sm flex-1 justify-center">Cancel</button>
              <button onClick={savePrefs} className="btn-gold text-sm flex-1 justify-center">Save Preferences</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
