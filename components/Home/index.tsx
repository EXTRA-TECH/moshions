import Head from 'next/head'
import Header from "./header";
import SingleImage from "./singleImage";
import SingleImageTextLeft from "./singleImageTextLeft";
import SingleImageTextRight from "./singleImageTextRight";
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