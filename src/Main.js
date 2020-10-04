import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/home';
import Login from './login/login';
import Registration from './registration/registration';

const Main = (props) => {

  const {handleRegistrationSubmit, handleLoginSubmit} = props;

  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={() => <Login handleLoginSubmit = {handleLoginSubmit}/>}></Route>
      <Route exact path='/register' component={() => <Registration handleRegistrationSubmit = {handleRegistrationSubmit}/>}></Route>
    </Switch>
  );
}

export default Main;
