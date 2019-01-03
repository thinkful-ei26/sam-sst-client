import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty } from '../validators';
import { API_BASE_URL } from '../config'
import { connect } from 'react-redux';
import {postStudent, fetchStudents} from '../actions'


export class StudnetForm extends React.Component {
    onSubmit(values) {
        console.log(values);
        this.props.dispatch(postStudent(values))

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
            .then(() => this.props.dispatch(fetchStudents()))
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
                    Studnet submitted successfully
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
                <Field
                    name="name"
                    type="text"
                    component={Input}
                    label="Student Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="goals"
                    type="text"
                    component={Input}
                    label="Goals"
                    validate={[required, nonEmpty]}
                />
                
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Add Student
                </button>
            </form>
        );
    }
}
StudnetForm = connect()(StudnetForm);


export default reduxForm({
    form: 'student',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('student', Object.keys(errors)[0]))
})(StudnetForm);

