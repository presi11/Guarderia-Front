import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { deletePet } from "../../services/PetService";

const DeleteModal = ({ open, setOpen, data, setMyPets, myPets, pet }) => {



  const handleClose = () => {
    setOpen(false);
  };
  
  function handleCloseDelete () {
    

  

   
   
  
  
    //setMyPets(myPets)

    deletePet(data.id)
      
    setOpen(false);
    //window.location.reload(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Está seguro?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Desea elimar a {data.petName}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleCloseDelete} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteModal;