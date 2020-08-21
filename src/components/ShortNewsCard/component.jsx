import React from 'react';

export default function ShortNewsCard(props) {
  const { news } = props;

  return (
    <div className="short-news-card">
      { news }
    </div>
  )
}