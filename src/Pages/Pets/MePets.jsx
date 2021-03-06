import React, { useState, useEffect } from "react";
import MePetsgrid from "../../Component/Grid-Pets/GridCards";
import { getPets } from "../../services/PetService";

const MePets = () => {

  const [pets, setpets] = useState([]);
  const [statusCode, setStatusCode] = useState(0)
  useEffect(() => {
    getPets().then((pets)=>{
      setStatusCode(pets.status);
      setpets(pets.data)
      console.log(pets);
    })
  }, [setpets]) 

  return (
    <>
    {statusCode===200?(<MePetsgrid pet = {pets}></MePetsgrid>):null}
      {/* <MePetsgrid pet = {pets}></MePetsgrid> */}
    </>
  );
};

export default MePets;