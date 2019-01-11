import {combineReducers} from 'redux'
import userReducer from './userReducer'
import studentReducer from './studentReducer'
import student from './student'
import note from './note'
import auth from './auth'
import {reducer as formReducer} from 'redux-form'
import chart from './chart'

const rootReducer = combineReducers({
    form: formReducer,
    userReducer,
    studentReducer,
    auth,
    student,
    note,
    chart


})

export default rootReducer;