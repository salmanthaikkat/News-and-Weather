import React from 'react';

export default function NewsCard(props) {
  const {
    data
  } = props;
  

  return (
    <div className="news-card">
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