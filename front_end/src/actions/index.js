
export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => {
        dispatch({type: "FETCH_USERS", payload: users})
    })
}

export const createUser = () => dispatch => {
    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: 
          password: 
          email: 
        })
      })
      .then(resp => resp.json())
}



