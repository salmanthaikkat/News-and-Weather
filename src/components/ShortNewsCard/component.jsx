import React from 'react';

export default function ShortNewsCard(props) {
  const { news, handleNewsClick, url } = props;

  function formatNewsText(text) {
    return text.split(" ").splice(0, 14).join(" ");
  }

  return (
    <div
      className="short-news-card"
      onClick={ () =>  handleNewsClick(url)}
    >
        { formatNewsText(news) }
    </div>
  )
}