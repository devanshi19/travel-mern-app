import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRoutes from "../../Routes/RoutesPage";

const Layout = ({ className }) => {
    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
        </>
    )
}

export default Layout;