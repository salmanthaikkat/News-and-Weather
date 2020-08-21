import React from 'react';
import SearchBar from './components/SearchBar';
import DropdownList from './components/Dropdown';
import { LANGUAGE_LIST } from '../../constants/languages';

export default function Header(props) {
  const {
    handleSearch,
    handleLanguageSelect,
    loading
  } = props;

  return (
    <div className="app-header">
      <div className="app-header__title">
        <img 
          src={
            require('../../Assets/images/logo.svg')
          }
          alt={'logo'}
        />
        News Corner
      </div>
      <div className="app-header__right">
        <div className="app-header__right-lang">
          <DropdownList
            languages = { LANGUAGE_LIST }
            handleLanguageSelect = { handleLanguageSelect }
          />
        </div>
        <div className="app-header__right-search">
          <SearchBar 
            handleSearch = { handleSearch }
            placeholder = { 'Search' }
            loading = { loading }
          />
        </div>
      </div>
    </div>
  )
}