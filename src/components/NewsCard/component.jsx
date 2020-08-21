import React from 'react';

export default function NewsCard(props) {
  const {
    data,
    handleNewsClick
  } = props;
  
  function getImage(imageUrl) {
    return imageUrl ? imageUrl : require('../../Assets/images/no-image.jpg')
  }

  function formatNewsText(text) {
    return text.split(" ").splice(0, 8).join(" ");
  }

  return (
    <div
      className="news-card"
      onClick={ () => handleNewsClick(data.url) }
    >
      <div className="news-card__image">
        <img
          src={ getImage(data.image) }
          alt={'news'}
        />
      </div>
      <div className="news-card__desc">
        { formatNewsText(data.title) }
      </div>
    </div>
  );
}