import {
    ALL_SECTION_REQUEST,
    ALL_SECTION_SUCCESS,
    ALL_SECTION_FAIL,
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
  