import styles from './login.Module.css'
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const Login=() =>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onBtnClick = async (event) => {
        event.preventDefault();
        try {
            console.log(formData); 
            const response = await axios.post('http://localhost:9090/login', formData);
            console.log(response);
    
            if (response.status === 200) {
                navigate('/weatherApp/weather');
            } else if (response.status === 404) {
                navigate('/reg');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            navigate('/reg');
        }
    };
    
    
    return (
        <div className={styles.login}>
            <form onSubmit={onBtnClick}>
                <div className="wrapper" >
                  <div className="login_box">
                        <div className="login-header">
                            <span> Weather</span>
                        </div>
                        <div className="input_box">
                            <input type="text" id="user" className="input-field" required placeholder="Username"  onChange={onInputChange} name='username'/>
                        </div>
                        <div className="input_box">
                            <input type="password" id="pass" className="input-field" required placeholder="Password"  onChange={onInputChange} name='password'/>
                        </div>
                        <div className="input_box">
                            <button type="submit" className="input-submit" >Login</button>
                        </div>
                        <div className="register">
                            <span>Don't have an account? <Link to="/reg">Register</Link></span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login;