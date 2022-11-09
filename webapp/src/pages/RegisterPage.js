import { useState } from "react";
import Register from "../components/Register";
import registerService from "../services/register";
import userService from "../services/users";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState(false);
  const [usernameCheckStatus, setUsernameCheckStatus] = useState(true);
  const [usernameList, setUsernameList] = useState([]);

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      userService.getAll().then((initialList) => setUsernameList(initialList));
      const newUser = { username, name, password };

      registerService.register(newUser);
      setRegisterStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Register
      handleRegister={handleRegister}
      setName={setName}
      setUsername={setUsername}
      setPassword={setPassword}
      registerStatus={registerStatus}
    />
  );
};

export default RegisterPage;
