import React, { useState, Fragment /*, useEffect} */ } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Control from "../Control/Control";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { getPetByOwner } from "../../services/scheduleService";
import { postAgendaSchedule, getPruebas} from '../../services/scheduleService'


const useStyles = makeStyles((theme) => ({
  dialogWraper: {
    padding: theme.spacing,
    position: "absolute",
    width: "800px",
  },
  dialogTitle: {
    paddingRigth: "0px",
  },
}));

const AgendaModal = (props) => {

  const { idRoom, open, setOpen } = props;
  const styles = useStyles();
  const [pets, setPets] = useState([]);
  const { control, handleSubmit, register } = useForm({
    defaultValues: { find: "" },
  });

  useFieldArray({
    control,
    name: "schedule",
  });

  const onSubmit = (data) => {
    let findUserAndPet = data.find;
    getPetByOwner(findUserAndPet).then((resp) => {
      getPruebas(idRoom).then((res)=>{
        console.log(res.data)
      })
      if (resp.status === 200) {
        setPets(resp.data);
      }

    });
    
  };

  const onSubmitSaveAgenda = (data) => {

    let agendaPet = [];
    // eslint-disable-next-line array-callback-return
    data.schedule.map((item, index) => {
      if (item.options.indexOf(true) >= 0) {
        
        agendaPet.push({
          petId: pets[index].id,
          loungeId: idRoom,
          sunDay: item.options[0],
          school: item.options[1],
          kindergarten: item.options[2],
        });
      }
    });
    postAgendaSchedule(agendaPet[0]).then((resp)=>{

      if(resp.status===200){
        window.alert('Se agendo la mascota');
        setOpen(false);
        window.location.reload(false);
      } 
      if(resp.status===400){
        window.alert('No se agendo');
      }
      
    })

  };
  


  return (
    <Dialog
      open={open}
      sx={{ width: "100%" }}
      classes={{ paper: styles.dialogWraper }}
    >
      <DialogTitle className={styles.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            Asignacion de agenda
          </Typography>

          <Control.ActionButton
            color="secondary"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </Control.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers sx={{ pt: 2 }}>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Asignación de aula
          </Typography>
          <Box sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{width:"100%"}}>
              <Grid container>
                <Grid item xs={10} sx={{ pr: 3 }}>
                  <Controller
                    name="find"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        margin="normal"
                        required
                        id="find"
                        label="Correo del dueño"
                        name="find"
                        autoFocus
                        size="small"
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{ mt: 2, mb: 2 }}
                  >
                    Buscar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
          <form onSubmit={handleSubmit(onSubmitSaveAgenda)} style={{width:"100%"}}>
            <Grid container direction="row" spacing={3}>
              <Grid container item xs={12}>
                <Grid item xs={6}>
                  <Typography>Mascotas</Typography>
                </Grid>
                <Grid container item xs={6}>
                  <Grid item xs={4}>
                    <Typography>Dia de sol</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>Escuela</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>Guarderia</Typography>
                  </Grid>
                </Grid>
              </Grid>
              {pets.map((myPet, index) => (
                <Fragment key={myPet.id}>
                  <Grid item xs={6}>
                    {myPet.petName}
                  </Grid>
                  <Grid item xs={6}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <label className="control control-checkbox">
                          <input
                            type="checkbox"
                            {...register(`schedule.${index}.options[0]`)}
                          />
                          <div className="control_indicator"></div>
                        </label>
                      </div>
                      <div>
                        <label className="control control-checkbox">
                          <input
                            type="checkbox"
                            {...register(`schedule.${index}.options[1]`)}
                          />
                          <div className="control_indicator"></div>
                        </label>
                      </div>
                      <div>
                        <label className="control control-checkbox">
                          <input
                            type="checkbox"
                            {...register(`schedule.${index}.options[2]`)}
                          />
                          <div className="control_indicator"></div>
                        </label>
                      </div>
                    </div>
                  </Grid>
                </Fragment>
              ))}
              <Grid item xs={6}>
                {pets.length > 0 ? (
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{ mt: 2, mb: 2, left: "0" }}
                  >
                    Guardar
                  </Button>
                ) : null}
              </Grid>
            </Grid>
          </form>
        </Box>
 
      </DialogContent>
    </Dialog>
  );
};

export default AgendaModal;
