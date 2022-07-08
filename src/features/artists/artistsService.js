import axios from 'axios';
import { toast } from 'react-toastify';



const API_PATH = process.env.REACT_APP_ARTISTS_URL;

const getArtists = async () => {
    
    const config = {
        headers: {
            header1: "Basic ZGV2ZWxvcGVyOlpHVjJaV3h2Y0dWeQ=="
        }
    };
    const response = await axios.get(API_PATH, config);
    return response.data;
}

const getArtist = async (id) => {
    
    const config = {
        headers: {
            header1: "Basic ZGV2ZWxvcGVyOlpHVjJaV3h2Y0dWeQ=="
        }
    };
    const response = await axios.get(API_PATH, config);
    return response.data.filter( (artist) => { return artist.id == id}) ;
}

const authService = {
    getArtists,
    getArtist
}

export default authService;