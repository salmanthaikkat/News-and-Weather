import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_WEATHER_API_KEY;
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_TOKEN}`;

export default async function fetchWeather(params) {
  const { data } = await axios.get(URL, {
    params
  });

  return data;
}