import axios from 'axios';
//Cambiar la ip de la api por la que coincida en localhost
const APIURL = 'http://localhost:3001/pruebas';

export const loginAxios = async (data)=>{
    const response = await axios.post(`${APIURL}`, {data: data});
    return response;
}
