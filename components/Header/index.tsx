import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';

const Header = function Header() {
  return (
    <header className={ style.header }>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>{ '</>' }</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
