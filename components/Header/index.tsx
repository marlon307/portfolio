import React from 'react';
import style from './style.module.scss';

const Header = function Header() {
  return (
    <header className={ style.header }>
      <nav>
        <ul>
          <li>
            <a href="/">MARLON</a>
          </li>
          <li>Menu</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
