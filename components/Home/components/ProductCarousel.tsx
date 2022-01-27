/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';

const products = [
  {
    img: '/images/slide-1.png',
  },
  {
    img: '/images/slide-2.png',
  },
  {
    img: '/images/slide-3.png',
  },
  {
    img: '/images/slide-4.png',
  },
  {
    img: '/images/slide-5.png',
  },

  {
    img: '/images/slide-1.png',
  },
  {
    img: '/images/slide-2.png',
  },
];

function ProductCarousel() {
  return (
    <div className='row carousel-row'>
      {/* <div className=''>chgh</div> */}
      <div className='marquee-container'>
        <div
          className='marquee'
          style={{ width: `${(300 * products.length) / 2}px` }}>
          {products.map((product) => (
            <div key={product.img} className='marquee-item mr--10'>
              <div className='marquee-card'>
                <img src={product.img} alt='' className='w-100p' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
