import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import './note.css'
import moment from 'moment'

class Note extends Component {
  render() {
    return (
      <div className='singleNoteView'> 
        <div className='singleNoteDate'>
          Date: {moment(this.props.noteDate).format("MMM Do YYYY")}
        </div>
        <div>
          <div className='soap'>
            S: {this.props.s}<br/>
          </div>
          <div className='soap'>
            O: {this.props.goal}:{this.props.o}% accuracy<br/>
          </div>
          <div className='soap'>
            A: {this.props.a}<br/>
          </div>
          <div className='soap'>
            P: {this.props.p}<br/>
          </div>
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