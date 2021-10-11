import Link from 'next/link'

const HomeNav = ({showNavbarSmall}: any) => {
  return (
    <>
       <nav id={`nav ${showNavbarSmall ? '' : ''}`} className="navbar-nav navbar-home">
          <div className="row py-5">
            <div className="column">
              <div className="container navbar-brand-container">
                <Link href="/products"><a href="#" className="navbar-brand">
                  <img src="/moshions-logo.svg" alt="Moshions logo" />
                </a></Link>
              </div>
            </div>
            <div className="column navbar-icons-container">
              <div>
                <ul className="nav navbar-nav-right list-inline">
                  <li><a href="#" className=""><i className="bi bi-heart nav-icon"></i></a></li>
                  <li><a href="#" className=""><i className="bi bi-bag-fill nav-icon"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default HomeNav