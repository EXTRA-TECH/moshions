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
            <li><a href="#">MEN</a></li>
            <li><a href="#">WOMEN</a></li>
            <li>
              <a href="#">
                <span className="hide-small-phone">FOOTWEAR & </span> ACCESSORIES</a
              >
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default SingleImageTextRight