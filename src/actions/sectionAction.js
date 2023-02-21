import {
  ALL_SECTION_REQUEST,
  ALL_SECTION_SUCCESS,
  ALL_SECTION_FAIL,
  CLEAR_ERRORS,
} from "../constants/sectionConstant";
import apiClient from "../http-client";

// Get All Products
export const getSections = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SECTION_REQUEST });
    
    const { data } = await apiClient.get("/section/list");
    
    dispatch({
      type: ALL_SECTION_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_SECTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
