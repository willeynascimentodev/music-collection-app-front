import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { insertUser } from '../features/users/userSlice';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { login } from '../features/auth/authSlice';

function Registration() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { user } = useAuthStatus();
    
    const { isSuccess, isLoading, reset } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        full_name: '',
        role: '',
    });

    const { username, password, role, full_name } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username,
            password,
            full_name,
            role
        }

        dispatch(insertUser(userData));

    };

    return(
        <section className='pt-3 container'>
            <h1 className='mx-auto text-center'>Registration</h1>
            <form onSubmit={ onSubmit }>
                <div className="form-group">
                    <label>
                        E-mail
                    </label>
                    <input type="text" 
                        className="mt-1 form-control"
                        id="username"
                        name="username"
                        value={ username }
                        onChange={ onChange }
                        placeholder="Your username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
                        Full Name
                    </label>
                    <input type="text" 
                        className="mt-1 form-control"
                        id="full_name"
                        name="full_name"
                        value={ full_name }
                        onChange={ onChange }
                        placeholder="Your Full Name"
                        minLength={6}
                        required
                    />
                </div>
                <div className="mt-2 form-group">
                    <label>
                        Your Password
                    </label>
                    <input type="password" 
                        className="mt-1 form-control"
                        id="password"
                        name="password"
                        value={ password }
                        onChange={ onChange }
                        placeholder="Your Password"
                        required
                    />
                </div>
                <div className="mt-2 form-group">
                    <label>
                        Your Password
                    </label>
                    <select 
                        className='form-control' 
                        name="role" 
                        id="role"
                        onChange={ onChange }
                        required
                    >
                        <option value="">Level</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="mt-2 d-flex justify-content-between">
                    <Link to='/login' className="mt-2 btn btn-secondary">Back to Login</Link>
                    <button className="mt-2 btn btn-success">Done</button>
                </div>
            </form>
        </section>
    )
} 

export default Registration;