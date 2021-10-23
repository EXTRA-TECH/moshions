import Footer from '../components/Footer'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const ShipReturnPolicy = () => {
  return (
    <>
      <Head>
        <title>Shipping & Return Policy</title>
      </Head>
      <div className="wrapper">
      <Navbar />
      <div className="middle-section">
        <div className="faq-container">
          <div className="contents">
            <div className="container">
              <h2>FAQs - SHIPMENT</h2>

              <div className="pb-40">
                <h4>Do you ship worldwide?</h4>
                <p>
                  Yes, all our products are shipped to every country that DHL
                  delivers to.
                </p>
              </div>

              <div className="pb-40">
                <h4>How much do you charge for delivery?</h4>
                <p>
                  Moshions partners with the reputable shipping agency DHL to
                  bring you the purchased items wherever you are in the world.
                  For delivery charges, Moshions uses the same shipping rates
                  that have already been set by DHL, which vary according to
                  each respective region of the world. For more information
                  please visit
                  <a href="https://www.dhl.com/en/express/shipping.html"
                    >https://www.dhl.com/en/express/shipping.html</a
                  >
                  to get actual shipping/delivery rates depending on your
                  region.
                </p>
              </div>

              <div className="pb-40">
                <h4>Do I need to be present to sign for my order?</h4>
                <p>
                  Anyone present at the delivery address can sign for your
                  order, however we do not deliver to neighbors or local pick-up
                  points.
                </p>
              </div>

              <div className="">
                <h4>Can I change the delivery address for my order?</h4>
                <p>
                  Once your order has been placed, it is not possible to change
                  or update the delivery address.
                </p>
              </div>

              <h2>RETURNS</h2>

              <div className="pb-40">
                <h4>What should I do if my order arrived damaged?</h4>
                <p>
                  We encourage you to immediately indicate when you receive a
                  damaged package by writing to customercare@moshions.rw or by
                  calling +250 788 645 543 to inform us of the issue. You can
                  also refuse it altogether. For more information regarding our
                  return policies please review this document.
                </p>
              </div>

              <div className="pb-40">
                <h4>What is Moshions return policy?</h4>
                <p>
                  In case of any situation where you are not fully satisfied,
                  Merchandise may be returned for exchange or full refund to our
                  store in Kigali – Moshions will take care of the return
                  shipping costs within 15 days of the actual purchase. The item
                  should be accompanied by the printed or email receipt. All
                  merchandise returned for exchange or refund must be in the
                  original packaging and in perfect condition to be accepted.
                  Items such as necklaces, face masks, and personalised orders
                  cannot be returned for hygienic reasons. Kindly check the
                  return eligibility under ‘Return Note’ on the product page.
                </p>
              </div>

              <div className="pb-40">
                <h4>
                  What should I do if the items delivered do not match what I
                  <br />
                  ordered or if something is missing?
                </h4>
                <p>
                  If for any reason your order is not what you expected or
                  something is missing from it, please contact
                  customercare@moshions.rw within 24 hours so that we can help
                  you.
                </p>
              </div>

              <div className="pb-40">
                <h4>
                  What should I do if I cannot find my prepaid return label?
                </h4>
                <p>
                  If you can not find your prepaid return label, Moshions has
                  put this under consideration by attaching a printable version
                  in your return confirmation email.
                </p>
              </div>

              <div className="pb-40">
                <h4>Can I return my item/s to a store?</h4>
                <p>
                  Yes, Merchandise may be returned for exchange or full refund
                  to our store in Kigali.
                </p>
              </div>

              <div className="pb-40">
                <h4>How long does it take for a refund to be processed?</h4>
                <p>
                  An email will be sent to you as soon as your refund has been
                  issued. Depending on your bank, the amount will appear in your
                  bank account details within 7 to 15 days.
                </p>
              </div>

              <div className="pb-40">
                <h4>What are refund conditions?</h4>
                <p>
                  Once the returned item/s is/are received, we will check that
                  the return complies with our return and refund conditions. If
                  it does, we will credit the refund to your original payment
                  method. There may be a slight delay (usually between 7 to 15
                  days) for the amount to appear in your account details
                  depending on your bank. Please note, refunds may only be
                  requested by the customer that placed the original order.
                </p>
              </div>
            </div>
          </div>
          <div className="rightBG">
            <img src="/assets/imigogo-bg.png" className="w-100p" alt="" srcSet="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default ShipReturnPolicy