import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Axios from "axios";

const Register = () => {
  const [usernamereg, setUsername] = useState();
  const [emailreg, setEmail] = useState();
  const [passwordreg, setPassword] = useState();

  const registerUser = () => {
    Axios.post("https://pexshop.azurewebsites.net/api/auth/signup", {
      username: usernamereg,
      email: emailreg,
      passwoord: passwordreg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div style={{ width: "23rem" }}>
      <form onSubmit={registerUser}>
        <MDBInput
          onChange={(e) => setUsername(e.target.value)}
          label="Nombre de usuario"
          id="formControlDefault"
          type="text"
        />

        <br />
        <MDBInput
          onChange={(e) => setEmail(e.target.value)}
          label="Correo"
          id="formControlDefault"
          type="text"
        />

        <br />
        <MDBInput
          onChange={(e) => setPassword(e.target.value)}
          label="Contraseña"
          id="formControlDefault"
          type="password"
        />

        <br />
        <MDBBtn type="submit">Button</MDBBtn>
      </form>
    </div>
  );
};

export default Register;
