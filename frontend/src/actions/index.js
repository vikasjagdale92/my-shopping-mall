import { New_USER } from "../constants";
import { LOADING } from "../constants";
import { GET_ERRORS } from "../constants";
import { EXISTING_USER } from "../constants";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000"
});

export const regitserUser = (data, history) => dispatch => {
  dispatch({ type: LOADING });
  instance
    .post("/api/users/register", data)
    .then(res => {
      history.push("/login");
      // dispatch({ type: New_USER, payload: res.data });
    })
    .catch(err => {
      // console.log(err.response.data);
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

export const loginUser = (data, history) => dispatch => {
  dispatch({ type: LOADING });
  instance
    .post("/api/users/login", data)
    .then(res => {
      console.log(res.data);
      history.push("/homepage");
      // dispatch({ type: EXISTING_USER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};
