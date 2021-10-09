import React, { useState, useEffect, Fragment } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { pets } from "../../../services/asignPetClassService";

const AsigClasroom = () => {
  const [petOwner, setPetOwner] = useState([]);

  useEffect(() => {
    setPetOwner(pets);
  }, []);

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
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Asignación de aula
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo del dueño"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
              />
            </Grid>
            <Grid item xs={2}>
              <Button type="submit" variant="outlined" sx={{ mt: 2, mb: 2 }}>
                Buscar
              </Button>
            </Grid>

            <Grid item container xs={12}>
              {petOwner.map((myPet) => (
                <Fragment key={myPet.id}>
                  <Grid item xs={6}>
                    {myPet.petName}
                  </Grid>
                  <Grid item xs={6}>
                    {myPet.aula.id}
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AsigClasroom;
