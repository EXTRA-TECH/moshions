import Router from "next/router"
import { useCart, useProductList, useVariantsProducts, useCheckout } from "@saleor/sdk"
import { useEffect, useState, useContext } from "react"
import {useQuery} from "@apollo/react-hooks"
import { IItems } from "@saleor/sdk/lib/api/Cart/types";
// import {PRODUCT_VARIANTS} from '../gql/product/variants'
import {CHECKOUT_LINES} from './queries'
import { PRODUCT_VARIANTS } from "../gql/product/variants";
import { CountryCode, useSaleorClient } from "@saleor/sdk";

const generateCart = (
  items: any,
  removeItem: (variantId: string) => any,
  updateItem: (variantId: string, quantity: number) => any
) => {
  return items?.map(({image, quantity, variant, totalPrice, name}:any, i:number) => {
    return (
      <div key={variant?.id ? `id-${variant?.id}` : `idx-${i}`} className="side-cart-item">
        <div className="product-details">
          <div className="side-product-details-image p-2">
            <img
              src={image || ""}
              alt={""}
              className="w-100p"
              srcSet=""
            />
          </div>
          <div className="p-2">
            <p className="cart-item-title text-light">{name || '-'}</p>
            <p className="color-cold text-light">S / Orange</p>
            <p className="color-cold text-light">{quantity}</p>
            <div className="">
              <a href="#" onClick={(e) => {
                e.preventDefault()
                removeItem(variant?.id)
              }} className="text-light">Remove</a>
            </div>
          </div>
        </div><hr />
      </div>
    )
  })
}


const Bag = ({cartItemsQuantity}: any) => {
  const {
    loaded, 
    items, 
    removeItem,
    updateItem,
    subtotalPrice,
    totalPrice
  } = useCart()
  const {checkout} = useCheckout()

  const handleToCart = () => {
    Router.push('/cart')
  }

  const handleContinueShopping = () => {
    Router.push('/')
  }

  const handleLink = (link:string) => {
    Router.push(`/${link}`)
  }

  let ids:any[] = []

  if (items) {
    ids = items.map(el => el.variant.id)
  }

  const [detailLines, setDetailLines] = useState([]);
  const {products} = useSaleorClient()
  const {data: productVariants} = useQuery(PRODUCT_VARIANTS, {
    variables: {
      ids
    }
  })

  useEffect(() => {
    if (items?.length) {
      items?.map((item:any) => {      
        for (let productLine in productVariants?.productVariants?.edges) {
          if (item?.variant?.id === productVariants?.productVariants?.edges[productLine]?.node?.id) {
            item['name'] = productVariants?.productVariants?.edges[productLine]?.node?.product?.name
            item['image'] = productVariants?.productVariants?.edges[productLine]?.node?.product?.thumbnail?.url
            item['alt'] = productVariants?.productVariants?.edges[productLine]?.node?.product?.thumbnail?.alt
            break
          }
        } 
        return item
      })
    }
  }, [items, productVariants?.productVariants?.edges])


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
          <div className="side-cart-products">
            {loaded && items?.length !== 0 && generateCart(items, removeItem, updateItem)}
          </div>
          {
            items?.length === 0
            && 
            <div className="cart-empty">
              <h4 className="py-2">Your bag is empty</h4>
              <p>
                You haven’t added anything to your bag. 
                We’re sure you’ll find something in our store
              </p>
              <button type="button" onClick={handleContinueShopping} className="btn text-reset cart-continue-shopping" data-bs-dismiss="offcanvas" aria-label="Close">CONTINUE SHOPPING</button>
            </div>
          }
          {
            items?.length !== 0 &&
            <>
              <div className="continue-shopping py-3 display-block">
                <button type="button" onClick={handleToCart} className="btn text-reset cart-continue-shopping" data-bs-dismiss="offcanvas" aria-label="Close">GO TO MY BAG</button>
              </div>
              <div className="continue-shopping py-3">
                <button type="button" onClick={() => handleLink('checkout')} className="btn btn-light text-dark cart-continue-shopping" data-bs-dismiss="offcanvas" aria-label="Close">PROCEED TO CHECKOUT</button>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Bag