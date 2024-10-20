import Facebook from './icons/Facebook';
import Twitter from './icons/Twitter';
import Pinterest from './icons/Pinterest';
import Instagram from './icons/Instagram';
import { Fragment } from 'react';

export default function FooterSocial() {
  const socialMediaLinks = [
    { name: 'Facebook', icon: <Facebook /> },
    { name: 'Twitter', icon: <Twitter /> },
    { name: 'Pinterest', icon: <Pinterest /> },
    { name: 'Instagram', icon: <Instagram /> },
  ];

  return (
    <div className={'flex h-6 items-center justify-center gap-x-6 pt-[3rem] lg:col-start-2 lg:ml-auto lg:pt-0'}>
      {socialMediaLinks.map(({ name, icon }) => (
        <a href={name} key={name}>
          {icon}
        </a>
      ))}
    </div>
  );
}
