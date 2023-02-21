import {
  ALL_WAREHOUSE_REQUEST,
  ALL_WAREHOUSE_SUCCESS,
  ALL_WAREHOUSE_FAIL,
  CLEAR_ERRORS,
} from "../constants/warehouseConstant";
import apiClient from "../http-client";

// Get All Products
export const getWarehouses = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_WAREHOUSE_REQUEST });
    
    const { data } = await apiClient.get("/warehouse/list");
    
    dispatch({
      type: ALL_WAREHOUSE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_WAREHOUSE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
