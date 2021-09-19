import axios from "axios";
//Cambiar la ip de la api por la que coincida en localhost
const APIURL = "http://localhost:3001/pruebas";

export const loginAxios = async (data) => {
  const { tokenId, name, email, googleId, expires_at, expires_in } = data;
  const user = {
      name, email, googleId, expires_at, expires_in
  }
  const config = {
    headers: {
      Authorization: `Bearer ${tokenId}`,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(`${APIURL}`, user, config);
  return response;
};
