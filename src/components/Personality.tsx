import type { CSSProperties } from 'react';
import { Icon, Reveal, SectionHead } from './ui';

const traits = [
  { icon: 'moon' as const, t: 'ขี้เซา', d: 'ตื่นเช้าไม่ไหว แต่ตื่นมา Deploy ได้', tone: 'cream', span: 5, r: '-1.2deg' },
  { icon: 'heart' as const, t: 'หน้านิ่งใจดี', d: 'ดูเย็นชา แต่แอบห่วงทุกคน', tone: 'pink', span: 4, r: '1.1deg' },
  { icon: 'code' as const, t: 'จริงจังกับโค้ด', d: 'ขี้เกียจได้หมด ยกเว้นเรื่องคุณภาพ', tone: 'blue', span: 3, r: '-0.7deg' },
  { icon: 'cat' as const, t: 'ชอบแมว', d: 'โดยเฉพาะแมวดำ — สายพันธุ์ที่ถูกต้อง', tone: 'cream', span: 4, r: '1.3deg' },
  { icon: 'smirk' as const, t: 'ขี้แกล้ง', d: 'แกล้งแล้วต้องมี reaction ให้ดู', tone: 'blue', span: 4, r: '-1deg' },
  { icon: 'shield' as const, t: 'ไม่ยอมงานหยาบ', d: 'ถ้าไม่ดีจริง อย่าเพิ่งส่ง', tone: 'pink', span: 4, r: '0.9deg' },
  { icon: 'bot' as const, t: 'ชอบลอง AI ใหม่', d: 'เครื่องมือใหม่ = ของเล่นใหม่ของโมจิ', tone: 'night', span: 7, r: '-0.5deg' },
];

export default function Personality() {
  return (
    <section className="section personality" id="personality" aria-labelledby="personality-title">
      <div className="wrap">
        <Reveal>
          <SectionHead title={<span id="personality-title">หน้านิ่ง แต่จริง ๆ แล้ว<span className="title-dot">…</span></span>}
            detail="คนที่เพิ่งเจอโมจิอาจคิดว่าเธอเป็นสาวแมวสุดคูล — แต่คนที่อยู่ด้วยนานพอจะรู้ว่านี่คือแมวขี้อ้อนที่แกล้งเก่งที่สุดในสตูดิโอ"
            note="REAL MOCHI, UNFILTERED" />
        </Reveal>

        <div className="traits">
          {traits.map((tr, i) => (
            <Reveal key={tr.t} delay={i * 0.04} className={`trait trait--${tr.tone}`}
              style={{ '--span': tr.span, '--r': tr.r } as CSSProperties}>
              <article>
                <span className="trait__icon"><Icon name={tr.icon} size={22} /></span>
                <div>
                  <h3>{tr.t}</h3>
                  <p>{tr.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal className="trait trait--note" delay={0.28}
            style={{ '--span': 5, '--r': '2deg' } as CSSProperties}>
            <article>
              <Icon name="paw" size={26} />
              <p>จริง ๆ แล้วใจดีมากนะ<br /><span>— ห้ามบอกใคร</span></p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
