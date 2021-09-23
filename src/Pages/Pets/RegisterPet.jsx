import React, { useState, Fragment } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { registerPet, editPet} from '../../services/PetService'
const Register = (props) => {
  
  const defaultValues= {
    petName: "",
    raceId: 1,
    ownerId: 1,
    size: "Pequeño",
    age: "",
    vaccinationPlan: "",
    careToHave: "",
  };

  const [sizePet, setSizePet] = useState('Pequeño');
  const [raceId, setRaceId] = useState(0)
  const { register, handleSubmit, control , reset} = useForm({defaultValues});

  const handleChange = (event) => {
    setSizePet(event.target.value);
    console.log(sizePet);
  };
  const handleChangeRaceId = (event) => {
    setRaceId(event.target.value);
    console.log(raceId);
  };
  
  const onSubmit = (data) => {
    data.age= parseInt(data.age, 10)
    data.raceId= parseInt(data.raceId, 10)
    if(props.data){
      editPet(data);
    }else{
      registerPet(data).then((res)=>{
        if(res.status===200){
          reset(defaultValues)
        }
      });
    }
    console.log(data)
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            defaultValue={props.data?props.data.petName:""}
            {...register("petName")}
          />
          <Controller
            control={control}
            name="raceId"
            render={() => (
              <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="raceId">Seleccione su tamaño</InputLabel>
                <Select
                  label="state"
                  variant="filled"
                  defaultValue={1}
                  onChange={handleChangeRaceId}
                  {...register("raceId")}
                >
                  <MenuItem value={4}>Mestiza</MenuItem>
                  <MenuItem value={1}>Chiguawa</MenuItem>
                  <MenuItem value={2}>Pastor Velga</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          
          <Controller
            control={control}
            name="size"
            render={() => (
              <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="size">Seleccione su tamaño</InputLabel>
                <Select
                  label="state"
                  variant="filled"
                  defaultValue="Pequeño"
                  onChange={handleChange}
                  {...register("size")}
                >
                  <MenuItem value="Pequeño">Pequeño</MenuItem>
                  <MenuItem value="Mediano">Mediano</MenuItem>
                  <MenuItem value="Grande">Grande</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="age"
            label="Edad"
            name="age"
            type="number"
            defaultValue={props.data?props.data.age:""}
            {...register("age")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="vaccinationPlan"
            label="Plan de vacunacion"
            name="vaccinationPlan"
            defaultValue={props.data?props.data.vaccinationPlan:""}
            {...register("vaccinationPlan")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="careToHave"
            label="Cuidados a tener"
            name="careToHave"
            defaultValue={props.data?props.data.careToHave:""}
            {...register("careToHave")}
          />

          <Button size="medium" type="submit" variant="contained">
            {props.edit ? "Guardar cambios" : "Guardar"}
          </Button>
        </Grid>
      </form>
    </Fragment>
  );
};

export default Register;
