import {useQuery} from '@apollo/react-hooks'
import Link from 'next/link'
import {MEMBERS} from '../../gql/example'
import Navbar from '../Navbar'
import CollectionFilter from './components/CollectionFilter'
import CollectionProduct from './components/CollectionProduct'
import Footer from '../Footer'
import Page from '../Page'
import PageTitle from './components/PageTitle'

const Products = () => {
  // Include Navbar, Filter
  return (
    <div className="wrapper">
      <Navbar />

      <div className="page-title">
        <h1>WOMENSWEAR</h1>
        <p>
          A new array of tops, jackets, cardigans, skirts <br />
          and pants with finest embroidery, beadwork and custom prints.
        </p>
      </div>

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
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="w-100p item">
                  <img
                    src="/assets/product1.svg"
                    alt=""
                    className="w-100p"
                    srcSet=""
                  />
                  <div className="item-details">
                    <div className="item-label">
                      <h4>Josi Dress</h4>
                      <span>RWF 310,000</span>
                    </div>
                    <span className="bg-black item-color"></span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="w-100p item">
                  <img
                    src="/assets/product2.svg"
                    alt=""
                    className="w-100p"
                    srcSet=""
                  />
                  <div className="item-details">
                    <div className="item-label">
                      <h4>Mwimba Dress</h4>
                      <span>RWF 310,000</span>
                    </div>
                    <span className="yellow item-color"></span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="w-100p item">
                  <img
                    src="/assets/product3.svg"
                    alt=""
                    className="w-100p"
                    srcSet=""
                  />
                  <div className="item-details">
                    <div className="item-label">
                      <h4>Bucura Wrap Dress</h4>
                      <span>RWF 310,000</span>
                    </div>
                    <span className="orange item-color"></span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="w-100p item">
                  <img
                    src="/assets/product1.svg"
                    alt=""
                    className="w-100p"
                    srcSet=""
                  />
                  <div className="item-details">
                    <div className="item-label">
                      <h4>Josi Dress</h4>
                      <span>RWF 310,000</span>
                    </div>
                    <span className="bg-black item-color"></span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="w-100p item">
                  <img
                    src="/assets/product2.svg"
                    alt=""
                    className="w-100p"
                    srcSet=""
                  />
                  <div className="item-details">
                    <div className="item-label">
                      <h4>Mwimba Dress</h4>
                      <span>RWF 310,000</span>
                    </div>
                    <span className="yellow item-color"></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="w-100p item">
                  <img
                    src="/assets/product3.svg"
                    alt=""
                    className="w-100p"
                    srcSet=""
                  />
                  <div className="item-details">
                    <div className="item-label">
                      <h4>Bucura Wrap Dress</h4>
                      <span>RWF 310,000</span>
                    </div>
                    <span className="bg-black item-color"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  )
}

export default Products