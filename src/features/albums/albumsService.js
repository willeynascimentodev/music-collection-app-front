import axios from 'axios';

const API_PATH = 'http://127.0.0.1:3000' + '/albums';

const getAlbums = async (token) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${ token }`
        }
    };

    const response = await axios.get(API_PATH, config);
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

const albumsService = {
    getAlbums,
    deleteAlbum
}

export default albumsService;