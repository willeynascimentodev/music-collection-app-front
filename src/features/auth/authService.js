import axios from 'axios';
import { toast } from 'react-toastify';



const API_PATH = 'http://127.0.0.1:3000' + '/auth';

const login = async (user) => {
    
    const response = await axios.post(API_PATH, user);
    
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
        toast.success('Logged In');
        return response.data;
    }

}

const authService = {
    login
}

export default authService;