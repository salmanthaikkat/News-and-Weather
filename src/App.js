import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CarouselCard from './components/CarouselCard';
import WeatherCard from './components/WeatherCard';
import fetchNews from './services/news';
import fetchWeather from './services/weather';

function App() {
  const [mainNews, setMainNews] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [language, setLanguage] = useState('en');
  const [otherNews, setOtherNews] = useState(null);
  const [weather, setWeather] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    getMainNews();
    getLocation();
  }, []);

  useEffect(() => {
    getSearchNews(searchText, language);
  }, [searchText, language]);

  useEffect(() => {
    getWeather();
  }, [coordinates]);

  async function getMainNews() {
    const { articles } = await fetchNews({
      q: 'example',
      max: 3
    });
    setMainNews(articles);
  }

  async function getSearchNews(searchText, language) {
    const { articles } = await fetchNews({
      q: (searchText && searchText.length > 0) ? searchText : 'technology',
      max: 10,
      lang: language ? language : 'en'
    });
    setMainNews(articles.splice(0, 3));
    setOtherNews(articles);
  }

  async function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        setCoordinates(coords);
      })
    }
  }

  async function getWeather() {
    if (coordinates) {
      const { name, weather, main } = await fetchWeather({ lat: coordinates.latitude, lon: coordinates.longitude });
      setWeather({name, weather, main});
    }
  }

  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  function handleLanguageSelect(languageKey) {
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
          <WeatherCard
            data = { weather }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
