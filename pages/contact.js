import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import RecentClients from '../components/Clients';
import Or from '../components/Or';
import ContactForm from '../components/ContactForm';

const contact = () => {
  return (
    <div className="bg-black text-white custom-img2 w-full bg-fill md:bg-contain">
      <Head>
        <title>Sky Audio Mastering - Contact</title>
        <meta
          name="description"
          content="Sky Audio Mastering - Contact Form"
          key="desc"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Hero
        heading={'Contact'}
        message="Submit the form below to talk to us and obtain a free quote."
      />

      {/* <Contact /> */}
      <ContactForm />
      <RecentClients />
      <Or />
    </div>
  );
};

export default contact;
