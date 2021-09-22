import React from "react";
import Grid from "@mui/material/Grid";
import CardPet from "../CardPet/CardPet";
const MePetsgrid = ({pet}) => {
  const [spacing] = React.useState(2);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={1}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {pet.map((value, index) => (
            <Grid key={index} item>        
              <CardPet dataPet={value}></CardPet>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MePetsgrid;
