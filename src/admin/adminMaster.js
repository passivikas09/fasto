import { Navigate, Outlet } from "react-router-dom";
import AdminHeader from "./adminHeader";
import { ToastContainer, toast } from "react-toastify";
export default function AdminMaster(){
const token= sessionStorage.getItem("token")
const userType=sessionStorage.getItem("userType")
if(!token || userType==2){
    return <Navigate to={"/"} />
}     
    return(
        <>  
            <AdminHeader />   
             <Outlet/>
             <ToastContainer/>
        </>
    )
}