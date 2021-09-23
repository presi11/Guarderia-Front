import React, { Fragment } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { editPet } from "../../services/PetService";
import { useForm, Form } from "../../Component/Form/Form";
import Control from "../../Component/Control/Control";
import CompleteFormPet from "../../Component/Modalforms/CompleteFormPet";



const raceIdPet = () => [
  { id: "1", title: "Mestiza" },
  { id: "2", title: "Chiwuawa" },
  { id: "3", title: "Pastor Velga" },
];

const sizeIdPet = () => [
  { id: "1", title: "Pequeño" },
  { id: "2", title: "Mediano" },
  { id: "3", title: "Grande" },
];

const EditPet = (props) => {
  const [open, setOpen] = React.useState(false);
  const { dataForEdit } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    errors,
    handleInputChange,
  } = useForm(dataForEdit, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    values.size=parseInt(values.size,10)
    values.raceId=parseInt(values.raceId,10)
    editPet(values);
    console.log(values);
  };
  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="petName"
            label="Nombre de la Mascota"
            name="petName"
            autoFocus
            value={values.petName}
            onChange={handleInputChange}
            errors={errors.petName}
          />

          <Control.Select
            name="raceId"
            label="Raza"
            value={values.raceId}
            onChange={handleInputChange}
            options={raceIdPet()}
            errors={errors.raceId}
          />
          <br />

          <Control.Select
            name="size"
            label="Tamaño"
            value={values.size}
            onChange={handleInputChange}
            options={sizeIdPet()}
            errors={errors.size}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="age"
            label="Edad"
            name="age"
            autoFocus
            value={values.age}
            onChange={handleInputChange}
            errors={errors.age}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="vaccinationPlan"
            label="Plan de vacunacion"
            name="vaccinationPlan"
            autoFocus
            value={values.vaccinationPlan}
            onChange={handleInputChange}
            errors={errors.vaccinationPlan}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="careToHave"
            label="Cuidados a tener"
            name="careToHave"
            autoFocus
            value={values.careToHave}
            onChange={handleInputChange}
            errors={errors.careToHave}
          />
          <Button size="medium" type="submit" variant="contained">
            {props.data ? "Guardar cambios" : "Guardar"}
          </Button>
        </Grid>
      </Form>
      <CompleteFormPet open={open} setOpen={setOpen}></CompleteFormPet>
    </Fragment>
  );
};

export default EditPet;
