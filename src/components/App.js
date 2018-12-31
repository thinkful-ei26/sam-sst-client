import React, { Component } from 'react';
import './App.css';
import Login from './login';
import User from './user';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div> 
        <User/>
      </div>

    );
  }
}

export default connect()(App);
