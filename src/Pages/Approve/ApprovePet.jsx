import React, { useState, useEffect } from "react";
import MePetsgrid from "../../Component/Grid-Pets/GridCards";
import { getPetPendings } from "../../services/PetService";

const ApprovePet = () => {
    const [pets, setpets] = useState([]);
    const [statusCode, setStatusCode] = useState(0)
    useEffect(() => {
      getPetPendings().then((pets)=>{
        setStatusCode(pets.status);
        setpets(pets.data)
      })
    }, [setpets]) 

    return (
      <>
      {statusCode===200?(<MePetsgrid pet = {pets}></MePetsgrid>):null}
        {/* <MePetsgrid pet = {pets}></MePetsgrid> */}


 
      </>
    );
  };


export default ApprovePet;
