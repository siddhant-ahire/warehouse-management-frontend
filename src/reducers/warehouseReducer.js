import {
    ALL_WAREHOUSE_REQUEST,
    ALL_WAREHOUSE_SUCCESS,
    ALL_WAREHOUSE_FAIL,
    CLEAR_ERRORS
  } from "../constants/warehouseConstant";
  
  export const warehousesReducer = (state = { warehouses: [] }, action) => {
    switch (action.type) {
      case ALL_WAREHOUSE_REQUEST:
        return {
          loading: true,
          warehouses: [],
        };
      case ALL_WAREHOUSE_SUCCESS:
        return {
          loading: false,
          warehouses: action.payload,
        };
      case ALL_WAREHOUSE_FAIL:
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
  