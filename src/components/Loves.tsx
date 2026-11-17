import { Icon, Reveal, SectionHead } from './ui';

const likes = ['กาแฟและชานม', 'แมวดำ', 'การเขียนโค้ดตอนกลางคืน', 'ห้องทำงานที่มีไฟ RGB', 'เพลง Lo-fi', 'การสร้างโปรเจกต์ใหม่', 'การนอนบนโต๊ะคอม'];
const dislikes = ['Bug ที่หาสาเหตุไม่เจอ', 'Code ที่ไม่มีระเบียบ', 'งานเร่งด่วน', 'เสียงดัง', 'การประชุมที่ไม่จำเป็น', 'AI ที่แก้โค้ดแล้วทำระบบพัง'];

export default function Loves() {
  return (
    <section className="section section--tint loves" id="loves" aria-labelledby="loves-title">
      <div className="wrap">
        <Reveal>
          <SectionHead title={<span id="loves-title">ใจง่าย ๆ ของโมจิ<span className="title-dot">.</span></span>}
            detail="บางครั้งก็แค่ต้องการกาแฟอุ่น ๆ กับโค้ดที่ไม่มีบั๊ก — แต่ส่วนใหญ่ก็ได้แค่กาแฟ"
            note="+1 / −1" />
        </Reveal>

        <div className="loves__grid">
          <Reveal className="loves__card loves__card--yes">
            <Icon name="coffee" size={82} className="loves__doodle" />
            <header>
              <span className="loves__badge"><Icon name="heart" size={18} /></span>
              <h3>ชอบมาก</h3>
              <span className="loves__count">07</span>
            </header>
            <ul>
              {likes.map((l) => <li key={l}><span className="loves__dot" aria-hidden="true"><Icon name="paw" size={12} /></span>{l}</li>)}
            </ul>
            <p className="loves__note">กาแฟ 1 แก้ว = 1 feature</p>
          </Reveal>

          <Reveal className="loves__card loves__card--no" delay={0.1}>
            <Icon name="x" size={84} className="loves__doodle" />
            <header>
              <span className="loves__badge"><Icon name="x" size={18} /></span>
              <h3>ไม่ไหว</h3>
              <span className="loves__count">06</span>
            </header>
            <ul>
              {dislikes.map((l) => <li key={l}><span className="loves__dot" aria-hidden="true"><Icon name="x" size={11} /></span>{l}</li>)}
            </ul>
            <p className="loves__note">ถ้าเจอบั๊กที่ไม่เจอสาเหตุ... อย่าชวนคุย</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
