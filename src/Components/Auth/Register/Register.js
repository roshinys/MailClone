import React from "react";
import AuthForm from "../Auth/AuthForm";
import AuthBox from "../Auth/AuthBox";
import AuthWrapper from "../Auth/AuthWrapper";

function Register() {
  const registerHandler = (email, password) => {
    console.log(email, password);
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
