// import axios from "axios";
import {
  LOADINGTRUE,
  LOADINGFALSE,
  GET_ERRORS,
  FORM_SUBMIT
} from "../constants";

// const instance = axios.create({
//   baseURL: "http://localhost:5000"
// });

import { instance } from "../instance";

export const addProducts = data => dispatch => {
  // console.log(data);
  dispatch({
    type: LOADINGTRUE // show loading... keyword on button
  });
  instance
    .post("/api/products/addProducts", data)
    .then(res => {
      dispatch({
        type: FORM_SUBMIT, // after saving data set formValue true so in client side I can set all value to empty check AddProducts.js
        payload: true
      });
      dispatch({
        type: LOADINGFALSE // hide loading... keyword on button
      });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

export const addProductTypes = data => dispatch => {
  dispatch({
    type: LOADINGTRUE
  });
  instance
    .post("/api/productTypes/addProductTypes", data)
    .then(res => {
      dispatch({
        type: FORM_SUBMIT,
        payload: false
      });
      dispatch({
        type: LOADINGFALSE // hide loading... keyword on button
      });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};
