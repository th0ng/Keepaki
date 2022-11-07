import { useState } from "react";
import Register from '../components/Register';

import noteService from '../services/notes';
import registerService from '../services/register';


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      const newUsser = {username, name, password};
      registerService.register(newUsser);
      // registerService.register({username, name, password});
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Register  handleRegister={handleRegister} setName={setName} setUsername={setUsername} setPassword={setPassword}/>
  )
}

export default RegisterPage;