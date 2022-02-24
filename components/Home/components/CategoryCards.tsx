/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

function CategoryCards() {
  return (
    <section>
      <div className='category-cards'>
        <div className='category-card'>
          <img src='/assets/Video 1.jpg' alt='' />
          <div className='category-content'>
            <div>
              <h1>SS22</h1>
              <p>IMANDWA COLLECTION</p>
            </div>
            <div className='category-lists'>
              <ul>
                <li>
                  <Link href='/products?category=men'>
                    MEN
                  </Link>
                </li>
                <li>
                  <Link href='/products?category=women'>
                    WOMEN
                  </Link>                </li>
                <li>
                  <Link href='/products?category=accessories' >
                    ACCESSORIES
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='category-card'>
          <img src='/assets/Video 1.jpg' />
          <div className='category-content'>
            <div>
              <h1>SS21</h1>
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
