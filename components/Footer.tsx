import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-container">
        <div className="row container footer-row d-flex justify-content-center">
          {/* <div className="col-md-2">CUSTOMER CARE :</div> */}
          <div className="col-md-10">
            <ul className='nav navbar-nav'>
              <li>CUSTOMER CARE :</li>
              <li><Link href="/book-appointment"><a href="#" className="text-light text-decoration-none">BOOK AN APPOINTMENT |</a></Link></li>
              <li><Link href="/faqs"><a href="#" className="text-light text-decoration-none">FAQS |</a></Link></li>
              <li><Link href="/ship-return-policy"><a href="#" className="text-light text-decoration-none">{`SHIPPING & RETURN POLICY`}</a></Link></li>
            </ul>
          </div>
        </div>
        <div className="row container footer-row d-flex justify-content-center">
          {/* <div className="col-md-2">SERVICES :</div> */}
          <div className="col-md-10">
            <ul className='nav navbar-nav'>
              <li><Link href="/services"><a href="#" className="text-light text-decoration-none">SERVICES :</a></Link></li>
              <li><Link href="/services"><a href="#" className="text-light text-decoration-none">BESPOKE |</a></Link></li>
              <li><Link href="/made-to-wear"><a href="#" className="text-light text-decoration-none">MADE TO MEASURE |</a></Link></li>
              <li><Link href="/services"><a href="#" className="text-light text-decoration-none">{`READY TO WEAR |`}</a></Link></li>
              <li><Link href="/traditional-wear"><a href="#" className="text-light text-decoration-none">TRADITIONAL WEAR</a></Link></li>
            </ul>
          </div>
        </div>
        <div className="row container footer-row d-flex justify-content-center">
          {/* <div className="col-md-2">THE BRAND :</div> */}
          <div className="col-md-10">
            <ul className='nav navbar-nav'>
              <li><a href="#" className="text-light text-decoration-none">THE BRAND :</a></li>
              <li><Link href="/services"><a href="#" className="text-light text-decoration-none">PROFILE |</a></Link></li>
              <li><Link href="/services"><a href="#" className="text-light text-decoration-none">PRESS |</a></Link></li>
              <li><Link href="/services"><a href="#" className="text-light text-decoration-none">{`LEGAL NOTICE |`}</a></Link></li>
              <li><Link href="/services"><a href="#" className="text-light text-decoration-none">{`SUSTAINABILITY & CRS |`}</a></Link></li>
              <li><Link href="/services"><a href="#" className="text-light text-decoration-none">{`COLLABORATIONS`}</a></Link></li>
            </ul>
          </div>
        </div>
        <div className="row pt-4">
          <div className="h6 d-flex justify-content-center text-center filter-title">
            {'Be in the Moshions Know!'}
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center text-center filter-description">
            {'Subscribe to receive the latest news and updates from Moshions:'}
          </div>
        </div>
        <div className="row">
          <form>
            <div className="input-group d-flex justify-content-center text-center">
              <div className="">
                <input type="text" placeholder="" className="subscribe-input" />
              </div>
            </div>
            <div className="input-group d-flex justify-content-center text-center">
              <div>
                <button type="button" className="subscribe-button">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Footer