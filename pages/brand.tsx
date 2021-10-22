import Head from 'next/head'
import Navbar from '../components/Navbar'

const Brand = () => {
  return (
    <>
      <Head>
        <title>Moshions | Founder</title>
      </Head>
      <div className="wrapper">
        <Navbar />

        <div className="main-pic-holder">
          <img src="assets/pic-about.jpg" className="w-100p" alt="" srcSet="" />
        </div>

        <div className="about">
          <div className="about-details">
            <div className="margin-auto">
              <h1>MEET THE FOUNDER</h1>
              <p>
                Part of Africa’s new generation of creatives, Moses Turahirwa is
                on a mission to usher in a new era of slow, thoughtful fashion.
                His Moshions brand is an ever-evolving creative manifestation of
                his love of discovery, play, and the beauty found in the details
                of the environments and culture that surrounds us.
              </p>

              <p>
                In the unique aesthetics of his creations, Moses pays homage to
                visual storytelling tradition found in Rwanda and across the
                African continent. Through innovative design that often includes
                meticulous craftsmanship and manual printing techniques, Moses
                reinterprets continental heritage through contemporary fashion,
                thrilled by the opportunity to celebrate Africa vibrant narratives
                with the world.
              </p>
            </div>
          </div>
          <div>
            <img
              src="assets/Moses-Turahirwa.svg"
              className="w-100p"
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Brand