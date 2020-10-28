import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import './App.scss';
import Header from '../layout/header/Header';
import Home from '../pages/Home/Home';
import Firebase, { FirebaseContext } from '../components/Firebase';

class App extends Component {

  state = {
    currentUser: { name: '', email: ''},
    isLoggedIn: false
  }

  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <div className="App">
          <Header isLoggedIn={this.state.isLoggedIn} />
          <Home />
        </div>
      </FirebaseContext.Provider>
    );
  };
};

export default withRouter(App);
