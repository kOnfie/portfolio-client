import { NavLink } from 'react-router-dom';

import s from './headerNavigation.module.scss';

const HeaderNavigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_menu}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `${s.nav_link} ${s.active}` : s.nav_link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? `${s.nav_link} ${s.active}` : s.nav_link)}
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
