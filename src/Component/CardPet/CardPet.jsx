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

const CardPet = (props) => {
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
              15 años
            </NamePetAndAge>
            <ImgContainerPet perro={Perro} />
            <NamePetAndAge center={true}>Lucas</NamePetAndAge>
          </PetCard>
          <MoreInfoPet>
            <h1>Lucas</h1>
            <Coords>
              <span>Raza: Pastor Aleman</span>
            </Coords>
            <Coords>
              <span>Tamaño: Pequeño</span>
            </Coords>
            <Coords>
              <span>Tiene plan de vacunacion: Si</span>
            </Coords>
            <Coords>
              <span>Cuidados</span>
            </Coords>
            <ContainerList>
              <li>Guarderia</li>
              <li>Dia de sol</li>
              <li>Colegio</li>
            </ContainerList>
          </MoreInfoPet>
        </Aditional>
        <PetDescription>
          <h1>Lucas</h1>
          <p>
            Perro color caka con ojos saltones, le gusta robar zapatos y
            dañarlos
          </p>
          <Help>Pasa el mouse por encima de la foto para mas informacion</Help>
        </PetDescription>
      </ContainerCard>

      <MDBBtn onClick={toggleShow}>Editar</MDBBtn>
      <EditPet gridModal={gridModal} setGridModal={setGridModal}></EditPet>
      <EditPet gridModal={gridModal} setGridModal={setGridModal}></EditPet>
    </>
  );
};

export default CardPet;
