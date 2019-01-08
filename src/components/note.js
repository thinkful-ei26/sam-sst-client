import React, { Component } from 'react';
import './App.css';
import Login from './loginForm';
import User from './user';
import NoteForm from './noteForm';
import { connect } from 'react-redux';
import NoteList from './noteList';
import StudentForm from './studentForm';
import StudentList from './studentList';
import './note.css'


class Note extends Component {
  render() {
    return (
      <div className='singleNoteView'> 
      <div className='singleNoteDate'>Date: {this.props.noteDate}</div>
      <div>
        S: {this.props.s}<br/>
        </div>
        <div>
        O: {this.props.goal}:{this.props.o}% accuracy<br/>
        </div>
        <div>
        A: {this.props.a}<br/>
        </div>
        <div>
        P: {this.props.p}<br/>
        </div>
      </div>

    );
  }
}
const mapStateToProps = state => ({
  noteDate: state.note.currentNoteCreatedAt,
  s: state.note.currentNoteSubjective,
  o: state.note.currentNoteObjective,
  a: state.note.currentNoteAssessment,
  p: state.note.currentNotePlan,
  goal: state.student.currentStudentGoals,
});

export default connect(mapStateToProps)(Note);