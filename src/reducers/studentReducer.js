const initalState = {
    students: []
    
}

const studentReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'FETCH_STUDENT_SUCCESS':
        return {
            ...state, 
            students: action.data    }

        default:
          return state
    }
}

export default studentReducer;