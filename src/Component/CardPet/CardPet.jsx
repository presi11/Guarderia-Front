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
import { MDBBtn } from "mdb-react-ui-kit";
import Perro from "../../Assets/perro.jpg";
import EditPet from "./EditPet";

const CardPet = ({ dataPet }) => {
  const [gridModal, setGridModal] = useState(false);

  function toggleShow() {
    setGridModal(!gridModal);
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

      <MDBBtn onClick={toggleShow}>Editar</MDBBtn>
      <EditPet gridModal={gridModal} setGridModal={setGridModal} data = {dataPet}></EditPet>
    </>
  );
};

export default CardPet;
