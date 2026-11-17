import { MotionConfig } from 'framer-motion';
import Boot from './Boot';
import Hero from './Hero';
import Ribbon from './Ribbon';
import Profile from './Profile';
import Story from './Story';
import Personality from './Personality';
import Skills from './Skills';
import Loves from './Loves';
import Chat from './Chat';
import Legend from './Legend';
import Closing from './Closing';
import Footer from './Footer';
import { Stars } from './ui';
import { EasterEgg, PawTrail, ScrollProgress } from './Magic';

export default function Landing() {
  return (
    <MotionConfig reducedMotion="user">
      <Stars />
      <ScrollProgress />
      <PawTrail />
      <EasterEgg />
      <Boot />
      <header className="nav">
        <a className="nav__brand" href="#main" aria-label="Midnight Mochi — กลับขึ้นด้านบน">
          <img className="nav__logo" src="/images/mochi-mark.png" alt="" width="40" height="40" />
          <span><b>Midnight Mochi</b><small>The Midnight Developer</small></span>
        </a>
        <nav aria-label="เมนูหลัก">
          <a href="#profile">แฟ้มประวัติ</a>
          <a href="#story">เรื่องราว</a>
          <a href="#skills">สกิล</a>
          <a href="#chat">บทสนทนา</a>
        </nav>
        <a className="nav__cta" href="#closing">จิ้มโมจิ <span aria-hidden="true">♥</span></a>
      </header>

      <main id="main">
        <Hero />
        <Ribbon />
        <Profile />
        <Story />
        <Personality />
        <Skills />
        <Loves />
        <Chat />
        <Legend />
        <Closing />
      </main>

      <Footer />
    </MotionConfig>
  );
}
