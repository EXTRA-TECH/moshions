import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

const MadeToWear = () => {
  return (
    <>
      <MainContainer>
        <div className='page-title'>
          <h1>MADE TO MESURE</h1>
          <p>
            Our experienced tailors are ready to make quintessential custom
            clothing to enforce your look.
          </p>
          <p>
            Moshions gives you a luxury of personalizing the fabric, cuts, and
            the finishing of your outfit. Moshions connects to you experienced
            tailors to exchange ideas on designs that reflect your personality.
          </p>
          <p>
            A timely chat for a timeless creation. Not only is made-to-measure a
            respected process at Moshions, the team follows up on your outfit
            and updates you as soon as it’s available. We believe customer
            service should always resonate with production identity; providing
            the best is what we do best.
          </p>
        </div>

        <section className='middle-section'>
          <div className='container'>
            <div className='py-4'>
              <div className='photo-row'>
                <img
                  src='/assets/Bespoke-2.png'
                  className='w-100p'
                  alt=''
                  srcSet=''
                />
                <img
                  src='/assets/Bespoke-2-2.png'
                  className='w-100p'
                  alt=''
                  srcSet=''
                />
              </div>
              <img
                src='/assets/Bespoke-Made-to-Measure.jpg'
                className='w-100p'
                alt=''
                srcSet=''
              />
            </div>
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
                  <span className='requiredField text-muted'>
                    * Required field
                  </span>
                </div>
                <div className='text-center py-5'>
                  <button className='btn btn-dark px-4'>SEND INQUIRY</button>
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

export default MadeToWear;
