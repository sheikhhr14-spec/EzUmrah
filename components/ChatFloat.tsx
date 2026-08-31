'use client';

export default function ChatFloat() {
  return (
    <a
      href="https://wa.me/+966500000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[900] w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform hover:scale-110"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
      }}
      aria-label="Chat on WhatsApp"
    >
      💬
      <span
        className="absolute top-0 right-0 w-4 h-4 rounded-full animate-pulse"
        style={{ background: '#25D366', border: '2px solid var(--midnight)' }}
      />
    </a>
  );
}
