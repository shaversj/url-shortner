import Logo from "./icons/Logo";
import MobileMenu from "./icons/MobileMenu";

export default function Header(){
  return (
    <header className={"text-lightGray text-[0.938rem] leading-[1.375rem] font-bold pt-[2.5rem] lg:pt-[3rem]"}>
      <nav className={"flex items-center"}>
        <a href="#"><Logo/></a>
        <MobileMenu className={"lg:hidden ml-auto"} />
        <ul className={"lg:flex lg:pl-[2.839rem] lg:gap-x-8 hidden"}>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
        <ul className={"hidden lg:flex lg:gap-x-[2.313rem] lg:ml-auto"}>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  )
}
