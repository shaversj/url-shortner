import FeatureList from './components/FeatureList';
import StatisticsHeader from './components/StatisticsHeader';
import StatisticsSection from './components/StatisticsSection';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import ShortenLinkForm from './components/ShortenLinkForm';
import HeroContainer from './components/HeroContainer';
import Footer from './components/Footer';
import BoostSection from './components/BoostSection';
import { useEffect, useState } from 'react';
import UrlCardList from './components/UrlCardList';
import UrlSection from './components/UrlSection';
import { UrlObject } from './types/types';

export function App() {
  const [urls, setUrls] = useState<UrlObject[]>([]);
  const addUrl = (url: UrlObject) => {
    const newUrls = [...urls, url];
    setUrls(newUrls);
    localStorage.setItem('urls', JSON.stringify(newUrls));
  };

  useEffect(() => {
    const urls = localStorage.getItem('urls');
    if (urls) {
      setUrls(JSON.parse(urls));
    }
  }, []);

  return (
    <main className={'lg:h-full'}>
      <HeroContainer>
        <Header />
        <HeroSection />
        <ShortenLinkForm addUrl={addUrl} />
      </HeroContainer>
      {urls.length > 0 && (
        <UrlSection>
          <UrlCardList urls={urls} />
        </UrlSection>
      )}
      <StatisticsSection urls={urls}>
        <StatisticsHeader />
        <FeatureList />
      </StatisticsSection>
      <BoostSection />
      <Footer />
    </main>
  );
}

export default App;
