/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import MainContainer from '../components/MainContainer';

const CollectionOverLay = () => {
  return (
    <>
      <Head>
        <title>Collections</title>
      </Head>
      {/* <div classNameNameName='wrapper'>
        <Navbar /> */}

      <MainContainer>
        <div className='overlay-section pt-60'>
          <div className='container'>
            <div className='row row-cols-2 row-cols-lg-3 g-2 g-lg-3'>
              <div className='p-3'>
                <div className='overlay-section-img-holder'>
                  <img src='/assets/B32A0770@2x.png' alt='' />
                </div>
              </div>
              <div className='p-3'>
                <div className='overlay-section-img-holder'>
                  <img src='/assets/NIB_7703@2x.png' alt='' />
                </div>
              </div>
              <div className='p-3'>
                <div className='overlay-section-img-holder'>
                  <img src='/assets/NIB_7119@2x.png' alt='' />
                </div>
              </div>

              <div className='p-3'>
                <div className='overlay-section-img-holder'>
                  <img src='/assets/B32A0840@2x.png' alt='' />
                </div>
              </div>
              <div className='p-3'>
                <div className='overlay-section-img-holder'>
                  <img src='/assets/NIB_7989@2x.png' alt='' />
                </div>
              </div>
              <div className='p-3'>
                <div className='overlay-section-img-holder'>
                  <img src='/assets/NIB_7540@2x.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default CollectionOverLay;
