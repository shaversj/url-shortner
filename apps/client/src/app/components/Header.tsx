import Logo from "./icons/Logo";

export default function Header(){
  return (
    <header className={"text-lightGray text-[0.938rem] leading-[1.375rem] font-bold pt-[3rem]"}>
      <nav className={"flex items-center"}>
        <a href="#"><Logo/></a>
        <ul className={"flex pl-[2.839rem] gap-x-8"}>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
        <ul className={"flex gap-x-[2.313rem] ml-auto"}>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  )
}
