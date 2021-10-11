import { Builder } from "@builder.io/react";
import HomeNav from "../HomeNav"
import Link from 'next/link'
import Footer from "../Footer"
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <div className="home-row">
        <div className="column home-left">
          <HomeNav />
          <div className="d-flex justify-content-center">
            <ul className="nav navbar-nav list-inline">
              <li>
                <Link href="/products">
                  <a href="#" className="text-light text-decoration-none font-weight-bold">
                    MEN
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a href="#" className="text-light text-decoration-none font-weight-bold">
                    WOMEN
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a href="#" className="text-light text-decoration-none font-weight-bold">
                    THE BRAND
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="column home-right justify-content-center text-center text-light">
            <div className="">MOSHIONS SS 21 - ISHURI COLLECTION</div>
            <div className="px-5 py-3 d-flex justify-content-center" style={{width: "100%", textAlign: "center"}}>
              <div style={{width: "90%"}}>An ode to individuality, to the students of life, 
                to the misfits, whom society labels strange. 
                Ishuri celebrates those brave enough to carve 
                out their own path in life and create their own adventures.
              </div>
            </div>
            <div>
              <button type="button" className="subscribe-button">LOOKBOOK</button>
            </div>
          </div>
        </div>
        <div className="column home-side-img">
          <img src="/home-right.svg" alt="home" className="home-img" />
        </div>
      </div>
      <div className="home-bottom-row">
        <img src="/home-bottom.svg" alt="" className="home-bottom" />
      </div>
      <div className="home-shop">
        <div className="column">
          <div className="column justify-content-center text-center text-dark">
            <div className="h5 py-5">SHOP MOSHIONS SS 21</div>
            <div className="py-2"><a href="#" className="text-dark">MEN</a></div>
            <div className="py-2"><a href="#" className="text-dark">WOMEN</a></div>
            <div className="py-2"><a href="#" className="text-dark">THE BRAND</a></div>
          </div>
        </div>
        <div className="column home-shop-img">
          <img src="/shop-moshions.svg" className="shop-moshions-img" />
        </div>
      </div>
      <div className="prev-collection">
        <div className="column home-shop-img">
          <img src="/prev-collection.svg" className="shop-moshions-img" />
        </div>
        <div className="column">
          <div className="column justify-content-center text-center text-dark">
            <div className="h5 py-5">SHOP BY PREVIOUS COLLECTIONS</div>
            <div className="py-2"><a href="#" className="text-dark">MEN</a></div>
            <div className="py-2"><a href="#" className="text-dark">WOMEN</a></div>
            <div className="py-2"><a href="#" className="text-dark">THE BRAND</a></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

Builder.registerComponent(Home, {
  name: "Home",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: 'I am a heading!'
    },
    {
      name: "color",
      type: "color",
      defaultValue: 'black'
    },
  ],
});

export default Home