import FooterLink from './FooterLink';
import FooterSocial from './FooterSocial';

export default function FooterLinks() {
  const footerLinks = [
    { name: 'Features', links: ['Link Shortening', 'Branded Links', 'Analytics'] },
    { name: 'Resources', links: ['Blog', 'Developers', 'Support'] },
    { name: 'Company', links: ['About', 'Our Team', 'Careers', 'Contact'] },
  ];

  return (
    <div className={'ml-auto flex min-w-[45.625rem] border border-blue-700'}>
      <div className={'flex flex-col gap-y-[2.5rem] pt-[3.083rem] lg:w-[28.813rem] lg:flex-row lg:justify-between lg:gap-y-0 lg:pt-0'}>
        {footerLinks.map(({ name, links }) => (
          <FooterLink key={name} name={name} links={links} />
        ))}
      </div>
      <FooterSocial />
    </div>
  );
}
