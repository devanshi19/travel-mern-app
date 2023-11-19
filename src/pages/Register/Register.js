import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BASE_URL } from "../../Utils/Config";
import showToast from "../../components/ToastNotification/Notification";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../Routes/RoutePaths";
import "./Register.css"
const Register = () => {
    const [credentials, setCredentials] = useState({
        username: null,
        email: null,
        password: null
    })
    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);
    //Handle Login button click
    const HandleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/user/register`, {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            const result = await response.json();
            if (response.status !== 200) {
                showToast("error", result.message)
            }
            else {
                navigate(routePaths.login);
                dispatch({ type: "REGISTER_SUCCESS", paylod: result.data });
                showToast("Success", result.message);
            }

        }
        catch (err) {
            showToast('error', err);
        }
    }
    //Handle Change Functionality of inputs
    const HandleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <div id="register-modal" className="modal">
            <div class="modal-content">
                <div className="modal-body">
                    <form className="form-signin">
                        <label>Username</label>
                        <input for="username" name="username" onChange={HandleChange} />
                        <label>Email</label>
                        <input for="email" name="email" onChange={HandleChange} />
                        <label>Password</label>
                        <input for="password" name="password" onChange={HandleChange} />
                        <button className="btn primary-btn" onClick={HandleRegister}>Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;