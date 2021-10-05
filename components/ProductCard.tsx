const ProductCard = () => {
  return (
    <>
      <div className="col-md-4 py-4">
        <div className="shadow">
          <div style={{backgroundColor: "black"}}>
            <a href="#" className="text-decoration-none p-0">
              <img src="/product1.svg" alt="product"  style={{ width: "100%"}} className="w-100 product-img" />
            </a>
          </div>
          <div className="product-details px-2 py-2">
            <div className="product-details-left">
              <div>Mwimba Dress</div>
              <div className="small font-weight-light">RWF 310,000 </div>
            </div>
            <div className="product-details-right">
              <div id="color-box" style={{backgroundColor: 'orange'}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard