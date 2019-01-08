import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty } from '../validators';
import { API_BASE_URL } from '../config'
import {postNote, fetchStudents} from '../actions'
import { connect } from 'react-redux';
import './noteForm.css'
import {reset} from 'redux-form';

export class NoteForm extends React.Component {
    onSubmit(values) {

        // console.log(this.props.userId);
        // const newValues = {...values, userId:this.props.userId}
        // this.props.dispatch(postStudent(newValues, this.props.userId))

        const newValues = {...values, userId: this.props.userId, studentId:this.props.studentId, }
        // console.log(newValues);
        this.props.dispatch(postNote(newValues, this.props.userId, this.props.studentId))

            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            // .then(() => console.log('Submitted with values', values))
            .then(() => this.props.dispatch(fetchStudents(this.props.userId)))
            .then(() => this.props.dispatch(reset('note')))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Note submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

        return (
            
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
                <label className='noteFormLabel' htmlFor="subjective">Subjective</label>
                <Field
                    name="subjective"
                    element="textarea"
                    component={Input}
                    // label="Subjective"
                    validate={[required, nonEmpty]}
                />
                <label className='noteFormLabel' htmlFor="objective">Objective <br/>% accuracy of Goal: {this.props.studentGoal}</label>
                <Field
                    name="objective"
                    type="number"
                    component={Input}
                    // label="Objective"
                    validate={[required, nonEmpty]}
                />
                <label className='noteFormLabel' htmlFor="assessment">Assessment</label>
                <Field
                    name="assessment"
                    element="textarea"
                    component={Input}
                    // label="Assessment"
                    validate={[required, nonEmpty]}
                />
                <label className='noteFormLabel' htmlFor="plan">Plan</label>
                <Field
                    name="plan"
                    element="textarea"
                    component={Input}
                    // label="Plan"
                    validate={[required, nonEmpty]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit Note
                </button>
            </form>
        );
    }
}
const mapStateToProps = state => {
    // console.log('>>qwerty>>>', state)
    
    return {
        studentId: state.student.currentStudent,
        studentGoal: state.student.currentStudentGoals,
        userId: state.auth.currentUser.id,
        
        
        
    };
};
NoteForm = connect(mapStateToProps)(NoteForm);

export default reduxForm({
    form: 'note',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('note', Object.keys(errors)[0]))
})(NoteForm);
