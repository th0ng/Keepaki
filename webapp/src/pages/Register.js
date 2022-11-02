import { Stack, Form, Button } from "react-bootstrap";

import { HiEye, HiEyeSlash } from "react-icons/hi2";

import { useState } from "react";

import registerService from "../services/register";
import noteService from "../services/notes";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  }

  const handleRegister = async (fullname, username, password) => {
    try {
      const newUser = await registerService.register({fullname, username, password});
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(newUser));
  
      noteService.setToken(newUser.token);
    } catch (err) {
      console.log(err);
    }
  }

  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="login-background">
    <Stack gap={2} className="col-md-5 mx-auto login-box">
        <h1 className="login-text">Welcome to Keepaki</h1>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" >
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" name="fullname" placeholder="Enter full name" onChange={({ target }) => setFullname(target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter username" onChange={({ target }) => setUsername(target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type={passwordShown ? "text" : "password"} name="password" placeholder="Enter password" onChange={({ target }) => setPassword(target.value)}/>
            {!passwordShown ? <HiEye onClick={togglePasswordShown}/> : <HiEyeSlash onClick={togglePasswordShown}/>}
          </Form.Group>
          <div className="d-grid gap-2 login-button">
            <Button type="submit" size="lg" variant="outline-success">Register</Button>
          </div>
        </Form>
    </Stack>
    </div>
  )
}

export default Register;