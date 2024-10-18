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
    <div className={'flex h-6 items-center justify-center gap-x-6 border border-amber-200 pt-[3rem] lg:ml-auto lg:pt-0'}>
      {socialMediaLinks.map(({ name, icon }) => (
        <Fragment key={name}>{icon}</Fragment>
      ))}
    </div>
  );
}
