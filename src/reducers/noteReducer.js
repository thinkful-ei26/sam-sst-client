const initalState = {
    notes: []
    
}

const notesReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'FETCH_NOTES_SUCCESS':
        return {
            ...state, 
            notes: action.data    }

        default:
          return state
    }
}

export default notesReducer;