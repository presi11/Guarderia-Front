import React /* {useState, useEffect} */ from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  Container,
  TextField,
  Button,
  Box
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Control from "../Control/Control";
import CloseIcon from "@mui/icons-material/Close";
import {useForm, Controller} from 'react-hook-form'
import {getPetByOwner} from '../../services/scheduleService'

const useStyles = makeStyles((theme) => ({
  dialogWraper: {
    padding: theme.spacing,
    position: "absolute",
    width: "800px",
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing,
    },
  },
  dialogTitle: {
    paddingRigth: "0px",
  },
}));

const AgendaModal = (props) => {
  const { title, open, setOpen } = props;
  const styles = useStyles();
  const {control, handleSubmit} = useForm()
  /* const [petOwner, setPetOwner] = useState([]); */

  /*   useEffect(() => {
    setPetOwner(pets);
  }, []); */

  /*  const handleClose = () => {
    setOpen(false);
  };
  function handleCloseAgenda() {
    //deletePet(data.id);
    setOpen(false);
  }
 */
  const onSubmit = (data) => {
    let findUserAndPet = data.find;
    getPetByOwner(findUserAndPet).then((resp)=>{
      console.log(resp)
    })
    console.log(findUserAndPet.trim())

    //const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    
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
            {title}
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
      <DialogContent dividers sx={{pt:2}}>
        <Container component="main">
          
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Asignación de aula
            </Typography>
            <Box
              sx={{ mt: 1 }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>

              <Grid container>
                <Grid item xs={10}>
                  <Controller
                    name="find"
                    control={control}
                    render={({field})=>(
                      <TextField
                        margin="normal"
                        required
                        id="find"
                        label="Correo del dueño"
                        name="find"
                        autoComplete="find"
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
               

                {/* <Grid item container xs={12}>
              {petOwner.map((myPet) => (
                <Fragment key={myPet.id}>
                <Grid item xs={6}>
                {myPet.petName}
                </Grid>
                <Grid item xs={6}>
                {myPet.aula.id}
                </Grid>
                </Fragment>
              ))} */}
                {/* </Grid> */}
              </Grid>
              </form>
            </Box>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default AgendaModal;
