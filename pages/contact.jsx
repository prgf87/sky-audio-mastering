import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import RecentClients from '../components/Clients';
import Or from '../components/Or';

const contact = () => {
  return (
    <div className="bg-black bg-cover text-white">
      <Head>
        <title>Sky Mastering</title>
        <meta name="Sky Mastering App" content="Created by Pedro Ferreira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading={'Contact'}
        message="Submit the form below to talk to us and obtain a free quote."
      />
      <Contact />
      <RecentClients />
      <Or />
    </div>
  );
};

export default contact;
