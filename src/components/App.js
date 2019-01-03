import React, { Component } from 'react';
import './App.css';
import Login from './loginForm';
import User from './user';
import NoteForm from './noteForm';
import { connect } from 'react-redux';
import NoteList from './noteList';
import StudentForm from './studentForm';
import StudentList from './studentList';


class App extends Component {
  render() {
    return (
      <div> 
        <User/>
        <NoteList/>
        <NoteForm/>
        <StudentForm/>
        <StudentList />

      </div>

    );
  }
}

export default connect()(App);
