import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function Reg() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        region: '',
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onBtnClick = async (event) => {
        event.preventDefault();
<<<<<<< Updated upstream

        try {
            console.log(formData); 
            const response = await axios.post('http://localhost:9090/signup', formData);
            console.log(response);
    
            if (response.status === 200) 
                navigate('/');
            else 
                console.error('register failed');
        } catch (error) {
            console.error('Error during registration:', error);
        }
=======
        navigate("/Login");
>>>>>>> Stashed changes
    }

    return (
        <div>
            <div className="wrapper" >
                <form method="post" action="http://localhost:9000/signup" onSubmit={onBtnClick}>
                    <div className="login_box">
                        <div className="login-header">
                            <span> Weather</span>
                        </div>
                        <div className="input_box">
<<<<<<< Updated upstream
                            <input type="text" id="user" class="input-field" required placeholder="Username"  name='username' onChange={onInputChange} />
                        </div>
                        <div className="input_box">
                            <input type="email" id="user" class="input-field" required placeholder="Email"  name='email' onChange={onInputChange}/>
                        </div>
                        <div className="input_box">
                            <input type="password" id="pass" class="input-field" required placeholder="Password" name='password' onChange={onInputChange}/>
                        </div>
                        <div className="input_box">
                            <input type="text" id="pass" class="input-field" required placeholder="City" name='region' onChange={onInputChange}/>
=======
                            <input type="text" id="user" class="input-field" required placeholder="Username"/>
                        </div>
                        <div className="input_box">
                            <input type="email" id="user" class="input-field" required placeholder="Email"/>
                        </div>
                        <div className="input_box">
                            <input type="password" id="pass" class="input-field" required placeholder="Password"/>
                        </div>
                        <div className="input_box">
                            <input type="text" id="pass" class="input-field" required placeholder="City"/>
>>>>>>> Stashed changes
                        </div>
                        <div className="input_box">
                            <Link To='./weatherApp.js'></Link>
                            <input type="submit" class="input-submit" value="Sing Up" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Reg;