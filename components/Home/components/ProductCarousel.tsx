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
    <div className='row'>
      {/* <div className=''>chgh</div> */}
      <div className='marquee-container'>
        <div
          className='marquee'
          style={{ width: `${(300 * products.length) / 2}px` }}>
          {products.map((product) => (
            <div key={product.img} className='marquee-item'>
              <div className='marquee-card'>
                <img src={product.img} className='w-100p' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;