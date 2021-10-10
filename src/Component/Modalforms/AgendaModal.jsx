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
  CssBaseline,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Control from "../Control/Control";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  dialogWraper: {
    padding: theme.spacing,
    position: "absolute",
    width: "600px",
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
      <DialogContent dividers>
        <Container component="main">
          <CssBaseline />
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
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container>
                <Grid item xs={10}>
                  <TextField
                    margin="normal"
                    required
                    id="email"
                    label="Correo del dueño"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    size="small"
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
            </Box>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default AgendaModal;
