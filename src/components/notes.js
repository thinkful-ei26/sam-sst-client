import React, { Component } from 'react';
import NoteForm from './noteForm';
import { connect } from 'react-redux';
import NoteList from './noteList';
import StudentForm from './studentForm';
import './notes.css'
import Note from './note';
import Chart from './chart';
import { stPushed, viewNotesPushed, addNote, deleteStudent, } from '../actions';

class Notes extends Component {

  dStu() {
    this.props.dispatch(deleteStudent(this.props.studentId, this.props.userId));   
  }

  render() {
    if (this.props.studentName === null) {
      return (
        <div >
          <h1 className='pleasePick'>Please pick or add a Student</h1>
          <StudentForm />
        </div>
      )
    }

    return (
      <div> 
        <h1 className='studentHeader'>
          {this.props.studentName}
        </h1>
        <button className="deleteStudent" onClick={() =>this.dStu()}>
          Delete Student
        </button>  
        {this.props.charTrue 
          ?<button className="viewNotesPushed, butt" onClick={() =>this.props.dispatch(viewNotesPushed())}>
              View Notes
            </button> 
          : <button className="stPushed, butt " onClick={() =>this.props.dispatch(stPushed())}>
              View Student Tracker
            </button> 
        } 
        <button className="addNote, butt" onClick={() =>this.props.dispatch(addNote())}>
          Add Note
        </button>  
        <div className='goalHeader'
          >Goal: {this.props.goal}
        </div>
        {this.props.charTrue 
          ? <Chart /> 
          : <div className='noteArea'>
              <div className='noteList'>
                <NoteList/>
              </div>
              <div className='noteForm'>
                {this.props.newNoteTrue
                  ? <Note/> 
                  : <NoteForm/>}
              </div>
            </div>
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  studentName: state.student.currentStudentName,
  studentId: state.student.currentStudent,
  goal: state.student.currentStudentGoals,
  newNoteTrue: state.note.currentNoteId,
  charTrue: state.chart.isChartActive,
  userId: state.auth.currentUser.id
});

export default connect(mapStateToProps)(Notes);