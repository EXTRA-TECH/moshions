import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className='footer' style={{ marginTop: 0 }}>
        <div className='container'>
          <div className='footer-top'>
            <span className='title'>Be in the Moshions Know!</span>

            <div className='newsletter'>
              <span className='newsletter-text'>
                Subscribe to receive the latest news and updates from Moshions:
              </span>
              <div className='newsletter-container'>
                <input
                  type='text'
                  className='form-control w-300'
                  placeholder='SIGN UP FOR EMAILS'
                />
                <button className='newsletter-btn'>&rarr;</button>
              </div>
            </div>
          </div>
          <div className='footer-menu'>
            <ul>
              <li>
                <a href='#'>CUSTOMER CARE</a>
              </li>
              <li>
                <Link href='/book-appointment'>
                  <a href='#'>BOOK AN APPOINTMENT</a>
                </Link>
              </li>
              <li>
                <Link href='/faqs'>
                  <a href='#'>FAQS</a>
                </Link>
              </li>
              <li>
                <Link href='/ship-return-policy'>
                  <a href='#'>{`SHIPPING & RETURN POLICY`}</a>
                </Link>
              </li>
            </ul>

            <ul>
              <ul>
                <li>
                  <Link href='/services'>
                    <a href='#'>SERVICES </a>
                  </Link>
                </li>
                <li>
                  <Link href='/services'>
                    <a href='#'>BESPOKE</a>
                  </Link>
                </li>
                <li>
                  <Link href='/made-to-wear'>
                    <a href='#'>MADE TO MEASURE</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href='/services'>
                    <a href='#'>{`READY TO WEAR`}</a>
                  </Link>
                </li> */}
                <li>
                  <Link href='/traditional-wear'>
                    <a href='#'>TRADITIONAL WEAR</a>
                  </Link>
                </li>
              </ul>
            </ul>

            <ul>
              <li>
                <a href='#'>THE BRAND</a>
              </li>
              <li>
                <Link href='/founder'>
                  <a href='#'>PROFILE</a>
                </Link>
              </li>
              <li>
                <Link href='/services'>
                  <a href='#'>PRESS</a>
                </Link>
              </li>
              {/* <li>
                <Link href='/services'>
                  <a href='#'>{`LEGAL NOTICE`}</a>
                </Link>
              </li> */}
              <li>
                <Link href='/crs'>
                  <a href='#'>{`SUSTAINABILITY & CRS`}</a>
                </Link>
              </li>
              {/* <li>
                <Link href='/services'>
                  <a
                    href='#'
                    className='text-light text-decoration-none'>{`COLLABORATIONS`}</a>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className='footer-bottom'>
            <div>
              <p className='copyright'>© Moshions. All Rights Reserved</p>
            </div>
            <ul className='social'>
              <a href='#'> Follow us </a>
              <a href='https://www.facebook.com/moshions' target='_blank' rel="noreferrer">
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='https://twitter.com/moshions' target='_blank' rel="noreferrer">
                <i className='fab fa-twitter'></i>
              </a>
              <a href='https://www.instagram.com/moshions' target='_blank' rel="noreferrer">
                <i className='fab fa-instagram'></i>
              </a>
              <a
                href='https://www.youtube.com/channel/UCYkoZl_G_5Ul475ofwqdHDA'
                target='_blank' rel="noreferrer">
                <i className='fab fa-youtube'></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
