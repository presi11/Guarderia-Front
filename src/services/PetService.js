import axios from "axios";


const APIURL = "https://springback.azurewebsites.net/api/v1/pet";
/* const APIURL = "http://localhost:3001/pruebas"; */

export const registerPet = async (data) => {
  const tokenId = window.localStorage.getItem("access_token");
  //Usuario para pruebas en local
  //const user = `username=chorro&password=quevivanloshorro&grant_type=password`
  const config = {
    headers: {
      Authorization: `Bearer ${tokenId}`,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(`${APIURL}`, data, config);

  return response;
};

export const getPets = async () => {
    const tokenId = window.localStorage.getItem("access_token");
    //Usuario para pruebas en local
    //const user = `username=chorro&password=quevivanloshorro&grant_type=password`
    const config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
  
    const response = await axios.get(`${APIURL}/owner/${window.localStorage.getItem("email")}`, config);
    return response;
  };