import React, { useState, useEffect, Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { getLoung } from "../../../services/scheduleService";
import LoungCard from "../../../Component/LoungCard/LoungCard";
import AgendaModal from '../../../Component/Modalforms/AgendaModal'
import ClassRoomModal from '../../../Component/Modalforms/ClassRoomModal'


const AsigClasroom = () => {

  const [getLoungData, setGetLoungData] = useState([]);
  const [openAgendaModal, setOpenAgendaModal] = useState(false);
  const [openClassRoomModal, setOpenClassRoomModal] = useState(false)
  const [roomId, setRoomId] = useState(0)
  const [roomAgenda, setRoomAgenda] = useState(0);
  
 useEffect(() => {
    getLoung().then((data)=>{
      setGetLoungData(data)
    });
    
  }, [setGetLoungData]);

  function showModalAgenda() {
    setOpenAgendaModal(!openAgendaModal);
  }

  function showModalClassRooms(id) {
    setRoomId(id);
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
      <AgendaModal title ={roomId} open = {openAgendaModal} setOpen = {setOpenAgendaModal} idRoom={roomAgenda}/>
     <ClassRoomModal title={'Macotas Asignadas al Salon: ' + roomId} open = {openClassRoomModal} setOpen = {setOpenClassRoomModal} idRoom={roomId}/>
    </Container>
  );
};

export default AsigClasroom;
