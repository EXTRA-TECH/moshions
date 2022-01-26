/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import type { NextComponentType } from 'next';
import Link from 'next/link';
import { useAuth, useCart } from '@saleor/sdk';
import Bag from '../../Bag';
import DropDownMenu from '../DropDownMenu';
import Router from 'next/router';

const Header = ({ categorySource, loading }: any) => {
  const { user, signOut } = useAuth();
  const { items } = useCart();

  const [isMenuVisible, setisMenuVisible] = useState('');

  const MouseOver = (el: any) => {
    setisMenuVisible(el);
  };

  const cartItemsQuantity =
    items && items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0);

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
                          <li
                            key={i}
                            onMouseOver={() => MouseOver(el.node.name)}
                            className='has-dropdown'>
                            <Link href={`/category/${el.node.slug}`}>
                              <>
                                <a
                                  href='#'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setisMenuVisible(el.node.name);
                                  }}
                                  className='text-uppercase drop-nav-link'>
                                  {el.node.name} +
                                </a>
                                {isMenuVisible === el.node.name && (
                                  <DropDownMenu
                                    setVisibility={() => setisMenuVisible('')}
                                    link={`/category/${el.node.slug}`}
                                  />
                                )}
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
                <div className='home header-shop-actions'>
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

          <div className='header-contents hide-small-phone'>
            <h3 className='text-uppercase'>Imandwa SS22 collection</h3>
            <p>
              A collection to express gender freedom in an interplay of
              traditional and contemporary aesthetics. Constructed from organic
              fabrics and naturally processed dyes.
            </p>

            <p>
              With Imandwa Collection, Moshions adapts the pre-order model to
              optimise a conscious and demand-based production for every piece.
              Once the order is paid for, the delivery takes place between
              December 2021 and February 2022.
            </p>

            <span
              onClick={() => {
                Router.push('/all-collections');
              }}
              className='outline'>
              Discover More
            </span>
          </div>
        </div>
        <div className='main-header-right'>
          <img src='/assets/20211106-_I8A4844-scaled.jpg' alt='' srcSet='' />
        </div>
      </div>

      {/* <!-- SECTION MOBILE --> */}

      <section className='bg-black'>
        <div className='header-contents show-small-mobile py-6'>
          <h3 className='text-uppercase'>Imandwa SS22 collection</h3>
          <p>
            A collection to express gender freedom in an interplay of
            traditional and contemporary aesthetics. Constructed from organic
            fabrics and naturally processed dyes.
          </p>
          <p>
            With Imandwa Collection, Moshions adapts the pre-order model to
            optimise a conscious and demand-based production for every piece.
            Once the order is paid for, the delivery takes place between
            December 2021 and February 2022.
          </p>
          {/* all-collectiosn */}
          <span
            className='outline'
            onClick={() => {
              Router.push('/all-collections');
            }}>
            Discover More
          </span>
        </div>
      </section>
    </>
  );
};

export default Header;
