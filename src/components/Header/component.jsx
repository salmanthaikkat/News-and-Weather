import React from 'react';

export default function Header() {
  return (
    <div className="app-header">
      <div className="app-header__title">
        News Corner
      </div>
      <div className="app-header__dropdown">
        <div className="app-header__dropdown-lang">
          EN
        </div>
        <div className="app-header__dropdown-location">
          US
        </div>
      </div>
    </div>
  )
}