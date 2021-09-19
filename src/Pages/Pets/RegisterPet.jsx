import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

const Register = () => {
  const [formState, setFormState] = useState({
    petName: "",
    breed: "",
    size: "",
    age: "",
    vaccinationPlan: "",
    careToHave: "",
  });

  function sendForm(){
    console.log(formState);
  }
  

  return (
    <div style={{ width: "23rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendForm();
        }}
      >
        <br/>
        <MDBInput
          value={formState.petName}
          onChange={(e) =>
            setFormState({
              ...formState,
              petName: e.target.value,
            })
          }
          label="Nombre de la mascota"
          id="formControlDefault"
          type="text"
        />

        <br />
        <MDBInput
          value={formState.breed}
          onChange={(e) =>
            setFormState({
              ...formState,
              breed: e.target.value,
            })
          }
          label="Raza"
          id="formControlDefault"
          type="text"
        />

        <br />
        <MDBInput
          value={formState.size}
          onChange={(e) =>
            setFormState({
              ...formState,
              size: e.target.value,
            })
          }
          label="Tamaño"
          id="formControlDefault"
          type="text"
        />
        <br />
        <MDBInput
          tvalue={formState.age}
          onChange={(e) =>
            setFormState({
              ...formState,
              age: e.target.value,
            })
          }
          label="Edad"
          id="formControlDefault"
          type="text"
        />
        <br />
        <MDBInput
          value={formState.vaccination_plan}
          onChange={(e) =>
            setFormState({
              ...formState,
              vaccination_plan: e.target.value,
            })
          }
          label="Plan de vacunación"
          id="formControlDefault"
          type="text"
        />
        <br />
        <MDBInput
          value={formState.care_to_have}
          onChange={(e) =>
            setFormState({
              ...formState,
              care_to_have: e.target.value,
            })
          }
          label="Cuidados a tener"
          id="formControlDefault"
          type="text"
        />

        <br />
        <MDBBtn type="submit">Button</MDBBtn>
      </form>
      <br />
    </div>
  );
};

export default Register;
