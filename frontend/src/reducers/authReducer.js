import { New_USER } from "../constants/index.js";
import { LOADING } from "../constants/index.js";
const initialState = {
  status: "",
  empData: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case New_USER: {
      return {
        ...state,
        empData: [...state.empData, action.payload],
        status: "Submit"
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
