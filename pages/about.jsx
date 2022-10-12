import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import RecentClients from '../components/Clients';
import Slider from '../components/Slider';
import ContactBanner from '../components/ContactBanner';
import { SliderData } from '../components/SliderData';

const about = () => {
  return (
    <div className="bg-black bg-cover text-white">
      <Head>
        <title>Sky Mastering</title>
        <meta name="Sky Mastering App" content="Created by Pedro Ferreira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading={'About'}
        message="Some information about Kri Samadhi, the man behind Sky Mastering"
      />
      <Slider slides={SliderData} />
      <About />
      <ContactBanner />
      <RecentClients />
    </div>
  );
};

export default about;
