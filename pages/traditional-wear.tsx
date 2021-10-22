import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TraditionalWear = () => {
  return (
    <>
      <Head>
        <title>Traditional Wear</title>
      </Head>
      <div className="wrapper">
      <Navbar />

      <div className="page-title">
        <h1>TRADITIONAL WEAR</h1>
        <p>
          One Time for the Culture! Moshions revisits Rwanda’s eclectic
          traditional royal clothing and adds modern vibes worth a contemporary
          rank.
        </p>
      </div>

      <section className="middle-section">
        <div className="pt-40">
          <div className="">
            <img
              src="/assets/DSC_6927 (1).png"
              className="w-100p"
              alt=""
              srcSet=""
            />

            <p className="text-center py-4">
              The unequalled Moshions Mishanana collection has become the most
              favorite set for traditionally charged ceremonies: Gusaba
              weddings, Umuganura Festival, cultural nights among others. It’s a
              work of art made to celebrate love; love in its full force.
            </p>

            <img
              src="/assets/imishanana__1_-1024x576.png"
              className="w-100p"
              alt=""
              srcSet=""
            />

            <p className="text-center pt-40">
              The set of imigongo-beaded imishanana comes with a cultural
              necklace, Moshions sandals, and beaded royal sticks. Ready to rock
              the day? Contact us for this very same feel.
            </p>
          </div>

          <div className="form-container">
            <h1 className="form-title">BOOK AN APPOINTMENT</h1>
            <form>
              <div className="form-group">
                <label htmlFor="">Title</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">First Name*</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">Last Name*</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">Email*</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">Telephone</label>
                <input type="text" className="form-control" name="" />
              </div>
              <div className="form-group">
                <label htmlFor="">Telephone</label>
                <textarea className="form-control" rows={5}></textarea>
                <span className="requiredField text-muted">* Required field</span>
              </div>
              <div className="text-center py-5">
                <button className="btn btn-dark px-4">SEND INQUIRY</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  )
}

export default TraditionalWear