import React, { useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const EditPet = ({ gridModal, setGridModal, data }) => {
  const toggleShow = () => setGridModal(!gridModal);
  const [formState, setFormState] = useState({
    petName: data.petName,
    raceId: data.raceId,
    ownerId: 1,
    size: data.size,
    age: data.age,
    vaccinationPlan: data.vaccinationPlan,
    careToHave: data.careToHave,
  });

  function sendUpdate() {
    console.log(formState);
  }
  return (
    <>
      <MDBModal
        show={gridModal}
        getOpenState={(e) => setGridModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Editar a {data.petName}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendUpdate();
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
                  id="typeNumber"
                  type="number"
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
                  type="number"
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
                <MDBBtn color="secondary" onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn type="submit" onClick={sendUpdate()}>
                  Save changes
                </MDBBtn>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default EditPet;
