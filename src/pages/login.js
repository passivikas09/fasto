import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RingLoader } from "react-spinners"
import apiservice from "../apiservice/apiservice"
import { toast } from "react-toastify"
export default function Login() {
    const [load, setload] = useState(false)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const nav = useNavigate()
    const loginfunc = (e) => {
        e.preventDefault()
        setload(true)
        let data = {
            email: email,
            password: password
        }
        apiservice.login(data).then((res) => {
            sessionStorage.setItem("token", res.data.token) 
            sessionStorage.setItem("userData", JSON.stringify(res.data.data))
            sessionStorage.setItem("userType",res.data.data.userType)
            if (res.data.success === true && res.data.data.userType == 1) {
                setTimeout(() => {  
                    setload(false)
                    toast.success(res.data.message)
                    toast.success("Welcome  " + JSON.parse(JSON.stringify(res.data.data.name)))
                    nav("/admin")
                }, 3000);
            }
            else if (res.data.success === true && res.data.data.userType == 2) {
                sessionStorage.setItem("_id", res.data.data._id)
                setTimeout(() => {
                    setload(false)
                    toast.success(res.data.message)
                    toast.success("Welcome   " + JSON.parse(JSON.stringify(res.data.data.name)))
                    nav("/")
                }, 3000)
            } else {
                setTimeout(() => {
                    setload(false)
                    toast.error(res.data.message)
                }, 3000)
            }
        }).catch((err) => {
            toast.error("error" + err)
        })
    }


    const customStyle = {
        position: "Absolute",
        left: "48%",
        top: "50%",
        zIndex: 1
    }
    return (
        <>
            <RingLoader size={100} color="aqua" cssOverride={customStyle} loading={load} />
            <div className={load === true ? "disable-screen" : ""}>
                <div className="container ">
                    <div className="d-flex justify-content-center py-4 ">
                        <div className="col-md-4">
                            <main className="form-signin w-100 m-auto ">
                                <form>
                                    <img className="mb-4" src="/images/logo1.jpg" alt="" width="72" height="57" />
                                    <h1 className="h3 mb-3 fw-normal">Sign in</h1>

                                    <div className="form-floating">
                                        <input value={email} onChange={((e) => { setemail(e.target.value) })} type="email" className="form-control  border border-secondary" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                        <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" className="form-control  border border-secondary" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-check text-start ">
                                        <input className="form-check-input border border-secondary" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                </form>
                            </main>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button onClick={loginfunc} className="btn btn-primary w-25 py-2 mt-2" type="submit">Sign in</button>
                    </div>
                    <div className="row mb-5">
                        <div className="col d-flex justify-content-center">
                            <Link to={"/register"} className=" mx-1 py-2 mt-2" type="submit">Create your Account</Link>
                            <Link to={"/forgotpassword"} style={{ color: "red" }} className=" mt-2  py-2" type="submit">Forgot Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}