import Head from 'next/head';
import { Raleway, Open_Sans } from 'next/font/google';
import '../styles/globals.css';
import Layout from '../components/Layout';

/* Self-hosted Google fonts: no render-blocking third-party CSS request,
   fonts served from the same domain with long cache + preloaded.
   Open Sans is the successor of the retired Droid Sans (metrically
   compatible, same designer) and is visually near-identical. */
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-raleway',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-droid-sans',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} ${openSans.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
