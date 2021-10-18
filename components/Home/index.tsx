import Head from 'next/head'
import Header from "./components/header";
import SingleImage from "./components/singleImage";
import SingleImageTextLeft from "./components/singleImageTextLeft";
import SingleImageTextRight from "./components/singleImageTextRight";
import Footer from '../Footer'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="wrapper">
        <Header />
        <SingleImage />
        <SingleImageTextLeft />
        <SingleImageTextRight />
        <Footer />
      </div>
    </>
  )
}

export default Home;