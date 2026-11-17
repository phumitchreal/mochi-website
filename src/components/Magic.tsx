import { useEffect, useRef, useState } from 'react';

const pawSvg = (size = 14) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true"><ellipse cx="12" cy="15.6" rx="4.4" ry="3.6"/><circle cx="6.3" cy="10.4" r="2"/><circle cx="9.9" cy="7.5" r="2"/><circle cx="14.1" cy="7.5" r="2"/><circle cx="17.7" cy="10.4" r="2"/></svg>`;

const heartSvg = (size = 14) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true"><path d="M20.8 8.7c0 4.7-8.8 10.4-8.8 10.4S3.2 13.4 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z"/></svg>`;

/** Thin “tail” style reading progress bar with a paw at the tip. */
export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="tailbar" aria-hidden="true" style={{ opacity: p > 0.004 ? 1 : 0 }}>
      <span className="tailbar__fill" style={{ transform: `scaleX(${p})` }} />
      <span className="tailbar__paw" style={{ left: `calc(${p * 100}% - 11px)` }} dangerouslySetInnerHTML={{ __html: pawSvg(15) }} />
    </div>
  );
}

/** Tiny paw prints that follow the pointer on desktop. */
export function PawTrail() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!matchMedia('(pointer: fine)').matches) return;
    const host = layer.current;
    if (!host) return;

    let last = 0;
    let lx = 0;
    let ly = 0;
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last < 90) return;
      if (Math.hypot(e.clientX - lx, e.clientY - ly) < 26) return;
      last = now;
      lx = e.clientX;
      ly = e.clientY;

      const dot = document.createElement('span');
      dot.className = 'pawtrail__dot';
      dot.style.left = `${e.clientX + (Math.random() * 16 - 8)}px`;
      dot.style.top = `${e.clientY + (Math.random() * 16 - 8)}px`;
      dot.style.setProperty('--r', `${Math.round(Math.random() * 70 - 35)}deg`);
      dot.innerHTML = pawSvg(13);
      host.appendChild(dot);
      window.setTimeout(() => dot.remove(), 850);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return <div className="pawtrail" ref={layer} aria-hidden="true" />;
}

/** Type “mochi” anywhere for a little paw rain. */
export function EasterEgg() {
  const [toast, setToast] = useState('');
  const rain = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<number>(0);

  useEffect(() => {
    const party = () => {
      const host = rain.current;
      if (host) {
        const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const count = calm ? 0 : 38;
        for (let i = 0; i < count; i++) {
          const bit = document.createElement('span');
          bit.className = 'pawrain__bit';
          bit.style.left = `${Math.random() * 100}%`;
          bit.style.setProperty('--fall', `${2.2 + Math.random() * 1.8}s`);
          bit.style.setProperty('--drift', `${Math.round(Math.random() * 140 - 70)}px`);
          bit.style.setProperty('--spin', `${Math.round(Math.random() * 360)}deg`);
          bit.style.animationDelay = `${Math.random() * 0.55}s`;
          bit.innerHTML = i % 4 === 0 ? heartSvg(15) : pawSvg(15);
          host.appendChild(bit);
          window.setTimeout(() => bit.remove(), 4700);
        }
      }
      setToast('เมียว~ เจอความลับแล้ว! โมจิแอบตื่นมาเล่นด้วย 🐾');
      window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => setToast(''), 4300);
    };

    let buffer = '';
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
      const el = e.target as HTMLElement | null;
      if (el?.closest('input,textarea,[contenteditable]')) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-6);
      if (buffer.includes('mochi')) {
        buffer = '';
        party();
      }
    };
    const onParty = () => party();

    addEventListener('keydown', onKey);
    addEventListener('mochi-party', onParty as EventListener);
    return () => {
      removeEventListener('keydown', onKey);
      removeEventListener('mochi-party', onParty as EventListener);
      window.clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <>
      <div className="pawrain" ref={rain} aria-hidden="true" />
      <p className={`egg-toast ${toast ? 'is-on' : ''}`} role="status" aria-live="polite">{toast}</p>
    </>
  );
}
