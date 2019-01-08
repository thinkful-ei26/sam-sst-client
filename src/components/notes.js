import React, { Component } from 'react';
import './App.css';
import Login from './loginForm';
import User from './user';
import NoteForm from './noteForm';
import { connect } from 'react-redux';
import NoteList from './noteList';
import StudentForm from './studentForm';
import StudentList from './studentList';
import './notes.css'
import Note from './note';
import Chart from './chart';
import { stPushed, viewNotesPushed } from '../actions';


class Notes extends Component {

  // let charty = <div>
  //         <div className='noteList'>
  //         <NoteList/>
  //         </div>
  //         <div className='noteForm'>
  //           {this.props.newNoteTrue ? <Note/> : <NoteForm/>}
  //         </div>
  //       </div>;
  // if (this.props.charTrue) {
  //   <Chart />
  // }
  render() {
    if (this.props.studentName === null) {
      return (
        <div >
        <h1 className='pleasePick'>Please pick or add a Studnet</h1>
        <StudentForm />
        </div>
      )
    }
    return (
      <div> 
        <h1 className='studentHeader'>{this.props.studentName}
          <button className="stPushed, butt " onClick={() =>this.props.dispatch(stPushed())}>View Student Tracker</button> 
          <button className="viewNotesPushed, butt" onClick={() =>this.props.dispatch(viewNotesPushed())}>View Notes</button>    
        </h1>
        <h3 className='goalHeader'>Goal: {this.props.goal}</h3>
{this.props.charTrue ?<Chart /> :
        <div className='noteArea'>
          <div className='noteList'>
          <NoteList/>
          </div>
          <div className='noteForm'>
            {this.props.newNoteTrue ? <Note/> : <NoteForm/>}
          </div>
        </div>
}
      </div>

    );
  }
}
const mapStateToProps = state => ({
  studentName: state.student.currentStudentName,
  goal: state.student.currentStudentGoals,
  newNoteTrue: state.note.currentNoteId,
  charTrue: state.chart.isChartActive
});

export default connect(mapStateToProps)(Notes);