import {combineReducers} from 'redux'
import userReducer from './userReducer'
// import noteReducer from './noteReducer'
import studentReducer from './studentReducer'
import student from './student'
import note from './note'
import auth from './auth'
import protectedData from './protectedData'
import {reducer as formReducer} from 'redux-form'
import chart from './chart'

const rootReducer = combineReducers({
    form: formReducer,
    userReducer,
    // noteReducer,
    studentReducer,
    auth,
    protectedData,
    student,
    note,
    chart


})

export default rootReducer;