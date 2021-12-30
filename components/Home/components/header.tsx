import type { NextComponentType } from 'next';
import Link from 'next/link';
import { useAuth, useCart } from '@saleor/sdk';
import Bag from '../../Bag';
import DropDownMenu from '../DropDownMenu';

const Header = ({ categorySource, loading }: any) => {
  const { user, signOut } = useAuth();
  const { items } = useCart();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <div className='main-header bg-black'>
        <div className='main-header-left'>
          <header className='header bg-black home'>
            <div className='container'>
              <div className='header-top'>
                <div className='header-logo-container'>
                  <img
                    src='/assets/MoShiOns_LoGo_White.svg'
                    alt='Motions'
                    className='logo'
                    srcSet=''
                  />
                </div>
                <a href='#menu' className='show-mobile mobile-left showmenu'>
                  <img
                    src='/assets/menu.svg'
                    className='header-icon'
                    alt=''
                    srcSet=''
                  />
                </a>
                <div id='menu' className='header-menu menu-global home-menu'>
                  <ul className='header-menu-list'>
                    {loading && (
                      <button className='btn btn-light' type='button' disabled>
                        <span
                          className='spinner-grow spinner-grow-sm'
                          role='status'
                          aria-hidden='true'></span>
                        <span className='visually-hidden'>Loading...</span>
                      </button>
                    )}
                    {categorySource?.categories?.edges?.map(
                      (el: any, i: any) => {
                        return (
                          <li key={i} className='has-dropdown'>
                            <Link href={`/category/${el.node.slug}`}>
                              <>
                                <a
                                  href='#'
                                  className='text-uppercase drop-nav-link'>
                                  {el.node.name} +
                                </a>
                                <DropDownMenu />
                              </>
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </ul>
                  <a href='#' className='close-menu show-mobile'>
                    x
                  </a>
                </div>
                <div className='header-shop-actions'>
                  {/* <img
                    src="/assets/Icon feather-heart.svg"
                    className="header-icon"
                    alt=""
                    srcSet=""
                  /> */}
                  <Bag />
                </div>
              </div>
            </div>
          </header>

          <div className='header-contents hide-small-phone'>
            <h3>MOSHIONS SS 21 - ISHURI COLLECTION</h3>
            <p>
              An ode to individuality, to the students of life, to the misfits,
              whom society labels strange. Ishuri celebrates those brave enough
              to carve out their own path in life and create their own
              adventures.
            </p>

            <span className='outline'>Discover More</span>
          </div>
        </div>
        <div className='main-header-right'>
          <img src='/assets/main-image.svg' alt='' srcSet='' />
        </div>
      </div>

      {/* <!-- SECTION MOBILE --> */}

      <section className='bg-dark'>
        <div className='header-contents show-small-mobile py-6'>
          <h3>MOSHIONS SS 21 - ISHURI COLLECTION</h3>
          <p>
            An ode to individuality, to the students of life, to the misfits,
            whom society labels strange. Ishuri celebrates those brave enough to
            carve out their own path in life and create their own adventures.
          </p>

          <span className='outline'>Discover More</span>
        </div>
      </section>
    </>
  );
};

export default Header;
