import React, { useState } from "react";
import {
  ContainerCard,
  Aditional,
  ImgContainerPet,
  NamePetAndAge,
  PetCard,
  PetDescription,
  Help,
  MoreInfoPet,
  Coords,
  ContainerList,
} from "./CardPet.elements";
import Perro from "../../Assets/perro.jpg";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Stack } from "@mui/material";
//import EditPet from "./EditPet";
import CompleteFormPet from "../Modalforms/CompleteFormPet"
import ModalDialog from '../Modalforms/ModalDialog'
import RegisterPet from '../../Pages/Pets/RegisterPet'

const CardPet = ({ dataPet }) => {
  const [gridModal, setGridModal] = useState(false);
  const [openEditOrAdd, setOpenEditOrAdd] = useState(false);
  function toggleShow() {
    setGridModal(!gridModal);
  }

  const openModalEditPet= ()=>{
    setOpenEditOrAdd(true)
  }
  return (
    <>
      <ContainerCard>
        {/* <img src={Perro} alt="" /> */}
        <Aditional>
          <PetCard>
            {/* 
            <NamePetAndAge age={true} center={true}>
            {props.age} años
          </NamePetAndAge>
            */}

            <NamePetAndAge age={true} center={true}>
              {dataPet.age} años
            </NamePetAndAge>
            <ImgContainerPet perro={Perro} />
            <NamePetAndAge center={true}>{dataPet.petName}</NamePetAndAge>
          </PetCard>
          <MoreInfoPet>
            <h1>{dataPet.petName}</h1>
            <Coords>
              <span>Raza: {dataPet.race.description}</span>
            </Coords>
            <Coords>
              <span>Tamaño: {dataPet.size}</span>
            </Coords>
            <Coords>
              <span>Tiene plan de vacunacion: {dataPet.vaccinationPlan}</span>
            </Coords>
            <Coords>
              <span>Cuidados: {dataPet.careToHave}</span>
            </Coords>
            <ContainerList>
              <li>Guarderia</li>
              <li>Dia de sol</li>
              <li>Colegio</li>
            </ContainerList>
          </MoreInfoPet>
        </Aditional>
        <PetDescription>
          <h1>{dataPet.petName}</h1>
          <p>
            Perro color caka con ojos saltones, le gusta robar zapatos y
            dañarlos
          </p>
          <Help>Pasa el mouse por encima de la foto para mas informacion</Help>
        </PetDescription>
      </ContainerCard>
      <Stack direction="row" spacing={2}>
        <Button color="error" variant="contained" startIcon={<DeleteIcon />}>
          Eliminar
        </Button>
        <Button variant="contained" startIcon={<EditIcon />} onClick={()=>setOpenEditOrAdd(true)}>
          Editar
        </Button>
      </Stack>
      <ModalDialog
        title="Editar una mascota"
        openModal={openEditOrAdd}
        setOpenModal={setOpenEditOrAdd}
      >
        <RegisterPet  />
      </ModalDialog>
      <CompleteFormPet></CompleteFormPet>
      {/* <EditPet gridModal={gridModal} setGridModal={setGridModal} data = {dataPet}></EditPet> */}
    </>
  );
};

export default CardPet;
