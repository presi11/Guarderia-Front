import React, { useState, useEffect } from "react";
import MePetsgrid from "../../Component/Grid-Pets/GridCards";
import { getPets } from "../../services/PetService";

const MePets = () => {

  const [pets, setpets] = useState([])
  useEffect(() => {
    getPets().then((pets)=>{
      setpets(pets.data)
      
    })
  }, [setpets])

  console.log(pets);
  

  return (
    <>
      <MePetsgrid pet = {pets}></MePetsgrid>
    </>
  );
};

export default MePets;
