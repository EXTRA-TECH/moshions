/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import Router from 'next/router';

const ProductCarousel = ({ productsData }: any) => {

  return (
    <div className='row carousel-row'>
      <div className='marquee-container'>
        <div className='marquee' >
          {productsData?.products?.edges?.map((product: any) => {
            return (
              <div key={product?.node?.media[0].url} className='marquee-item mr--10'>
                <div className='marquee-card'>
                  <img src={product?.node?.media[0]?.url} alt={product?.node?.media[0]?.alt} className='w-100p'
                    onClick={() => {
                      Router.push(
                        '/products/[id]',
                        `/products/${product?.node?.id}`
                      );
                    }} />
                </div>
              </div>
            )
          })}
          {productsData?.products?.edges?.map((product: any) => {
            return (
              <div key={product?.node?.media[0].url} className='marquee-item mr--10'>
                <div className='marquee-card'>
                  <img src={product?.node?.media[0]?.url} alt={product?.node?.media[0]?.alt} className='w-100p'
                    onClick={() => {
                      Router.push(
                        '/products/[id]',
                        `/products/${product?.node?.id}`
                      );
                    }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
