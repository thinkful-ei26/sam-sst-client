import React, { Component } from 'react';
import './note.css';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';



class Notes extends Component {

componentDidMount() {
    this.props.dispatch(fetchNotes())
}

  render() {
    const notes = this.props.noteList.map(note =>
        <li>                                
            {note.createdAt}
        </li>
    );
    return (
      <div className="Notes">
      <ul>Notes
       {notes}
       </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state.noteReducer.notes);
    return{
        noteList: state.noteReducer.notes
    }
}

export default connect(mapStateToProps)(Notes);
