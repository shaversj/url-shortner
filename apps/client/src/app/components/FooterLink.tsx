export default function FooterLink({name, links}: {name: string, links: string[]}){
  return (
    <div>
      <h4 className={"font-bold leading-6 tracking-[0.25px] text-white"}>{name}</h4>
      <ul className={"pt-[22px] space-y-[10px]"}>
        {links.map((link) => <li>{link}</li>)}
      </ul>
    </div>
  )
}
