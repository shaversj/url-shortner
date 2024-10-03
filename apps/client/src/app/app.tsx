import NxWelcome from './nx-welcome';
import Logo from "./components/icons/Logo";
import IllustrationWorking from "./components/icons/IllustrationWorking";

export function App() {
  return (
    <div className={"font-poppins"}>
      {/*<NxWelcome title="client" />*/}

      <div className={"bg-white h-[800px] px-[165px] relative"}>

        <header className={"text-lightGray text-[15px] leading-[22px] font-bold pt-[48px]"}>
          <nav className={"flex items-center"}>
            <a href="#"><Logo/></a>
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
            <button
              className={"bg-aqua w-[197px] h-[56px] rounded-full text-[20px] text-white leading-[30px] font-bold mt-[38px]"}>
              Get Started
            </button>
          </div>

          <div className={"overflow-visible"}>
            <IllustrationWorking/>
          </div>
        </div>

        <div
          className={"relative translate-y-1/2 bg-[url('/bg-shorten-desktop.svg')] bg-darkPurple bg-no-repeat flex gap-x-6 py-[52px] px-[64px] rounded-lg"}>
          <input className={"rounded-lg h-16 pl-8 text-[20px] leading-9 tracking-[0.15px] font-medium grow"}
                 type="text"
                 placeholder="Shorten a link here..."/>
          <button
            className={"rounded-lg bg-aqua h-16 w-[168px] text-[20px] text-white leading-[30px] font-bold"}>Shorten
            It!
          </button>
        </div>

      </div>


      <div className={"h-[800px] bg-lightBlue px-[165px]"}>
        <div className={"bg-lightBlue overflow-x-visible pt-[204px]"}>
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <div className={"h-[300px]"}>

          </div>
        </div>
      </div>


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
