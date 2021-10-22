import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Faqs = () => {
  return (
    <>
      <Head>
        <title>FAQS</title>
      </Head>
      <div className="wrapper">
      <Navbar />
      <div className="middle-section">
        <div className="faq-container">
          <div className="contents">
            <div className="container">
              <h2>FREQUENTLY ASKED QUESTIONS</h2>

              <div className="pb-40">
                <h4>How do I know the item I have purchased is authentic?</h4>
                <p>
                  Moshions products are only available on its official Site
                  shop.moshions.rw, physical shop in Kigali - Rwanda, and
                  certified stockists announced via our Site. Any item found
                  beyond the above-mentioned parameters is NOT authentic.
                </p>
              </div>

              <div className="pb-40">
                <h4>Does Moshions offer private appointments?</h4>
                <p>
                  Yes, Moshions offers personalised consultation at the physical
                  shop to customers in need of bespoke services. To request or
                  learn more about this arrangement, visit
                  www.moshions.rw/bespoke.
                </p>
              </div>

              <div className="pb-40">
                <h4>How can I make an order online?</h4>
                <p>
                  To place an order, visit shop.moshions.rw. The Site features a
                  wide range of products for menswear and womenswear – available
                  for direct purchase or pre-order.
                </p>
              </div>

              <div className="pb-40">
                <h4>Does Moshions ship worldwide?</h4>
                <p>
                  Moshions partners with the reputable shipping agency DHL to
                  bring you the purchased items wherever you are in the world.
                  After placing your products in the cart and filling in address
                  information, a shipping rate will appear.
                </p>
              </div>

              <div className="pb-40">
                <h4>How long will I receive my order?</h4>
                <p>
                  The purchased items reach you in less than 15 days. In case of
                  unforeseeable delays, Moshions will communicate a new arrival
                  date.
                </p>
              </div>

              <div className="pb-40">
                <h4>Does my Moshions purchase have warranty?</h4>
                <p>
                  Moshions products are crafted with quality and mastery to last
                  long. You can benefit a window of returns and exchange in case
                  your product is not in a good condition. Moshions does not
                  assume responsibility after the window closes. However, we
                  encourage you to work with local tailors if any issue arises.
                  Please read full guidelines of our return policy
                  <a href="#">here</a>.
                </p>
              </div>

              <div className="pb-40">
                <h4>What measurements do you use? (US or European)</h4>
                <p>
                  Moshions uses a European standard in measurements. Other
                  primary size references are seen on the Size Guide
                  <a href="#">here</a>.
                </p>
              </div>

              <div className="pb-40">
                <h4>Is Moshions an ethical fashion brand?</h4>
                <p>
                  Since its inception, Moshions has explored conscious practices
                  to fit in the extraordinary blend of contemporary and culture.
                  The pursuit of eco-friendliness has seen the brand switch to
                  organic fabric, create zero-waste products and learn more
                  about reducing carbon footprints across the operations. Our
                  transparency goes deeper than applying fair wage to direct
                  employees but in every stage of the supply chain. We are
                  committed to doing more.
                </p>
              </div>

              <div className="pb-40">
                <h4>Which payment methods do you accept?</h4>
                <p>
                  Moshions accepts a wide range of secure payment solutions. The
                  full list is available on the footer of the Site. In case your
                  payment fails, please contact your bank and finally let us
                  know via customercare@moshions.rw.
                </p>
              </div>

              <div className="pb-40">
                <h4>Which payment methods do you accept?</h4>
                <p>
                  Moshions accepts all currencies. Your purchase will likely be
                  converted to the US Dollars for a monetary resolution.
                </p>
              </div>

              <div className="pb-40">
                <h4>Is my online payment secure?</h4>
                <p>
                  Moshions prioritises security and confidentiality for all
                  online payments. The Site processes any transactions with the
                  certified gateway, DPO, only.
                </p>
              </div>

              <div className="pb-40">
                <h4>How do I track the status of my order?</h4>
                <p>
                  After the order is picked up by the carrier (DHL), you will
                  receive an email containing a link and a tracking number that
                  will help you to track your package.
                </p>
              </div>

              <div className="pb-40">
                <h4>Can I update or cancel my order?</h4>
                <p>
                  Canceling is only valid in 15 minutes after placing the order.
                </p>
              </div>

              <div className="pb-40">
                <h4>Can I place my order by phone?</h4>
                <p>
                  We strongly encourage you to place your order via our shopping
                  Site www.shop.moshions.rw for a proper follow-up. The failure
                  in orders placed over the phone call will not be attributed to
                  Moshions.
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

export default Faqs