import React, { useEffect, useState } from "react";
import Form from "../../../UI/Form/Form";
import UserInput from "../../../UI/UserInput/UserInput";
import Button from "../../../UI/Button/Button";
import styles from "./Register.module.css";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formValid, setFormValid] = useState("");

  useEffect(() => {
    const interval = setTimeout(() => {
      setFormValid(password.length >= 6 && email.includes("@"));
    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, [email, password]);

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    if (formValid) {
      console.log(email);
      console.log(password);
    }
  };

  const emailChangeHandler = (value) => {
    setEmail(value);
  };

  const passwordChangeHandler = (value) => {
    setPassword(value);
  };

  return (
    <div className={`container ${styles.authForm}`}>
      <Form onSubmit={registerSubmitHandler}>
        <h3>Sign Up</h3>
        <UserInput
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={emailChangeHandler}
        />
        <UserInput
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          onChange={passwordChangeHandler}
        />
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}

export default Register;
