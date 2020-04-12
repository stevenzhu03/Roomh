const initalState = {
  users: [],
  selectedUser: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload };
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};
