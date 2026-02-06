import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleAnalytics, { pageview } from '../components/GoogleAnalytics';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      document.documentElement.classList.add('normal-scroll');
    });
    router.events.on('routeChangeComplete', () => {
      document.documentElement.classList.remove('normal-scroll');
    });
  }, []);
}

function useGoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}

function MyApp({ Component, pageProps }) {
  useNormalScrollRoutes();
  useGoogleAnalytics();

  return (
    <>
      <GoogleAnalytics />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
