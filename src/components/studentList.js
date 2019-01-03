import React, { Component } from 'react';
// import './studnet.css';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions';



class Students extends Component {

componentDidMount() {
    this.props.dispatch(fetchStudents())
}

  render() {
    const students = this.props.studentList.map(studnet =>
        <li>                                
            {studnet.name}
        </li>
    );
    return (
      <div className="students">
      <ul>Students
       {students}
       </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state.studentReducer.students);
    return{
        studentList: state.studentReducer.students
    }
}

export default connect(mapStateToProps)(Students);
