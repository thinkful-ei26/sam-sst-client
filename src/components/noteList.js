import React, { Component } from 'react';
import './note.css';
import { connect } from 'react-redux';
import {noteClicked, } from '../actions'
import moment from 'moment'
import './noteList.css';

class Notes extends Component {

  noteListButton(note){
      this.props.dispatch(noteClicked(note._id, note.subjective, note.objective, note.assessment, note.plan, note.createdAt))
  }

  render() {
    const notes = this.props.noteList.map(note =>
      <li className="noteListTime">   
        <button className="noteListButton" onClick={() => this.noteListButton(note)}>                          
          {moment(note.createdAt).format("MMM Do YYYY")}
        </button>
      </li>
    );

    return (
      <div className="Notes">
        <h4>Notes</h4>
        <ul className='notesListt'>
          {notes}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    noteList: state.studentReducer.students.find((students) => students._id.toString() === state.student.currentStudent).notes,
    studentId: state.student.currentStudent,
    userId: state.auth.currentUser.id,
  }
}

export default connect(mapStateToProps)(Notes);
