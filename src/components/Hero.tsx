import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon, PawMark } from './ui';

const quotes = [
  'ยังไม่นอน... เพราะยังไม่ผ่าน Build ไง',
  'Production-ready นะ ไม่ใช่แค่ทำให้มันรันได้',
  'ขออีก 5 นาที... แล้วค่อย Deploy',
  'Claude, fix this properly. Don’t break anything else.',
  'Build passed. Finally, I can sleep.',
];

export default function Hero() {
  const [quote, setQuote] = useState(0);
  const [poking, setPoking] = useState(false);
  const [birthday, setBirthday] = useState(false);

  useEffect(() => {
    const d = new Date();
    setBirthday(d.getMonth() === 10 && d.getDate() === 17);
  }, []);

  const poke = () => {
    setQuote((q) => (q + 1) % quotes.length);
    setPoking(false);
    requestAnimationFrame(() => setPoking(true));
    window.setTimeout(() => setPoking(false), 520);
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__role"><Icon name="sparkle" size={15} /> AI-assisted Full-stack Developer</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__name">Midnight</span>
            <span className="hero__name hero__name--mochi">Mochi</span>
          </h1>
          <p className="hero__jp">ミッドナイト・モチ <span>· The Midnight Developer</span></p>
          <p className="hero__lead">สาวแมวสายโค้ด ผู้สร้างเว็บและระบบให้<strong>โตได้จริง</strong>ในโลกจริง</p>
          <p className="hero__motto">Code at Midnight.<br /><em>Build Beyond Limits.</em></p>
          <p className="hero__desc">ตื่นตอนกลางคืน เขียนโค้ดตอนตีสาม และปล่อยของที่ Production-ready ทุกครั้ง — นี่คือโมจิ มาสคอตนักพัฒนาของเรา</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#profile">เปิดแฟ้มประวัติ <Icon name="arrow" size={18} /></a>
            <button className="btn btn--ghost" type="button" onClick={poke}>จิ้มโมจิ <Icon name="paw" size={18} /></button>
          </div>
          <dl className="hero__facts">
            <div><dt>อายุ</dt><dd>20 ปี</dd></div>
            <div><dt>วันเกิด</dt><dd>17 พ.ย.</dd></div>
            <div><dt>กรุ๊ปเลือด</dt><dd>AB</dd></div>
            <div><dt>ส่วนสูง</dt><dd>162 cm</dd></div>
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__stage">
            <div className="hero__halo" aria-hidden="true" />
            <div className="hero__orbit" aria-hidden="true" />

            {birthday && (
              <motion.div className="hero__bday" initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: -6 }}
                transition={{ type: 'spring', bounce: 0.55, delay: 0.5 }}>
                <Icon name="cake" size={16} /> Happy Birthday!
              </motion.div>
            )}

            <span className="sticker sticker--lvl" style={{ '--r': '7deg' } as CSSProperties}>LV. 20</span>
            <span className="sticker sticker--stack" style={{ '--r': '-7deg' } as CSSProperties}>FULL-STACK</span>
            <span className="sticker sticker--sleep" style={{ '--r': '5deg' } as CSSProperties}><Icon name="moon" size={13} /> SLEEPY MODE</span>
            <span className="sticker sticker--ai" style={{ '--r': '-5deg' } as CSSProperties}>AI-ASSISTED</span>

            <motion.button className={`mochi ${poking ? 'is-poked' : ''}`} type="button" onClick={poke}
              aria-label="จิ้มโมจิเพื่อฟังคำพูดประจำตัว" whileTap={{ scale: 0.985 }}>
              <motion.span className="mochi__figure" animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}>
                <img src="/images/mochi-full.webp" alt="Midnight Mochi สาวแมวผมดำไฮไลต์น้ำเงิน สวมหูแมวและชุดดำ-น้ำเงิน พร้อมหางผูกโบว์" width="900" height="1754" fetchPriority="high" />
              </motion.span>
            </motion.button>

            <div className="hero__bubble" aria-live="polite">
              <span className="hero__bubble-tag"><PawMark size={22} />โมจิพูดว่า</span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.p key={quote} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                  “{quotes[quote]}”
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="hero__hint">จิ้มโมจิเพื่อฟังคำพูดถัดไปได้นะ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
