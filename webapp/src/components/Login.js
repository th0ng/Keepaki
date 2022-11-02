import React from "react";
import { useState } from "react";

import { Stack, Form, Button } from "react-bootstrap";

const Login = ({ handleLogin, setUsername, setPassword }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  }
  return (
    <Stack gap={2} className="col-md-3 mx-auto">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="Username" placeholder="Enter username" onChange={({ target }) => setUsername(target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type={passwordShown ? "text" : "password"} name="Password" placeholder="Enter password" onChange={({ target }) => setPassword(target.value)}/>
          </Form.Group>
          {/* <div>
            username 
            <input 
              type="text"
              name="Username"
              placeholder="username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div> */}
          {/* <div>
            password
            <input 
              type={passwordShown ? "text" : "password"}
              name="Password"
              placeholder="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button onClick={togglePasswordShown}>Show Password</button>
          </div> */}
          <Button type="submit" variant='primary' size="lg">Login</Button>
        </Form>
    </Stack>
  );
}

export default Login;