import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { themeContext } from "../../App";
import "./Header.css";
import { routePaths } from "../../Routes/RoutePaths";

const Header = () => {
    const contex = useContext(themeContext);
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
                    <button className="header-btn">
                        Login
                    </button>
                    <button className="header-btn">
                        Register
                    </button>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" onClick={contex.toggleTheme} />
                        <span class="toggle-track"></span>
                        <span class="toggle-thumb"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Header;