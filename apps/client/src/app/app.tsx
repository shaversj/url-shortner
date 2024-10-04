import NxWelcome from './nx-welcome';
import Logo from "./components/icons/Logo";
import IllustrationWorking from "./components/icons/IllustrationWorking";
import Facebook from "./components/icons/Facebook";
import Twitter from "./components/icons/Twitter";
import Pinterest from "./components/icons/Pinterest";
import Instagram from "./components/icons/Instagram";
import BrandRecognition from "./components/icons/BrandRecognition";
import FeatureList from "./components/FeatureList";
import StatisticsHeader from "./components/StatisticsHeader";
import StatisticsSection from "./components/StatisticsSection";

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


      <StatisticsSection>
        <StatisticsHeader/>
        <FeatureList/>
      </StatisticsSection>


      <div
        className={"bg-[url('/bg-boost-desktop.svg')] bg-darkPurple bg-no-repeat flex flex-col items-center gap-y-8 py-[57px]"}>
        <h3 className={"text-[40px] font-bold leading-[48px] text-center tracking-[-1px] text-white"}>Boost your links
          today</h3>

        <button className={"bg-aqua w-[197px] h-[56px] rounded-full text-[20px] text-white leading-[30px] font-bold"}>
          Get Started
        </button>
      </div>

      <footer className={"bg-darkBrown px-[165px] py-[72px]"}>
        <div className={"flex"}>
          <Logo fill={'#FFFFFF'}/>
          <div
            className={"pl-[261px] flex text-[#BFBFBF] font-medium text-[15px] leading-[22px] tracking-[-0.234375px] gap-x-24"}>

            <div>
              <h4 className={"font-bold leading-6 tracking-[0.25px] text-white"}>Features</h4>
              <ul className={"pt-[22px] space-y-[10px]"}>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className={"font-bold leading-6 tracking-[0.25px] text-white"}>Resources</h4>
              <ul className={"pt-[22px] space-y-[10px]"}>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className={"font-bold leading-6 tracking-[0.25px] text-white"}>Company</h4>
              <ul className={"pt-[22px] space-y-[10px]"}>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

          </div>

          <div className={"flex gap-x-6 pl-[101px] h-6 items-center justify-center"}>
            <Facebook/>
            <Twitter/>
            <Pinterest/>
            <Instagram/>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
