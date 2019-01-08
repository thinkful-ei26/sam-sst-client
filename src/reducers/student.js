const initalState = {
    currentStudent: null,
    currentStudentName: null,
    currentStudentGoals: null
    
}

const student = (state = initalState, action) => {
    switch (action.type) {
        case 'STUDENT_CLICKED':
        return {
            ...state, 
            currentStudent: action.id,
            currentStudentName: action.name,
            currentStudentGoals: action.goals    }
            case 'ADD_STUDENT':
            return {
                ...state, 
               ...initalState}
               case 'CLEAR_DATA':
        return {
                    ...initalState, 
                    
                }

        default:
          return state
    }
}

export default student;