import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

type IconName =
  | 'paw' | 'heart' | 'spark' | 'moon' | 'code' | 'cat' | 'smirk' | 'shield'
  | 'bot' | 'coffee' | 'ear' | 'tail' | 'bow' | 'hair' | 'eye' | 'cake'
  | 'share' | 'arrow' | 'check' | 'x' | 'chat' | 'star' | 'folder' | 'sparkle';

const icons: Record<IconName, ReactNode> = {
  paw: (
    <>
      <ellipse cx="12" cy="15.6" rx="4.4" ry="3.6" fill="currentColor" />
      <circle cx="6.3" cy="10.4" r="2" fill="currentColor" />
      <circle cx="9.9" cy="7.5" r="2" fill="currentColor" />
      <circle cx="14.1" cy="7.5" r="2" fill="currentColor" />
      <circle cx="17.7" cy="10.4" r="2" fill="currentColor" />
    </>
  ),
  heart: <path d="M20.8 8.7c0 4.7-8.8 10.4-8.8 10.4S3.2 13.4 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" fill="currentColor" />,
  spark: <path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z" fill="currentColor" />,
  sparkle: <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" fill="currentColor" />,
  moon: <path d="M20.3 14.6A8.6 8.6 0 0 1 9.4 3.7a8.6 8.6 0 1 0 10.9 10.9Z" />,
  code: <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14" />,
  cat: (
    <>
      <path d="M4.5 10.5 5.5 4l4 3a8 8 0 0 1 5 0l4-3 1 6.5a8 8 0 1 1-15 0Z" />
      <path d="M9.2 13.2h.1M14.7 13.2h.1M10 16.2c1.3 1 2.7 1 4 0" />
    </>
  ),
  smirk: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 10.5h1M14.5 10.5h1M9 14.5c1 1.5 2.5 2 4.3 1.6 1.3-.3 2-.8 2.4-1.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5.5 5.8v5.5c0 4 2.6 7 6.5 8.7 3.9-1.7 6.5-4.7 6.5-8.7V5.8L12 3Z" />
      <path d="m9 11.8 2.1 2.1 4-4.2" />
    </>
  ),
  bot: (
    <>
      <rect x="4.5" y="8" width="15" height="11" rx="4" />
      <path d="M12 8V4.5M12 3.2v.2M8.5 12.5h.2M15.3 12.5h.2M9.5 16h5" />
    </>
  ),
  coffee: (
    <>
      <path d="M4.5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9ZM15.5 10h2a2.2 2.2 0 0 1 0 4.4h-2M7 4.5c-.6.8-.6 1.5 0 2.3M11 4.5c-.6.8-.6 1.5 0 2.3" />
    </>
  ),
  ear: <path d="M6.5 21V10.5a5.5 5.5 0 0 1 11 0V13l-3 1-2-2-3 2v7M8.5 8.5c1-1 2-1.5 3.5-1.5" />,
  tail: <path d="M5 20c5.5 0 9-2.5 9-7a4 4 0 0 1 4-4M14.5 6.5c1-1.5 2.4-1.8 3.8-1 1.3.8 1.6 2.1 1.2 3.5" />,
  bow: (
    <>
      <path d="M12 12 4.5 8v8L12 12Zm0 0 7.5-4v8L12 12Z" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
    </>
  ),
  hair: <path d="M5 5c2.5 2.5 3.5 5 3.5 8.5 0 2.5-1 4-1 5.5M10.8 3.5c2.7 2.8 4 5.8 4 9.5 0 3-1 4.5-1 6M16.5 5.5c2 2.4 3 4.8 3 7.8 0 2.2-.7 3.6-.7 5.2" />,
  eye: (
    <>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M12 7.2v1M12 15.8v1" />
    </>
  ),
  cake: (
    <>
      <path d="M4 20h16M5 20v-6.5A2.5 2.5 0 0 1 7.5 11h9a2.5 2.5 0 0 1 2.5 2.5V20M5 15.5c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1M9 11V8.5M12 11V7.5M15 11V8.5M9 8.5c0-.8.5-1.3 1.2-1.3M12 7.5c0-.9.5-1.4 1.2-1.4M15 8.5c0-.8.5-1.3 1.2-1.3" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5.5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="18.5" r="2.5" />
      <path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4" />
    </>
  ),
  arrow: <path d="M4 12h15m-5-5 5 5-5 5" />,
  check: <path d="m5 12.5 4.3 4.3L19 7" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  chat: <path d="M20.5 11.4c0 4-3.9 7.2-8.6 7.2-1 0-2-.1-2.9-.4L4 20l1.2-3.5a6.7 6.7 0 0 1-1.7-4.5c0-4 3.9-7.2 8.6-7.2s8.4 3.2 8.4 7.1Z" />,
  star: <path d="m12 3 2.7 5.7 6.2.8-4.5 4.3 1.1 6.1-5.5-3-5.5 3 1.1-6.1L3.1 9.5l6.2-.8L12 3Z" />,
  folder: <path d="M3.5 7.5A2 2 0 0 1 5.5 5.5h4l2 2.5h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9.5Z" />,
};

export function Icon({ name, size = 20, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

export function PawMark({ size = 34 }: { size?: number }) {
  return (
    <span className="pawmark" style={{ width: size, height: size }} aria-hidden="true">
      <Icon name="paw" size={size * 0.55} />
    </span>
  );
}

export function SectionHead({ title, detail, note }: { title: ReactNode; detail: ReactNode; note?: string }) {
  return (
    <header className="sec-head">
      <h2>{title}</h2>
      <div className="sec-head__row">
        <p>{detail}</p>
        {note && <span className="sec-head__note">{note}</span>}
      </div>
    </header>
  );
}

export function Reveal({ children, className, delay = 0, style }: { children: ReactNode; className?: string; delay?: number; style?: CSSProperties }) {
  return (
    <motion.div className={className} style={style} initial={{ opacity: 1, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}>
      {children}
    </motion.div>
  );
}

export function Stars() {
  return (
    <div className="sky" aria-hidden="true">
      {Array.from({ length: 46 }, (_, i) => {
        const left = (i * 37 + 13) % 100;
        const top = (i * 61 + 7) % 100;
        const size = i % 7 === 0 ? 3 : i % 3 === 0 ? 2 : 1;
        return (
          <span key={i} className="sky__star"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size,
              animationDelay: `${(i % 9) * 0.45}s`, opacity: 0.25 + (i % 5) * 0.12 } as CSSProperties} />
        );
      })}
    </div>
  );
}
