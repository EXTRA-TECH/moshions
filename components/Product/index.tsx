/* eslint-disable react/jsx-key */
import MainContainer from '../MainContainer'
import {useState} from 'react'
import ProductAccord from '../Products/components/ProductAccordation'
import { useRouter } from 'next/router'
import { useQuery } from 'react-apollo'
import {PRODUCT} from './queries'
import { useEffect } from 'react'

const ProductComponent = () => {
  const router = useRouter()
  const {id} = router.query

  const {data, loading, error} = useQuery(PRODUCT, {
    variables: {
      id
    }
  })

  let defaultImage = ''

  if (data?.product?.images[0]?.url) {
    defaultImage = data?.product?.images[0]?.url
  }

  const [image, setImage] = useState("")

  const handleChangeImage = (imgUrl: string) => {
    setImage(imgUrl)
  }

  return (
    <>
      <MainContainer>
        <div className="product-section py-5">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Collection</a></li>
                <li className="breadcrumb-item active">Product name</li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-ms-12 col-xs-12 pr--40">
                <div className="row">
                  <div className="col-md-2">
                    {
                      data?.product?.images?.map((el:any, i:any) => (
                        <img 
                          key={i}
                          src={el.url} 
                          onClick={() => handleChangeImage(el.url)} 
                          className="w-100 other-img" 
                          alt="" 
                        />      
                      ))
                    }
                  </div>
                  <div className="col-md-10 img-hover-zoom">
                    <img src={image || defaultImage} className="w-100 img-zoom" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-ms-12 col-xs-12 py-2">
                <h3 className="product-name">{data?.product?.name}</h3>
                <h4 className="product-price">Frw {data?.product?.pricing?.priceRange?.start?.net?.amount}</h4>
                <div className="w-100p">
                  <p className="option-title">Colour</p>
                  <div className="product-colors">
                    {
                      data && data?.product?.metadata?.map((el:any, i:any) => {
                        if (el.key == "color") {
                          return (
                            <span className="">
                              <input
                                type="radio"
                                name="color"
                                id="black"
                                style={{backgroundColor: `${el.value}`}}
                                className="d-none show-check"
                              />
                              <label htmlFor="black" className="black" style={{backgroundColor: `${el.value}`}}></label>
                            </span>
                          )
                        } return null
                      })
                    }
                    {/* <span className="">
                      <input
                        type="radio"
                        name="color"
                        id="orange"
                        className="d-none show-check"
                      />
                      <label htmlFor="orange" className="orange"></label>
                    </span>
                    <span className="">
                      <input
                        type="radio"
                        name="color"
                        id="gold"
                        className="d-none show-check"
                      />
                      <label htmlFor="gold" className="gold"></label>
                    </span> */}
                  </div>
                </div>

                <div className="w-100p">
                  <p className="option-title">SIZE</p>
                  <div className="d-flex-separetes min-width-350">
                    <div className="product-sizes">
                      <span className="">
                        <input
                          type="radio"
                          name="size"
                          id="M"
                          className="d-none show-bg"
                        />
                        <label htmlFor="M" className="size">M</label>
                      </span>
                      <span className="">
                        <input
                          type="radio"
                          name="size"
                          id="L"
                          className="d-none show-bg"
                        />
                        <label htmlFor="L" className="size">L</label>
                      </span>
                    </div>
                    <a href="#" className="text-muted">SIZE GUIDE</a>
                  </div>
                  <div className="d-flex-start mt-3">
                    <button className="btn btn-dark min-width-350 fw-600">
                      ADD TO CART
                    </button>
                    <img
                      src="/assets/Icon feather-heart@2x.svg"
                      className="header-icon"
                      alt=""
                      srcSet=""
                    />
                  </div>
                </div>
                <ProductAccord />
              </div>
            </div>
          </div>
          <div className="h5 pt-5 text-center text-uppercase">Related Collection</div>
          {/* <div className="row py-3">
            {
              dataSource?.map((el, i) => {
                return (
                  <CollectionProduct key={i} dataSource={el} />
                )
              })
            }
          </div> */}
        </div>
      </MainContainer>
    </>
  )
}

export default ProductComponent