import React from "react";
import { useState } from "react";

import { Stack, Form, Button, FormGroup } from "react-bootstrap";

import { HiEye, HiEyeSlash } from "react-icons/hi2";

const Login = ({ handleLogin, setUsername, setPassword }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  }
  return (
    <div className="login-background">
    <Stack gap={2} className="col-md-3 mx-auto login-box">
        <h1 className="login-text">Login</h1>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="Username" placeholder="Enter username" onChange={({ target }) => setUsername(target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type={passwordShown ? "text" : "password"} name="Password" placeholder="Enter password" onChange={({ target }) => setPassword(target.value)}/>
            {!passwordShown ? <HiEye onClick={togglePasswordShown}/> : <HiEyeSlash onClick={togglePasswordShown}/>}
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" size="lg" variant="outline-success">Login</Button>
          </div>
        </Form>
    </Stack>
    </div>
  );
}

export default Login;