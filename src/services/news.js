import axios from 'axios';
import { GNEWS_API_TOKEN } from '../config/keys';

const GNEWS_URL = `https://gnews.io/api/v3/search?token=${GNEWS_API_TOKEN}&image=required&lang=ko`;

export default function fetchNews(params) {
  const result = axios.get(GNEWS_URL, {
    params
  });

  return result;
}