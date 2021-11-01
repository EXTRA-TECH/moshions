import Router from 'next/router'
import ProductCard from './ProductCard'

const CollectionProduct = ({dataSource}: any) => {
  const handleProduct = () => {
    Router.push('/products/[id]', `/products/1`)
  }
  return (
    <>
      <div className="row">
        {
          dataSource?.map((el:any, i:any) => (
            <ProductCard key={i} dataSource={el} />
          ))
        }
      </div>
    </>
  )
}

export default CollectionProduct