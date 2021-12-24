import { useAuth, useCart } from "@saleor/sdk";
import {useQuery} from '@apollo/react-hooks'
import Bag from "../../Bag";


const Header = () => {
  const { items } = useCart();

  const cartItemsQuantity =
    (items &&
      items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0));
    
  return (
    <>
      <header
        className="u-align-center-sm u-align-center-xs u-black u-clearfix u-header u-header"
        id="sec-4a50"
      >
        <div className="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <span className="u-enable-responsive u-icon u-icon-circle u-text-white u-icon-1">
            {/* <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 51.997 51.997"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-be13"
              ></use>
            </svg>
            <svg
              version="1.1"
              id="svg-be13"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 51.997 51.997"
              xmlSpace="preserve"
              className="u-svg-content"
            >
              <path
                d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
	c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
	c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
	C52.216,18.553,51.97,16.611,51.911,16.242z"
              ></path>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg> */}
            <Bag cartItemsQuantity={cartItemsQuantity} />
          </span>
          <span className="u-enable-responsive u-icon u-icon-circle u-text-white u-icon-2">
            {/* <svg
              className="u-svg-link u-flip-horizontal"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 51.997 51.997"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-fb94"
              ></use>
            </svg>
            <svg
              version="1.1"
              id="svg-fb94"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 51.997 51.997"
              xmlSpace="preserve"
              className="u-svg-content"
            >
              <path
                d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
	c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
	c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
	C52.216,18.553,51.97,16.611,51.911,16.242z"
              ></path>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg> */}
            {/* <Bag cartItemsQuantity={cartItemsQuantity} /> */}
          </span>
          <a
            href="#"
            className="u-enable-responsive u-image u-logo u-image-1"
            data-image-width="92"
            data-image-height="41"
          >
            <img
              src="/images/MoShiOns_LoGo_White.svg"
              className="u-logo-image u-logo-image-1"
              data-image-width="91.6073"
            />
          </a>
          <nav className="menu u-align-left-lg u-align-left-xl u-menu u-menu-dropdown u-offcanvas u-menu-1">
            <div
              className="menu-collapse"
              style={{ fontSize: "1rem", fontWeight: 700 }}
            >
              <a
                className="u-button-style u-custom-left-right-menu-spacing u-custom-top-bottom-menu-spacing u-nav-link"
                href="#"
                style={{ padding: "4px", fontSize: "calc(1em + 8px" }}
              >
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 302 302"
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-8a8f"
                  ></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="svg-8a8f"
                  x="0px"
                  y="0px"
                  viewBox="0 0 302 302"
                  xmlSpace="preserve"
                  className="u-svg-content"
                >
                  <g>
                    <rect y="36" width="302" height="30"></rect>
                    <rect y="236" width="302" height="30"></rect>
                    <rect y="136" width="302" height="30"></rect>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </a>
            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-nav u-spacing-15 u-unstyled u-nav-1">
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    href="MEN.html"
                    style={{ padding: "15px" }}
                  >
                    MEN
                  </a>
                  <div className="u-nav-popup">
                    <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-8 u-nav-2">
                      <li className="u-nav-item">
                        <a
                          className="u-button-style u-nav-link u-white"
                          href=""
                        >
                          Ishuri collection
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    style={{ padding: "15px" }}
                  >
                    WOMEN
                  </a>
                  <div className="u-nav-popup">
                    <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-8 u-nav-3">
                      <li className="u-nav-item">
                        <a
                          className="u-button-style u-nav-link u-white"
                          href=""
                        >
                          Ishuri collection
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="u-custom-menu u-nav-container-collapse">
              <div className="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-menu-close"></div>
                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-4">
                  <li className="u-nav-item">
                    <a
                      className="u-button-style u-nav-link"
                      href="MEN.html"
                      style={{ padding: "10px 20px" }}
                    >
                      MEN
                    </a>
                    <div className="u-nav-popup">
                      <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-8 u-nav-5">
                        <li className="u-nav-item">
                          <a className="u-button-style u-nav-link" href="">
                            Ishuri collection
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="u-nav-item">
                    <a
                      className="u-button-style u-nav-link"
                      style={{ padding: "10px 20px" }}
                    >
                      WOMEN
                    </a>
                    <div className="u-nav-popup">
                      <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-8 u-nav-6">
                        <li className="u-nav-item">
                          <a className="u-button-style u-nav-link" href="">
                            Ishuri collection
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
