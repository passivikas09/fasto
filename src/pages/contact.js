import {  useEffect, useState } from "react"
import { Link } from "react-router-dom"
import apiservice from "../apiservice/apiservice"
import { RingLoader } from "react-spinners"
import { toast } from "react-toastify"
export default function Contact() {
    const customStyle = {
        background: "URL('https://media.gettyimages.com/id/1184809762/photo/call-center-headset-device-at-office-desk-for-hotline-telemarketing-concept.jpg?s=612x612&w=0&k=20&c=ZDTs-dMavtkrANmmlUc0YYPMSVhXpChLd9Cgh7tKQJg=')",
        height: "60vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition:"center"
    }
    const[load ,setload]=useState(false)
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[message,setmessage]=useState("")
    const[contact,setcontact]=useState("")
    const[nation,setnation]=useState("") 

    useEffect(()=>{
        let token=sessionStorage.getItem("token")
        let data={
           _id:sessionStorage.getItem("_id")
        }
        if(!!token){
            apiservice.singleUser(data).then((res)=>{
                setname(res.data.data.name)
                setemail(res.data.data.email)
                setcontact(res.data.data.contact)
            }).catch((err)=>{
                toast.error("Error"+err)
            })
        }
    },[load])

    const submitEnquiry=(e)=>{
        e.preventDefault()
        setload(true)
        let data={
            name:name,
            email:email,
            message:message,
            mobile:contact,
            country:nation
        }
        apiservice.addContact(data).then((res)=>{
            if(res.data.success===false){
                setTimeout(() => {
                    setload(false)
                    toast.error(res.data.message)   
                },)    
            }else{
                    setTimeout(() => {
                        setload(false)
                        toast.success(res.data.message)
                    }, 3000)
            }
        }).catch((err)=>{
            toast.error("Error"+err)
        })
    }
    const loaderStyle={
        position:"Absolute",
        top:"100%",
        left:"48%",
        zIndex:1
    }
    return (
        <>
            <RingLoader size={100} color="aqua" cssOverride={loaderStyle} loading={load}/>
            <div className={load===true?"disable-screen":""}>
            <div className="container ">
            <div className="brand_color">
                    <div className="container">
                        <div style={customStyle} className="row ">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <p className="display-1 text-body-emphasis fw-bold mt-5">Contact us </p>
                                </div>
                                <div className=" text-center mx-auto">
                                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center fs-3">
                                    <Link className="text-dark" to="/">Home</Link>/<Link className="text-primary" to="/contact">Contact</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-12 text-center">
                        <p className="fs-4 "><i> We love to hear from you! Here are some simple ways to get in touch with us....</i></p>
                    </div>
                </div>
                <div className="row mx-5 mb-5" >
                    <div className="col-md-6 animate__animated animate__fadeIn animate__slow animate__repeat-1 animate__delay-1s">
                        <div className="row pt-5 text-start "> <p className="fs-2 fst-italic fw-semibold">Contact Info</p></div>
                        <div className="row pt-4 d-flex justify-content-start ">
                            <div className="col-md-5  mt-2 border ">
                                <i className="bi bi-geo-alt" style={{fontSize:"30px", color:"rgb(13, 110, 253)"}} ></i>
                                <p className="fs-4">Address</p>
                                <p className="  fw-medium ">
                                    136-137 MGC Industrial Park Tanda
                                (Jalandhar-Pathankot Highway) <br/>144203 Punjab India</p>
                            </div>
                            <div className="mx-1 col-md-6 mt-2 border">
                                <i className="bi bi-telephone" style={{fontSize:"30px", color:"rgb(13, 110, 253)"}} ></i>
                                <p className="fs-4">Call Us</p>
                                <p className=" fw-medium">91-85285-48662</p>
                            </div>
                        </div>
                        <div className="row pt-3 d-flex justify-content-start ">
                            <div className="col-md-5 mt-1 border pb-5 ">
                                <i className="bi bi-envelope" style={{fontSize:"30px", color:"rgb(13, 110, 253)"}} ></i>
                                <p className="fs-4">Message </p>
                                <p className="  fw-medium ">contact@fsato.org</p>
                                </div>

                            <div className="col-md-6 mt-1 pb-5 mx-1 border">
                                <i className="bi bi-clock" style={{fontSize:"30px", color:"rgb(13, 110, 253)"}} ></i>
                                <p className="fs-4">Opening Hours</p>
                                <p className=" fw-medium">Mon-Sat 9:00 am - 5:00 pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 offs   et-1 mt-5  animate__animated animate__fadeIn animate__slow animate__repeat-1 animate__delay-1s ">
                        <form>
                            <p className="fs-2 mb-5 fst-italic text-primary fw-semibold">Enquiry Form</p>
                            <div className="mb-3">
                                <input value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Name" type="email" className="form-control  border-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input  value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Email" type="email" className="form-control border-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <select onChange={(e)=>{setnation(e.target.value)}} className="form-select border border-secondary ">
                                    <option selected>select your country</option>
                                    <option>india</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input value={contact} onChange={(e)=>{setcontact(e.target.value)}} placeholder="Contact" type="text" className="form-control border-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 ">
                                <textarea value={message} onChange={(e)=>{setmessage(e.target.value)}} placeholder="Message" className="form-control border-secondary " id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button onClick={submitEnquiry} type="submit" className="btn btn-primary d-block  mx-auto  animate__animated animate__pulse animate__slow animate__repeat-2 2 animate__delay-4s">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}