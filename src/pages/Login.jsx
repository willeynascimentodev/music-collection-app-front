import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { loggedIn, loading } = useAuthStatus();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            username,
            password
        }

        dispatch(login(userData));
    };

    const { user } = useSelector( 
        (state) => state.auth    
    );

    useEffect(() => {

        if(user){
            navigate('/artists')
        }
        dispatch(reset)
    }, [user, navigate]);

    return(
        <section className='pt-3 container card mt-5 p-5'>
            <h1 className='mx-auto text-center'>Login</h1>
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
                <div className="mt-2 form-group">
                    <label>
                        Password
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
                <div className="mt-2 d-flex justify-content-between">
                    <Link to='/registration' className="mt-2 btn btn-secondary">Registration</Link>
                    <button className="mt-2 btn btn-success">Login</button>
                </div>
            </form>
        </section>
    )
} 

export default Login;