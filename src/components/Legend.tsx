import { Icon, Reveal, SectionHead } from './ui';

const symbols = [
  { icon: 'ear' as const, t: 'หูแมว', d: 'สัญชาตญาณและความขี้สงสัย' },
  { icon: 'tail' as const, t: 'หางแมว', d: 'อารมณ์และความรู้สึก' },
  { icon: 'bow' as const, t: 'โบว์น้ำเงิน', d: 'ความเป็นตัวตนของโมจิ' },
  { icon: 'hair' as const, t: 'ผมดำ', d: 'ความลึกลับที่ซ่อนอยู่' },
  { icon: 'spark' as const, t: 'ไฮไลต์น้ำเงิน', d: 'โลกเทคโนโลยีที่เธออยู่' },
  { icon: 'eye' as const, t: 'ดวงตาสีชมพู', d: 'ความอบอุ่นที่ซ่อนอยู่' },
];

export default function Legend() {
  return (
    <section className="section legend" id="legend" aria-labelledby="legend-title">
      <div className="wrap">
        <Reveal>
          <SectionHead title={<span id="legend-title">ทุกดีเทลของโมจิ<span className="title-dot">.</span></span>}
            detail="ไม่มีอะไรบนตัวเธอที่บังเอิญ — ตั้งแต่ปลายหูไปจนถึงปลายหาง ทุกอย่างคือส่วนหนึ่งของเรื่องราว"
            note="THE MOCHI CODE" />
        </Reveal>

        <div className="legend__grid">
          {symbols.map((s, i) => (
            <Reveal key={s.t} className="legend__item" delay={i * 0.05}>
              <span className="legend__icon"><Icon name={s.icon} size={26} /></span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
