import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import style from './style.module.scss';
import Nav from './Nav';

const Header = function Header() {
  const [width, setWidth] = useState(0);
  const [statemenu, setStateMenu] = useState(false);

  useEffect(() => {
    function event() {
      setWidth(window.innerWidth);
    }
    setWidth(window.innerWidth);
    window.addEventListener('resize', event);
  }, []);

  function openMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setStateMenu(!statemenu);
  }

  return (
    <header className={ style.header }>
      <div className={ style.contheader }>
        <div>
          <Link href="#home">
            <a>
              <span>MARLON</span>
              <span>307</span>
            </a>
          </Link>
        </div>
        { width > 725 && <Nav /> }
        <a
          href="/"
          className={ style.menuhd }
          onClick={ openMenu }
        >
          <div className={ style.icon }>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 13.5H11C10.7348 13.5 10.4804 13.6054 10.2929 13.7929C10.1054 13.9804 10 14.2348 10 14.5C10 14.7652 10.1054 15.0196 10.2929 15.2071C10.4804 15.3946 10.7348 15.5 11 15.5H21C21.2652 15.5 21.5196 15.3946 21.7071 15.2071C21.8946 15.0196 22 14.7652 22 14.5C22 14.2348 21.8946 13.9804 21.7071 13.7929C21.5196 13.6054 21.2652 13.5 21 13.5ZM21 8.5H3C2.73478 8.5 2.48043 8.60536 2.29289 8.79289C2.10536 8.98043 2 9.23478 2 9.5C2 9.76522 2.10536 10.0196 2.29289 10.2071C2.48043 10.3946 2.73478 10.5 3 10.5H21C21.2652 10.5 21.5196 10.3946 21.7071 10.2071C21.8946 10.0196 22 9.76522 22 9.5C22 9.23478 21.8946 8.98043 21.7071 8.79289C21.5196 8.60536 21.2652 8.5 21 8.5Z" />
            </svg>
          </div>
          <div className={ cx(style.back, { [style.activemn]: statemenu }) } />
          <div className={ cx(style.dropmn, { [style.activemn]: statemenu }) }>
            { width < 726 && <Nav /> }
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
