import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Form, Button } from "react-bootstrap";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

const Register = ({ handleRegister, setName, setUsername, setPassword }) => {
  const [registerStatus, setRegisterStatus] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <div className="login-background">
      <Stack gap={2} className="col-md-5 mx-auto login-box">
        <h1 className="login-text">Welcome to Keepaki</h1>
        {!registerStatus ? <p>Please fill in the form to register as an user.</p>
          : <p>Successfully registered. <Link to="/">Back to login?</Link></p>}
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" >
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" name="Name" placeholder="Enter full name" onChange={({ target }) => setName(target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="Username" placeholder="Enter username" onChange={({ target }) => setUsername(target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type={passwordShown ? "text" : "password"} name="Password" placeholder="Enter password" onChange={({ target }) => setPassword(target.value)} />
            {!passwordShown ? <HiEye onClick={togglePasswordShown} /> : <HiEyeSlash onClick={togglePasswordShown} />}
          </Form.Group>
          <Link to="/">Already an user? Sign in.</Link>
          <div className="d-grid gap-2 login-button">
            <Button type="submit" size="lg" variant="outline-success">Register</Button>
          </div>
        </Form>
      </Stack>
    </div>
  )
}

export default Register;

