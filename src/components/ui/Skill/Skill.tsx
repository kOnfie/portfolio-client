import { ReactNode } from 'react';
import s from './skill.module.scss';

const Skill = ({ children }: { children: ReactNode }) => {
  return <span className={s.skill}>{children}</span>;
};

export default Skill;
