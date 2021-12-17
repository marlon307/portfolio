import React, { useState } from 'react';
import type { NextPage } from 'next';
import cx from 'classnames';
import style from '../styles/global.module.scss';
import Carousel from '../components/Carousel/Carousel';
import Apresentation from '../components/Apresentation/Apresentation';
import Aboute from '../components/Aboute/Aboute';
import Project from '../components/PProject/Project';
import { Modal } from '../components/Modal';

const Home: NextPage = function Home() {
  const [pagestate, setPagestate] = useState(100);

  return (
    <>
      <main className={ style.main }>
        <Carousel position={ -pagestate }>
          <Aboute />
          <Apresentation />
          <Project />
        </Carousel>
      </main>
      <Modal />
      <footer className={ style.footer }>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={ () => setPagestate(0) }
                className={ cx(style.section, {
                  [style.active]: pagestate === 0,
                }) }
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={ () => setPagestate(100) }
                className={ cx(style.section, {
                  [style.active]: pagestate === 100,
                }) }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={ () => setPagestate(200) }
                className={ cx(style.section, {
                  [style.active]: pagestate === 200,
                }) }
              >
                Projetos
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Home;
