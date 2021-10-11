import Footer from "./Footer"
import Navbar from "./Navbar"

const Page = ({children}: any) => {
  return (<>
    <Navbar />
      {children}
    <Footer />
  </>)
}

export default Page