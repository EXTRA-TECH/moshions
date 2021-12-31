import Navbar from '../Navbar'
import Link from 'next/link'
import Bag from '../Bag';
import { useAuth, useCart } from "@saleor/sdk";
import {CATEGORIES, PRODUCT_VARIANT} from './queries'
import {useQuery} from '@apollo/react-hooks'
import DropDownMenu from '../Home/DropDownMenu';


const MainMenu = () => {
  const { items } = useCart();

  const {data, loading, error} = useQuery(CATEGORIES)

  const cartItemsQuantity =
    (items &&
      items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0));

  return (
    <header className="header bg-black sticky-top">
      <div className="middle-section ">
        <div className="header-top ">
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
              {loading && <button className="btn btn-light" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
              </button>
              }
              {
                data?.categories?.edges?.map((el:any, i:any) => {
                  return (
                    <>
                      {/* <li key={i}>
                        <Link href={`/category/${el.node.name.toLowerCase().trim()}`}>
                          <a href="#" className="text-uppercase">{el.node.name}</a>
                        </Link>
                      </li> */}
                      <li key={i} className='has-dropdown'>
                        <Link href={`/category/${el.node.slug}`}>
                          <>
                            <a
                              href='#'
                              className='text-uppercase drop-nav-link'>
                              {el.node.name}
                            </a>
                            <DropDownMenu link={`/category/${el.node.slug}`} />
                          </>
                        </Link>
                      </li>
                    </>
                    
                  )
                })
              }
              {!loading && <li style={{marginBottom: '10px'}}><Link href="/founder"><a href="#">THE BRAND</a></Link></li>}
            </ul>
            <a href="#" className="close-menu show-mobile">x</a>
          </div>
          <div className="header-shop-actions">
            {/* <img
              src="/assets/Icon feather-heart.svg"
              className="header-icon"
              alt=""
              srcSet=""
            /> */}
            <Bag cartItemsQuantity={cartItemsQuantity} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainMenu