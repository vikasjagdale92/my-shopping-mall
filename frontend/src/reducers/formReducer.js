//formReducer.js

import { FORM_SUBMIT } from "../constants";

const initialState = {
  formValues: false
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_SUBMIT: {
      return { ...state, formValues: action.payload };
    }
    default: {
      return state;
    }
  }
};
