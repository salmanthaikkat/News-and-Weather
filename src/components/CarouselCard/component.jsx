import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselCard(props) {
  const {
    news
  } = props;

  function getImage(imageUrl) {
    return imageUrl ? imageUrl : require('../../Assets/images/no-image.jpg')
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
                <img
                  className="d-block w-100 carousel-news-card__image"
                  src={ getImage(article.image) }
                  alt={'slide'}
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