import React from 'react';

export default function SearchBar(props) {

  const {
    handleSearch,
    placeholder
  } = props;

  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <input
          placeholder = { placeholder }
          onChange = { handleSearch }
        />
      </div>
      <div className="search-bar__button">
        <button>
          <img 
            src={
              require('../../../../Assets/images/search.svg')
            }
            alt={ 'Search icon' }
          />
        </button>
      </div>
    </div>
  )
}