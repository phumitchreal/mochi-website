import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from './ui';

const lines = [
  'Build passed. Finally, I can sleep.',
  'Production-ready นะ ไม่ใช่แค่ทำให้มันรันได้',
  'ขออีก 5 นาที... แล้วค่อย Deploy',
  'ใครเขียนโค้ดตรงนี้เนี่ย... อ๋อ ฉันเอง',
  'Claude, fix this properly. Don’t break anything else.',
  'โค้ดที่ดีต้องพร้อมโตไปกับเรา ไม่ใช่แค่รันได้วันนี้',
];

export default function Closing() {
  const [line, setLine] = useState(0);
  const [msg, setMsg] = useState('');
  const [birthday, setBirthday] = useState(false);

  useEffect(() => {
    const d = new Date();
    setBirthday(d.getMonth() === 10 && d.getDate() === 17);
  }, []);

  const poke = () => {
    setLine((l) => {
      let next = l;
      while (next === l) next = Math.floor(Math.random() * lines.length);
      return next;
    });
  };

  const share = async () => {
    const data = { title: 'Midnight Mochi', text: 'แฟ้มประวัติของ Midnight Mochi — สาวแมว AI-assisted Full-stack Developer', url: location.href };
    try {
      if (navigator.share) {
        await navigator.share(data);
        setMsg('แชร์เรียบร้อยแล้ว ขอบคุณที่บอกต่อกันนะ');
        return;
      }
      await navigator.clipboard.writeText(location.href);
      setMsg('คัดลอกลิงก์แล้ว — ส่งต่อให้เพื่อนสายโค้ดได้เลย');
    } catch {
      setMsg('คัดลอกไม่สำเร็จ ลองกดแชร์จากเบราว์เซอร์อีกครั้งนะ');
    }
  };

  return (
    <section className="section closing" id="closing" aria-labelledby="closing-title">
      <div className="wrap">
        <div className="closing__panel">
          <span className="closing__moon" aria-hidden="true" />
          <span className="closing__spark closing__spark--a" aria-hidden="true">✦</span>
          <span className="closing__spark closing__spark--b" aria-hidden="true">✧</span>
          <span className="closing__spark closing__spark--c" aria-hidden="true">✦</span>

          <div className="closing__copy">
            <h2 id="closing-title">คืนนี้จะเขียนอะไร<br />ด้วยกันดี<span className="title-dot">?</span></h2>
            <p>โมจิพร้อมช่วยแปลงไอเดียให้เป็นระบบที่โตได้จริง — เริ่มจากอะไรเล็ก ๆ ก็ได้ หรือจะทักมาคุยเรื่องแมวก็ได้เหมือนกัน</p>
            <div className="closing__actions">
              <motion.button className="btn btn--primary" type="button" onClick={poke} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                จิ้มโมจิ <Icon name="paw" size={18} />
              </motion.button>
              <button className="btn btn--ghost" type="button" onClick={share}>
                <Icon name="share" size={17} /> แชร์โปรไฟล์
              </button>
            </div>
            <p className="closing__msg" aria-live="polite">{msg}</p>
            {birthday && <p className="closing__bday"><Icon name="cake" size={17} /> วันนี้เป็นวันเกิดของโมจิ — สุขสันต์วันเกิดนะ 🎀</p>}
          </div>

          <div className="closing__bubble">
            <span className="closing__avatar">
              <img src="/images/mochi-avatar.webp" alt="โมจิ" width="72" height="72" loading="lazy" />
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p key={line} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                “{lines[line]}”
              </motion.p>
            </AnimatePresence>
            <span className="closing__hint">กด “จิ้มโมจิ” เพื่อเปลี่ยนประโยค</span>
          </div>
        </div>
      </div>
    </section>
  );
}
