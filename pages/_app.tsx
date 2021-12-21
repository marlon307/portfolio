import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import image from '../assets/image.svg';

const MyApp = function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marlon</title>
        <meta name="description" content="Portfólio Marlon" />
        <meta property="og:title" content="Sobre - Marlon" />
        <meta property="og:description" content="Portfólio Marlon307" />
        <meta property="og:url" content="https://marlon307.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ image } />
        <meta name="twitter:url" content="https://twitter.com/_marlon307" />
        <meta name="linkedin:url" content="https://www.linkedin.com/in/marlon307/" />
        <meta name="marlon307:url" content="https://github.com/marlon307/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component { ...pageProps } />
    </>
  );
};

export default MyApp;
