import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import style from './style.module.scss';

const Nav = function Nav() {
  const [section, setSection] = useState('home');

  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('/#')) {
      setSection(router.asPath.replace('/#', ''));
    }
  }, [router]);
  return (
    <nav className={ style.nav }>
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
            href="#skills"
            className={ cx(section === 'skills' && style.active) }
            onClick={ () => setSection('skills') }
          >
            SKILLS
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
  );
};

export default Nav;
