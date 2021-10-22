import type {NextComponentType} from 'next'
import Link from 'next/link'
import { useAuth, useCart } from "@saleor/sdk";

const Header: NextComponentType = () => {
  const {user, signOut} = useAuth()
  const {items} = useCart()

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <div className="main-header bg-black">
        <div className="main-header-left">
          <header className="header bg-black home">
            <div className="container">
              <div className="header-top">
                <div className="header-logo-container">
                  <img
                    src="/assets/MoShiOns_LoGo_White.svg"
                    alt="Motions"
                    className="logo"
                    srcSet=""
                  />
                </div>
                <a href="#menu" className="show-mobile mobile-left showmenu">
                  <img
                    src="/assets/menu.svg"
                    className="header-icon"
                    alt=""
                    srcSet=""
                  />
                </a>
                <div id="menu" className="header-menu menu-global home-menu">
                  <ul className="header-menu-list">
                    <li><Link href="/products"><a href="#">MEN</a></Link></li>
                    <li><Link href="/products"><a href="#">WOMEN</a></Link></li>
                    <li><Link href="/products"><a href="#">ACCESSORIES</a></Link></li>
                    <li><Link href="/brand"><a href="#">THE BRAND</a></Link></li>
                  </ul>
                  <a href="#" className="close-menu show-mobile">x</a>
                </div>
                <div className="header-shop-actions">
                  <img
                    src="/assets/Icon feather-heart.svg"
                    className="header-icon"
                    alt=""
                    srcSet=""
                  />
                  <span className="header-cart-items">
                    <img
                      src="/assets/Icon awesome-shopping-bag.svg"
                      className="header-icon"
                      alt=""
                      srcSet=""
                    />
                    <span>0</span>
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="header-contents hide-small-phone">
            <h3>MOSHIONS SS 21 - ISHURI COLLECTION</h3>
            <p>
              An ode to individuality, to the students of life, to the misfits,
              whom society labels strange. Ishuri celebrates those brave enough
              to carve out their own path in life and create their own
              adventures.
            </p>

            <span></span>
          </div>

          <div className="header-scroll hide-small-phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon scroll-down-chevron"
              viewBox="0 0 512 512"
              color="white"
            >
              <title>Chevron Down</title>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M112 184l144 144 144-144"
              />
            </svg>
          </div>
        </div>
        <div className="main-header-right">
          <img src="/assets/main-image.svg" alt="" srcSet="" />
        </div>
      </div>
      
      {/* <!-- SECTION MOBILE --> */}

      <section className="bg-dark">
        <div className="header-contents show-small-mobile py-6">
          <h3>MOSHIONS SS 21 - ISHURI COLLECTION</h3>
          <p>
            An ode to individuality, to the students of life, to the misfits,
            whom society labels strange. Ishuri celebrates those brave enough to
            carve out their own path in life and create their own adventures.
          </p>

          <span></span>
        </div>

        <div className="header-scroll show-small-mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon scroll-down-chevron"
            viewBox="0 0 512 512"
            color="white"
          >
            <title>Chevron Down</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </div>
      </section>
    </>
  )
}

export default Header;