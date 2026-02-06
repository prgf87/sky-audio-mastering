import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
import RecentClients from '../components/Clients';
import Or from '../components/Or';
import Contact from '../components/Contact';

const SITE_URL = 'https://skyaudiomastering.com';
const SITE_NAME = 'Sky Mastering';
const DEFAULT_IMAGE = `${SITE_URL}/logo.jpg`;

const ContactPage = () => {
  const pageTitle = 'Contact Sky Mastering - Get a Free Quote for Audio Mastering';
  const pageDescription = 'Contact Sky Mastering for professional audio mixing and mastering services. Get a free quote for your music project. Remote services available worldwide.';
  const pageUrl = `${SITE_URL}/contact`;

  // JSON-LD Structured Data for contact page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    mainEntity: {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      email: 'Skymastering1@gmail.com',
      url: SITE_URL,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'English',
        areaServed: 'Worldwide',
      },
    },
  };

  return (
    <div className="bg-black text-white custom-img2 w-full bg-fill md:bg-contain">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} key="desc" />
        <meta name="keywords" content="contact audio mastering, mastering quote, mixing quote, audio services contact, Sky Mastering contact, music mastering inquiry" />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={DEFAULT_IMAGE} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={DEFAULT_IMAGE} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sky Mastering - Kri Samadhi" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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

export default ContactPage;
