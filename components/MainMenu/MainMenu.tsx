import * as React from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import Bag from '../Bag';
import { useAuth, useCart } from '@saleor/sdk';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import { CATEGORIES, PRODUCT_VARIANT } from './queries';
import { useQuery } from '@apollo/react-hooks';
import DropDownMenu from '../Home/DropDownMenu';

const MainMenu = () => {
  const { items } = useCart();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data, loading, error } = useQuery(CATEGORIES);

  const cartItemsQuantity =
    items && items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0);

  return (
    <header className='header bg-black sticky-top'>
      <div className='middle-section '>
        <div className='header-top '>
          <div className='header-logo-container'>
            <Link href='/'>
              <img
                src='/assets/MoShiOns_LoGo_White.svg'
                alt='Motions'
                className='logo'
                srcSet=''
              />
            </Link>
          </div>
          <a href='#menu' className='show-mobile mobile-left showmenu'>
            <img
              src='/assets/menu.svg'
              className='header-icon'
              alt=''
              srcSet=''
            />
          </a>
          <div id='menu' className='header-menu menu-global'>
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
              {data?.categories?.edges?.map((el: any, i: any) => {
                return (
                  <>
                    {/* <li key={i}>
                        <Link href={`/category/${el.node.name.toLowerCase().trim()}`}>
                          <a href="#" className="text-uppercase">{el.node.name}</a>
                        </Link>
                      </li> */}
                    <li key={i} className='has-dropdown mr-25 '>
                      <Link href={`/category/${el.node.slug}`}>
                        <>
                          <a href='#' className='text-uppercase drop-nav-link'>
                            {el.node.name} +
                          </a>
                          <DropDownMenu link={`/category/${el.node.slug}`} />
                        </>
                      </Link>
                    </li>
                  </>
                );
              })}
              {!loading && (
                <li style={{ marginBottom: '10px' }}>
                  <Link href='/founder'>
                    <a href='#'>THE BRAND</a>
                  </Link>
                </li>
              )}
            </ul>
            <a href='#' className='close-menu show-mobile'>
              x
            </a>
          </div>
          <div className='header-shop-actions'>
            <Bag cartItemsQuantity={cartItemsQuantity} />
            <div className="top-contact">
              <a className=' pt-10' href='tel:2507884653'>
                <i className='fas fa-phone text-white header-f-icon'></i>
              </a>
            </div>
            <div className='currency'>
              <span
                id='fade-button-category'
                className='d-flex justify-between align-items-center'
                aria-controls={open ? 'fade-menu-category' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <span>RWF</span>
                <i className='bi bi-chevron-down'></i>
              </span>

              <Menu
                id='fade-menu-category'
                MenuListProps={{
                  'aria-labelledby': 'fade-button-category',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}>
                <MenuItem onClick={handleClose}>USD</MenuItem>
                <MenuItem onClick={handleClose}>EUR</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainMenu;
