import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import SocialMedia from '../ui/SocialMedia/SocialMedia';
import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_body}>
          <div className={s.logo}>
            <span className={s.logo_icon}>&lt;C/&gt;</span>
            <span className={s.logo_text}>DenysMatvieiev</span>
          </div>

          <div className={s.header_navigation}>
            <HeaderNavigation />

            <div className={s['header_navigation-social']}>
              <SocialMedia path='https://www.instagram.com/' name="instagram" title="Instagram" />
              <SocialMedia path='https://discord.gg/JUBsm2WR' name="discord" title="Discord" />
              <SocialMedia path='https://github.com/kOnfie' name="github" title="Github" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
