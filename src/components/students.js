import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import StudentList from './studentList';
import './students.css'

class Student extends Component {
  render() {
    return (
      <section className='studentss'> 
        <StudentList/>
      </section>
    );
  }
}

export default connect()(Student);