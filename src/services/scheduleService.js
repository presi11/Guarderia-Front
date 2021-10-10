import axios from 'axios';
const APIURL = "https://springback.azurewebsites.net/api/v1/lounge/";

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