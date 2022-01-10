import React from 'react';

function CategoryCards() {
  return (
    <section>
      <div className='category-cards'>
        <div className='category-card'>
          <img src='/assets/Video 1.jpg' />
          <div className='category-content'>
            <div>
              <h1>SS21</h1>
              <p>IMANDWA COLLECTION</p>
            </div>
            <div className='category-lists'>
              <ul>
                <li>
                  <a href='#'>MEN</a>
                </li>
                <li>
                  <a href='#'>WOMEN</a>
                </li>
                <li>
                  <a href='#'>OTHER</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='category-card'>
          <img src='/assets/Video 1.jpg' />
          <div className='category-content'>
            <div>
              <h1>SS20</h1>
              <p>Shop Previous Collections</p>
            </div>
            <div className='category-lists'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryCards;
