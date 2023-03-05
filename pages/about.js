import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import RecentClients from '../components/Clients';
import Slider from '../components/Slider';
import ContactBanner from '../components/ContactBanner';
import { SliderData } from '../components/SliderData';
import Or from '../components/Or';

const about = () => {
  return (
    <div className="bg-black text-white custom-img2 w-full bg-fill md:bg-contain">
      <Head>
        <title>
          Sky Mastering - About Sky Mastering and the brains behind the
          operation - Kri Samadhi
        </title>
        <meta
          name="description"
          content="Sky Mastering - About Sky Mastering and the brains behind the operation - Kri Samadhi"
          key="desc"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Hero
        heading={'About'}
        message="Some information about Kri Samadhi, the man behind Sky Mastering"
      />
      <Slider slides={SliderData} />
      <About />
      <ContactBanner />
      <RecentClients />
      <Or />
    </div>
  );
};

export default about;
