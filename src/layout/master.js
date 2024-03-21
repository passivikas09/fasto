import { Outlet } from "react-router-dom";
import Headers from "./header";
import Footer from "./footer";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Master(){
    return(
        <>
           <Headers/>
           <Outlet/>
           <Footer/> 
           <ToastContainer />
        </>
    )
}