import React from "react";
import Grid from "@mui/material/Grid";
import CardPet from "../CardPet/CardPet";
const MePetsgrid = () => {
  const [spacing] = React.useState(2);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={1}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>        
              <CardPet></CardPet>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MePetsgrid;
