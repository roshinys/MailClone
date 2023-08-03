import useHttp from "../hooks/use-http.js";
import { alertActions } from "./alert-slice";
import { authActions } from "./auth-slice";

export const registerUser = (user, navigate) => {
  return async (dispatch) => {
    try {
      const sendRequest = useHttp({
        url: `http://localhost:8000/api/auth/register`,
        method: "POST",
        body: user,
      });
      const response = await sendRequest();
      if (!response.data.success) {
        throw new Error(response?.data?.message);
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
      const sendRequest = useHttp({
        url: `http://localhost:8000/api/auth/login`,
        method: "POST",
        body: user,
      });
      const response = await sendRequest();
      if (!response.data.success) {
        throw new Error(response?.data?.message);
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
