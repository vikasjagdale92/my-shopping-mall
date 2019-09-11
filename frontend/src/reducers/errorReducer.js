import { LOADINGFALSE, LOADINGTRUE } from "../constants/index.js";
import { GET_ERRORS } from "../constants/index.js";

const initialState = {
  status: "",
  errors: {}
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS: {
      return {
        ...state,
        errors: action.payload
      };
    }
    case LOADINGTRUE: {
      return { ...state, status: LOADINGTRUE };
    }

    case LOADINGFALSE: {
      return { ...state, status: LOADINGFALSE };
    }
    default: {
      return state;
    }
  }
};
