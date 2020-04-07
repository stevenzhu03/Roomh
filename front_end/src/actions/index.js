
import history from '../history'

export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => {
        dispatch({type: "FETCH_USERS", payload: users})
    })
}

export const createUser = (formValues) => dispatch => {
    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: formValues.username,
          password: formValues.password,
          email: formValues.email
        })
    })
    .then(resp => resp.json())
    .then(response => {
        if (response.errors) {
            alert(response.errors)
        } else {
            dispatch({type: "SET_CURRENT_USER", payload: response})
            localStorage.token = response.token
            history.push('/findroomate')
        }
    })
    
} 

export const login = (formValues) => dispatch => {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: formValues.username,
          password: formValues.password,
        })
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.errors){
              alert(response.errors)
            } else {
              dispatch({type: "SET_CURRENT_USER", payload: response})
              localStorage.token = response.token
              history.push('/findroomate')
            }
        })
}

export const autoLogin = (token) => dispatch => {
    fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
          history.push('/')
        } else {
            dispatch({type: "AUTO_LOGIN", payload: response})
            history.push('/findroomate')
        }
      })
}

              
export const logOut = () => dispatch => {
    dispatch({type: "LOG_OUT", payload: null})
    localStorage.removeItem("token")
    history.push(`/login`)
}