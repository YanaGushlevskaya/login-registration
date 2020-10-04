import React, {Component} from "react";
import Main from '../Main';
import Header from '../header/header';
import './App.scss';
import {withRouter} from 'react-router-dom';

class App extends Component {

  state = {
    users: [{email: 'r.halenko@indevlab.com'}],
    isLoggedIn: false
  }
  
  handleLoginSubmit = (e) => {
    e.preventDefault();
    const password = e.target.querySelector('#password').value;
    const rePassword = e.target.querySelector('#check-password').value;
    const email = e.target.querySelector('#email').value;
    this.loginValidation(email, password, rePassword);
    console.log(this.state.users);
  }

  loginValidation = (email, password, rePassword) => {
    const emailValidation = this.emailValidation(email);
    const passwordValidation = (() => {
      let isValidPassword;
      this.state.users.forEach(user => user.password === password && user.password === rePassword ?  isValidPassword = true : isValidPassword = false);
      return isValidPassword;
    })() ;

    if(emailValidation && passwordValidation) {
      alert('You are logged in!');
      this.props.history.push('/');
    } else if( !email.length || !password.length || !rePassword.length) {
      alert('Some fields are empty');
    } else if(!emailValidation) {
      alert('This email is not registered');
    } else if(!passwordValidation) {
      alert('Check your passwords');
    }
  }

  handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const password = e.target.querySelector('#password').value;
    const rePassword = e.target.querySelector('#check-password').value;
    const email = e.target.querySelector('#email').value;
    this.registrationValidation(email, password, rePassword);
    console.log(this.state.users);
  }
  
  registrationValidation = (email, password, rePassword) => {
    const emailValidation = this.emailValidation(email);
    const passwordValidation = password === rePassword ? true : alert('Check your passwords');

    if(emailValidation) {
      alert('Such email have been already registered');
      return;
    } else if( !email.length || !password.length || !rePassword.length) {
      alert('Some fields are empty');
    } else if(passwordValidation && !emailValidation) {
      this.registerNewUser(email, password);
      this.props.history.push('/');
    }
  }
  
  emailValidation = (email) => {
    let isRegistered;
    this.state.users.forEach(user => user.email === email ?  isRegistered = true : isRegistered = false);
    return isRegistered;
  }

  registerNewUser = (email, password) => {
    console.log('register');
    const newUser = {email, password};
    this.setState( {users: [...this.state.users, newUser]} );
    alert('You are successfully registered');
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <Main handleRegistrationSubmit = {this.handleRegistrationSubmit} handleLoginSubmit = {this.handleLoginSubmit}/>
      </div>
    );
  };
};

export default withRouter(App);
