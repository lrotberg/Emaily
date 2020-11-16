import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import AuthReducer from "./authReducer";

export default combineReducers({
  auth: AuthReducer,
  form: reduxForm
});
