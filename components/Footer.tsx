const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-container">
        <div className="row footer-row d-flex justify-content-center">
          <div className="col-md-2">CUSTOMER CARE:</div>
          <div className="col-md-8">
            <ul className='nav navbar-nav'>
              <li><a href="#" className="text-light text-decoration-none">BOOK AN APPOINTMENT |</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQS |</a></li>
              <li><a href="#" className="text-light text-decoration-none">{`SHIPPING & RETURN POLICY |`}</a></li>
            </ul>
          </div>
        </div>
        <div className="row footer-row d-flex justify-content-center">
          <div className="col-md-2">CUSTOMER CARE:</div>
          <div className="col-md-8">
            <ul className='nav navbar-nav'>
              <li><a href="#" className="text-light text-decoration-none">BOOK AN APPOINTMENT |</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQS |</a></li>
              <li><a href="#" className="text-light text-decoration-none">{`SHIPPING & RETURN POLICY |`}</a></li>
            </ul>
          </div>
        </div>
        <div className="row footer-row d-flex justify-content-center">
          <div className="col-md-2">CUSTOMER CARE:</div>
          <div className="col-md-8">
            <ul className='nav navbar-nav'>
              <li><a href="#" className="text-light text-decoration-none">BOOK AN APPOINTMENT |</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQS |</a></li>
              <li><a href="#" className="text-light text-decoration-none">{`SHIPPING & RETURN POLICY |`}</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="h6 d-flex justify-content-center filter-title">
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