import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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

function MyApp({ Component, pageProps }) {
  useNormalScrollRoutes();
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
