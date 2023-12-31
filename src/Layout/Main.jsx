import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Footer from "../Pages/Shared/Footer/Footer";
const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Main;