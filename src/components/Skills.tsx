import { Icon, Reveal, SectionHead } from './ui';

const dev = ['Full-stack Development', 'Production Architecture', 'Modern UI/UX', 'Backend Systems', 'API Integration', 'Database Design'];
const stack = ['Next.js', 'React', 'Astro', 'Tailwind CSS', 'Node.js'];
const ai = ['Claude Code', 'Cursor', 'GitHub Copilot', 'OpenCode', 'Antigravity'];
const projects = [
  ['Discord Bots', 'บอทที่อยู่กับชุมชนทุกคืน'],
  ['Web Applications', 'เว็บแอปที่คนกลับมาใช้ซ้ำ'],
  ['Backend Infrastructure', 'ระบบหลังบ้านที่ไม่พังตอนตีสาม'],
  ['AI-powered Apps', 'ไอเดียใหม่ ๆ ที่มี AI เป็นเพื่อน'],
];

export default function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <Reveal>
          <SectionHead title={<span id="skills-title">ของในกระเป๋าตีสาม<span className="title-dot">.</span></span>}
            detail="เครื่องมือที่โมจิหยิบใช้จริงตอนทำงานดึก — ตั้งแต่เขียนหน้าเว็บไปจนถึงดูแลระบบให้วิ่งได้สบาย ๆ ใน Production"
            note="STACK & TOOLS" />
        </Reveal>

        <div className="skills__grid">
          <div className="skills__main">
            <Reveal className="panel panel--cream">
              <div className="panel__head">
                <span className="panel__icon"><Icon name="code" size={20} /></span>
                <h3>Development</h3>
                <span className="panel__count">06</span>
              </div>
              <p className="panel__lead">จากไอเดียบนกระดาษ ถึงระบบที่พร้อมให้คนใช้จริง</p>
              <ul className="skill-list">
                {dev.map((s) => (
                  <li key={s}><Icon name="check" size={16} />{s}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="panel panel--dashed" delay={0.08}>
              <div className="panel__head">
                <span className="panel__icon"><Icon name="folder" size={20} /></span>
                <h3>Special Projects</h3>
                <span className="panel__count">04</span>
              </div>
              <div className="project-grid">
                {projects.map(([t, d]) => (
                  <div className="project" key={t}>
                    <span aria-hidden="true">↳</span>
                    <div><b>{t}</b><small>{d}</small></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="skills__side">
            <Reveal className="panel panel--blue" delay={0.06}>
              <div className="panel__head">
                <span className="panel__icon"><Icon name="spark" size={20} /></span>
                <h3>Technology Stack</h3>
              </div>
              <p className="panel__lead">ชุดที่หยิบมาใช้บ่อยที่สุดในทุกโปรเจกต์</p>
              <ul className="chips">
                {stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
              <p className="panel__scribble">* ยังมีของในกระเป๋าอีกหลายชิ้น</p>
            </Reveal>

            <Reveal className="panel panel--pink" delay={0.12}>
              <div className="panel__head">
                <span className="panel__icon"><Icon name="bot" size={20} /></span>
                <h3>AI Tooling</h3>
                <span className="panel__count">05</span>
              </div>
              <p className="panel__lead">ผู้ช่วยตอนตีสาม ที่ไม่เคยบอกให้เข้านอน</p>
              <ul className="ai-list">
                {ai.map((s, i) => (
                  <li key={s}><span className="ai-list__no">{String(i + 1).padStart(2, '0')}</span>{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal className="skills__status" delay={0.16}>
          <span className="live-dot" aria-hidden="true" />
          <p>ตอนนี้โมจิกำลังเปิด <b>OpenCode</b> อยู่ — มีอะไรให้ช่วยไหม?</p>
        </Reveal>
      </div>
    </section>
  );
}
