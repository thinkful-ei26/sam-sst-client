// import {
//     CLEAR_AUTH,
    
// } from '../actions/auth';


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
        case 'ADD_NOTE':
        return {
                ...state, 
                isChartActive: false
            }
        case 'CLEAR_DATA':
        return {
                    ...initalState, 
                    
                }

        default:
          return state
    }
}

export default note;