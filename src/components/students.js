import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import StudentList from './studentList';
import './students.css'

class Student extends Component {
  render() {
    return (
      <div className='studentss'> 
        <StudentList/>
      </div>

    );
  }
}

export default connect()(Student);