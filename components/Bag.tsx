import Router from "next/router"

const Bag = () => {

  const handleContinueShopping = () => {
    Router.push('/products')
  }

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
          <span>0</span>
        </a>
      </span>
      <div className="offcanvas offcanvas-end bg-dark" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header cart-header text-light">
          <div className="canvas-cart-title-icon">
              <img
                src="/assets/Icon awesome-shopping-bag.svg"
                className="cart-icon"
                alt=""
                srcSet=""
              />
          </div>
          <div id="offcanvasRightLabe" style={{ marginTop: '5px'}}>
            <span className="h5 canvas-cart-title-text">MY CART</span>
          </div>
          <button type="button" className="btn-close text-reset cart-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body text-light py-3 px-3">
          <div className="cart-empty">
            <h4 className="py-2">Your cart is empty</h4>
            <p>
              You haven’t added anything to your bag. 
              We’re sure you’ll find something in our store
            </p>
          </div>
          <div className="continue-shopping py-3">
            <button type="button" onClick={handleContinueShopping} className="btn text-reset cart-continue-shopping" data-bs-dismiss="offcanvas" aria-label="Close">Continue Shopping</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bag