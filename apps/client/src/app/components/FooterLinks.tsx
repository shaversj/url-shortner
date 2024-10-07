import FooterLink from "./FooterLink";

export default function FooterLinks(){
  const footerLinks = [
    {name: "Features", links: ["Link Shortening", "Branded Links", "Analytics"]},
    {name: "Resources", links: ["Blog", "Developers", "Support"]},
    {name: "Company", links: ["About", "Our Team", "Careers", "Contact"]},
  ]

  return (
    <div className={"pt-[3.083rem] lg:pt-0 lg:pl-[16.313rem] flex flex-col lg:flex-row text-[#BFBFBF] gap-y-[2.5rem] lg:gap-y-0 font-medium text-[0.938rem] leading-[1.375rem] tracking-[-0.015rem] gap-x-24"}>
      {footerLinks.map(({name, links}) => (
        <FooterLink key={name} name={name} links={links}/>
      ))}
    </div>
  )
}
