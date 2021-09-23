import React, { Fragment } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { editPet } from "../../services/PetService";
import { useForm, Form } from "../../Component/Form/Form";
import Control from "../../Component/Control/Control";
import EditComplete from "../../Component/Modalforms/EditComplete";

const raceIdPet = () => [
  { id: "4", title: "Mestiza" },
  { id: "1", title: "Chiwuawa" },
  { id: "2", title: "Pastor Velga" },
];

const sizeIdPet = () => [
  { id: "1", title: "Pequeño" },
  { id: "2", title: "Mediano" },
  { id: "3", title: "Grande" },
];

const EditPet = (props) => {
  const [open, setOpen] = React.useState(false);
  const { dataForEdit } = props;

  const dataValues = {
    petName: dataForEdit.petName,
    raceId: dataForEdit.race.id,
    ownerId: dataForEdit.owner.id,
    size: dataForEdit.size,
    age: dataForEdit.age,
    vaccinationPlan: dataForEdit.vaccinationPlan,
    careToHave: dataForEdit.careToHave,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, handleInputChange } = useForm(
    dataValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    const dataValues = {
      petName: values.petName,
      raceId: values.raceId,
      ownerId: values.ownerId,
      size: values.size,
      age: values.age,
      vaccinationPlan: values.vaccinationPlan,
      careToHave: values.careToHave,
    };
    e.preventDefault();
    editPet(dataValues, dataForEdit.id);
  
      setOpen(!open);


    
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
      <EditComplete
        open={open}
        setOpen={setOpen}
        data={values.petName}
      ></EditComplete>
    </Fragment>
  );
};

export default EditPet;
