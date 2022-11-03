import { useState } from "react";
import Register from '../components/Register';

import notesService from '../services/notes';
import registerService from '../services/register';


const RegisterPage = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async ({fullname, username, password}) => {
    try {
      const newUser = await registerService.register({fullname, username, password});
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(newUser));
  
      notesService.setToken(newUser.token);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Register handleRegister={handleRegister} setFullname={setFullname} setUsername={setUsername} setPassword={setPassword}/>
  )
}

export default RegisterPage;