import {useQuery} from '@apollo/react-hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {MEMBERS} from '../../gql/example'
import Navbar from '../Navbar'
import CollectionFilter from './CollectionFilter'
import CollectionProduct from './CollectionProduct'
import Footer from '../Footer'
import Page from '../Page'
import PageTitle from './PageTitle'
import { MainMenu } from '../MainMenu'
import React, { useState, useEffect } from 'react'
// import { generateProductUrl, maybe } from "../../core/utils";
// import { TypedFeaturedProductsQuery } from "../ProductFeatured/queries";


const Products = ({title}: any) => {
  const router = useRouter()
  const {category} = router.query

  const pageTitleSource = [
    {
      category: 'men',
      title: 'MENSWEAR',
      descriptionTop: '',
      descriptionBottom: ''
    },
    {
      category: 'women',
      title: 'WOMENSWEAR',
      descriptionTop: '',
      descriptionBottom: ''
    },
    {
      category: 'accessories',
      title: 'ACCESSORIES',
      descriptionTop: '',
      descriptionBottom: ''
    },
  ]

  let titleDataSource = pageTitleSource?.filter((el) => el.category === category)[0]
  
  const dataSource = [
    {
      name: 'Josi Dress',
      imageUrl: '/assets/product1.svg',
      colors: ['bg-black'],
      price: 'RWF 311,000'
    },
    {
      name: 'Mwimba Dress',
      imageUrl: '/assets/product2.svg',
      colors: ['yellow'],
      price: 'RWF 311,000'
    },
    {
      name: 'Bucura Wrap Dress',
      imageUrl: '/assets/product3.svg',
      colors: ['yellow'],
      price: 'RWF 311,000'
    },
    {
      name: 'Josi Dress',
      imageUrl: '/assets/product1.svg',
      colors: ['bg-black'],
      price: 'RWF 311,000'
    },
    {
      name: 'Mwimba Dress',
      imageUrl: '/assets/product2.svg',
      colors: ['yellow'],
      price: 'RWF 311,000'
    },
    {
      name: 'Bucura Wrap Dress',
      imageUrl: '/assets/product3.svg',
      colors: ['yellow'],
      price: 'RWF 311,000'
    },
  ]

  return (
    <div className="wrapper">
      <MainMenu />

      <PageTitle 
        title={titleDataSource?.title}
        description={''}
      />

      <section className="middle-section">
        <div className="container">
          <div className="collections">
            <div className="collection-options">
              <div className="options-container">
                <div className="option">
                  <span>Category</span>
                  <img
                    src="/assets/Icon ionic-ios-arrow-down.svg"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="option">
                  <span>Color</span>
                  <img
                    src="/assets/Icon ionic-ios-arrow-down.svg"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="option">
                  <span>Size</span>
                  <img
                    src="/assets/Icon ionic-ios-arrow-down.svg"
                    alt=""
                    srcSet=""
                  />
                </div>
              </div>
              <div className="options-container">
                <div className="option d-flex-start">
                  <span>Model view</span>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
                <div className="option">
                  <span>Sort By</span>
                  <img
                    src="/assets/Icon ionic-ios-arrow-down.svg"
                    alt=""
                    srcSet=""
                  />
                </div>
              </div>
            </div>

            <div className="row">
              {
                dataSource?.map((el, i) => (
                  <CollectionProduct key={i} dataSource={el} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  )
}

export default Products