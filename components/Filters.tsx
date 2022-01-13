import React, { useState } from 'react';

const Filters = ({ title, options }: any) => {
  const [visibility, setVisibility] = useState('');
  return (
    <div className='option'>
      <div onClick={() => setVisibility(title)}>
        <span>{title}</span>
        <i className='bi bi-chevron-down'></i>
      </div>
      <div
        onMouseLeave={() => setVisibility('')}
        className={`filter-options ${visibility === title ? '' : 'd-none'}`}>
        {options.map((option: any, i: number) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Filters;
