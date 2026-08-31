'use client';

export default function ChatFloat() {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-[900] w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform hover:scale-110"
      style={{ background: 'linear-gradient(135deg, #c9a84c, #d4b76a)', boxShadow: '0 4px 20px rgba(201,168,76,0.3)' }}
      aria-label="Contact us"
    >
      💬
      <span className="absolute top-0 right-0 w-4 h-4 rounded-full animate-pulse" style={{ background: 'var(--gold)', border: '2px solid var(--midnight)' }} />
    </a>
  );
}
