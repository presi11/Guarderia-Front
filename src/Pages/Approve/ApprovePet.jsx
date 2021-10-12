import React, { useState, useEffect } from "react";
import MePetsgrid from "../../Component/Grid-Pets/GridCards";
import { getPetPendings } from "../../services/PetService";
import qr from "../../Assets/noApprove.png";
const ApprovePet = () => {
  const [pets, setpets] = useState([]);
  const [statusCode, setStatusCode] = useState(0);
  useEffect(() => {
    getPetPendings().then((pets) => {
      setStatusCode(pets.status);
      setpets(pets.data);
    });
  }, [setpets]);

  var empty = false;
  if (pets.length === 0) {
    empty = true;
  }

  return (
    <>
      {statusCode === 200 ? <MePetsgrid pet={pets}></MePetsgrid> : null}
      {empty && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <img src={qr} alt="No hay mascotas para aprobar" />
          <h1>No hay mascotas para aprobar</h1>
        </div>
      )}
    </>
  );
};

export default ApprovePet;
