import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
});
