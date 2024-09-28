import { FC } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

import s from './socialMedia.module.scss';

interface SocialMediaProps {
  name: string;
  title: string;
  path: string;
}

const SocialMedia: FC<SocialMediaProps> = ({ name, title, path }) => {
  return (
    <Link target="_blank" to={path} className={s.socialMedia}>
      <Icon name={name} />
      <p>{title}</p>
    </Link>
  );
};

export default SocialMedia;
