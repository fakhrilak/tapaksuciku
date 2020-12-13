import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE,
  } from "./types";


import { API, setAuthToken } from "../../config/api";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await API.get("/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload:err.response.data.error
    });
  }
};
export const handleRegister = (
  email,
  password,
  fullname,
  Register
) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    email,
    password,
    nama:fullname
  });

  try {
    const res = await API.post("/register", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.data,
    });
    dispatch(loadUser());
    Register();
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.error.message,
    });
  }
};

export const handleLogin = (email, password, Login) => async (
  dispatch
) => {
  console.log("hello")
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await API.post("/login", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });
    dispatch(loadUser());
    Login(); 
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.error.message
    });
  }
};

export const handleLogout = () =>async (dispatch) => {
    console.log("logout")
    dispatch({
    type: CLEAR_PROFILE,
    });
    dispatch({
    type: LOGOUT,
  });
};