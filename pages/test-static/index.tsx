import {useQuery} from '@apollo/react-hooks'
import {MEMBERS} from '../../gql/example'
import Navbar from '../../components/Navbar'
import CollectionFilter from '../../components/CollectionFilter'
import CollectionProduct from '../../components/CollectionProduct'
import Footer from '../../components/Footer'
import Page from '../../components/Page'

const TestStatic = () => {
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

export default TestStatic