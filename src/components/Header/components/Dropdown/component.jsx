import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function DropdownList(props) {
  const {
    languages,
    handleLanguageSelect
  } = props;

  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className="dropdown__toggle"
      >
        EN
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          languages &&
          languages.map((language, index) => (
            <Dropdown.Item
              key={index}
              className="dropdown__item"
              onClick={() => handleLanguageSelect(language.key)}
            >
              { language.label }
            </Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}