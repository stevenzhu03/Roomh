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
          ...state.currentUser,
          pending_matches: [
            ...state.currentUser.pending_matches,
            action.payload,
          ],
        },
      };
    case "CONFIRM_MATCH":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          matches: [...state.currentUser.matches, action.payload],
          match_requests:
            state.currentUser.match_requests.filter(
              (request) => request.id !== action.payload.id
            ),
        },
      };
    case "UPDATE_USER":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          info: action.payload,
        },
      };
    default:
      return state;
  }
};
