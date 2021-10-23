import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import {useState} from 'react'

const Product = () => {
  const [defaultImg, setDefaultImg] = useState("/assets/Image Wrapper@2x.png")
  const handleChangeImage = (imgUrl: string) => {
    setDefaultImg(imgUrl)
  }
  return (
    <>
      <div className="wrapper">
        <Navbar />

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
                    <img 
                      src="/assets/product1.svg" 
                      onClick={() => handleChangeImage("/assets/product1.svg")} 
                      className="w-100 other-img" 
                      alt="" 
                    />
                    <img 
                      src="/assets/Image Wrapper@2x.png" 
                      onClick={() => handleChangeImage("/assets/Image Wrapper@2x.png")} 
                      className="w-100 other-img" 
                      alt="" 
                    />
                  </div>
                  <div className="col-md-10 img-hover-zoom">
                    <img src={defaultImg} className="w-100 img-zoom" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-ms-12 col-xs-12">
                <h3 className="product-name">Umwitero Shirt</h3>
                <h4 className="product-price">Frw 165,000</h4>
                <div className="w-100p">
                  <p className="option-title">Colour</p>
                  <div className="product-colors">
                    <span className="">
                      <input
                        type="radio"
                        name="color"
                        id="black"
                        className="d-none show-check"
                      />
                      <label htmlFor="black" className="black"></label>
                    </span>
                    <span className="">
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
                    </span>
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
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Product