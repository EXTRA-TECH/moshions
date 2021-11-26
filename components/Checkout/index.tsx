import MainContainer from "../MainContainer"

const CheckoutComponent = () => {
  return (
    <>
      <div className="checkout">
      <div className="checkout-form-container">
        <img
          src="assets/logo-black.png"
          height="90"
          className="m---40"
          alt=""
          srcSet=""
        />

        <nav id="nav-checkout" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Cart</a></li>
            <li className="breadcrumb-item"><a href="#">Information</a></li>
            <li className="breadcrumb-item"><a href="#">Information</a></li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#">Payment</a>
            </li>
          </ol>
        </nav>

        <div>
          <h5 className="pb-3">Contact information</h5>
          <input
            type="text"
            className="field__input"
            placeholder="Email or mobile phone number"
          />
          <div className="form-check pt-2">
            <input
              className="form-check-input fw-400"
              type="checkbox"
              value=""
              id="notification"
            />
            <label className="form-check-label fs--14" htmlFor="notification">
              Email me with news and offers
            </label>
          </div>
        </div>

        <h5 className="pb-3 mt-5">Delivery method</h5>
        <div className="shipping_option">
          <div>
            <div className="form-check-radio">
              <div className="d-flex-start-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  <img
                    src="assets/airplane-outline.svg"
                    className="icon-small"
                    alt=""
                  />
                  <span>Ship</span>
                </label>
              </div>
            </div>
            <div className="form-check-radio">
              <div className="d-flex-start-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  <img
                    src="assets/home-outline.svg"
                    className="icon-small"
                    alt=""
                  />
                  <span>Pick up</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <h5 className="pb-3 mt-5">Delivery method</h5>
        <form action="">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-sm-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
                <label htmlFor="">First name</label>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-sm-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
                <label htmlFor="">Last name</label>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-sm-12">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" placeholder="Address" />
                <label htmlFor="">Address</label>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment, suite, etc. (optional)"
                />
                <label htmlFor="">Apartment, suite, etc. (optional)</label>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-sm-12">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" placeholder="City" />
                <label htmlFor="">City</label>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-sm-6">
              <div className="form-floating mb-3">
                <select name="" id="" className="form-control">
                  <option value="Rwanda">Rwanda</option>
                </select>
                <label htmlFor="">Country/Region</label>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-sm-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal code"
                />
                <label htmlFor="">Postal code</label>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                />
                <label htmlFor="">Phone number</label>
              </div>
              <div className="form-check pt-0">
                <input
                  className="form-check-input fw-400"
                  type="checkbox"
                  value=""
                  id="save_info"
                />
                <label className="form-check-label fs--14" htmlFor="save_info">
                  Save this information for next time
                </label>
              </div>
            </div>
            <div className="col-12 mt-5">
              <button className="btn btn-dark btn-lg mr-3 fs--16">
                Continue to shipping
              </button>
              <span className="pointer">Return to cart</span>
            </div>
          </div>
        </form>
      </div>
      <div className="checkout-details">
        <div className="cart-product">
          <div className="cart-product-details">
            <div className="cart-product-image">
              <img src="assets/akijoro.png" alt="" srcSet="" />
              <span className="qty">1</span>
            </div>
            <div className="cart-product-name">
              <h6>Akijoro Top</h6>
              <h6 className="color-cold fs--14">S / Orange</h6>
            </div>
          </div>
          <h5 className="fs--16">RWF 150,000</h5>
        </div>

        <div className="cart-amount">
          <div className="d-flex justify-content-between align-item-center">
            <span>Subtotal</span>
            <h5 className="fs--16">RWF 300,000</h5>
          </div>
          <div
            className="
              d-flex
              justify-content-between
              pb-20
              border-bottom-1
              mb-20
              align-item-center
            "
          >
            <span
              >Shipping
              <i
                className="fas fa-question-circle pointer"
                data-bs-toggle="modal"
                data-bs-target="#policy"
              ></i
            ></span>
            <span className="fs--14">Calculated at next ste</span>
          </div>
          <div className="d-flex justify-content-between align-item-center">
            <h5>Total</h5>
            <h5 className="fs--16">RWF 300,000</h5>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Modal --> */}
    <div
      className="modal fade"
      id="policy"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Shipping policy</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Shipping</strong> <br />
              To return your product, you should mail your product to 43 KN 16
              Ave, Kigali - Rwanda.&nbsp;<br />
              <br />
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are non-refundable. If you
              receive a refund, the cost of return shipping will be deducted
              from your refund. <br />
              <br />
              Depending on where you live, the time it may take for your
              exchanged product to reach you, may vary. <br />
              <br />
              If you are shipping an item over $75, you should consider using a
              trackable shipping service or purchasing shipping insurance. We
              don’t guarantee that we will receive your returned item.
            </p>
            <p>&nbsp;</p>
            <p><strong>Order</strong></p>
            <p>
              &#xFEFF;<span id="span-checkout"
                >When your order is received, Moshions will confirm the purchase
                via an automatic e-mail to the email address shared. The e-mail
                notification is a confirmation that your order has been received
                by Moshions, but does not guarantee acceptance of your order.
              </span>
            </p>
            <p>
              <span id="span-checkout"
                >Moshions has the right at any time after receipt of your order
                to accept or decline your order for any reason. Moshions will
                contact you at the email address provided about its decision to
                accept or reject your order. In case of order rejection,
                Moshions is not entitled to fulfill your order and you will have
                no obligation to pay Moshions for the order.</span>
            </p>
            <p><br /><br /></p>

            <div className="hidden">
              <span
                className="visually-hidden"
                id="forwarding-external-new-window-message"
              >
                Opens external website in a new window.
              </span>

              <span className="visually-hidden" id="forwarding-new-window-message">
                Opens in a new window.
              </span>

              <span className="visually-hidden" id="forwarding-external-message">
                Opens external website.
              </span>

              <span className="visually-hidden" id="checkout-context-step-one">
                Customer information - Moshions - Checkout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CheckoutComponent