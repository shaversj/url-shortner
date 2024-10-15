export default function FooterLink({ name, links }: { name: string; links: string[] }) {
  return (
    <div>
      <h4 className={'text-center font-bold leading-6 tracking-[0.25px] text-white lg:text-left'}>{name}</h4>
      <ul className={'space-y-[10px] pt-[22px] text-center lg:text-left'}>
        {links.map((link, index) => (
          <li className={'hover:text-[#2BD0D0]'} key={index}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
