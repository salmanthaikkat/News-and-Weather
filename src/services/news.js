import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_GNEWS_API_KEY;
const URL = `https://gnews.io/api/v3/search?token=${API_TOKEN}&image=required&lang=ko`;

export default async function fetchNews(params) {
  const { data } = await axios.get(URL, {
    params
  });

  return data;
}