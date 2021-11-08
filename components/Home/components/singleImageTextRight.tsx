import Link from 'next/link'

const SingleImageTextRight = () => {
  return (
    <>
      <h1 className="title show-small-mobile">PREVIOUS COLLECTIONS</h1>
      <section className="single-image-text gold-section reserse">
        <div className="section-image-holder">
          <img src="/assets/Image Wrapper2.svg" alt="" />
        </div>

        <div className="section-text-container">
          <h1>Shop by previous collections</h1>

          <ul>
            <li><Link href="/products?category=men"><a href="#">MEN</a></Link></li>
            <li><Link href="/products?category=accessories"><a href="#">ACCESSORIES</a></Link></li>

            
            <li><Link href="/products?category=women"><a href="#">WOMEN</a></Link></li>
            <li>
              <Link href="/products?category=accessories">
                <a href="#">
                  <span className="hide-small-phone">FOOTWEAR & </span> ACCESSORIES
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default SingleImageTextRight