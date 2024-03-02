import styles from './login.Module.css'
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const onBtnClick = async (event) => {
        event.preventDefault();
        navigate("/weatherApp");
    }

    return (
        <div className={styles.login}>
            <form method="post" action="http://localhost:9000/login" onSubmit={onBtnClick} >
                <div className="wrapper" >
                    <div className="login_box">
                        <div className="login-header">
                            <span> Weather</span>
                        </div>
                        <div className="input_box">
                            <input type="text" id="user" class="input-field" required placeholder="Username" name="username" />
                        </div>
                        <div className="input_box">
                            <input type="password" id="pass" class="input-field" required placeholder="Password" name="password" />
                        </div>
                        <div className="input_box">
                            <input type="submit" class="input-submit" value="Login" />
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