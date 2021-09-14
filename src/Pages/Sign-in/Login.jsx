import React, { useState } from "react";

import useToken from "../../useToken";
import { useHistory } from "react-router-dom";

async function loginUser(credentials) {
  console.log(credentials);
  return fetch("https://pexshop.azurewebsites.net/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setToken } = useToken();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      email,
      password,
    });
    setToken(token);

    history.push("/Home");
    window.location.reload(false);
  };
  return (
    
    <form onSubmit={handleSubmit}>
      <label>
        <p>email</p>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
