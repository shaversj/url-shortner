export default function FooterLink({ name, links }: { name: string; links: string[] }) {
  return (
    <div>
      <h4 className={'text-center font-bold leading-6 tracking-[0.016rem] text-white lg:text-left'}>{name}</h4>
      <ul className={'space-y-[0.625rem] pt-[1.125rem] text-center lg:text-left'}>
        {links.map((link, index) => (
          <li className={'text-nowrap text-[0.938rem] font-medium text-[#BFBFBF] hover:text-[#2BD0D0] lg:leading-[1.375rem] lg:tracking-[-0.015rem]'} key={index}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
