import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BASE_URL } from "../../Utils/Config";
import showToast from "../../components/ToastNotification/Notification";
import { useNavigate, NavLink } from "react-router-dom"
import { routePaths } from "../../Routes/RoutePaths";
import "./Login.css"
const Login = ({ setActiveTab }) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: null,
        password: null
    })
    //Handle Change Functionality of inputs
    const HandleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    //Handle Login button click
    const { dispatch } = useContext(AuthContext);
    const HandleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/user/login`,
                {
                    method: "post",
                    headers: {
                        "content-type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(credentials)
                }
            )
            const result = await response.json();
            if (response.status === 200) {
                showToast("Success", result.message);
                dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
                navigate("/");
            }
        }
        catch (err) {
            showToast('error', err);
            dispatch({ type: "LOGIN_FAILURE", paylod: err.message })
        }
    }
    return (
        <div id="login-modal" className="modal">
            <div class="modal-content">
                <div className="modal-body">
                    <form className="form-login">
                        <label>Email</label>
                        <input htmlFor="email" name="email" onChange={HandleChange} />
                        <label>Password</label>
                        <input htmlFor="password" name="password" onChange={HandleChange} />
                        <button className="btn primary-btn" onClick={HandleLogin}>Login</button>
                        <span className="modal-span">New to travel?</span><NavLink to={routePaths.register}>Register</NavLink>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;