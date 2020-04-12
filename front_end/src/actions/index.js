import history from "../history";

// Sign Up

export const createUser = (formValues) => (dispatch) => {
  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: formValues.username,
      password: formValues.password,
      email: formValues.email,
    }),
  })
    .then((resp) => resp.json())
    .then((response) => {
      if (response.errors) {
        alert(response.errors);
      } else {
        dispatch({ type: "SET_CURRENT_USER", payload: response.user });
        localStorage.token = response.token;
        history.push("/find_roommate");
      }
    });
};

//Log In

export const login = (formValues) => (dispatch) => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: formValues.username,
      password: formValues.password,
    }),
  })
    .then((resp) => resp.json())
    .then((response) => {
      if (response.errors) {
        alert(response.errors);
      } else {
        console.log(response.user)
        dispatch({ type: "SET_CURRENT_USER", payload: response.user });
        localStorage.token = response.token;
        history.push("/find_roommate");
      }
    });
};

//Auto Login

export const autoLogin = (token) => (dispatch) => {
  fetch("http://localhost:3000/auto_login", {
    headers: {
      Authorization: token,
    },
  })
    .then((resp) => resp.json())
    .then((response) => {
      if (response.errors) {
        alert(response.errors);
        history.push("/");
      } else {
        dispatch({ type: "AUTO_LOGIN", payload: response });
      }
    });
};

// Log Out

export const logOut = () => (dispatch) => {
  dispatch({ type: "LOG_OUT", payload: null });
  localStorage.removeItem("token");
  history.push(`/login`);
};

//Fetch All Users

export const fetchUsers = () => (dispatch) => {
  fetch("http://localhost:3000/users")
    .then((resp) => resp.json())
    .then((users) => {
      // returns an array of all users
      dispatch({ type: "FETCH_USERS", payload: users });
    });
};

//Set a Selected User

export const setSelectedUser = (selectedUser) => (dispatch) => {
  dispatch({ type: "SET_SELECTED_USER", payload: selectedUser });
  history.push(`/matcher_profile`);
};

//Create a Match
export const createMatch = (user_id, matcher_id) => (dispatch) => {
  fetch("http://localhost:3000/match/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user_id: user_id,
      matcher_id: matcher_id,
    }),
  })
    .then((resp) => resp.json())
    .then((response) => dispatch({ type: "ADD_PENDING_MATCH", payload: response}));
};

//Confirm a Match
export const confirmMatch = (user_id, matcher_id) => (dispatch) => {
  fetch("http://localhost:3000/match/confirm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user_id: user_id,
      matcher_id: matcher_id,
    }),
  })
  .then(resp => resp.json())
  .then(response => console.log(response))
}