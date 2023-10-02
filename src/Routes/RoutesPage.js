import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../components/About/About"
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { routePaths } from "./RoutePaths";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routePaths.home} element={<Home />} />
            <Route path={routePaths.about} element={<About />} />
            <Route path={routePaths.login} element={<Login />} />
            <Route path={routePaths.register} element={<Register />} />
        </Routes>
    )
}

export default AppRoutes;