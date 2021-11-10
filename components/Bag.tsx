import Router from "next/router"
import { useCart, useProductList, useVariantsProducts } from "@saleor/sdk"
import { useEffect, useState } from "react"
import {useQuery} from "@apollo/react-hooks"
import {PRODUCT_VARIANTS} from '../gql/product/variants'


const Bag = ({cartItemsQuantity}: any) => {
  const {items} = useCart()
  const [, ] = useState([])
  
  const handleContinueShopping = () => {
    Router.push('/cart')
  }

  let ids:any[] = []

  if (items) {
    ids = items.map(el => el.variant.id)
  }

  const {data: cartListData} = useQuery(PRODUCT_VARIANTS, {
    variables: {
      ids
    }
  })


  return (
    <>
      <span className="header-cart-items">
        <a data-bs-toggle="offcanvas" href="#offcanvasRight" role="button" aria-controls="offcanvasRight">
          <img
            src="/assets/Icon awesome-shopping-bag.svg"
            className="header-icon"
            alt=""
            srcSet=""
          />
          {cartItemsQuantity > 0 ? (
            <span className="cart-number">
              {cartItemsQuantity}
            </span>
          ) : null}
        </a>
      </span>
      <div className="offcanvas offcanvas-end bg-dark" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header cart-header text-light">
          <div className="canvas-cart-title-icon">
            <i className="bi bi-bag-fill text-light cart-icon"></i>
          </div>
          <div id="offcanvasRightLabe" style={{ marginTop: '5px'}}>
            <span className="h5 canvas-cart-title-text text-light">MY CART</span>
          </div>
          <button type="button" className="btn-close text-reset cart-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body text-light py-3 px-3">
          {
            items?.length 
              && 
              <div className="side-cart-products">

                {
                  cartListData && cartListData?.productVariants?.edges?.map((el:any, i:number) => (
                    <div key={i} className="side-cart-item">
                      <div className="product-details">
                        <div className="side-product-details-image p-2">
                          <img
                            src="/assets/akijoro.png"
                            alt=""
                            className="w-100p"
                            srcSet=""
                          />
                        </div>
                        <div className="p-2">
                          <p className="cart-item-title text-light">Akijoro Top</p>
                          <p className="color-cold text-light">S / Orange</p>
                          <div className="">
                            <a href="#" className="text-light">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )) 
                }
              </div>
          }
          {
            items?.length === 0 
            && 
            <div className="cart-empty">
              <h4 className="py-2">Your cart is empty</h4>
              <p>
                You haven’t added anything to your bag. 
                We’re sure you’ll find something in our store
              </p>
            </div>
          }
          {
            items?.length &&
            <>
              <div className="continue-shopping py-3">
                <button type="button" onClick={handleContinueShopping} className="btn text-reset cart-continue-shopping" data-bs-dismiss="offcanvas" aria-label="Close">GO TO MY BAG</button>
              </div>
              <div className="continue-shopping py-3">
                <button type="button" onClick={() => {
                  Router.push('/checkout')
                }} className="btn btn-light text-dark cart-continue-shopping" data-bs-dismiss="offcanvas" aria-label="Close">PROCEED TO CHECKOUT</button>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Bag