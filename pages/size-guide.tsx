import React from 'react';

import Head from 'next/head';
import MainContainer from '../components/MainContainer';
import { men, women } from '../defaultData/measurements';

function SizeGuide() {
  console.log(Object.keys(women));

  return (
    <>
      <Head>
        <title>Size Guide</title>
      </Head>
      <MainContainer>
        <div className='container pt-60'>
          <div className='pb-20 section-holder'>
            <p className='text-center'>
              This is an approximate conversion table to help you find your
              size. If you have already purchased an item by our brand, we
              recommend you select the same size as indicated on its label.
            </p>
          </div>

          <div className='pb-20 section-holder py-3'>
            <div className='row'>
              <div className='col-12 col-lg-9 col-md-9'>
                <div style={{ paddingBottom: 10 }}>
                  <p className='guide'>Women’s apparel sizing</p>
                  <table className='table table-sizes'>
                    <thead>
                      <tr style={{ backgroundColor: 'black', color: '#fff' }}>
                        <th>INTERNATIONAL</th>
                        <th>XS</th>
                        <th>S</th>
                        <th>M</th>
                        <th>L</th>
                        <th>XL</th>
                        <th>XXL</th>
                        <th>XXXL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {women.map((size, i) => (
                        <tr key={i}>
                          <td
                            style={{
                              fontSize: 14,
                              fontWeight: 500,
                              lineHeight: 1.6,
                            }}>
                            {size.inter}
                          </td>
                          <td>{size.XS}</td>
                          <td>{size.S}</td>
                          <td>{size.M}</td>
                          <td>{size.L}</td>
                          <td>{size.XL}</td>
                          <td>{size.XXL}</td>
                          <td>{size.XXXL}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ paddingBottom: 50 }}>
                  <p className='guide'>Men’s apparel sizing</p>
                  <table className='table table-sizes'>
                    <thead>
                      <tr style={{ backgroundColor: 'black', color: '#fff' }}>
                        <th>INTERNATIONAL</th>
                        <th>XS</th>
                        <th>S</th>
                        <th>M</th>
                        <th>L</th>
                        <th>XL</th>
                        <th>XXL</th>
                        <th>XXXL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {men.map((size, i) => (
                        <tr key={i}>
                          <td
                            style={{
                              fontSize: 14,
                              fontWeight: 500,
                              lineHeight: 1.6,
                            }}>
                            {size.inter}
                          </td>
                          <td>{size.XS}</td>
                          <td>{size.S}</td>
                          <td>{size.M}</td>
                          <td>{size.L}</td>
                          <td>{size.XL}</td>
                          <td>{size.XXL}</td>
                          <td>{size.XXXL}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='col-12 col-lg-3 col-md-3'>
                <div className='size-img-holder'>
                  <img
                    className='w-100p'
                    src='/assets/size-guide.png'
                    alt='sizes'
                  />
                </div>
                <div style={{ paddingTop: 30 }}>
                  <div>
                    <b>CHEST</b>: <br /> Around the fullest part of the neck, at
                    the base. <br />
                    <br /> <b>WAIST</b>: <br /> Around the narrowest part of the
                    waist. <br />
                    <br /> <b>HIPS</b>: <br /> Around the widest point of the
                    hips. <br />
                    <br /> <b>SKIRT LENGTHS</b> : <br /> From the crotch to the
                    anklebone on the inside of the leg.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default SizeGuide;
