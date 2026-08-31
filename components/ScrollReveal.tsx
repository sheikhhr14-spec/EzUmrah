'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  threshold?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add('reveal-visible');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <Tag
      ref={ref as any}
      className={`reveal reveal-${animation} ${className}`}
    >
      {children}
    </Tag>
  );
}
