
export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => {
        dispatch({type: "FETCH_USERS", payload: users})
    })
}



