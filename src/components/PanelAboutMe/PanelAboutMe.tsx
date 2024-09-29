import ContactInfo from '../ui/ContactInfo/ContactInfo';
import Skill from '../ui/Skill/Skill';
import Icon from '../ui/Icon/Icon';

import skills from './skills';
import s from './panelAboutMe.module.scss';

import avaImg from 'src/../public/ava.webp';

const PanelForMe = () => {
  return (
    <div className={s.panel}>
      <div className={s.panel_header}>
        <img src={avaImg} alt="Ava for me" />
        <h2>Denys</h2>
        <p>Full-stack developer</p>
      </div>

      <div className={s.panel_contactInfo}>
        <ContactInfo
          className={s['panel_contactInfo-mail']}
          name="mail"
          text="matveevdenis458@gmail.com"
        />
        <ContactInfo className={s['panel_contactInfo-map']} name="map" text="Ukraine" />
        <ContactInfo className={s['panel_contactInfo-case']} name="case" text="Full-time" />
      </div>

      <div className={s.panel_skills}>
        {skills.map((skill: string) => (
          <Skill>{skill}</Skill>
        ))}
      </div>

      <a
        href="https://drive.google.com/file/d/1u3Q8YWYfk7qU5uDTPttwf-B96N5GSPym/view?usp=drive_link"
        target="_blank"
      >
        <button type="button" className={s.panel_download}>
          Download CV
          <Icon name="download" />
        </button>
      </a>
    </div>
  );
};

export default PanelForMe;
