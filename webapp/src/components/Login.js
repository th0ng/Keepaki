import React from "react";
import { useState } from "react";

const Login = ({ handleLogin, setUsername, setPassword }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <div>
            username 
            <input 
              type="text"
              name="Username"
              placeholder="username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input 
              type={passwordShown ? "text" : "password"}
              name="Password"
              placeholder="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button onClick={togglePasswordShown}>Show Password</button>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;