import axios from 'axios';
const APIURL = "https://springback.azurewebsites.net/api/v1/lounge/";
const APIURLPET = "https://springback.azurewebsites.net/api/v1/pet/owner/";
const APIURLSCHEDULE = "https://springback.azurewebsites.net/api/v1/schedule/";


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

export const getLoungeSchedules= async (id)=>{
  const tokenId = window.localStorage.getItem("access_token");
  const config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
  const response = await axios.get(`${APIURL}schedule/${id}`, config);
  return response.data;
}

export const postAgendaSchedule= async (data)=>{
  const tokenId = window.localStorage.getItem("access_token");
  const config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
  
  const response = await axios.post(`${APIURLSCHEDULE}`, data, config);
  return response;
}

export const getPruebas= async (id)=>{
  const tokenId = window.localStorage.getItem("access_token");
  const config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
  
  const response = await axios.get(`${APIURL}schedule/${id}`, config);
  return response;
}

export const getPetByOwner = async (email)=>{
  const tokenId = window.localStorage.getItem("access_token");
  const config = {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    };
  
  const response = await axios.get(`${APIURLPET}${email}`, config);
  return response;
}