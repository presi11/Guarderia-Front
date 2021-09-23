import axios from "axios";

//const APIURL = "https://springback.azurewebsites.net/api/v1/users/sign-in";
const APIURL = "http://localhost:8091/api/v1/users/sign-in"; 

export const registerUser = async (data) => {

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(`${APIURL}`, data, config);
  window.location.reload(false)
  return response;
};
