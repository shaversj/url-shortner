import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Pinterest from "./icons/Pinterest";
import Instagram from "./icons/Instagram";
import Logo from "./icons/Logo";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import FooterContent from "./FooterContent";
import FooterWrapper from "./FooterWrapper";

export default function Footer(){
  return (
    <FooterWrapper>
      <FooterContent>
        <Logo fill={'#FFFFFF'}/>
        <FooterLinks />
        <SocialLinks />
      </FooterContent>
    </FooterWrapper>
  )
}
