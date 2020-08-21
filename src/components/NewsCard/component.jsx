import React from 'react';

export default function NewsCard(props) {
  const {
    data,
    handleNewsClick
  } = props;
  

  return (
    <div
      className="news-card"
      onClick={ () => handleNewsClick(data.url) }
    >
      <div className="news-card__image">
        <img
          src={data.image}
          alt={'news'}
        />
      </div>
      <div className="news-card__desc">
        { data.title }
      </div>
    </div>
  );
}