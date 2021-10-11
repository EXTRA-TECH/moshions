import {useQuery} from '@apollo/react-hooks'
import {MEMBERS} from '../../gql/example'
import Navbar from '../Navbar'
import CollectionFilter from '../CollectionFilter'
import CollectionProduct from '../CollectionProduct'
import Footer from '../Footer'
import Page from '../Page'

const Products = () => {
  // Include Navbar, Filter
  return (
    <Page>
      <CollectionFilter
        title={`WOMEN'S WEAR`}
        description={`
          A new array of tops, jackets, cardigans, 
          skirts, and pants with finest embroidery, 
          beadwork and custom prints. 
        `}
       />
       <CollectionProduct />
       <div style={{paddingTop: "40px"}}></div>
    </Page>
  )
}

export default Products