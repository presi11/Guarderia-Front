import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const EditComplete = ({ data, completeModal, setcompleteModal }) => {
  const toggleShow = () => setcompleteModal(!completeModal);
  
  function Reload (){
    window.location.reload(false);
  }
  return (
    <>
      <MDBModal
        show={completeModal}
        getOpenState={(e) => setcompleteModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Mascota Editada</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Se Actualizo a {data} Perfectamente :)</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={Reload}>
                Aceptar
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default EditComplete;
