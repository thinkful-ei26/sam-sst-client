const initalState = {
    name: 'Sam Smiley',
    username: '',
    status: ''
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESS':
        return {
            ...state, 
            status: action.data.msg    }

        default:
          return state
    }
}

export default userReducer;