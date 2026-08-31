'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState({ essential: true, analytics: false, marketing: false });

  useEffect(() => {
    const saved = localStorage.getItem('cookie_consent');
    if (!saved) setVisible(true);
    else try { setPrefs(JSON.parse(saved)); } catch {}
  }, []);

  const acceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    setPrefs(all); localStorage.setItem('cookie_consent', JSON.stringify(all)); setVisible(false);
  };
  const reject = () => {
    const min = { essential: true, analytics: false, marketing: false };
    setPrefs(min); localStorage.setItem('cookie_consent', JSON.stringify(min)); setVisible(false);
  };
  const savePrefs = () => {
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    setShowModal(false); setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[1100] p-4" style={{ animation: 'fadeUp 0.5s ease forwards' }}>
        <div className="max-w-5xl mx-auto p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: 'linear-gradient(135deg, rgba(17, 20, 32, 0.95) 0%, rgba(11, 13, 22, 0.95) 100%)',
            backdropFilter: 'blur(24px) saturate(160%)',
            border: '1px solid rgba(201, 169, 106, 0.1)',
            boxShadow: '0 12px 48px rgba(0, 0, 0, 0.5), 0 0 40px rgba(201, 169, 106, 0.05)',
          }}
        >
          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-1.5" style={{ color: 'var(--cream)' }}>🍪 We Value Your Privacy</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>
              EzUmrah uses cookies to enhance your experience, analyze traffic, and for marketing. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button onClick={() => setShowModal(true)} className="text-xs font-medium px-4 py-2 rounded-xl transition-all" style={{ color: 'var(--text-dim)' }}>Preferences</button>
            <button onClick={reject} className="text-xs font-medium px-4 py-2 rounded-xl border transition-all" style={{ borderColor: 'rgba(201, 169, 106, 0.1)', color: 'var(--text-dim)' }}>Reject</button>
            <button onClick={acceptAll} className="btn-gold text-xs" style={{ padding: '8px 20px' }}>Accept All</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="glass-card p-8 max-w-md w-full">
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--cream)', fontFamily: 'var(--font-playfair), serif' }}>Cookie Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: 'rgba(7, 8, 13, 0.5)' }}>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--cream)' }}>Essential</div>
                  <div className="text-xs" style={{ color: 'var(--text-faint)' }}>Required for functionality</div>
                </div>
                <span className="text-xs px-2 py-1 rounded" style={{ background: 'rgba(45, 212, 191, 0.1)', color: 'var(--teal2)' }}>On</span>
              </div>
              {[
                { key: 'analytics' as const, label: 'Analytics', desc: 'Understand site usage' },
                { key: 'marketing' as const, label: 'Marketing', desc: 'Personalized content' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 rounded-xl" style={{ background: 'rgba(7, 8, 13, 0.5)' }}>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'var(--cream)' }}>{item.label}</div>
                    <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{item.desc}</div>
                  </div>
                  <button onClick={() => setPrefs({ ...prefs, [item.key]: !prefs[item.key] })}
                    className="relative w-12 h-6 rounded-full transition-all duration-300"
                    style={{ background: prefs[item.key] ? 'var(--gold)' : 'rgba(255,255,255,0.1)' }}
                  >
                    <span className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300"
                      style={{ transform: prefs[item.key] ? 'translateX(24px)' : 'translateX(2px)' }}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="btn-outline text-sm flex-1" style={{ padding: '10px' }}>Cancel</button>
              <button onClick={savePrefs} className="btn-gold text-sm flex-1" style={{ padding: '10px' }}>Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
