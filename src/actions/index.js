import { API_BASE_URL } from '../config'

export const fetchUserSuccess = (data) => {
    return {
        type:'FETCH_USER_SUCCESS',
        data
    }
}


export const fetchUser = () => dispatch => {
    fetch(`${API_BASE_URL}/user`)
    .then(res => res.json())
    .then(data => dispatch(fetchUserSuccess(data)))
    .catch(error => console.log(error))
    
    
}

export const fetchNotesSuccess = (data) => {
    return {
        type:'FETCH_NOTES_SUCCESS',
        data
    }
}


export const fetchNotes = () => dispatch => {
    fetch(`${API_BASE_URL}/api/notes`)
    .then(res => res.json())
    .then(data => dispatch(fetchNotesSuccess(data)))
    .catch(error => console.log(error))
    
    
}

export const fetchStudentsSuccess = (data) => {
    return {
        type:'FETCH_STUDENT_SUCCESS',
        data
    }
}


export const fetchStudents = () => dispatch => {
    fetch(`${API_BASE_URL}/api/students`)
    .then(res => res.json())
    .then(data => dispatch(fetchStudentsSuccess(data)))
    .catch(error => console.log(error))
    
    
}

export const postStudent = (values) => dispatch => {
    return fetch(`${API_BASE_URL}/api/students`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const postNote = (values) => dispatch => {
    return fetch(`${API_BASE_URL}/api/notes`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
