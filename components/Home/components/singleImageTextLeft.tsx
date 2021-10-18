const SingleImageTextLeft = () => {
  return (
    <>
      <h1 className="title show-small-mobile">SHOP BY COLLECTIONS</h1>

      <section className="single-image-text small-reverse bg-dark-gray">
        <div className="section-text-container">
          <h1>SHOP MOSHIONS SS 21</h1>

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
        <div className="section-image-holder">
          <img src="/assets/Image Wrapper.svg" alt="" />
        </div>
      </section>
    </>
  )
}

export default SingleImageTextLeft