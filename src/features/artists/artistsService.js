import axios from 'axios';
import { toast } from 'react-toastify';



const API_PATH = 'https://mocki.io/v1/1da0b183-e02e-4f29-8f86-4c4abdeac672';

const getArtists = async () => {
    
    const config = {
        headers: {
            header1: "Basic ZGV2ZWxvcGVyOlpHVjJaV3h2Y0dWeQ=="
        }
    };

    const response = await axios.get(API_PATH, config);
    console.log(response.data);
    return response.data;
}

const authService = {
    getArtists
}

export default authService;