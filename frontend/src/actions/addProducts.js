// import axios from "axios";
import { LOADINGTRUE, LOADINGFALSE } from "../constants";
import { FORM_SUBMIT } from "../constants";

// const instance = axios.create({
//   baseURL: "http://localhost:5000"
// });

import { instance } from "../instance";

export const addProducts = data => dispatch => {
  dispatch({
    type: LOADINGTRUE
  });
  instance
    .post("/api/products/addProducts", data)
    .then(res => {
      // console.log("res---->", res);
      dispatch({
        type: FORM_SUBMIT,
        payload: true
      });
      dispatch({
        type: LOADINGFALSE
      });
    })
    .then(err => {
      console.log(err);
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
        payload: true
      });
      dispatch({
        type: LOADINGFALSE
      });
    })
    .catch(err => {
      console.log("err ---> ", err.response.data);
    });
};
