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