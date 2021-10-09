import React,{Fragment} from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Stack } from "@mui/material";
import PerroFondo from "../../Assets/PerroFondo.jpg";
const Home = () => {
  return (
    <Fragment>

      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 0,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${PerroFondo})`,
          height: "92vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.5)",
          }}
          />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
              >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                >
                Guarderia
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                En Pexshop siempre estamos para brindarle a tu mascota la mejor
                atencion y el cuidado dentro de nuestras amplias instalaciones,
                no dejes el cuidado de tus mascotas a cualquiera, dejalo todo en
                manos de Pexshop lideres en la atencion y cuidaro para tu perro.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action</Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* 
    <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 8,
      pb: 6,
    }}
    >
    <Container maxWidth="sm">
    <Typography
    component="h1"
    variant="h2"
    align="center"
    color="text.primary"
    gutterBottom
    >
    Guarderia
    </Typography>
    <Typography variant="h5" align="center" color="text.secondary" paragraph>
    En Pexshop siempre estamos para brindarle a tu mascota la mejor atencion y el cuidado dentro de nuestras amplias instalaciones,
    no dejes el cuidado de tus mascotas a cualquiera, dejalo todo en manos de Pexshop lideres en la atencion y cuidaro para tu perro.
    </Typography>
    <Stack
    sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
          >
          <Button variant="contained">Main call to action</Button>
          <Button variant="outlined">Secondary action</Button>
          </Stack>
          </Container>
        </Box> */}
    
  </Fragment>
  );
};

export default Home;
