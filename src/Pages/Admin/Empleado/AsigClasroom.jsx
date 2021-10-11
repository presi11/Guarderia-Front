import React, { useState, useEffect, Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { pets } from "../../../services/asignPetClassService";
import { getLoung } from "../../../services/scheduleService";
import LoungCard from "../../../Component/LoungCard/LoungCard";
import { Button } from "@mui/material";
import AgendaModal from '../../../Component/Modalforms/AgendaModal'
import ClassRoomModal from '../../../Component/Modalforms/ClassRoomModal'
import { getAllPets } from "../../../services/PetService";

const AsigClasroom = () => {

  const [getLoungData, setGetLoungData] = useState([]);
  const [openAgendaModal, setOpenAgendaModal] = useState(false);
  const [openClassRoomModal, setOpenClassRoomModal] = useState(false)
  const [room, setRoom] = useState(0)
 useEffect(() => {
    getLoung().then((data)=>{
      setGetLoungData(data)
    });
    
  }, [setGetLoungData]);

  function showModalAgenda() {
    setOpenAgendaModal(!openAgendaModal);
  }

  function showModalClassRooms(id) {
    console.log(id)
    setRoom(id);
    setOpenClassRoomModal(!openClassRoomModal);
    //getAllPets();
  }

  /* const handleSubmit = (event) => {
    event.preventDefault();
    getLoung().then(data=>{
      console.log(data)
    });
    //const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }; */

  return (
    <Container component="main" >
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
        <Box sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item container xs={12} spacing={2}>
              {/* <Button onClick={handleSubmit}>Get data</Button> */}
              {getLoungData.map((loung, index) => (
                <Fragment key={loung.id}>
                  <Grid item sm={6} xs={12} md={4}>
                  <LoungCard data={loung} showModal={showModalAgenda} showModalClassRooms={showModalClassRooms}/>

                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
     <AgendaModal open = {openAgendaModal} setOpen = {setOpenAgendaModal} data ={getLoungData}/>
     <ClassRoomModal title={'Macotas Asignadas al Salon: ' + room} open = {openClassRoomModal} setOpen = {setOpenClassRoomModal} data ={getLoungData}/>
    </Container>
  );
};

export default AsigClasroom;
