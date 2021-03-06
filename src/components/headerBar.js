import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import{clearData} from '../actions'
import {clearAuthToken} from '../localStorage';
import './headerBar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    this.props.dispatch(clearData());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button  onClick={() => this.logOut()}>Log out</button>
        );
    }
    return (
      <header className="header-bar">
        <div className="dashboard-name">
          {this.props.name}
        </div>
        <div className='logoutB '>
          {logOutButton}
        </div>
      </header>
    );
  }
}



const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    loggedIn: state.auth.currentUser !== null,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
  }
};

export default connect(mapStateToProps)(HeaderBar);
