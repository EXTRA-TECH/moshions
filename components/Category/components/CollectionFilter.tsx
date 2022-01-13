import * as React from 'react';
import Filters from '../../Filters';

const CollectionFilter = ({ title, description }: any) => {
  return (
    <div className='collection-options'>
      <div className='options-container'>
        <Filters title='Category' options={['Category 1', 'Category 2']} />

        <Filters title='Colors' options={['Color 1', 'Color 2']} />
        <Filters title='Size' options={['Large', 'Medium', 'Small']} />
      </div>
      <div className='options-container'>
        <div className='option d-flex-start'>
          <span>Model view</span>
          <div className='form-check form-switch'>
            <input
              className='form-check-input'
              type='checkbox'
              id='flexSwitchCheckDefault'
            />
          </div>
        </div>
        <Filters title='Sort By' options={['Price', 'Gender', 'Quality']} />
      </div>
    </div>
  );
};

export default CollectionFilter;
