import { useState } from "react"
import { Link } from "react-router-dom" 
import { RingLoader } from "react-spinners"
import apiservice from "../apiservice/apiservice"
import { toast } from "react-toastify"
export default function Forgotpwd(){
const [load ,setload]=useState(false)    
const [email,setemail]=useState("")
const [newpwd,setnewpwd]=useState("")
const [renewpwd,setrenewpwd]=useState("")  
const pwdfunc=()=>{
   setload(true)
   let id=sessionStorage.getItem("_id")
   let data={
    _id:id,
    newpassword:newpwd,
    repassword:renewpwd
   }
   apiservice.forgotpwd(data).then((res)=>{
       if(res.data.success===false){
        setTimeout(()=>{
           setload(false)
           toast.error(res.data.message)
        }) 
       }else{
        setTimeout(()=>{
            setload(false)
            toast.success(res.data.message)
        },3000)
       }
   }).catch((err)=>{
        toast.error("Error"+err)
   })
} 
const customStyle = {
    position: "Absolute",
    left: "48%",
    top: "50%",
    zIndex: 1
}   
    return(
        <>
        <RingLoader size={100} color='aqua' cssOverride={customStyle} loading={load} />
        <div className={load === true ? "disable-screen" : ""}>
           <div className="container ">
                <div className="d-flex justify-content-center py-4 ">
                    <div className="col-md-4">
                        <main className="form-signin w-100 m-auto pt-3   ">
                            <form>
                                <h1 className="h3 mb-3 fw-normal text-center">Forgot Password</h1>

                                <div className="form-floating">
                                    <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" className="form-control  border border-secondary" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Enter your  Email </label>
                                </div>
                                <div className="form-floating">
                                    <input value={newpwd} onChange={(e)=>{setnewpwd(e.target.value)}} type="password" className="form-control  border border-secondary" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">New Password</label>
                                </div>
                                   <div className="form-floating">
                                    <input value={renewpwd} onChange={(e)=>{setrenewpwd(e.target.value)}} type="password" className="form-control  border border-secondary" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Re-enter New Password</label>
                                </div>
                            </form>
                        </main>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <button onClick={pwdfunc}  className="btn btn-primary w-25 py-2 " type="submit">Sign in</button>   
                </div>
                <div className="row mb-5">
                    <div className="col d-flex justify-content-center">   
                    <Link to={"/signin"} className=" mx-1 py-2 mt-2" type="submit">Back to Login Page</Link>
                    </div>
                </div>
            </div> 
         </div>
        </>
    )
}