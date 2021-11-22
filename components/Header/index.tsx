import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import Link from 'next/link';
import style from './style.module.scss';

const Header = function Header() {
  const [section, setSection] = useState('home');

  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('/#')) {
      setSection(router.asPath.replace('/#', ''));
    }
  }, [router]);

  return (
    <header className={ style.header }>
      <div>
        <Link href="#home">
          <a>
            <span>MARLON</span>
            <span>307</span>
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="#home"
              className={ cx(section === 'home' && style.active) }
              onClick={ () => setSection('home') }
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={ cx(section === 'about' && style.active) }
              onClick={ () => setSection('about') }
            >
              SOBRE
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={ cx(section === 'skills' && style.active) }
              onClick={ () => setSection('skills') }
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#project"
              className={ cx(section === 'project' && style.active) }
              onClick={ () => setSection('project') }
            >
              PROJETOS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={ cx(section === 'contact' && style.active) }
              onClick={ () => setSection('contact') }
            >
              CONTATO
            </a>
          </li>
        </ul>
      </nav>
      <div className={ style.menuhd }>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 13.5H11C10.7348 13.5 10.4804 13.6054 10.2929 13.7929C10.1054 13.9804 10 14.2348 10 14.5C10 14.7652 10.1054 15.0196 10.2929 15.2071C10.4804 15.3946 10.7348 15.5 11 15.5H21C21.2652 15.5 21.5196 15.3946 21.7071 15.2071C21.8946 15.0196 22 14.7652 22 14.5C22 14.2348 21.8946 13.9804 21.7071 13.7929C21.5196 13.6054 21.2652 13.5 21 13.5ZM21 8.5H3C2.73478 8.5 2.48043 8.60536 2.29289 8.79289C2.10536 8.98043 2 9.23478 2 9.5C2 9.76522 2.10536 10.0196 2.29289 10.2071C2.48043 10.3946 2.73478 10.5 3 10.5H21C21.2652 10.5 21.5196 10.3946 21.7071 10.2071C21.8946 10.0196 22 9.76522 22 9.5C22 9.23478 21.8946 8.98043 21.7071 8.79289C21.5196 8.60536 21.2652 8.5 21 8.5Z" /></svg>
      </div>
    </header>
  );
};

export default Header;
