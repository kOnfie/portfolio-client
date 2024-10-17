import HeroSection from '../HeroSection/HeroSection';
import PanelAboutMe from '../PanelAboutMe/PanelAboutMe';

import s from './intro.module.scss';    

const Intro = () => {
  return (
    <section className={s.intro}>
      <div className={s.intro_container}>
        <h1>Developer</h1>
        <div className={s.intro_body}>
          <PanelAboutMe />

          <HeroSection />
        </div>
      </div>
    </section>
  );
};

export default Intro;
