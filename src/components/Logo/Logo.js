import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';
import logo from '../../assets/images/logo.png';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <Link className='logo__link' to={ ROUTES.HOME }>
        <img className='logo__image' src={ logo } alt='bakery shop'></img>
      </Link>
    </div>
  )
}
