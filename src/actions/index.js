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
export const studentClicked = (id, name, goals) => {
    return {
        type:'STUDENT_CLICKED',
        id,
        name,
        goals
    }
}

export const noteClicked = (id, subjective, objective, assessment, plan, createdAt) => {
    return {
        type:'NOTE_CLICKED',
        id,
        subjective,
        objective,
        assessment,
        plan,
        createdAt
    }
}

export const addNote = () => {
    return {
        type:'ADD_NOTE',  
    }
}
export const addStudent = () => {
    return {
        type:'ADD_STUDENT',  
    }
}

export const stPushed = () => {
    return {
        type:'ST_PUSHED',  
    }
}
export const viewNotesPushed = () => {
    return {
        type:'VIEW_NOTES_PUSHED',  
    }
}



export const fetchNotes = (userId, studentId) => dispatch => {
    fetch(`${API_BASE_URL}/api/notes/${userId}/${studentId}`)
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

// use this way
export const fetchStudents = (userId) => dispatch => {
    fetch(`${API_BASE_URL}/api/students/${userId}`)
    .then(res => res.json())
    .then(data => dispatch(fetchStudentsSuccess(data)))
    .catch(error => console.log(error))
    
    
}

export const postStudent = (values, userId) => dispatch => {
    return fetch(`${API_BASE_URL}/api/students/${userId}`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const postNote = (values, userId, studentId) => dispatch => {
    return fetch(`${API_BASE_URL}/api/notes/${userId}/${studentId}`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}




