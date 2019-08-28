import { New_USER } from "../constants";
import { LOADING } from "../constants";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000"
});
export const regitserUser = data => dispatch => {
  dispatch({ type: LOADING });
  instance
    .post("/api/users/register", data)
    .then(res => {
      // console.log(res.data);
      dispatch({ type: New_USER, payload: res.data });
    })
    .catch(err => {});
};
