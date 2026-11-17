import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon, Reveal, SectionHead } from './ui';

const messages = [
  { time: '02:14', text: 'Production-ready นะ ไม่ใช่แค่ทำให้มันรันได้', tag: 'หลังรีวิวโค้ด', n: 6 },
  { time: '02:37', text: 'ใครเขียนโค้ดตรงนี้เนี่ย... อ๋อ ฉันเอง', tag: 'เจอบั๊ก', n: 3 },
  { time: '02:52', text: 'Claude, fix this properly. Don’t break anything else.', tag: 'กำลังใช้ AI', n: 8, en: true },
  { time: '03:10', text: 'ขออีก 5 นาที... แล้วค่อย Deploy', tag: 'ง่วง', n: 12 },
  { time: '03:44', text: 'Build passed. Finally, I can sleep.', tag: 'งานเสร็จ', n: 9, en: true },
];

const prompts = [
  { q: 'ยังไม่นอนเหรอ?', a: 'ยังเลย... build ยังไม่ผ่านอะ 😿' },
  { q: 'ขอกาแฟหน่อย', a: 'ได้เลย! รอบนี้ขอใส่นมเยอะ ๆ นะ ☕' },
  { q: 'วันนี้วันเกิดนะ', a: 'อุ๊ย จำได้ด้วย! งั้นขอโค้ดสวย ๆ เป็นของขวัญนะ 🎂' },
  { q: 'เก่งจัง', a: 'แหะ ๆ อย่าชมเยอะ เดี๋ยวหางกระดิก 😳' },
];

type Thread = { id: number; q: string; a: string; ready: boolean };

export default function Chat() {
  const [reacted, setReacted] = useState<Record<number, boolean>>({});
  const [thread, setThread] = useState<Thread[]>([]);
  const timers = useRef<number[]>([]);

  const toggle = (i: number) => setReacted((r) => ({ ...r, [i]: !r[i] }));

  useEffect(() => () => {
    timers.current.forEach((t) => window.clearTimeout(t));
  }, []);

  const ask = (p: { q: string; a: string }) => {
    const id = Date.now() + Math.random();
    setThread((t) => [...t, { id, q: p.q, a: p.a, ready: false }]);
    timers.current.push(window.setTimeout(() => {
      setThread((t) => t.map((item) => (item.id === id ? { ...item, ready: true } : item)));
    }, 850 + Math.random() * 550));
  };

  return (
    <section className="section chat-section" id="chat" aria-labelledby="chat-title">
      <div className="wrap">
        <Reveal>
          <SectionHead title={<span id="chat-title">แชทที่ยังไม่ได้ลบ<span className="title-dot">.</span></span>}
            detail="ประโยคที่โมจิพูดบ่อยที่สุดในคืนทำงาน — บางประโยคพูดกับตัวเอง บางประโยคพูดกับ AI และบางประโยคพูดกับกาแฟ"
            note="LOGS · 02:14–03:44" />
        </Reveal>

        <Reveal className="chat-wrap" delay={0.08}>
          <span className="chat__sticker" aria-hidden="true">do not disturb<br /><b>except cats</b></span>
          <div className="chat">
            <div className="chat__bar">
              <span className="chat__dots" aria-hidden="true"><i /><i /><i /></span>
              <p><b>midnight-studio</b><span>/</span>#midnight-dev</p>
              <span className="chat__online"><i aria-hidden="true" />1 ออนไลน์</span>
            </div>

            <div className="chat__body">
              <p className="chat__date">วันนี้ · กลางคืนที่ยังไม่จบ</p>
              <p className="chat__system"><Icon name="moon" size={14} /> โมจิเข้าสู่โหมดนักพัฒนาแล้ว · 02:00</p>

              {messages.map((m, i) => (
                <article className={`msg ${m.en ? 'msg--en' : ''}`} key={m.time}>
                  <img className="msg__avatar" src="/images/mochi-avatar.webp" alt="" width="40" height="40" loading="lazy" />
                  <div className="msg__content">
                    <p className="msg__meta"><b>Mochi</b><span className="msg__badge">DEV</span><time>{m.time}</time><span className="msg__tag">{m.tag}</span></p>
                    <p className="msg__bubble">{m.text}</p>
                    <button className={`msg__react ${reacted[i] ? 'is-on' : ''}`} type="button"
                      aria-pressed={!!reacted[i]} aria-label={`แสดงความรู้สึกกับข้อความนี้ (${m.n + (reacted[i] ? 1 : 0)} คน)`}
                      onClick={() => toggle(i)}>
                      <Icon name="paw" size={13} />{m.n + (reacted[i] ? 1 : 0)}
                    </button>
                  </div>
                </article>
              ))}

              <div className="chat__thread" role="log" aria-live="polite" aria-label="บทสนทนากับโมจิ">
                {thread.map((t) => (
                  <div className="chat__qa" key={t.id}>
                    <p className="chat__me"><span>คุณ</span>{t.q}</p>
                    <article className="msg">
                      <img className="msg__avatar" src="/images/mochi-avatar.webp" alt="" width="40" height="40" loading="lazy" />
                      <div className="msg__content">
                        <p className="msg__meta"><b>Mochi</b><span className="msg__badge">DEV</span><time>เมื่อกี้</time></p>
                        {t.ready ? (
                          <motion.p className="msg__bubble msg__bubble--fresh" initial={{ opacity: 0, y: 7, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.26 }}>
                            {t.a}
                          </motion.p>
                        ) : (
                          <span className="typing typing--inline" aria-label="โมจิกำลังพิมพ์">
                            <span className="typing__dots" aria-hidden="true"><i /><i /><i /></span>
                          </span>
                        )}
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              <div className="chat__prompt">
                <p className="chat__prompt-label"><Icon name="chat" size={15} /> ลองทักโมจิเล่นดูสิ</p>
                <div className="chat__chips">
                  {prompts.map((p) => (
                    <button className="chat__chip" type="button" key={p.q} onClick={() => ask(p)}>
                      {p.q}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="chat__foot">ช่องนี้เปิดรับข้อความแล้ว — โมจิอยากคุยด้วย</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
