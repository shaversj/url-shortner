import NxWelcome from './nx-welcome';
import Logo from "./components/icons/Logo";
import IllustrationWorking from "./components/icons/IllustrationWorking";

export function App() {
  return (
    <div className={"font-poppins lg:px-[165px] w-[1440px]"}>
      {/*<NxWelcome title="client" />*/}

      <header className={"text-lightGray text-[15px] leading-[22px] font-bold pt-[48px]"}>
        <nav className={"flex items-center"}>
          <a href="#"><Logo /></a>
          <ul className={"flex pl-[45.43px] gap-x-8"}>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
          <ul className={"flex gap-x-[37px] ml-auto"}>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <div className={"flex gap-x-[102px] items-center pt-[78px] w-[1440px]"}>
        <div>
          <h1 className={"text-[80px] leading-[90px] tracking-[-2px] font-bold"}>More than just shorter links</h1>
          <p className={"text-[22px] font-medium text-lightGray tracking-[0.15px] leading-[38px]"}>Build your brand's
            recognition and get detailed insights on how your links are performing.</p>
          <button className={"bg-aqua w-[197px] h-[56px] rounded-full text-[20px] text-white leading-[30px] font-bold mt-[38px]"}>
            Get Started
          </button>
        </div>

        <div className={"overflow-visible"}>
          <IllustrationWorking/>
        </div>


      </div>

      <div>
        {/*  Search Bar  */}
      </div>

      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

      <div>
      {/*  Brand Recognition */}
      </div>

      <div>
        <h3>Boost your links today</h3>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
