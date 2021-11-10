import MainContainer from "../MainContainer"

const Cart = () => {
  return (
    <MainContainer>
      <div className="page-title">
        <h1 className="text-capitalize">Shopping Bag</h1>
      </div>

      <section className="container">
        <div className="pt-2 row">
          <div className="col-12 col-lg-9 co-md-9 col-sm-9 col-xs-12">
            <h4 className="fs--18 pb-20 text-right">TOTAL</h4>
            <div className="cart-products">
              <div className="cart-item">
                <div className="product">
                  <img
                    src="assets/trash-outline.svg"
                    alt=""
                    className="delete-cart pointer"
                    srcSet=""
                  />
                  <div className="product-image">
                    <img
                      src="assets/akijoro.png"
                      alt=""
                      className="w-100p"
                      srcSet=""
                    />
                  </div>
                  <div>
                    <p className="cart-item-title">Akijoro Top</p>
                    <p className="color-cold">S / Orange</p>
                  </div>
                </div>
                <div className="pricing">
                  <p>
                    RWF <br />
                    155,000
                  </p>

                  <input type="number" min="1" value="1" className="form-control" />

                  <p>
                    RWF <br />
                    155,000
                  </p>
                </div>
              </div>
            </div>

            <div className="cart-updates">
              <div>
                <img src="assets/arrow-back-outline.svg" className="cart-update-icon" srcSet="" />
                <h4>CONTINUE SHOPPING</h4>
              </div>
              <div>
                <img src="assets/reload-outline.svg" className="cart-update-icon" srcSet="" />
                <h4>UPDATE BAG</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 co-md-3 col-sm-3 col-xs-12">
            <div className="cart-options">
              <h4 className="h5 mb-4 fs--16">CART TOTAL</h4>
              <form action="#" className="mb-10">
                <div className="form-group">
                  <label htmlFor="">COUNTRY*</label>
                  <select name="" id="" className="form-control">
                    <option value="Rwanda">Rwanda</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="">STATE/PROVINCE*</label>
                  <select name="" id="" className="form-control">
                    <option value="Kigali">Kigali</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="">ZIP/POSTAL CODE</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ZIP/POSTAL CODE"
                  />
                </div>
              </form>

              <span className="btn--text mb-10">Calculate shipping</span>
              <p className="pt-3">Error : zip can not be blank.</p>

              <div className="border-bottom-dashed pt-0"></div>

              <div className="pt-4">
                <h5 className="fs--14">SUBTOTAL</h5>
                <h3 className="fs--19">
                  <span className="alpha-cart-total-price"
                    ><span className="money">RWF 155,000</span></span
                  >
                </h3>
                <p>Shipping calculated at checkout</p>
                <input
                  type="submit"
                  className="btn btn-dark"
                  name="checkout"
                  value="PROCEED TO CHECKOUT"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  )
}

export default Cart