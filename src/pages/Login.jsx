import { useState } from 'react'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return(
        <section className='pt-3 container'>
            <h1 className='mx-auto text-center'>Login</h1>
            <form>
                <div className="form-group">
                    <label>
                        E-mail
                    </label>
                    <input type="email" 
                        className="mt-1 form-control"
                        id="email"
                        name="email"
                        value={ email }
                        onChange={ onChange }
                        placeholder="Your Email"
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