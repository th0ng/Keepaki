import { useState } from "react";
import Register from '../components/Register';
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
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Register  handleRegister={handleRegister} setName={setName} setUsername={setUsername} setPassword={setPassword}/>
  )
}

export default RegisterPage;
