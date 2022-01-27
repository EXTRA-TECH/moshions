import Bag from '../../Bag';
import Link from 'next/link';
import { useAuth, useCart } from '@saleor/sdk';
import { useQuery } from '@apollo/react-hooks';

const Home = () => {
  const { items } = useCart();

  const cartItemsQuantity =
    items && items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0);
  return (
    <>
      <section className='u-align-center u-clearfix u-section-1' id='sec-d02b'>
        <div className='u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1'>
          <div className='u-layout'>
            <div className='u-layout-row'>
              <div className='home-section u-black u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1'>
                <div className='u-container-layout u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1'>
                  <a
                    href=''
                    className='u-enable-responsive u-image u-logo u-image-1'
                    data-image-width='92'
                    data-image-height='41'>
                    <img
                      src='/images/MoShiOns_LoGo_White.svg'
                      className='u-logo-image u-logo-image-1'
                      data-image-width='92'
                    />
                  </a>
                  <span className='u-enable-responsive u-icon u-icon-circle u-text-white u-icon-1'>
                    {/* <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 51.997 51.997" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-1702"></use></svg>
                  <svg version="1.1" id="svg-1702" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.997 51.997" xmlSpace="preserve" className="u-svg-content"><path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
	c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
	c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
	C52.216,18.553,51.97,16.611,51.911,16.242z"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> */}
                  </span>
                  <span className='u-enable-responsive u-icon u-icon-circle u-text-white u-icon-2'>
                    {/* <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 51.997 51.997" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-bcb3"></use></svg>
                  <svg version="1.1" id="svg-bcb3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.997 51.997" xmlSpace="preserve" className="u-svg-content"><path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
	c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
	c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
	C52.216,18.553,51.97,16.611,51.911,16.242z"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> */}
                    <Bag cartItemsQuantity={cartItemsQuantity} />
                  </span>
                  <nav className='u-menu u-menu-dropdown u-offcanvas u-menu-1'>
                    <div className='menu-collapse' style={{ fontWeight: 700 }}>
                      <a className='u-button-style u-nav-link' href='#'>
                        <svg>
                          <use
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            xlinkHref='#menu-hamburger'></use>
                        </svg>
                        <svg
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'>
                          <defs>
                            <symbol
                              id='menu-hamburger'
                              viewBox='0 0 16 16'
                              style={{ width: '16px', height: '16px' }}>
                              <rect y='1' width='16' height='2'></rect>
                              <rect y='7' width='16' height='2'></rect>
                              <rect y='13' width='16' height='2'></rect>
                            </symbol>
                          </defs>
                        </svg>
                      </a>
                    </div>
                    <div className='u-custom-menu u-nav-container'>
                      <ul className='u-nav u-unstyled u-nav-1'>
                        <li className='u-nav-item'>
                          <a
                            className='u-button-style u-nav-link'
                            href='MEN.html'
                            style={{ padding: '16px 22px' }}>
                            MEN
                          </a>
                          <div className='u-nav-popup'>
                            <ul className='u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-2'>
                              <li className='u-nav-item'>
                                <a
                                  className='u-button-style u-nav-link u-white'
                                  href=''>
                                  Ishuri collection
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className='u-nav-item'>
                          <a
                            className='u-button-style u-nav-link'
                            style={{ padding: '16px 22px' }}>
                            WOMEN
                          </a>
                          <div className='u-nav-popup'>
                            <ul className='u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-3'>
                              <li className='u-nav-item'>
                                <a className='u-button-style u-nav-link u-white'>
                                  Imandwa collection
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className='u-nav-item'>
                          <a
                            className='u-button-style u-nav-link'
                            style={{ padding: '16px 22px' }}>
                            CATEGORIES
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='u-custom-menu u-nav-container-collapse'>
                      <div className='u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav'>
                        <div className='u-menu-close'></div>
                        <ul className='u-align-center u-nav u-popupmenu-items u-unstyled u-nav-4'>
                          <li className='u-nav-item'>
                            <a
                              className='u-button-style u-nav-link'
                              href='MEN.html'
                              style={{ padding: '16px 22px' }}>
                              MEN
                            </a>
                            <div className='u-nav-popup'>
                              <ul className='u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-5'>
                                <li className='u-nav-item'>
                                  <a
                                    className='u-button-style u-nav-link'
                                    href=''>
                                    Ishuri collection
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className='u-nav-item'>
                            <a
                              className='u-button-style u-nav-link'
                              style={{ padding: '16px 22px' }}>
                              WOMEN
                            </a>
                            <div className='u-nav-popup'>
                              <ul className='u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-6'>
                                <li className='u-nav-item'>
                                  <a className='u-button-style u-nav-link'>
                                    Imandwa collection
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className='u-nav-item'>
                            <a
                              className='u-button-style u-nav-link'
                              style={{ padding: '16px 22px' }}>
                              CATEGORIES
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='u-black u-menu-overlay u-opacity u-opacity-70'></div>
                    </div>
                  </nav>
                  <h3 className='u-align-center u-headline u-text u-text-1'>
                    <a href='#'>MOSHIONS COLLECTION TITLE</a>
                  </h3>
                  <p className='u-align-center u-text u-text-2'>
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </p>
                  <a href='#' className='u-btn u-button-style u-white u-btn-1'>
                    Discover More
                  </a>
                </div>
              </div>
              <div className='u-container-style u-image u-layout-cell u-right-cell u-size-30 u-image-2'>
                <div className='u-container-layout u-container-layout-2'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
