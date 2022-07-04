import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';

function Login() {

    const dispatch = useDispatch();

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

        const user = {
            username,
            password
        }

        console.log(user);
        dispatch(login(user));
    };

    return(
        <section className='pt-3 container'>
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
                <div className="form-group">
                    <button className="mt-2 btn btn-success">Login</button>
                </div>
            </form>
        </section>
    )
} 

export default Login;