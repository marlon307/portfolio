import React, { useState } from 'react';
import type { NextPage } from 'next';
import cx from 'classnames';
import style from '../styles/global.module.scss';
import Carousel from '../components/Carousel/Carousel';
import Apresentation from '../components/Apresentation/Apresentation';
import Aboute from '../components/Aboute/Aboute';

const Home: NextPage = function Home() {
  const [pagestate, setPagestate] = useState(0);

  return (
    <>
      <main className={ style.main }>
        <Carousel position={ -pagestate }>
          <Apresentation />
          <Aboute />
        </Carousel>
      </main>
      <footer className={ style.footer }>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={ () => setPagestate(100) }
                className={ cx(style.section, {
                  [style.active]: pagestate === 100,
                }) }
              >
                Sobre
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
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={ () => setPagestate(300) }
                className={ cx(style.section, {
                  [style.active]: pagestate === 300,
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
