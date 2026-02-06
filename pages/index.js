import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Clients from '../components/Clients';
import Services from '../components/Services';
import ContactBanner from '../components/ContactBanner';
import Or from '../components/Or';
import { SliderData } from '../data/SliderData';
import { ClientsData } from '../data/ClientsData';

const SITE_URL = 'https://skyaudiomastering.com';
const SITE_NAME = 'Sky Mastering';
const DEFAULT_IMAGE = `${SITE_URL}/logo.jpg`;

const Home = () => {
  const pageTitle = 'Sky Mastering - Professional Online Audio Mixing & Mastering Services';
  const pageDescription = 'Professional online audio mixing and mastering services by Sky Mastering. Specializing in streaming, audiophile, and large PA analog mastering. Remote services available worldwide.';

  // JSON-LD Structured Data for the business
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: DEFAULT_IMAGE,
        image: DEFAULT_IMAGE,
        description: pageDescription,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Asheville',
          addressRegion: 'NC',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 35.5951,
          longitude: -82.5515,
        },
        priceRange: '$$',
        serviceArea: {
          '@type': 'Place',
          name: 'Worldwide (Remote Services)',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Audio Mastering Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Stereo Mastering',
                description: 'Professional stereo mastering at 48kHz, 24-bit WAV',
              },
              price: '80.00',
              priceCurrency: 'USD',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Stem Mastering',
                description: 'Professional stem mastering up to 8 stems',
              },
              price: '120.00',
              priceCurrency: 'USD',
            },
          ],
        },
        sameAs: [
          'https://www.facebook.com/Skyaudiomastering',
          'https://www.instagram.com/skymastering',
          'https://krisamadhi.com',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: pageTitle,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        about: {
          '@id': `${SITE_URL}/#organization`,
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
        <meta name="keywords" content="audio mastering, mixing services, online mastering, stem mastering, music production, analog mastering, professional mastering, remote mixing, Asheville mastering studio" />

        {/* Canonical URL */}
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={DEFAULT_IMAGE} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
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
        heading="Welcome to Sky Mastering"
        message="Specializing in Streaming, Audiophile and Large PA Analog Mastering"
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
