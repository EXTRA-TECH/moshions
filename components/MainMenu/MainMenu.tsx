import Navbar from '../Navbar'
import Link from 'next/link'
import Bag from '../Bag';
import { useAuth, useCart } from "@saleor/sdk";
import {CATEGORIES} from './queries'
import {useQuery} from '@apollo/react-hooks'


const MainMenu = () => {
  const { items } = useCart();

  const {data, loading, error} = useQuery(CATEGORIES)

  const cartItemsQuantity =
    (items &&
      items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0)) ||
    0;

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
              {/* {loading && <div className="spinner-border text-light" role="status">
                <span className="sr-only"></span>
              </div>} */}
              {
                data?.categories?.edges?.map((el:any, i:any) => {
                  return (
                    <li key={i}>
                      <Link href={`/products?category=${el.node.name.toLowerCase().trim()}`}>
                        <a href="#" className="text-uppercase">{el.node.name}</a>
                      </Link>
                    </li>
                  )
                })
              }
              {/* <li><Link href="/brand"><a href="#">THE BRAND</a></Link></li> */}
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
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainMenu