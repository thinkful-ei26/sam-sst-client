import React, { Component } from 'react';
import './user.css';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/';



class User extends Component {
componentDidMount() {
    this.props.dispatch(fetchUser())
}

  render() {
    return (
      <div className="User">
       <h1>Hello {this.props.name} </h1>
       <h1>{this.props.status}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
    // console.log(state);
    return{
        name: state.userReducer.name,
        status: state.userReducer.status
    }
}

export default connect(mapStateToProps)(User);
