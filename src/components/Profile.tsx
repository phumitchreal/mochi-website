import { Icon, Reveal, SectionHead } from './ui';

const facts: [string, string, string?][] = [
  ['ชื่อ', 'Mochi (โมจิ)'],
  ['ชื่อเต็ม', 'Midnight Mochi'],
  ['อายุ', '20 ปี'],
  ['วันเกิด', '17 พฤศจิกายน'],
  ['เผ่าพันธุ์', 'แมวมนุษย์ (Catgirl)'],
  ['ส่วนสูง / น้ำหนัก', '162 cm / 49 kg'],
  ['กรุ๊ปเลือด', 'AB'],
  ['สีผม', 'ดำไฮไลต์น้ำเงิน'],
  ['สีตา', 'ชมพูอมม่วง'],
  ['สีประจำตัว', 'Midnight Blue', '#7fa8ff'],
  ['สัญลักษณ์', 'แมวดำ + โบว์น้ำเงิน'],
  ['บุคลิก', 'Cool · Sleepy · Smart · Tsundere'],
];

export default function Profile() {
  return (
    <section className="section profile" id="profile" aria-labelledby="profile-title">
      <div className="wrap">
        <Reveal>
          <SectionHead title={<span id="profile-title">แฟ้มประวัติ<span className="title-dot">.</span></span>}
            detail="สาวแมวที่ถือกำเนิดในโลกดิจิทัล โลกที่มนุษย์กับ AI ทำงานร่วมกันได้ — และเธอเลือกใช้ชีวิตส่วนใหญ่ในนั้น"
            note="FILE NO. 017" />
        </Reveal>

        <div className="profile__grid">
          <Reveal className="profile__cardwrap">
            <div className="idcard">
              <span className="tape tape--pink" aria-hidden="true" />
              <span className="tape tape--blue" aria-hidden="true" />
              <div className="idcard__photo">
                <img src="/images/mochi-portrait.webp" alt="ภาพระยะใกล้ของโมจิ ผมดำไฮไลต์น้ำเงิน ดวงตาสีชมพูอมม่วง" width="760" height="872" loading="lazy" />
                <span className="idcard__cat"><Icon name="cat" size={16} /></span>
              </div>
              <div className="idcard__body">
                <p className="idcard__tiny">MIDNIGHT STUDIO · DEVELOPER FILE</p>
                <h3>Midnight Mochi</h3>
                <p className="idcard__jp">ミッドナイト・モチ</p>
                <div className="idcard__chips">
                  <span>THE MIDNIGHT DEV</span><span>CATGIRL</span><span>AB</span>
                </div>
                <div className="idcard__barcode" aria-hidden="true" />
                <p className="idcard__foot">17.11.20XX · STILL AWAKE</p>
              </div>
            </div>
            <div className="profile__quote">
              <Icon name="spark" size={18} />
              <p>“ฉันไม่ได้ขี้เกียจ... แค่กำลังรอให้ AI เขียนโค้ดเสร็จต่างหาก”</p>
            </div>
          </Reveal>

          <Reveal className="profile__info" delay={0.1}>
            <p className="profile__intro">
              โมจิหลงใหลการสร้างสรรค์สิ่งต่าง ๆ ผ่านเทคโนโลยี — การเขียนโปรแกรม ออกแบบเว็บไซต์
              และระบบที่ซับซ้อนคือของเล่นชิ้นโปรดของเธอ เธอเริ่มจากนักพัฒนาตัวเล็ก ๆ
              ที่ชอบทดลองโปรเจกต์ของตัวเอง ก่อนจะโตมาเป็น Full-stack Developer ที่สร้างระบบได้ครบวงจรด้วยตัวเอง
            </p>
            <dl className="data">
              {facts.map(([label, value, swatch]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>
                    {swatch && <span className="swatch" style={{ background: swatch }} aria-hidden="true" />}
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="profile__manifesto">
              <span aria-hidden="true">“</span>โค้ดที่ดีไม่ใช่แค่โค้ดที่ทำงานได้
              แต่ต้องเป็นระบบที่พร้อมเติบโตในโลกจริง<span aria-hidden="true">”</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
