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
import {useState} from "react";
import UrlCardList from "./UrlCardList";
import UrlSection from "./components/UrlSection";

export type UrlObject = {
  originalUrl: string;
  shortUrl: string;
}

export function App() {
  const [urls, setUrls] = useState<UrlObject[]>([]);
  const addUrl = (url: UrlObject) => setUrls([...urls, url]);

  return (
    <div className={"font-poppins"}>
      {/*<NxWelcome title="client" />*/}
      <MainSection>
        <Header />
        <HeroSection />
        <ShortenLinkForm addUrl={addUrl} />
      </MainSection>
      {urls.length > 0 && (
        <UrlSection>
          <UrlCardList urls={urls}/>
        </UrlSection>
      )}
      <StatisticsSection urls={urls}>
        <StatisticsHeader/>
        <FeatureList/>
      </StatisticsSection>
      <BoostSection />
      <Footer />
    </div>
  );
}

export default App;
