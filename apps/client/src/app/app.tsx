import NxWelcome from './nx-welcome';
import FeatureList from "./components/FeatureList";
import StatisticsHeader from "./components/StatisticsHeader";
import StatisticsSection from "./components/StatisticsSection";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ShortenLinkForm from "./components/ShortenLinkForm";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import BoostSection from "./components/BoostSection";

export function App() {
  return (
    <div className={"font-poppins"}>
      {/*<NxWelcome title="client" />*/}
      <MainSection>
        <Header />
        <HeroSection />
        <ShortenLinkForm />
      </MainSection>
      <StatisticsSection>
        <StatisticsHeader/>
        <FeatureList/>
      </StatisticsSection>
      <BoostSection />
      <Footer />
    </div>
  );
}

export default App;
