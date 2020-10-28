import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from '../../../routes';
import Home from '../../../pages/Home/Home';
import { Callback } from './Callback/Callback';
import { Logo } from '../../../components/Logo/Logo';
import { User } from '../../../services/User/User';
import './Header-top.scss';

export const HeaderTop = ({ isLoggedIn }) => {
  return (
    <Router>
      <div className='header-top'>
        <Callback />
        <Logo />
        <User isLoggedIn = { isLoggedIn }/>
      </div>
    </Router>
  );
};
