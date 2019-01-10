export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        // localStorage.clear()
        // window.location = '/'
        localStorage.removeItem('authToken');
    } catch (e) {}
};
