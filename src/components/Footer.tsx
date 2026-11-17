import { Icon } from './ui';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__cols">
        <div className="foot__brand">
          <img src="/images/mochi-mark.png" alt="" width="46" height="46" loading="lazy" />
          <div>
            <b>Midnight Mochi</b>
            <p>สาวแมว AI-assisted Full-stack Developer<br />ประจำสตูดิโอตอนตีสาม</p>
          </div>
        </div>
        <nav aria-label="เมนูแฟ้มประวัติ">
          <h2>เมนู</h2>
          <a href="#profile">แฟ้มประวัติ</a>
          <a href="#story">เรื่องราว</a>
          <a href="#skills">สกิล</a>
          <a href="#chat">คำพูด</a>
        </nav>
        <div className="foot__meta">
          <h2>แฟ้มนี้</h2>
          <p>Lore &amp; character: Midnight Mochi</p>
          <p>Illustration: original character art</p>
          <p className="foot__quote"><Icon name="spark" size={14} /> Code at Midnight. Build Beyond Limits.</p>
          <p className="foot__secret"><Icon name="paw" size={12} /> ลองพิมพ์ “mochi” ที่ไหนก็ได้ในหน้านี้</p>
        </div>
      </div>

      <div className="foot__logo">
        <img src="/images/mochi-logo.webp" alt="Midnight Mochi" width="900" height="900" loading="lazy" />
      </div>

      <div className="wrap foot__bottom">
        <p>© 2026 Midnight Mochi · สร้างด้วยความรักตอนตีสาม</p>
        <a href="#main">กลับด้านบน ↑</a>
      </div>
    </footer>
  );
}
