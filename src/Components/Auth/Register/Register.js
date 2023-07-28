import React from "react";
import AuthForm from "../Auth/AuthForm";
import AuthBox from "../Auth/AuthBox";
import AuthWrapper from "../Auth/AuthWrapper";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../store/auth-action";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerHandler = (email, password) => {
    const user = { email, password };
    dispatch(registerUser(user, navigate));
  };
  return (
    <AuthBox>
      <AuthWrapper>
        <h3>Register here</h3>
        <AuthForm onSubmit={registerHandler} />
      </AuthWrapper>
    </AuthBox>
  );
}

export default Register;
