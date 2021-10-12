import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LoungCard = (props) => {
    const {data, showModal, showModalClassRooms} = props
  return (
    <Card sx={{ maxWidth: 275, backgroundColor: "rgba(81, 209, 246, 0.4)"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" >
          Aula
        </Typography>
        <Typography variant="h5" >
          {data.id}
        </Typography>
        <Typography color="text.secondary">
          Capacidad maxima
        </Typography>
        <Typography variant="body2">
          {data.maximumCapacity}
        </Typography>
        <Typography color="text.secondary">
          Mascotas en el aula
        </Typography>
        <Typography variant="body2">
          {data.currentQuantity}
        </Typography>
        <Typography color="text.secondary">
          Disponibilidad
        </Typography>
        <Typography variant="body2">
          {data.availability}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>showModal(data.id)}>Asignar una mascota</Button>
        <Button size="small" onClick={()=> showModalClassRooms(data.id)}>Ver Mascotas</Button>
      </CardActions>
    </Card>
  );
};

export default LoungCard;
