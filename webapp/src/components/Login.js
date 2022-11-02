import React from "react";
import { useState } from "react";

import { Stack, Form, Button } from "react-bootstrap";

import { HiEye, HiEyeSlash } from "react-icons/hi2";

import { Link } from "react-router-dom";


const Login = ({ handleLogin, setUsername, setPassword }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  }
  return (
    <div className="login-background">
    <Stack gap={2} className="col-md-5 mx-auto login-box">
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
          <Link to="/register">Not a user yet? Register here</Link>
          <div className="d-grid gap-2 login-button">
            <Button type="submit" size="lg" variant="outline-success">Login</Button>
          </div>
        </Form>
    </Stack>
    </div>
  );
}

export default Login;