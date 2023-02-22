import {
    ALL_WAREHOUSE_REQUEST,
    ALL_WAREHOUSE_SUCCESS,
    ALL_WAREHOUSE_FAIL,
    NEW_WAREHOUSE_SUCCESS,
    NEW_WAREHOUSE_REQUEST,
    NEW_WAREHOUSE_FAIL,
    NEW_WAREHOUSE_RESET,
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
  

  export const newWarehouseReducer = (state = { warehouse: {} }, action) => {
    switch (action.type) {
      case NEW_WAREHOUSE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_WAREHOUSE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          warehouse: action.payload.warehouse,
        };
      case NEW_WAREHOUSE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_WAREHOUSE_RESET:
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