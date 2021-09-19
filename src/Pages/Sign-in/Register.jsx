import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Axios from "axios";

/* sub
email
name
 */

const Register = () => {
  return (
    <div style={{ width: "23rem" }}>
      <form>
        <MDBInput
          label="Nombre de usuario"
          id="formControlDefault"
          type="text"
        />

        <br />
        <MDBInput label="Correo" id="formControlDefault" type="text" />

        <br />
        <MDBInput label="Contraseña" id="formControlDefault" type="password" />

        <br />
        <MDBBtn type="submit">Button</MDBBtn>
      </form>
    </div>
  );
};

export default Register;
