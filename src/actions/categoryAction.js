import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../constants/categoryConstant";
import apiClient from "../http-client";

// Get All Products
export const getCategorys = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CATEGORY_REQUEST });
    
    const { data } = await apiClient.get("/category/list");
    
    dispatch({
      type: ALL_CATEGORY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
