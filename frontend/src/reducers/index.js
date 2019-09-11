import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { formReducer } from "./formReducer";

export default combineReducers({
  errors: errorReducer,
  formData: formReducer
});
