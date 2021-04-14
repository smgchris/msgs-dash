import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_MESSAGE,
  } from "./types";
  
  import AuthService from "../DemoPages/Login/services/auth.services";
  
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const log_out  = (dispatch) => {
    console.log('====================================');
    console.log("auth actions, function log out");
    console.log('====================================');
    localStorage.removeItem("user");
  
    dispatch({
      type: LOGOUT,
    });
    window.location.reload();
  };