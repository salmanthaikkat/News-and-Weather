import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselCard(props) {
  const {
    news
  } = props;

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
                <Carousel.Caption className="carousel-news-card__content">
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