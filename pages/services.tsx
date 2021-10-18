/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

const Bespoke = () => {
  return (
    <>
      <div className="wrapper">
      <header className="header bg-black">
        <div className="container">
          <div className="header-top">
            <div className="header-logo-container">
              <Link href='/'>
                  <img
                  src="/assets/MoShiOns_LoGo_White.svg"
                  alt="Motions"
                  className="logo"
                  srcSet=""
                />
              </Link>
            </div>
            <div className="header-menu menu-global">
              <ul className="header-menu-list">
                <li><Link href="/products"><a href="#">MEN</a></Link></li>
                <li><Link href="/products"><a href="#">WOMEN</a></Link></li>
                <li><Link href="/products"><a href="#">ACCESSORIES</a></Link></li>
                <li><Link href="/products"><a href="#">THE BRAND</a></Link></li>
              </ul>
            </div>
            <div className="header-shop-actions">
              <img
                src="/assets/Icon feather-heart.svg"
                className="header-icon"
                alt=""
                srcSet=""
              />
              <span className="header-cart-items">
                <img
                  src="/assets/Icon awesome-shopping-bag.svg"
                  className="header-icon"
                  alt=""
                  srcSet=""
                />
                <span>0</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="page-title">
        <h1>BESPOKE</h1>
        <p>
          Everyone is unique: our bespoke experience gives fulfilment to that.
        </p>
        <p>
          With bespoke-tailoring, you're invited to interact with the Creative
          Director on how your one-of outfit should turn out. Moshions pays
          attention to your preferences and brings each other to life. From the
          contours, to the fabric, to the colours, to the button – until the
          final structure sees the light of day.
        </p>
        <p>
          At Moshions, bespoke is the art of collaborating with the customer
          step by step. It's one-of-a-kind service that provides a wide range of
          choices.
        </p>
        <p>
          Our team is always excited to put their creativity; to making couture
          that enhances your true character.
        </p>
      </div>

      <section className="middle-section">
        <div className="container">
          <img src="/assets/Bespoke-photo.jpg" className="w-100p" alt="" />
          <div className="form-container">
            <h1 className="form-title">BOOK AN APPOINTMENT</h1>
            <form>
              <div className="form-group">
                <label htmlFor="">Title</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">First Name*</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">Last Name*</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">Email*</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">Telephone</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">Telephone</label>
                <textarea className="form-control" rows={5}></textarea>
              </div>
              <div>
                <button className="btn btnn-dark">SEND INQUIRY</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Bespoke