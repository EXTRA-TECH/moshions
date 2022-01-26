/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import MainContainer from '../components/MainContainer';
import Link from 'next/link';

const AllCollections = () => {
  return (
    <>
      <Head>
        <title>All Collections</title>
      </Head>
      {/* <div classNameName='wrapper'>
        <Navbar /> */}

      <MainContainer>
        <div className='small-section'>
          <div className='pb-60 section-holder'>
            <h1>ishuri collection</h1>
            <p>
              Moshions is a go-to place for elegant clothing to match any
              occasion and every season. Our team invests untamed creativity to
              make elegant garments out of finest quality and touch. Available
              off-the-rack items and outlets make a snazzy and right-sized fit
              seem easy to find.
            </p>
            <p>
              Discover prêt-à-porter items from our store or premier stockists!
            </p>
            <div className='small-section-image-holder'>
              <img src='/assets/main-image.svg' className='w-100p' alt='' />
              <Link href='/collection-overlay' >
                VIEW MORE
              </Link>
            </div>
          </div>

          <div className='pb-60 section-holder'>
            <h1>inkingi collection</h1>
            <p>
              The Inkingi, Pillar, Collection captures the concept of a
              continuous journey. Inkingi is the trunk of the ever-expanding
              family tree – each branch represents the evolution of Moshions;
              blossoming from its origins as a one-roomed workshop to becoming a
              pillar of African contemporary fashion. Each Inkingi creation is a
              distinct combination of custom print, bold colour and playful
              imagination.
            </p>

            <div className='small-section-image-holder'>
              <img src='/assets/main-image.svg' className='w-100p' alt='' />
             <Link href='/collection-overlay' >
                VIEW MORE
              </Link>
            </div>
          </div>

          <div className='pb-60 section-holder'>
            <h1>ingoma yanjye collection</h1>
            <p>
              Inspired by regal tradition and elegance, Moshions presents a
              collection that reimagines the sophistication, royal air, and
              grace of ancient Rwandan kings and queens. The pieces feature
              geometric and traditional patterns, Imigongo, invented in Rwanda
              around the 18th century. The Ingoma Yanjye Collection explores
              traditional motif work through the contemporary Moshions eye.
            </p>

            <div className='small-section-image-holder'>
              <img src='/assets/main-image.svg' className='w-100p' alt='' />
             <Link href='/collection-overlay' >
                VIEW MORE
              </Link>
            </div>
          </div>

          <div className='pb-60 section-holder'>
            <h1>intsinzi collection</h1>
            <p>
              Intsinzi means Victory, and the Collection was crafted as an ode
              and dedication to the men and women, who led the struggle to build
              a new Rwanda. The Intsinzi pieces reflect the gallant, fierce, and
              unbreakable spirit of a nation. It employs top-notch craftsmanship
              and symbolic beadwork; combining the best traits of history to
              create the new. Entirely designed and made in Rwanda.
            </p>

            <div className='small-section-image-holder'>
              <img src='/assets/main-image.svg' className='w-100p' alt='' />
             <Link href='/collection-overlay' >
                VIEW MORE
              </Link>
            </div>
          </div>

          <div className='pb-60 section-holder'>
            <h1>utopia collection</h1>
            <p>
              Utopia brings to life Moses Turahirwa’s imagination of a kingdom
              filled with majestic flair, fantasy, and freedom. The subjects
              exude vibrant personalities in dreamlike outfits. They embrace
              their true selves, absent from any fears for repercussion. Utopia
              is a reflection of the Moshions world – a place where freedom of
              self-expression is the ultimate way of life.
            </p>

            <div className='small-section-image-holder'>
              <img src='/assets/main-image.svg' className='w-100p' alt='' />
             <Link href='/collection-overlay' >
                VIEW MORE
              </Link>
            </div>
          </div>

          <div className='pb-60 section-holder'>
            <h1>rafiki collection</h1>
            <p>
              Rafiki is the Swahili word for Friend. The Rafiki Collection
              celebrates friendship—in all its many forms—through a broad range
              of unique statement pieces. Because friends come in different
              dimensions, moments in time, and circumstances. The collection
              recalls friends of influence; those who saw immense potential in
              Turahirwa’s work from the beginning.
            </p>

            <div className='small-section-image-holder'>
              <img src='/assets/main-image.svg' className='w-100p' alt='' />
             <Link href='/collection-overlay' >
                VIEW MORE
              </Link>
            </div>
          </div>

          <div className='pb-60 section-holder'>
            <h1>ruheru collection</h1>
            <p>
              Rafiki is the Swahili word for Friend. The Rafiki Collection
              celebrates friendship—in all its many forms—through a broad range
              of unique statement pieces. Because friends come in different
              dimensions, moments in time, and circumstances. The collection
              recalls friends of influence; those who saw immense potential in
              Turahirwa’s work from the beginning.
            </p>

            <div className='small-section-image-holder'>
              <img src='/assets/main-image.svg' className='w-100p' alt='' />
             <Link href='/collection-overlay' >
                VIEW MORE
              </Link>
            </div>
          </div>

          <div className='pb-60 section-holder'>
            <h1>ruheru collection</h1>
            <p>
              Who we are; unknown. Who’ve been; unknown. Who we will be;
              unknown. That’s the mysterious beauty of life.
            </p>

            <div className='small-section-image-holder'>
              <img src='/assets/main-image.svg' className='w-100p' alt='' />
             <Link href='/collection-overlay' >
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default AllCollections;
