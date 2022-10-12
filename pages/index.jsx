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
    <div className="bg-black bg-cover text-white">
      <Head>
        <title>Sky Mastering</title>
        <meta name="Sky Mastering App" content="Created by Pedro Ferreira" />
        <link rel="icon" href="/favicon.ico" />
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
