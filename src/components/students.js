import React, { Component } from 'react';
import './App.css';
import Login from './loginForm';
import User from './user';
import NoteForm from './noteForm';
import { connect } from 'react-redux';
import NoteList from './noteList';
import StudentForm from './studentForm';
import StudentList from './studentList';
import './students.css'

class Student extends Component {
  render() {
    return (
      <div className='studentss'> 
        {/* <StudentForm/> */}
        <StudentList/>

      </div>

    );
  }
}

export default connect()(Student);