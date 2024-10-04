import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Pinterest from "./icons/Pinterest";
import Instagram from "./icons/Instagram";
import {Fragment} from "react";

export default function SocialLinks(){
  const socialMediaLinks = [
    {name: "Facebook", icon: <Facebook/>},
    {name: "Twitter", icon: <Twitter/>},
    {name: "Pinterest", icon: <Pinterest/>},
    {name: "Instagram", icon: <Instagram/>},
  ]

  return (
    <div className={"flex gap-x-6 pl-[6.313rem] h-6 items-center justify-center"}>
      {socialMediaLinks.map(({name, icon}) => (
        <Fragment key={name}>{icon}</Fragment>
      ))}
    </div>
  )
}
