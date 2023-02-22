import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    NEW_CATEGORY_SUCCESS,
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_FAIL,
    NEW_CATEGORY_RESET,
    CLEAR_ERRORS
  } from "../constants/categoryConstant";
  
  export const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case ALL_CATEGORY_REQUEST:
        return {
          loading: true,
          categories: [],
        };
      case ALL_CATEGORY_SUCCESS:
        return {
          loading: false,
          categories: action.payload,
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

  export const newCategoryReducer = (state = { category: {} }, action) => {
    switch (action.type) {
      case NEW_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_CATEGORY_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          category: action.payload.category,
        };
      case NEW_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_CATEGORY_RESET:
        return {
          ...state,
          success: false,
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
  