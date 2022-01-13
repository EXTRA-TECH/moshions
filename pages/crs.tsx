import React from 'react';

import Head from 'next/head';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

function Crs() {
  return (
    <>
      <Head>
        <title>FAQS</title>
      </Head>
      <MainContainer>
        <section>
          <div className='crs-header'>
            <img src='/assets/forest.jpeg' alt='' />
            <h1>CRS & SUSTAInability</h1>
          </div>
        </section>

        <div className='container pt-60'>
          <div className='pb-20 section-holder'>
            <h1 className='crs-title'>Made in africa</h1>
            <p>
              Moshions is celebrating Africa in all its glory - from culture, to
              resources and its people. Our commitment to produce our pieces
              using fabrics and materials sourced from the African continent
              underlines the brand’s connection with home. Our mission is to
              build a 100% Made in Africa product via an ever-expanding
              continental network of collaborators.
            </p>
          </div>

          <div className='pb-20 section-holder'>
            <h1 className='crs-title'>ECO-friendly future</h1>
            <p>
              The brand aims to achieve 100% sustainable production by 2030. The
              mission will be gradually achieved through continuous evaluation
              of processes and habits, and small but significant commitments.
              Moshions is set to reduce impact on the environment by eliminating
              excess legs in the supply chain, repurposing clothing pieces, and
              exploring modern eco-friendly technologies. The brand has ventured
              into zero-waste production, minimum and recyclable packaging, and
              participates in afforestation assignments. The momentum is growing
              as the brand progresses.
            </p>
          </div>

          <div className='pb-20 section-holder'>
            <h1 className='crs-title'>Empowering young creatives</h1>
            <p>
              Moshions believes in young talent and strives to help them with
              all resources to expand their reach and vision. Regular workshops
              are hosted to create a forum for (as a space to) knowledge and
              industry insights exchange among experts and learners. Moshions is
              taking an extra step to help the next generation explore and grow
              their talents in the creative field.
            </p>
          </div>

          <div className='pb-20 section-holder'>
            <h1 className='crs-title'>Gender equality</h1>
            <p>
              Moshions continues to inspire African brands as an advocate for
              women’s empowerment. Working towards a 50/50 gender spread hiring
              record, the fashion house has created a safe workplace for women.
              We champion an equal pay for equal work policy, while offering
              menstrual health awareness support for all women within the
              company. Moshions has also funded initiatives to provide menstrual
              pads to young women across the country, and education to help end
              teenage pregnancy.
            </p>
          </div>

          <div className='pb-20 section-holder'>
            <h1 className='crs-title'>Gender equality</h1>
            <p>
              Moshions continues to inspire African brands as an advocate for
              women’s empowerment. Working towards a 50/50 gender spread hiring
              record, the fashion house has created a safe workplace for women.
              We champion an equal pay for equal work policy, while offering
              menstrual health awareness support for all women within the
              company. Moshions has also funded initiatives to provide menstrual
              pads to young women across the country, and education to help end
              teenage pregnancy.
            </p>
          </div>
        </div>
        <div className='rightBG'>
          <img src='/assets/imigogo-bg.png' className='w-100p' />
        </div>
        <Footer />
      </MainContainer>
    </>
  );
}

export default Crs;
