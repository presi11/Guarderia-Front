import axios from 'axios';
const APIURL = "https://springback.azurewebsites.net/api/v1/lounge/";
const APIURLPET = "https://springback.azurewebsites.net/api/v1/pet/owner/";

export const getLoung = async ()=>{
    const tokenId = window.localStorage.getItem("access_token");
    const config = {
        headers: {
          Authorization: `Bearer ${tokenId}`,
          "Content-Type": "application/json",
        },
      };
    
    const response = await axios.get(`${APIURL}`, config);
    console.log(response.data)
    return response.data;
}

export const getLoungeSchedules= async ()=>{
  const tokenId = window.localStorage.getItem("access_token");
  const config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
  
  const response = await axios.get(`${APIURL}schedule/1`, config);
  console.log(response.data)
  return response.data;
}

export const getPetByOwner = async (email)=>{
  const tokenId = window.localStorage.getItem("access_token");
  const config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
  
  const response = await axios.get(`${APIURLPET}${email}`, config);
  console.log(response.data)
  return response.data;
}