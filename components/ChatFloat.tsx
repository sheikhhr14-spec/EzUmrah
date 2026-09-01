'use client';

import { useState, useEffect } from 'react';

export default function ChatFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="/contact"
      className="fixed bottom-6 right-6 z-[900] flex items-center justify-center transition-all duration-500 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.5)',
      }}
      aria-label="Contact us"
    >
      {/* Pulsing rings */}
      <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: 'var(--gold)' }} />
      <div className="absolute -inset-2 rounded-full opacity-30 blur-md transition-all duration-500 group-hover:opacity-60" style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />

      {/* Button */}
      <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, rgba(184, 146, 63, 0.95) 0%, rgba(216, 189, 126, 0.95) 100%)',
          boxShadow: '0 8px 32px rgba(184, 146, 63, 0.3), 0 4px 16px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        💬
      </div>

      {/* Notification dot */}
      <div className="absolute top-0 right-0 w-4 h-4 rounded-full animate-premium-pulse"
        style={{
          background: 'var(--teal2)',
          border: '2px solid var(--midnight)',
        }}
      />
    </a>
  );
}
