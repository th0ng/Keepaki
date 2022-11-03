import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Form, Button } from "react-bootstrap";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

import notesService from '../services/notes';
import registerService from '../services/register';

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  }

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    // e.preventDefault();
    // fetch("/api/users", {
    //   method: "POST", 
    //   body: JSON.stringify({
    //     name: name,
    //     username: username,
    //     password: password
    //   }),
    // })
    // .then((response) => response.json())
    // .then((result) => {
    //   if(result.message === "SUCCESS") {
    //     alert("Welcome to Keepaki");
    //   } else {
    //     alert("Something went wrong, please try again.");
    //   }
    // })
    e.preventDefault();
    try {
      const newUser = await registerService.register(username, name, password);
      notesService.setToken(newUser.token);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="login-background">
    <Stack gap={2} className="col-md-5 mx-auto login-box">
        <h1 className="login-text">Welcome to Keepaki</h1>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" >
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" name="Name" placeholder="Enter full name" onChange={({ target }) => setName(target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="Username" placeholder="Enter username" onChange={({ target }) => setUsername(target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type={passwordShown ? "text" : "password"} name="Password" placeholder="Enter password" onChange={({ target }) => setPassword(target.value)}/>
            {!passwordShown ? <HiEye onClick={togglePasswordShown}/> : <HiEyeSlash onClick={togglePasswordShown}/>}
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

