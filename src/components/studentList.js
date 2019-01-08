import React, { Component } from 'react';
// import './studnet.css';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions';
import {Link} from 'react-router-dom'
import {studentClicked, addStudent} from '../actions'
import './studentList.css';
import student from '../reducers/student';



class Students extends Component {

componentDidMount() {
    this.props.dispatch(fetchStudents(this.props.userId))
}
// onSubmit(values) {
//     return this.props.dispatch(studentClicked());
// }
  render() {
    const students = this.props.studentList.map(studnet =>
        <li className="studnetName" key={student.name}>    
           <button className="studentButton" onClick={() =>this.props.dispatch(studentClicked(studnet._id, studnet.name, studnet.goals))}>
          {/* <button Submit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )} > */}
          {studnet.name}
                </button>       
           {/* <Link to={'/'+studnet._id}> {studnet.name}</Link> */}
        </li>
    );
    return (
        <div className="stl">
        <button className="addStudent, cool" onClick={() =>this.props.dispatch(addStudent())}>Add Studnet</button> 
      
      <h4>Students</h4>
      <div >
      {/* <h4>Students</h4> */}
      <ul className="studentsListt">
       {students}
       </ul>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    // console.log('lll',state.studentReducer.students);
    return{
        studentList: state.studentReducer.students,
        userId: state.auth.currentUser.id
        
    }
}

export default connect(mapStateToProps)(Students);
