import {
    ALL_SECTION_REQUEST,
    ALL_SECTION_SUCCESS,
    ALL_SECTION_FAIL,
    NEW_SECTION_SUCCESS,
    NEW_SECTION_REQUEST,
    NEW_SECTION_FAIL,
    NEW_SECTION_RESET,
    CLEAR_ERRORS
  } from "../constants/sectionConstant";
  
  export const sectionsReducer = (state = { sections: [] }, action) => {
    switch (action.type) {
      case ALL_SECTION_REQUEST:
        return {
          loading: true,
          sections: [],
        };
      case ALL_SECTION_SUCCESS:
        return {
          loading: false,
          sections: action.payload,
        };
      case ALL_SECTION_FAIL:
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
  
  export const newSectionReducer = (state = { section: {} }, action) => {
    switch (action.type) {
      case NEW_SECTION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_SECTION_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          section: action.payload.section,
        };
      case NEW_SECTION_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_SECTION_RESET:
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