import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
  NEW_CATEGORY_SUCCESS,
  NEW_CATEGORY_REQUEST,
  NEW_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../constants/categoryConstant";
import apiClient from "../http-client";

// Get All Products
export const getCategories = () => async (dispatch) => {
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

export const createCategories = (categoryData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CATEGORY_REQUEST });

    const { data } = await apiClient.post(
      `/category/create`,
      categoryData,
    );

    dispatch({
      type: NEW_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
