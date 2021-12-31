
import React from 'react';

const DropDownMenu = ({link}) => {
  return (
    <ul className='drop-down-menu'>
      <li>
        <a href={link}> Ishuri Collection</a>
      </li>
      <li>
        <a href={link}> Inkingi collection </a>
      </li>
      <li>
        <a href={link}> Menu 1</a>
      </li>
    </ul>
  );
}

export default DropDownMenu;
