import Router from "next/router"

const ProductCard = ({dataSource}: any) => {
  if (dataSource?.node?.images?.length) {
    return (
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="w-100p item">
          <img
            src={dataSource?.node?.images[0]?.url}
            alt=""
            className="w-100 product-img"
            srcSet=""
            onClick={() => {
              Router.push('/products/[id]', `/products/${dataSource?.node?.id}`)
            }}
          />
          <div className="item-details">
            <div className="item-label">
              <h4 className="product-name-description" onClick={() => {
                Router.push('/products/[id]', `/products/${dataSource?.node?.id}`)
              }}>{dataSource?.node?.name}</h4>
              <span>{`${dataSource?.node?.pricing?.priceRange?.start?.net?.amount}`}</span>
            </div>
            <span className={`${"dataSource?.colors[0]"} item-color`}></span>
          </div>
        </div>
      </div>
    )
  } return null
}

export default ProductCard