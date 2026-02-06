import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Clients from '../components/Clients';
import Slider from '../components/Slider';
import ContactBanner from '../components/ContactBanner';
import Or from '../components/Or';
import { SliderData } from '../data/SliderData';

const SITE_URL = 'https://skyaudiomastering.com';
const SITE_NAME = 'Sky Mastering';
const DEFAULT_IMAGE = `${SITE_URL}/logo.jpg`;

const AboutPage = () => {
  const pageTitle = 'About Sky Mastering & Kri Samadhi - Professional Audio Engineer';
  const pageDescription = 'Learn about Sky Mastering and Kri Samadhi, the audio engineer behind world-class mixing and mastering services. Based in Asheville, NC, serving clients worldwide.';
  const pageUrl = `${SITE_URL}/about`;

  // JSON-LD Structured Data for the person/professional
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/about#person`,
        name: 'Kri Samadhi',
        jobTitle: 'Audio Mastering Engineer',
        worksFor: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        url: 'https://krisamadhi.com',
        sameAs: [
          'https://www.facebook.com/djkri',
          'https://www.instagram.com/krisamadhi',
          'https://soundcloud.com/krisamadhi',
          'https://krisamadhi.com',
        ],
        knowsAbout: [
          'Audio Mastering',
          'Audio Mixing',
          'Music Production',
          'Analog Audio Equipment',
          'Psychedelic Trance',
          'Electronic Music',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        about: {
          '@id': `${SITE_URL}/about#person`,
        },
        description: pageDescription,
      },
    ],
  };

  return (
    <div className="bg-black text-white custom-img2 w-full bg-fill md:bg-contain">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} key="desc" />
        <meta name="keywords" content="Kri Samadhi, audio engineer, mastering engineer, mixing engineer, Asheville audio, music producer, psychedelic trance, T.O.U.C.H. Samadhi" />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
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
        heading={'About'}
        message="Some information about Kri Samadhi, the man behind Sky Mastering"
      />
      <Slider slides={SliderData} />
      <About />
      <ContactBanner />
      <Clients />
      <Or />
    </div>
  );
};

export default AboutPage;
