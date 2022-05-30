import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isValidLogin, setIsValidLogin] = useState(true);

    const { setUser } = useUser();
    const history = useHistory();

    const onTextChange = e => {
        const copy = { ...formData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }
    const onFormSubmit = async e => {
        e.preventDefault();
        const { data } = await axios.post('/api/account/login', formData);
        const isValid = !!data;
        setIsValidLogin(isValid);
        if (isValid) {
            setUser(data);
            history.push('/mybookmarks');
        }
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 card card-body bg-light">
                <h3>Log in to your account</h3>
                {!isValidLogin && <span className='text-danger'>Invalid username/password. Please try again.</span>}
                <form onSubmit={onFormSubmit}>
                    <input onChange={onTextChange} value={formData.email} type="text" name="email" placeholder="Email" className="form-control" />
                    <br />
                    <input onChange={onTextChange} value={formData.password} type="password" name="password" placeholder="Password" className="form-control" />
                    <br />
                    <button className="btn btn-primary">Login</button>
                </form>
                <Link to="/signup">Sign up for a new account</Link>
            </div>
        </div>
    )
}
export default Login;