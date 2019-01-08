const initalState = {
    isChartActive: false,

    
}

const note = (state = initalState, action) => {
    switch (action.type) {
        case 'ST_PUSHED':
        return {
            ...state, 
            isChartActive: true
        }
        case 'VIEW_NOTES_PUSHED':
        return {
            ...state, 
            isChartActive: false
        }
        case 'STUDENT_CLICKED':
        return {
            ...state, 
            isChartActive: false   }

        default:
          return state
    }
}

export default note;