import { New_USER } from "../constants/index.js";
import { LOADING } from "../constants/index.js";
import { GET_ERRORS } from "../constants/index.js";
import { EXISTING_USER } from "../constants/index.js";

const initialState = {
  status: "",
  empData: [],
  errors: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case New_USER: {
      return {
        ...state,
        empData: [...state.empData, action.payload],
        status: "Submit",
        errors: {}
      };
    }
    case EXISTING_USER: {
      return {
        ...state,
        errors: {}
      };
    }
    case GET_ERRORS: {
      return {
        ...state,
        errors: action.payload
      };
    }
    case LOADING: {
      return { ...state, status: LOADING };
    }
    default: {
      return state;
    }
  }
};
