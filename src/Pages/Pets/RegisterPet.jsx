import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { registerPet } from "../../services/PetService";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import CompleteFormPet from "../../Component/Modalforms/CompleteFormPet";

const Register = () => {
  
  const [formState, setFormState] = useState({
    petName: "",
    raceId: "",
    ownerId: 1,
    size: "",
    age: "",
    vaccinationPlan: "",
    careToHave: "",
  });

  function sendForm() {
    registerPet(formState);
    console.log(formState);
  }
  const mystyle = {
    width: "23rem",
  };

  const [gridModal, setGridModal] = useState(false);
  return (
    <section class="border d-flex justify-content-center p-4 mb-4">
      <div style={mystyle}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendForm();
            setGridModal(!gridModal);
          }}
        >
          <br />
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

          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Raza
            </InputLabel>
            <NativeSelect
              value={formState.raceId}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  raceId: e.target.value,
                })
              }
            >

              <option value={4}>Mestiza</option>
              <option value={1}>Chiwawa</option>
              <option value={2}>Pastor Berga</option>
            </NativeSelect>
          </FormControl>

          <br />
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
            value={formState.vaccinationPlan}
            onChange={(e) =>
              setFormState({
                ...formState,
                vaccinationPlan: e.target.value,
              })
            }
            label="Plan de vacunación"
            id="formControlDefault"
            type="text"
          />
          <br />
          <MDBInput
            value={formState.careToHave}
            onChange={(e) =>
              setFormState({
                ...formState,
                careToHave: e.target.value,
              })
            }
            label="Cuidados a tener"
            id="formControlDefault"
            type="text"
          />

          <br />
          <MDBBtn type="submit">Ingresar</MDBBtn>
        </form>
      </div>
      <CompleteFormPet
          data={formState.petName}
          gridModal={gridModal}
          setGridModal={setGridModal}
        ></CompleteFormPet>
    </section>
  );
};

export default Register;
