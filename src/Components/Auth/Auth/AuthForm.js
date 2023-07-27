import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AuthForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFormValid(email.includes("@") && password.length >= 6);
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [email, password]);

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formValid) {
      props.onSubmit(email, password);
    }
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={emailChangeHandler}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          required
          min={6}
          onChange={passwordChangeHandler}
        />
      </Form.Group>
      <Button variant="dark" type="submit" style={{ width: "100%" }}>
        Submit
      </Button>
    </Form>
  );
}

export default AuthForm;
