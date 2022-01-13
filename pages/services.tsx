/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

const Bespoke = () => {
  return (
    <>
      <MainContainer>
        <div className='page-title'>
          <h1>BESPOKE</h1>
          <p>
            Everyone is unique: our bespoke experience gives fulfilment to that.
          </p>
          <p>
            With bespoke-tailoring, you're invited to interact with the Creative
            Director on how your one-of outfit should turn out. Moshions pays
            attention to your preferences and brings each other to life. From
            the contours, to the fabric, to the colours, to the button – until
            the final structure sees the light of day.
          </p>
          <p>
            At Moshions, bespoke is the art of collaborating with the customer
            step by step. It's one-of-a-kind service that provides a wide range
            of choices.
          </p>
          <p>
            Our team is always excited to put their creativity; to making
            couture that enhances your true character.
          </p>
        </div>

        <section className='middle-section'>
          <div className='container'>
            <img src='/assets/Bespoke-photo.jpg' className='w-100p' alt='' />
            <div className='form-container'>
              <h1 className='form-title'>BOOK AN APPOINTMENT</h1>
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
                </div>
                <div>
                  <button className='btn btnn-dark'>SEND INQUIRY</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </MainContainer>
    </>
  );
};

export default Bespoke;
