import {combineReducers} from 'redux'
import userReducer from './userReducer'
import noteReducer from './noteReducer'
import studentReducer from './studentReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer,
    userReducer,
    noteReducer,
    studentReducer

})

export default rootReducer;