import axios from 'axios';
import { toast } from 'react-toastify';

const API_PATH = process.env.REACT_APP_API_URL + '/albums';

const getAlbums = async (token) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };

    const response = await axios.get(API_PATH, config);
    return response.data;
}

const getAlbum = async (token, id) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };

    const PATH_GET = `${API_PATH}/${id}`;
    const response = await axios.get(PATH_GET, config);
    return response.data;
}

const deleteAlbum = async (token, id) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };

    const PATH_DELETE = `${API_PATH}/${id}`;
    const response = await axios.delete(PATH_DELETE, config);
    return response.data;
}

const insertAlbum = async (token, album) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };

    const response = await axios.post(API_PATH, album, config);
    if(response.status == 201) {
        toast.success('Album Created');
    }
    return response.data
}

const updateAlbum = async (token, album) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };
    const PATH_UPDATE = `${API_PATH}/${album.id}`;
    const response = await axios.put(PATH_UPDATE, album, config);
    if(response.status == 200) {
        toast.success('Album Updated');
    }
    return response.data
}

const albumsService = {
    getAlbums,
    insertAlbum,
    updateAlbum,
    getAlbum,
    deleteAlbum
}

export default albumsService;