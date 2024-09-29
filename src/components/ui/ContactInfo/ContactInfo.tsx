import { FC } from 'react';

import Icon from '../Icon/Icon';

import s from './contactInfo.module.scss';

interface ContactInfoProps {
  name: string;
  text: string;
  className: string;
}

const ContactInfo: FC<ContactInfoProps> = ({ name, text, className }) => {
  return (
    <div className={`${s.contactInfo} ${className}`}>
      <Icon name={name} />
      <p>{text}</p>
    </div>
  );
};

export default ContactInfo;
