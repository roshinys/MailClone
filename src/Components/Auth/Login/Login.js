import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/auth-action";
import AuthBox from "../Auth/AuthBox";
import AuthWrapper from "../Auth/AuthWrapper";
import AuthForm from "../Auth/AuthForm";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = (email, password) => {
    const user = { email, password };
    dispatch(loginUser(user, navigate));
  };
  return (
    <AuthBox>
      <AuthWrapper>
        <h3>Login here</h3>
        <AuthForm onSubmit={loginHandler} />
      </AuthWrapper>
    </AuthBox>
  );
}

export default Login;
