import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fetchNews from '../../services/news';

export default function CarouselCard() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNewsData();
  }, []);

  async function getNewsData() {
    const { data } = await fetchNews({
      q: 'example',
      max: 3
    });
    setNews(data.articles);
  }

  return (
    <div className="carousel-news-card">
      <Carousel>
        {
          news
          ? (
            news.map((article, index) => (
              <Carousel.Item
                key={index}
              >
                <div
                  className="d-block w-100 carousel-news-card__image"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <Carousel.Caption>
                  <h3> { article.title } </h3>
                  <p> { article.description } </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
            )
          : (<div>Fetching data</div>)
        }
      </Carousel>
    </div>
  );
}