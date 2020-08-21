import React from 'react';
import moment from 'moment';

export default function WeatherCard(props) {
  const { data } = props;

  function covertTempIntoCelcius(temperature) {
    return Math.trunc(temperature - 273);
  }

  function getDate() {
    return moment().format("dddd D, MMMM");
  }

  function getStatus(status) {
    switch(status) {
      case 'Mist':
      case 'Snow':
        return require('../../Assets/images/fog.svg');

      case 'Clear':
        return require('../../Assets/images/sunny-weather.svg');

      case 'Rain':
        return require('../../Assets/images/rain.svg');
    
      case 'Clouds':
        return require('../../Assets/images/clouds.svg');

      default:
        return require('../../Assets/images/sunny-weather.svg');
    }
  }

  return (
    <div className="weather-card">
      {
        data
        ? (
            <>
              <div className="weather-card__left">
                <div className="weather-card__left-content">
                  <div className="weather-card__left-content__temp">
                    {covertTempIntoCelcius(data.main.temp)}
                    <span>&#176;</span>
                  </div>
                  <div className="weather-card__left-content__date">
                    <div className="weather-card__left-content__date-info">
                      {getDate()}
                    </div>
                    <div className="weather-card__left-content__date-location">
                      {data.name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="weather-card__right">
                <div className="weather-card__right-content">
                  <div className="weather-card__right-content__icon">
                    <img
                      src={getStatus(data.weather[0].main)}
                    />
                  </div>
                  <div className="weather-card__right-content__status">
                    {data.weather[0].main}
                  </div>
                </div>
              </div>
            </>
        )
        : <div className="weather-card__error">Oops! Location permission declined</div>
      }
    </div>
  );
}