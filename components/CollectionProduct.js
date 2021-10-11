import ProductCard from "./ProductCard"
import Link from 'next/router'

const CollectionProduct = () => {
  return (
    <>
      <div id="product-container" className="container">
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
}

export default CollectionProduct