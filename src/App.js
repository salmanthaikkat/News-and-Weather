import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CarouselCard from './components/CarouselCard';
import WeatherCard from './components/WeatherCard';
import fetchNews from './services/news';
import fetchWeather from './services/weather';
import ShortNewsCard from './components/ShortNewsCard';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [mainNews, setMainNews] = useState(null);
  const [otherNews, setOtherNews] = useState(null);
  const [shortNews, setShortNews] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [language, setLanguage] = useState('en');
  const [weather, setWeather] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews();
    getLocation();
  }, []);

  useEffect(() => {
    getNews(searchText, language);
  }, [searchText, language]);

  useEffect(() => {
    getWeather();
  }, [coordinates]);

  async function getNews(searchText, language) {
    setLoading(true);
    const { articles } = await fetchNews({
      q: (searchText && searchText.length > 0) ? searchText : 'technology',
      max: 10,
      lang: language ? language : 'en'
    });

    setMainNews(articles.splice(0, 3));
    setShortNews(articles.splice(0, 3));
    setOtherNews(articles.splice(0, 4));

    setLoading(false);
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

  function handleNewsClick(url) {
    window.open(url);
  }

  function renderShortNews() {
    return (
      shortNews
        ? shortNews.map((news, index) => (
          <ShortNewsCard
            key = { index }
            news = { news.title }
            url = { news.url }
            handleNewsClick = { handleNewsClick }
          />
        ))
        : <span>No news available</span>
    )
  }

  function renderNews() {
    return (
      otherNews
        ? otherNews.map((news, index) => (
          <NewsCard
            key = { index }
            data = { news }
            handleNewsClick = { handleNewsClick }
          />
        ))
        : <span>No news available</span>
    )
  }

  function renderContents() {
    return (
      <div className="app-main__content">
        <div className="app-main__content-row--first">
          <CarouselCard
            news = { mainNews }
          />
          <div className="app-main__content-row--first__right">
            <WeatherCard
              data = { weather }
            />
            <div className="short-news">
              <h2 className="short-news__header">News at Glance</h2>
              <div className="short-news__content">
                { renderShortNews() }
              </div>
            </div>
          </div>
        </div>
        <div className="app-main__content-row">
          { renderNews() }
        </div>
      </div>
    );
  }

  return (
    <div className="app-main">
      <Header 
        handleSearch = { handleSearch }
        handleLanguageSelect = { handleLanguageSelect }
        loading = { loading }
      />
      {
        !loading
          ? renderContents()
          : (
              <div className="app-main__loading">
                <Spinner animation="grow" variant="dark" />
              </div>
            )
      }
      <Footer />
    </div>
  );
}

export default App;
