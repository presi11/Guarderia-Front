import React, { useState, useEffect } from "react";
import MePetsgrid from "../../Component/Grid-Pets/GridCards";
import { getPets } from "../../services/PetService";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import ApproveModal from "../../Component/Modalforms/ApproveModal";
const ApprovePet = () => {
    const [open, setOpen] = React.useState(false);

    const [pets, setpets] = useState([]);
    const [statusCode, setStatusCode] = useState(0)
    useEffect(() => {
      getPets().then((pets)=>{
        setStatusCode(pets.status);
        setpets(pets.data)
      })
    }, [setpets]) 
  
    function showModal() {
        setOpen(!open);
      }
    return (
      <>
      {statusCode===200?(<MePetsgrid pet = {pets}></MePetsgrid>):null}
        {/* <MePetsgrid pet = {pets}></MePetsgrid> */}


 
      </>
    );
  };


export default ApprovePet;
