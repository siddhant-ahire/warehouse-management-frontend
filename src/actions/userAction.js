import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import apiClient from "../http-client";

// Login
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await apiClient.post(
      `/user/login`,
      { username, password },
    );
     // Set Axios instance to use a global header
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token;

    localStorage.setItem('token', data.data.token)
    localStorage.setItem('username', data.data.username)

    dispatch({ type: LOGIN_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    // const { data } = await axios.get(`http://localhost:5000/api/user/getUser`);
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    if(!username || !token) {
      dispatch({ type: LOAD_USER_FAIL, payload: 'user not found!' });
      return 
    }
    let data = {username, token}
    // Set Axios instance to use a global header
    console.log('Bearer ' + data.token)
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// // Logout User
// export const logout = () => async (dispatch) => {
//   try {
//     await axios.get(`/api/user/logout`);

//     dispatch({ type: LOGOUT_SUCCESS });
//   } catch (error) {
//     dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
//   }
// };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
