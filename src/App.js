import React from 'react';
import Header from './components/Header';
import CarouselCard from './components/CarouselCard';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="app-main">
      <Header />
      <div className="app-main__content">
        <div className="app-main__content-row--first">
          <CarouselCard />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}

export default App;
