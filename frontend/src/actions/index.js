import { LOADINGTRUE, FORM_SUBMIT, LOADINGFALSE } from "../constants";
import { GET_ERRORS } from "../constants";

import { instance } from "../instance";

export const regitserUser = (data, history) => dispatch => {
  dispatch({ type: LOADINGTRUE });
  instance
    .post("/api/users/register", data)
    .then(res => {
      dispatch({ type: LOADINGFALSE });
      history.push("/login");
      // dispatch({ type: New_USER, payload: res.data });
    })
    .catch(err => {
      // console.log("----> -------> ", err.response.data);
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

export const loginUser = (data, history) => dispatch => {
  dispatch({ type: LOADINGTRUE });
  instance
    .post("/api/users/login", data)
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: FORM_SUBMIT,
        payload: true
      });
      dispatch({ type: LOADINGFALSE });
      history.push("/homepage");
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

export const checkErrorMsg = data => dispatch => {
  console.log("error msg data -----------> ", data);
  instance
    .post("/api/users/checkErrors", data)
    .then(res => {
      // console.log(res.data);
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};
