import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty } from '../validators';
import { API_BASE_URL } from '../config'
import {postNote, fetchNotes} from '../actions'
import { connect } from 'react-redux';

export class NoteForm extends React.Component {
    onSubmit(values) {
        console.log(values);
        this.props.dispatch(postNote(values))

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
            .then(() => this.props.dispatch(fetchNotes()))
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
                <Field
                    name="subjective"
                    type="text"
                    component={Input}
                    label="Subjective"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="objective"
                    type="text"
                    component={Input}
                    label="Objective"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="assessment"
                    element="textarea"
                    component={Input}
                    label="Assessment"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="plan"
                    type="text"
                    component={Input}
                    label="Plan"
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
NoteForm = connect()(NoteForm);

export default reduxForm({
    form: 'note',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('note', Object.keys(errors)[0]))
})(NoteForm);
