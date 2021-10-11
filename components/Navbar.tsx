import Head from 'next/head'
import Link from 'next/link'
import { Builder } from "@builder.io/react";

const Navbar = ({showNav}: any) => {
  return (
    <>
        <Head>
            <title>MOSHIONS</title>
        </Head>
        <nav id={`nav`} className="navbar-nav sticky-top">
          <div className="row">
            <div className="column">
              <div className="container navbar-brand-container">
                <a href="#" className="navbar-brand">
                  <img src="/moshions-logo.svg" alt="Moshions logo" />
                </a>
              </div>
            </div>
            <div className="column navbar-links-container text-uppercase">
              <ul className="nav navbar-nav list-inline">
                <li>
                  <Link href="/#">
                    <a href="#" className="text-light text-decoration-none font-weight-bold">
                      MEN
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a href="#" className="text-light text-decoration-none font-weight-bold">
                      WOMEN
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a href="#" className="text-light text-decoration-none font-weight-bold">
                      THE BRAND
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column navbar-icons-container">
              <ul className="nav navbar-nav-right list-inline">
                <li><a href="#" className=""><i className="bi bi-heart nav-icon"></i></a></li>
                <li><a href="#" className=""><i className="bi bi-bag-fill nav-icon"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

Builder.registerComponent(Navbar, {
  name: "Navbar",
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

export default Navbar