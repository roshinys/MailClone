import React from "react";
import Form from "../../../UI/Form/Form";
import UserInput from "../../../UI/UserInput/UserInput";
import Button from "../../../UI/Button/Button";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={`container ${styles.authForm}`}>
      <Form>
        <h3>Sign In</h3>
        <UserInput
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <UserInput
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="*******"
        />
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}

export default Login;
