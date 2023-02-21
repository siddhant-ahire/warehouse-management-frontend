import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CLEAR_ERRORS
  } from "../constants/categoryConstant";
  
  export const categorysReducer = (state = { categorys: [] }, action) => {
    switch (action.type) {
      case ALL_CATEGORY_REQUEST:
        return {
          loading: true,
          categorys: [],
        };
      case ALL_CATEGORY_SUCCESS:
        return {
          loading: false,
          categorys: action.payload,
        };
      case ALL_CATEGORY_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  