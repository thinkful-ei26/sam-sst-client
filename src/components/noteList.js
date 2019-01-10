import React, { Component } from 'react';
import './note.css';
import { connect } from 'react-redux';
// import { fetchNotes } from '../actions';
import {noteClicked, } from '../actions'
import './noteList.css';



class Notes extends Component {

componentDidMount() {
    // this.props.dispatch(fetchNotes(this.props.userId, this.props.studentId))
}

  render() {
    const notes = this.props.noteList.map(note =>
        <li className="noteListTime">   
        <button className="noteListButton" onClick={() =>this.props.dispatch(noteClicked(note._id, note.subjective, note.objective, note.assessment, note.plan, note.createdAt))}>                          
        {note.createdAt}
        </button>
        </li>
    );
    return (
      <div className="Notes">
      <h4>Notes</h4>
      {/* <button className="addNote" onClick={() =>this.props.dispatch(addNote())}>Add Note</button>     */}
      <ul className='notesListt'>
       {notes}
       </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
    // console.log(state);
    return{
        noteList: state.studentReducer.students.find((students) => students._id.toString() === state.student.currentStudent).notes,
        studentId: state.student.currentStudent,
        userId: state.auth.currentUser.id,
    }
}

export default connect(mapStateToProps)(Notes);
