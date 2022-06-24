import {
  AUTH,
  START_LOADING,
  FETCH_ALL_USERS,
  END_LOADING,
} from "../constants/actionTypes";
import * as api from "../../api";

export const getUsers = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchUsers(page);

    dispatch({ type: FETCH_ALL_USERS, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const signin = (formData, navigate, from) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signIn(formData);

    if (data.result.emailVerified) {
      dispatch({ type: AUTH, data });
      dispatch({ type: END_LOADING });
      navigate(from, { replace: true });
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    return data.result;
    //dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};
export const signupWelcome = (emailParams) => async (dispatch) => {
  try {
    await api.signupWelcome(emailParams);

    //dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};

export const verifySignup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.verifySignUp(formData);
    if (data.token) {
      dispatch({ type: AUTH, data });

      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};
