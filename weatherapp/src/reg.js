import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Reg() {
    const navigate = useNavigate();
    const onBtnClick = (event) => {
        event.preventDefault();
        navigate("/weatherApp");
    }

    return (
        <div>
            <div className="wrapper" >
                <form onSubmit={onBtnClick}>
                    <div className="login_box">

                        <div className="login-header">

                            <span> Weather</span>

                        </div>

                        <div className="input_box">

                            <input type="text" id="user" class="input-field" required placeholder="Username" />




                        </div>
                        <div className="input_box">

                            <input type="email" id="user" class="input-field" required placeholder="Email" />




                        </div>

                        <div className="input_box">

                            <input type="password" id="pass" class="input-field" required placeholder="Password" />





                        </div>
                        <div className="input_box">

                            <input type="text" id="pass" class="input-field" required placeholder="City" />





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