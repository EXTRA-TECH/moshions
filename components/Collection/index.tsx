import {useQuery} from '@apollo/react-hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CollectionFilter from './components/CollectionFilter'
import CollectionProduct from './components/CollectionProduct'
import PageTitle from './components/PageTitle'
import React, { useState, useEffect } from 'react'
import MainContainer from '../MainContainer'
import {COLLECTION} from './queries'
import Loader from './../Loader'


const Products = () => {
  const router = useRouter()
  const {slug} = router.query

  const {data, loading, error} = useQuery(COLLECTION, {
    variables: {
      slug
    }
  })
  
  if (loading) {
    return <Loader />
  }

  let description = ''
  let descriptionArray: any[] = []

  if (data) {
    let findDesc = JSON.parse(data?.collection?.description)
    if (findDesc?.blocks?.length) {
      findDesc?.blocks?.map((el:any) => {
        descriptionArray.push(el?.data?.text)
      })
    }
    console.log(data?.collection?.products?.edges[0]?.node?.id)
  }
  
  const dataSourceExample = [
    {
      name: 'Josi Dress',
      imageUrl: '/assets/product1.svg',
      colors: ['bg-black'],
      price: 'RWF 311,000'
    },
    // {
    //   name: 'Mwimba Dress',
    //   imageUrl: '/assets/product2.svg',
    //   colors: ['yellow'],
    //   price: 'RWF 311,000'
    // },
    // {
    //   name: 'Bucura Wrap Dress',
    //   imageUrl: '/assets/product3.svg',
    //   colors: ['yellow'],
    //   price: 'RWF 311,000'
    // },
    // {
    //   name: 'Josi Dress',
    //   imageUrl: '/assets/product1.svg',
    //   colors: ['bg-black'],
    //   price: 'RWF 311,000'
    // },
    // {
    //   name: 'Mwimba Dress',
    //   imageUrl: '/assets/product2.svg',
    //   colors: ['yellow'],
    //   price: 'RWF 311,000'
    // },
    // {
    //   name: 'Bucura Wrap Dress',
    //   imageUrl: '/assets/product3.svg',
    //   colors: ['yellow'],
    //   price: 'RWF 311,000'
    // },
  ]

  return (
    <MainContainer>

      <PageTitle 
        title={data?.collection?.name}
        description={description}
        descriptionArray={descriptionArray}
      />

      <section className="middle-section">
        <div className="container">
          <div className="collections">
            <CollectionFilter />
            <CollectionProduct dataSource={data?.collection?.products?.edges} />
          </div>
        </div>
      </section>
    </MainContainer>
  );
}

export default Products