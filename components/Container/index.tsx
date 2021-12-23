/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Header from './components/Header'
import Home from './components/Home'
import Carousel from './components/Carousel'
import GridImages from './components/GridImages'
import Footer from './components/Footer'


const Container = ({children}: any) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="page_type" content="np-template-header-footer-from-plugin" />
        <title>MOSHIONS |</title>
        <link rel="stylesheet" href="/css/nicepage.css" media="screen" />
        <link rel="stylesheet" href="/css/MEN.css" media="screen" />
        <script className="u-script" type="text/javascript" src="/js/jquery.js"></script>
        <script className="u-script" type="text/javascript" src="/js/nicepage.js"></script>
        <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" />
        <meta property="og:title" content="MEN" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#478ac9" />
        <link rel="canonical" href="index.html" />
        <meta property="og:url" content="index.html" />
      </Head>
      <body data-home-page="index.html" data-home-page-title="MEN" className="u-body">
        {/* <Header /> */}
        <Home />
        <Carousel />
        <GridImages />
        {children}
        <Footer />
      </body>
    </>
  )
}

export default Container