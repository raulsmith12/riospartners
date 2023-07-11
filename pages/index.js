import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import ImageLeft from '../components/ImageLeft';
import ImageRight from '../components/ImageRight';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rios Partners</title>
        <meta name="description" content="A mock landing page developed in Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main-page">
        <Hero />
        <h3 className="landing-content">
            Lorem ipsum dolor sit amet consectetur. Eu ultrices molestie tempus a odio. Nibh nisi massa semper interdum. Aenean elementum mi lacus vitae amet feugiat. Magnis vitae vulputate nunc vestibulum a lacinia rutrum id risus
        </h3>
        <div className="features-div">
          <Feature icon="img/icon _award_.svg" altDesc1="award icon" picture="img/Image.png" altDesc2="Hands writing on sticky notes" heading="Lorem ipsum dolor sit amet consectetur. Quis." />
          <Feature icon="img/icon _award_.svg" altDesc1="award icon" picture="img/Image.png" altDesc2="Hands writing on sticky notes" heading="Lorem ipsum dolor sit amet consectetur. Quis." />
          <Feature icon="img/icon _award_.svg" altDesc1="award icon" picture="img/Image.png" altDesc2="Hands writing on sticky notes" heading="Lorem ipsum dolor sit amet consectetur. Quis." />
        </div>
        <ImageLeft
          image="img/Image-1.png"
          altDesc="Developer writing on whiteboard"
          heading="Heading"
          para1="Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam lacus lacinia massa blandit nascetur nullam elit nunc. Integer gravida accumsan rhoncus velit volutpat viverra at eleifend aliquet. Feugiat odio arcu faucibus vestibulum porta sem pellentesque ullamcorper. Dui mauris pellentesque hendrerit adipiscing egestas sit dolor."
          para2="Vulputate at fermentum cras facilisi varius sagittis habitant nunc. Auctor luctus justo commodo posuere nibh nulla mi duis. Feugiat nunc lectus tellus sem molestie. Ultrices massa vitae adipiscing sit dui amet vel. Tempus varius tellus neque magna sapien dui. Integer nulla maecenas nisl non. Imperdiet amet vestibulum est nisl leo non diam semper."
          buttonText="LEARN MORE"
        />
        <ImageRight
          image="img/Image-2.png"
          altDesc="Developer writing on whiteboard"
          heading="Heading"
          para1="Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam lacus lacinia massa blandit nascetur nullam elit nunc. Integer gravida accumsan rhoncus velit volutpat viverra at eleifend aliquet. Feugiat odio arcu faucibus vestibulum porta sem pellentesque ullamcorper. Dui mauris pellentesque hendrerit adipiscing egestas sit dolor."
          para2="Vulputate at fermentum cras facilisi varius sagittis habitant nunc. Auctor luctus justo commodo posuere nibh nulla mi duis. Feugiat nunc lectus tellus sem molestie. Ultrices massa vitae adipiscing sit dui amet vel. Tempus varius tellus neque magna sapien dui. Integer nulla maecenas nisl non. Imperdiet amet vestibulum est nisl leo non diam semper."
          buttonText="LEARN MORE"
        />
        <Testimonials />
        <div style={{ height: '100px', width: '100%', padding: '50px 0' }}>&nbsp;</div>
      </main>
      <Footer />
    </>
  )
}
