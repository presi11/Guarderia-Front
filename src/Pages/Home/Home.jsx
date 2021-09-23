import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <main>
    {/* Hero unit */}
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
    </Box>
  </main>
  );
};

export default Home;
