import React, {useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import CardPet from "../CardPet/CardPet";

//import DeleteModal from "../Modalforms/DeleteModal";




const MePetsgrid = ({ pet }) => {
  const [spacing] = React.useState(2);
  const [myPets, setMyPets] = useState([])
  useEffect(() => {
    setMyPets(pet)
  }, [setMyPets, pet])

  return (

      <Grid sx={{ flexGrow: 1 }} container spacing={1}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {myPets.map((value, index) => (
              <Grid key={index} item>
                <CardPet dataPet={value} setMyPets={setMyPets} myPets={myPets}></CardPet>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  );
};

export default MePetsgrid;
