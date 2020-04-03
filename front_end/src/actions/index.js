
export const fetchUsers = () => dispatch => {
    fetch("SOME API")
    .then(resp => resp.json())
    .then(data => {
        dispatch({type: "FETCH DATA", payload: data})
    })
}

