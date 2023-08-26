import React from 'react';
import '../styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { Modal } from '../components/Modal';

const MyApp = function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>marlon307</title>
        <meta name="description" content="Sou um desenvolvedor full stack e aqui apresento minha carreira e projetos." />
        <meta property="og:title" content="marlon307" />
        <meta property="og:description" content="Sou um desenvolvedor full stack e aqui apresento minha carreira e projetos." />
        <meta property="og:url" content="https://portfolio-marlon307.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/image.png" />
        <meta name="googlebot" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta property="og:description" content="Sou um desenvolvedor full stack e aqui apresento minha carreira e projetos." />
        <meta name="twitter:url" content="https://twitter.com/_marlon307" />
        <meta name="linkedin:url" content="https://www.linkedin.com/in/marlon307/" />
        <meta name="github:url" content="https://github.com/marlon307/" />
        <meta name="author" content="marlon307" />
        <meta name="title" content="marlon307" />
        <meta name="keywords" content="Marlon, marlon, Marlon307, marlon307, _marlon307" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component { ...pageProps } />
      <Modal />
    </>
  );
};

export default MyApp;
