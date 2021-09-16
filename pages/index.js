import { Fragment } from 'react';
import About from '../components/homepage/about';
import Contact from '../components/homepage/contact';
import Hero from '../components/homepage/hero';

import Head from 'next/head';
import Script from 'next/script';

function HomePage() {
  return (
    <Fragment>
      <Script src='https://friconix.com/cdn/friconix.js' />
      <Head>
        <title>Onur Köksüyer</title>
      </Head>
      <Hero />
      <About />
      <Contact />
    </Fragment>
  );
}

export default HomePage;
