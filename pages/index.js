import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Clients from '../components/Clients';
import { ClientsData } from '../components/ClientsData';
import Services from '../components/Services';
import ContactBanner from '../components/ContactBanner';
import Or from '../components/Or';

const Home = () => {
  return (
    <div className="bg-black text-white custom-img2 w-full bg-fill md:bg-contain">
      <Head>
        <title>
          Sky Mastering - Asheville, North Carolina - Audio Mixing and Mastering
          Services
        </title>
        <meta
          name="description"
          content="Sky Mastering - Professional Audio Mixing and Mastering Service in Asheville, North Carolina. Specializing in Streaming, Audiophile and Large PA Analog Mastering"
          key="desc"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Hero
        heading="Welcome to Sky Mastering"
        message="Specializing in Streaming, Audiophile and Large PA Analog Mastering"
      />
      <Slider slides={SliderData} />
      <Services />
      <ContactBanner />
      <Clients client={ClientsData} />
      <Or />
    </div>
  );
};

export default Home;
