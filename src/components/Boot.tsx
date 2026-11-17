import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from './ui';

export default function Boot() {
  const [open, setOpen] = useState(false);
  const [percent, setPercent] = useState(0);

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Show boot loading screen on page load
    setOpen(true);

    const startTime = performance.now();
    const duration = 1600; // 1.6s smooth loading

    let frameId: number;
    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setPercent(progress);
      if (elapsed < duration) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(close, 250);
      }
    };
    frameId = requestAnimationFrame(updateProgress);

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(frameId);
      removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => { document.documentElement.style.overflow = open ? 'hidden' : ''; }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="boot" role="dialog" aria-label="กำลังโหลดแฟ้มประวัติของโมจิ"
          exit={{ opacity: 0 }} transition={{ duration: 0.5 }} onClick={close}>
          <p className="boot__top">MIDNIGHT STUDIO<br />02:41 AM · STILL AWAKE</p>

          <div className="boot__scene">
            <span className="boot__halo" aria-hidden="true" />
            <span className="boot__spark boot__spark--a" aria-hidden="true">✦</span>
            <span className="boot__spark boot__spark--b" aria-hidden="true">✧</span>
            <span className="boot__spark boot__spark--c" aria-hidden="true">✦</span>

            <motion.div className="boot__face" initial={{ scale: 0.72, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: 'spring', bounce: 0.45, duration: 0.9 }}>
              <span className="boot__ring" aria-hidden="true" />
              <span className="boot__ring boot__ring--inner" aria-hidden="true" />
              <img src="/images/mochi-logo.webp" alt="โลโก้ Midnight Mochi" width="900" height="900" />
            </motion.div>

            <p className="boot__name">Midnight Mochi<span className="boot__dot">.</span></p>
            <p className="boot__line">กำลังตื่นน้า... อีกนิดเดียว ({percent}%)</p>

            <div className="boot__track">
              <div className="bar"><motion.i style={{ scaleX: percent / 100 }} /></div>
              <span className="boot__paw" style={{ left: `calc(${percent}% - 8px)` }} aria-hidden="true">
                <Icon name="paw" size={16} />
              </span>
            </div>

            <button className="boot__skip" type="button" onClick={close}>ข้าม <kbd>Esc</kbd></button>
          </div>

          <p className="boot__bottom">FILE 017 · THE MIDNIGHT DEVELOPER</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
