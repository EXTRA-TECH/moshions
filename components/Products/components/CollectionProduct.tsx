import ProductCard from "../../ProductCard"
import Link from 'next/router'
import SingleProductWithBox from "./SingleProduct"

const CollectionProduct = () => {
  const dataSource = [
    {
      name: 'Josi Dress',
      imageUrl: '/assets/product1.svg',
      colors: ['bg-black']
    },
    {
      name: 'Mwimba Dress',
      imageUrl: '/assets/product2.svg',
      colors: ['yellow']
    },
    {
      name: 'Bucura Wrap Dress',
      imageUrl: '/assets/product3.svg',
      colors: ['yellow']
    },
    {
      name: 'Josi Dress',
      imageUrl: '/assets/product1.svg',
      colors: ['bg-black']
    },
    {
      name: 'Mwimba Dress',
      imageUrl: '/assets/product2.svg',
      colors: ['yellow']
    },
    {
      name: 'Bucura Wrap Dress',
      imageUrl: '/assets/product3.svg',
      colors: ['yellow']
    },
  ]
  return (
    <>
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
                  <SingleProductWithBox key={i} dataSource={el} />
                ))
              }
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CollectionProduct