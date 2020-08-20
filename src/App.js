import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CarouselCard from './components/CarouselCard';
import WeatherCard from './components/WeatherCard';
import fetchNews from './services/news';

function App() {
  const [mainNews, setMainNews] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [language, setLanguage] = useState('en');
  const [otherNews, setOtherNews] = useState(null);

  useEffect(() => {
    getMainNews();
  }, []);

  useEffect(() => {
    getOtherNews(searchText, language);
  }, [searchText, language]);

  async function getMainNews() {
    const { data } = await fetchNews({
      q: 'example',
      max: 3
    });
    setMainNews(data.articles);
  }

  async function getOtherNews(searchText, language) {
    const { data } = await fetchNews({
      q: searchText ? searchText : 'global',
      max: 10,
      lang: language ? language : 'en'
    });
    setOtherNews(data.articles);
  }

  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  function handleLanguageSelect(languageKey) {
    console.log('key', languageKey);
    setLanguage(languageKey);
  }

  return (
    <div className="app-main">
      <Header 
        handleSearch = { handleSearch }
        handleLanguageSelect = { handleLanguageSelect }
      />
      <div className="app-main__content">
        <div className="app-main__content-row--first">
          <CarouselCard
            news = { mainNews }
          />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}

export default App;
