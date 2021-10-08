import React, { Fragment, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { registerPet, editPet } from "../../services/PetService";
import { useForm, Form } from "../../Component/Form/Form";
import Control from "../../Component/Control/Control";
import CompleteFormPet from "../../Component/Modalforms/CompleteFormPet";

const defaultValues = {
  petName: "",
  raceId: 1,
  ownerId: 15,
  size: 1,
  age: "",
  vaccinationPlan: "",
  careToHave: "",
};

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

const Register = (props) => {
  const [open, setOpen] = React.useState(false);
  const { addOrEdit, dataForEdit, edit } = props;
  
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    setValues,
    errors,
    /* setErrors */ handleInputChange,
    resetForm,
  } = useForm(defaultValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const petRegister = {
      petName: values.petName,
      raceId: values.raceId,
      ownerId: 4,
      size: values.size,
      age: values.age,
      vaccinationPlan: values.vaccinationPlan,
      careToHave: values.careToHave,
    }

    if (validate() && edit) {
      addOrEdit(values, resetForm);
      editPet(values);

    }else{
      registerPet(petRegister).then((resp) => {
        if (resp.status === 200) {

          setOpen(!open);
          if (open) {
          }
        }
      });
    }

  };

  useEffect(() => {
    if (dataForEdit != null) {
      setValues({
        ...dataForEdit,
      });
    }
  }, [setValues, dataForEdit]);

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
      <CompleteFormPet open={open} setOpen={setOpen}  data={values.petName}></CompleteFormPet>
    </Fragment>
  );
};

export default Register;
