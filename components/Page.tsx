import Footer from "./Footer"
import Navbar from "./Navbar"

const Page = ({children}: any) => {
  return (<>
  <div className="wrapper">
    <Navbar />
      {children}
    <Footer />
  </div>
  </>)
}

export default Page