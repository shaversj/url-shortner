import Logo from "./icons/Logo";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterContent from "./FooterContent";
import FooterWrapper from "./FooterWrapper";

export default function Footer(){
  return (
    <FooterWrapper>
      <FooterContent>
        <Logo fill={'#FFFFFF'}/>
        <FooterLinks />
        <FooterSocial />
      </FooterContent>
    </FooterWrapper>
  )
}
