import React from 'react';
import { HeaderTop } from './Header-top/Header-top';
import { Navigation } from './Navigation/Navigation';
import './Header.scss';

const Header = ({ isLoggedIn }) => {
  return (
    <header className='header'>
        <div className='container'>
          <HeaderTop isLoggedIn = { isLoggedIn } />
          <Navigation />
        </div>
    </header>
  );
};

export default Header;
