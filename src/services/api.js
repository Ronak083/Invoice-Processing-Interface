import axios from 'axios';

const API_URL = "";

export const saveInvoice = async (payload) =>{
    try{
        return axios.post(`${API_URL}/invoice`, payload );
    }
    catch (error){
        console.log('Error: ', error.message);
        return error.reponse.data;
    }
}