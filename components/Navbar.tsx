import Head from 'next/head'
import Link from 'next/link'
import { Builder } from "@builder.io/react";
import Bag from './Bag'

const Navbar = ({cartItemsQuantity, }: any) => {
  return (
    <header className="header bg-black">
        <div className="container">
          <div className="header-top">
            <div className="header-logo-container">
              <Link href="/">
                <img
                  src="/assets/MoShiOns_LoGo_White.svg"
                  alt="Motions"
                  className="logo"
                  srcSet=""
                />
              </Link>
            </div>
            <a href="#menu" className="show-mobile mobile-left showmenu">
              <img src="/assets/menu.svg" className="header-icon" alt="" srcSet="" />
            </a>
            <div id="menu" className="header-menu menu-global">
              <ul className="header-menu-list">
                <li><Link href="/products?category=men"><a href="#">MEN</a></Link></li>
                <li><Link href="/products?category=women"><a href="#">WOMEN</a></Link></li>
                <li><Link href="/products?category=accessories"><a href="#">ACCESSORIES</a></Link></li>
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
              <Bag cartItemsQuantity={cartItemsQuantity} />
              {/* <span className="header-cart-items">
                <img
                  src="/assets/Icon awesome-shopping-bag.svg"
                  className="header-icon"
                  alt=""
                  srcSet=""
                />
                <span>0</span>
              </span> */}
            </div>
          </div>
        </div>
      </header>

  )
}

// Builder.registerComponent(Navbar, {
//   name: "Navbar",
//   inputs: [
//     {
//       name: "title",
//       type: "text",
//       defaultValue: 'I am a heading!'
//     },
//     {
//       name: "color",
//       type: "color",
//       defaultValue: 'black'
//     },
//   ],
// });

export default Navbar