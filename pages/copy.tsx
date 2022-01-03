import React from 'react';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function copy() {
  return (
    <>
      <Head>
        <title>FAQS</title>
      </Head>
      <div className='wrapper'>
        <Navbar />
        <div className='product-section pt-60'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-6 col-md-6 col-ms-12 col-xs-12 pr--40'>
                <img
                  src='/assets/Image Wrapper@2x.png'
                  className='w-100p'
                  alt=''
                />
              </div>
              <div className='col-12 col-lg-6 col-md-6 col-ms-12 col-xs-12'>
                <h3 className='product-name'>Umwitero Shirt</h3>
                <h4 className='product-price'>Frw 165,000</h4>
                <div className='w-100p'>
                  <p className='option-title'>Colour</p>
                  <div className='product-colors'>
                    <span className=''>
                      <input
                        type='radio'
                        name='color'
                        id='black'
                        className='d-none show-check'
                      />
                      <label htmlFor='black' className='color-card'></label>
                    </span>
                    <span className=''>
                      <input
                        type='radio'
                        name='color'
                        id='orange'
                        className='d-none show-check'
                      />
                      <label htmlFor='orange' className='color-card'></label>
                    </span>
                    <span className=''>
                      <input
                        type='radio'
                        name='color'
                        id='gold'
                        className='d-none show-check'
                      />
                      <label
                        htmlFor='gold'
                        className='color-card orange'></label>
                    </span>
                  </div>
                </div>

                <div className='w-100p'>
                  <p className='option-title'>SIZE</p>
                  <div className='d-flex-separetes min-width-350'>
                    <div className='product-sizes'>
                      <span className=''>
                        <input
                          type='radio'
                          name='size'
                          id='M'
                          className='d-none show-bg'
                        />
                        <label htmlFor='M' className='size'>
                          M
                        </label>
                      </span>
                      <span className=''>
                        <input
                          type='radio'
                          name='size'
                          id='L'
                          className='d-none show-bg'
                        />
                        <label htmlFor='L' className='size'>
                          L
                        </label>
                      </span>
                    </div>
                    <a href='#' className='text-muted'>
                      SIZE GUIDE
                    </a>
                  </div>
                  <div className='d-flex-start mt-3'>
                    <button className='btn btn-dark min-width-350 fw-600'>
                      ADD TO CART
                    </button>
                    <img
                      src='/assets/Icon feather-heart@2x.svg'
                      className='header-icon'
                      alt=''
                    />
                  </div>
                </div>

                <div className='product-description'>
                  <h2>Details and care</h2>
                  <div className=''>
                    <p>
                      Moshions is celebrating Africa in all its glory - from
                      culture, to resources and its people. Our commitment to
                      produce our pieces using fabrics and materials sourced
                      from the African continent underlines the brand’s
                      connection with home. Our mission is to build a 100% Made
                      in Africa product via an ever-expanding continental
                      network of collaborators.
                    </p>

                    <ul>
                      <li>ever-expanding continental</li>
                      <li>ever-expanding continental</li>
                      <li>ever-expanding continental</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default copy;
