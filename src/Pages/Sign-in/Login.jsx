import React, { useState } from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  console.log(credentials)
  return fetch('https://pexshop.azurewebsites.net/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json() )
    
 }

const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  
  const handleSubmit = async e => {
    e.preventDefault();
    
    const token = await loginUser({
      email,
      password,
      
    });
    setToken(token);
  }
  return(
  <form onSubmit={handleSubmit}>
    <label>
      <p>email</p>
      <input type="email" onChange={e => setEmail(e.target.value)}/>
    </label>
    <label>
      <p>Password</p>
      <input type="password" onChange={e => setPassword(e.target.value)}/>
    </label>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  )

}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
export default Login;
