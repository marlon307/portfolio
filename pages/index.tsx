import React, { useState } from 'react';
import type { NextPage } from 'next';
import cx from 'classnames';
import style from '../styles/Home.module.scss';
import Apresentation from '../components/Apresentation/Apresentation';

const Home: NextPage = function Home() {
  const [pagestate, setPagestate] = useState(1);

  return (
    <>
      <main className={ style.main }>
        <Apresentation />
      </main>
      <footer className={ style.footer }>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={ () => setPagestate(1) }
                className={ cx(style.section, {
                  [style.active]: pagestate === 1,
                }) }
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={ () => setPagestate(2) }
                className={ cx(style.section, {
                  [style.active]: pagestate === 2,
                }) }
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={ () => setPagestate(3) }
                className={ cx(style.section, {
                  [style.active]: pagestate === 3,
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
