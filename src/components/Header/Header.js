import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { themeContext } from "../../App";
import "./Header.css";
import { routePaths } from "../../Routes/RoutePaths";
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../Context/AuthContext";

const Header = () => {
    const contex = useContext(themeContext);
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);
    const navLinks = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: routePaths.about
        },
        {
            name: "Tour",
            link: routePaths.tour
        },
    ]

    //Handle Login Popup open 
    const HandleLoginBtn = () => {
        navigate(routePaths.login)

    }

    //Handle Logout Btn click
    const HandleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    }

    return (
        <div className="header-wrap">
            <div className="container d-flex">
                <div className="header-left">
                    <ul className="d-flex">
                        {navLinks.map((item, i) => {
                            return (
                                <li key={i} >
                                    <NavLink to={item.link}>{item.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>

                </div>
                <div className="header-middle">
                    <h1>Travel</h1>
                </div>
                <div className="header-right d-flex">
                    {user !== null ? (
                        <div className="user-info d-flex">
                            <span>{user.username.charAt(0)}</span>
                            <button className="btn" onClick={HandleLogout}>Logout</button>
                        </div>
                    ) : (
                        <button className="header-btn" onClick={HandleLoginBtn}>
                            <AiOutlineUser />
                        </button>
                    )}
                    <label className="toggle-switch">
                        <input type="checkbox" className="toggle-input" onClick={contex.toggleTheme} />
                        <span className="toggle-track"></span>
                        <span className="toggle-thumb"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Header;