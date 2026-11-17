import { Icon, Reveal, SectionHead } from './ui';

const chapters = [
  {
    n: '01',
    t: 'แมวน้อยในห้องมืด',
    d: 'ทุกอย่างเริ่มจากนักพัฒนาตัวเล็ก ๆ ที่ชอบทดลองเขียนโค้ดและสร้างโปรเจกต์ส่วนตัว สิ่งที่เธอสนุกที่สุดคือการเห็นไอเดียในหัวกลายเป็นของที่กดใช้งานได้จริง',
  },
  {
    n: '02',
    t: 'เจอ AI เข้าเต็ม ๆ',
    d: 'เมื่อเวลาผ่านไป โมจิเริ่มสนใจการใช้ AI มาช่วยพัฒนาซอฟต์แวร์ จนกลายเป็น Developer ที่ออกแบบและสร้างระบบ Full-stack ได้ด้วยตัวเอง',
  },
  {
    n: '03',
    t: 'สตูดิโอตอนตีสาม',
    d: 'ปัจจุบันเธอใช้ชีวิตในสตูดิโอส่วนตัวที่เต็มไปด้วยคอมพิวเตอร์ จอภาพ และอุปกรณ์เขียนโค้ด กลางคืนคือช่วงที่เงียบที่สุด และเป็นเวลาที่เธอมีสมาธิที่สุด',
  },
];

export default function Story() {
  return (
    <section className="section section--tint story" id="story" aria-labelledby="story-title">
      <div className="wrap">
        <Reveal>
          <SectionHead title={<span id="story-title">เรื่องราวก่อนตีสาม<span className="title-dot">.</span></span>}
            detail="จากนักพัฒนาตัวเล็ก ๆ สู่สาวแมว Full-stack ที่สร้างระบบของตัวเองได้ทั้งโลก — เส้นทางนี้ใช้เวลาหลายคืนมาก"
            note="CHAPTERS 01–03" />
        </Reveal>

        <div className="story__grid">
          <div className="story__chapters">
            {chapters.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.08}>
                <article className="chapter">
                  <span className="chapter__no" aria-hidden="true">{c.n}</span>
                  <div>
                    <h3>{c.t}</h3>
                    <p>{c.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <p className="story__note">
              <Icon name="moon" size={18} /> เธอทำงานตอนกลางคืน เพราะเป็นช่วงเวลาเดียวที่โลกทั้งใบเงียบพอจะได้ยินเสียงโค้ด
            </p>

            <figure className="polaroid">
              <span className="tape tape--pink" aria-hidden="true" />
              <img src="/images/mochi-snapshot.webp" alt="โมจินอนกอดแมวดำในห้องสีน้ำเงินตอนกลางคืน" width="1000" height="563" loading="lazy" />
              <figcaption><span>03:12 AM</span> · ยังไม่นอน</figcaption>
            </figure>
          </div>

          <Reveal className="story__visual" delay={0.12}>
            <div className="terminal">
              <div className="terminal__bar">
                <span className="terminal__dots" aria-hidden="true"><i /><i /><i /></span>
                <p>mochi@midnight — zsh</p>
                <span className="terminal__live">live</span>
              </div>
              <div className="terminal__body">
                <p><span className="t-prompt">mochi@midnight</span> <span className="t-path">~</span> <span className="t-cmd">$ whoami</span></p>
                <p className="t-out">Midnight Mochi <span className="t-dim">// AI-assisted full-stack developer</span></p>
                <p><span className="t-prompt">mochi@midnight</span> <span className="t-path">~</span> <span className="t-cmd">$ cat manifesto.txt</span></p>
                <p className="t-quote">“โค้ดที่ดีไม่ใช่แค่โค้ดที่ทำงานได้<br />&nbsp;&nbsp;แต่ต้องเป็นระบบที่พร้อมเติบโตในโลกจริง”</p>
                <p><span className="t-prompt">mochi@midnight</span> <span className="t-path">~</span> <span className="t-cmd">$ uptime</span></p>
                <p className="t-out">20 years awake · <span className="t-pink">0 coffee left</span> · 1 cat on desk</p>
                <p><span className="t-prompt">mochi@midnight</span> <span className="t-path">~</span> <span className="t-cmd">$ status</span></p>
                <p className="t-out"><span className="t-pink">●</span> creating at 02:41 AM <span className="t-caret" aria-hidden="true">▋</span></p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
