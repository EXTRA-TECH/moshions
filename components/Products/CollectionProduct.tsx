import ProductCard from "../ProductCard"
import Router from 'next/router'
import SingleProductWithBox from "./SingleProduct"

const CollectionProduct = ({dataSource}: any) => {
  const handleProduct = () => {
    Router.push('/products/[id]', `/products/1`)
  }
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div className="w-100p item">
        <img
          src={dataSource?.imageUrl}
          alt=""
          className="w-100 product-img"
          srcSet=""
          onClick={handleProduct}
        />
        <div className="item-details">
          <div className="item-label">
            <h4 className="product-name-description" onClick={handleProduct}>{dataSource.name}</h4>
            <span>{dataSource?.price}</span>
          </div>
          <span className={`${dataSource?.colors[0]} item-color`}></span>
        </div>
      </div>
    </div>
  )
}

export default CollectionProduct