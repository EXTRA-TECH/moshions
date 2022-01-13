/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

const BookAppointMent = () => {
  return (
    <>
      <Head>
        <title>Book Appointment</title>
      </Head>
      {/* <div className='wrapper'>
        <Navbar /> */}

      <MainContainer>
        <div className='page-title'>
          <h1>BOOK AN APPOINTMENT</h1>
          <p>
            Moshions assists you to design an outfit of your dream from wherever
            you are in the world. We are now offering Zoom Call services to
            learn about your preferences, share personalised illustrations, and
            bring your design to life.
          </p>
        </div>
        <section className='middle-section py-4'>
          <div className='container'>
            <div className='booking-container'>
              <div className=''>
                <img
                  src='/assets/Bespoke-Made-to-Measure.jpg'
                  className='w-100p'
                  alt=''
                />
              </div>
              <div className='form-container'>
                <form>
                  <div className='form-group'>
                    <label htmlFor=''>Title</label>
                    <input type='text' className='form-control' name='' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor=''>First Name*</label>
                    <input type='text' className='form-control' name='' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor=''>Last Name*</label>
                    <input type='text' className='form-control' name='' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor=''>Email*</label>
                    <input type='text' className='form-control' name='' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor=''>Telephone</label>
                    <input type='text' className='form-control' name='' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor=''>Telephone</label>
                    <textarea className='form-control' rows={5}></textarea>
                    <span className='text-muted'>Required field*</span>
                  </div>
                  <div className='pt-30 d-flex-right'>
                    <button className='btn btn-dark'>SEND INQUIRY</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className='rightBG'>
          <img
            src='/assets/imigogo-bg.png'
            className='w-100p'
            alt=''
            srcSet=''
          />
        </div>
      </MainContainer>
      <Footer />
      {/* </div> */}
    </>
  );
};

export default BookAppointMent;
