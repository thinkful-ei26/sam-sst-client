import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landingPage.css';
import LoginForm from './loginForm';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
      return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h1>Welcome to SLP Student Tracker</h1>
      <div className='about'>
        <h2>About</h2>
        <p> 
          Use this web app to easily keep track of students progress.
        </p>
        <p>
          View progress of students to determine if treatment is working.
        </p>
        <p>
          Not Sure? Check it out with username: demoteacher,  password: 0123456789
        </p>
      </div>
      <div className='logIn'>
        <LoginForm />
        <div className='link'>
          <Link className='link' to="/register">Create an Account</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
