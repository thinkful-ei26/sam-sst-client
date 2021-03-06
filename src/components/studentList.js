import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions';
import {studentClicked, addStudent} from '../actions'
import './studentList.css';

class Students extends Component {

  componentDidMount() {
      this.props.dispatch(fetchStudents(this.props.userId))
  }

  render() {
    const students = this.props.studentList.map(student =>
      <li className="studentName" key={student.name}>    
          <button className="studentButton" onClick={() =>this.props.dispatch(studentClicked(student._id, student.name, student.goals))}>
            {student.name}
          </button>       
      </li>
    );
    return (
      <div className="stl">
        <button className="cool" onClick={() =>this.props.dispatch(addStudent())}>
          Add Student
        </button> 
        <div >
        <ul className="studentsListt">
        <div className='studentListHeader'>Students</div>

          {students}
        </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    studentList: state.studentReducer.students,
    userId: state.auth.currentUser.id
  }
}

export default connect(mapStateToProps)(Students);
