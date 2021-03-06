const initalState = {
    currentNoteId: null,
    currentNoteSubjective: null,
    currentNoteObjective: null,
    currentNoteAssessment: null,
    currentNotePlan: null,
    currentNoteCreatedAt: null
    
}

const note = (state = initalState, action) => {
    switch (action.type) {
        case 'NOTE_CLICKED':
        return {
            ...state, 
            currentNoteId: action.id,
            currentNoteSubjective: action.subjective,
            currentNoteObjective: action.objective,
            currentNoteAssessment: action.assessment,
            currentNotePlan: action.plan,
            currentNoteCreatedAt: action.createdAt  }
        case 'ADD_NOTE':
        return {
            ...state, 
            ...initalState }
        case 'STUDENT_CLICKED':
        return {
                ...state, 
                ...initalState }
        case 'CLEAR_AUTH':
        return {
                ...state, 
                ...initalState }
        case 'CLEAR_DATA':
        return {
                ...initalState, 
                    
                }
                

        default:
          return state
    }
}

export default note;