import * as api from "../api.js";
import { alertActions } from "./alert-slice";
import { authActions } from "./auth-slice";

export const registerUser = (user, navigate) => {
  return async (dispatch) => {
    try {
      const response = await api.register(user);
      console.log(user);
      console.log(response);
      if (response.error) {
        throw new Error(response?.exception?.response?.data?.message);
      } else {
        const { user, token } = response.data;
        const userDetails = {
          email: user.email,
          userId: user._id,
          username: user.username,
        };
        dispatch(authActions.setUserDetails({ userDetails, token }));
        navigate("/mail");
      }
    } catch (err) {
      dispatch(
        alertActions.setAlert({
          content: err && err.message ? err.message : "Something went wrong ",
        })
      );
    }
  };
};

export const loginUser = (user, navigate) => {
  return async (dispatch) => {
    try {
      const response = await api.login(user);
      if (response.error) {
        throw new Error(response?.exception?.response?.data?.message);
      } else {
        const { user, token } = response.data;
        const userDetails = {
          email: user.email,
          userId: user._id,
          username: user.username,
        };
        dispatch(authActions.setUserDetails({ userDetails, token }));
        navigate("/mail");
      }
    } catch (err) {
      dispatch(
        alertActions.setAlert({
          content: err && err.message ? err.message : "Something went wrong",
        })
      );
    }
  };
};
