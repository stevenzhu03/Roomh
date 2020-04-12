const initialState = {
  currentUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "AUTO_LOGIN":
      return { ...state, currentUser: action.payload };
    case "LOG_OUT":
      return { ...state, currentUser: null };
    case "ADD_PENDING_MATCH":
      return {
        ...state,
        currentUser: {
          info: { ...state.currentUser.info },
          pending_matches: [...state.currentUser.pending_matches, action.payload],
        },
      };
    default:
      return state;
  }
};
