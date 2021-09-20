import axios from "axios";

const APIURL = "https://guarderiaback.azurewebsites.net/oauth/token"
/* const APIURL = "http://localhost:3001/pruebas"; */

export const loginAxios = async (data) => {
  const { email, googleId } = data;
  const user = `username=${email}&password=${googleId}&grant_type=password`;
  //Usuario para pruebas en local
  //const user = `username=chorro&password=quevivanloshorro&grant_type=password`
  /* const config = {
    headers: {
      /* Authorization: `Bearer ${tokenId}`, 
      "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      auth: basicAuth
    },
  }; */

  const response = await axios.post(`${APIURL}`, user, {
    "Content-Type": "application/x-www-form-urlencoded",
    auth: {
        username: 'pexshop-front',
        password: 'quevivanloshorro'
    }
  });
  window.localStorage.setItem("access_token", response.data.access_token);
  return response;
};
