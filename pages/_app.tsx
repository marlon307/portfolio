import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

const MyApp = function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marlon</title>
        <meta name="description" content="Portfólio Marlon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component { ...pageProps } />
    </>
  );
};

export default MyApp;
