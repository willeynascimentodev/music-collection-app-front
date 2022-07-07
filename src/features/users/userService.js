import axios from 'axios';
import { toast } from 'react-toastify';


const API_PATH = 'http://127.0.0.1:3000' + '/users';

const insertUser = async (user) => {
    
    const config = {

    };

    const response = await axios.post(API_PATH, user, config);
    if(response.status == 200) {
        toast.success('User created!');
    }
}

const userService = {
    insertUser
}

export default userService;