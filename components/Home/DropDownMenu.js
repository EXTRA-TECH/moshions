import React, { useState } from 'react';

const DropDownMenu = ({ link, setVisibility }) => {
  // const MouseOut = (el) => {
  //   setisMenuVisible(el);
  // };

  return (
    <ul className='drop-down-menu' onMouseLeave={setVisibility}>
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
};

export default DropDownMenu;
