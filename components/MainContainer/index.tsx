import {MainMenu} from "../MainMenu"
import Footer from '../Footer'

const MainContainer = ({children}: any) => {
  return (
    <>
      <MainMenu />
        <div className="wrapper">
          {children}
        </div>
      <Footer />
    </>
  )
}

export default MainContainer