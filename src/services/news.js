import axios from 'axios';
import { GNEWS_API_TOKEN } from '../config/keys';

const GNEWS_URL = `https://gnews.io/api/v3/search?token=${GNEWS_API_TOKEN}`;

export default function fetchNews(params) {
  return axios.get(GNEWS_URL, {
    params
  });
}