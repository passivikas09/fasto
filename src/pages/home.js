import "animate.css"
import Slider from "../components/slider"
import CountUp from "react-countup"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import apiservice from "../apiservice/apiservice"
import { toast } from "react-toastify"
import Testimonials from "../components/testimonials"
export default function Homepage() {
const [totaltrained,settotaltrained]=useState("") 
const [data,setdata]=useState([]) 
const [load,setload]=useState(false)  
useEffect(()=>{
    apiservice.totaltrained().then((res)=>{    
        settotaltrained(res.data.data[0].totaltrainee)
    }).catch((err)=>{
        toast.error("error"+err)
    })
},[load])

useEffect(()=>{
    apiservice.totalcategorywise().then((res)=>{    
        setdata(res.data.data)
    }).catch(()=>{
        toast.error("Something went wrong")
    })
},[load])

    return (
        <>
            {/* slider */}
            <Slider/>
            {/* about */}
            <div className="about ">
                <div className="container">
                    <p className="text-center fs-1">About Us</p>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="about_box mt-5">
                                <figure><img className="" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRISUQ0jAMM0zr9HvrHXGm5vvXr5KE1EK4OHPwtmObOAZd_U0CwfN1XcNjkMotQ_rfF8bl4" alt="about" /></figure>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="about_box">
                                {/* <h3 className="text-center" >About us</h3> */}
                                <p style={{lineHeight:"1.25"}} className="fs-4 mt-5"><b>The Food Safety Awareness and Training Organisation (FSATO)</b> is a registered organisation and the professional voice for environmental health. It sets standards, set up food safety training courses and qualifications for the education of members.
                                 It provides information related to food safety, guidance and support to members. The FSATO is a vocal promoter of improvements in food safety and food standards. Through our own initiatives, and through partnership working with a range of other organisations, we are working to achieve availability of safe and wholesome food for everyone (with our 'Safe Food Farm to Fork' approach), and to promote the benefits of healthy eating.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* certificate  */}
            <div className="container ">
                <div className="container marketing my-5 ">
                    <div className="row">
                        <div className=" text-center"><p className="fs-1 fw-bold p-5">Total certificate :<CountUp end={totaltrained} delay={5} /> </p></div>
                    </div>
                    <div className="row d-flex justify-content-center">
                    {data.map((el,index)=>{
                        return(
                            <div  className="col-md-3 border mx-1 mt-2 animate__animated animate__backInLeft animate__slow animate__repeat-1 animate__delay-1s text-center pb-2">
                                    {el.results.map((item,index)=>{
                                        return(
                                            <div key={index} className=" fs-3 fw-normal p-3 mt-3">{item.name}</div>
                                        ) 
                                    })}
                                    <p className="fs-4">{el.categorywisetrainee}</p>
                                    <Link to="/fsatotraining" className="btn btn-primary ">Read More</Link>
                            </div>                  
                        )
                    })}
                    </div>  
                    </div>
                </div>
            {/* services */}
            {/* service */}
            <div className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="title">
                                <h2>Service <strong className="black">Process</strong></h2>
                                <span>FSATO helps to improve our food safety technology performance. We deliver business results through people centred approach for technology and providing the right expertise, according to your needs.</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 animate__animated animate__zoomIn animate__slow animate__repeat-1 animate__delay-3s">
                            <div className="service-box p-1">
                                <i><img alt="services1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kzB9ujgDT0Y61S8XgmMe5Y2bUuKDMOnZQg&usqp=CAU" /></i>
                                <h3>Training</h3>
                                <p className=" fw-medium">As a training body, the FSATO provides food safety training, tailor made training regimes for different segments covering food safety aspects from 'Farm to Fork'.prepared and peer reviewed by experts within the FSATO membership </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 animate__animated animate__zoomIn animate__slow animate__repeat-1 animate__delay-3s">
                            <div className="service-box p-1">
                                <i><img className="img-fluid"  alt="services2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSso5bAPyclR152MOXMpnxz99v9cqmA8trNkw&usqp=CAU" /></i>
                                <h3>Event and Seminars</h3>
                                <p className="fw-medium">arranges events such as scientific conferences and workshops, including a prestigious annual lecture to an invited audience. Also, seminars are arranged on regular basis to raise awareness related to food safety issues by consumer and local organisations.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 animate__animated animate__zoomIn animate__slow animate__repeat-1 animate__delay-3s">
                            <div className="service-box p-1">
                                <i><  img  className="img-fluid"  alt="services3" src="/images/worker.jpg" /></i>
                                <h3>Science and Technology</h3>
                                <p className="fw-medium">Through the expertise of our members, FSATO is uniquely placed to provide independent objective information on food issues. Our statements are publicly available, prepared and peer reviewed by experts within the FSATO membership.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end service */}
        <Testimonials/>
            {/* contact */}
            <div className="container my-5  ">
                <div className="row">
                    <p className="fs-1 text-center fw-bold "><i>Contact Us</i></p>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-5"><img src="https://media.gettyimages.com/id/1175664818/photo/large-group-of-new-online-business-sale-team-people-and-call-centre-it-support-helping.jpg?s=612x612&w=0&k=20&c=DuZfdAsZ0k65hIrt9iJLK_Wekp5Q1Q2My2xoiSIy3wU=" height={"100%"} alt="contact1"  className="animate__animated animate__fadeInLeft animate__slow animate__repeat-1 animate__delay-4s" /></div>
                    <div className="col-md-6 mt-5">
                        <form>
                            <div className="mb-3">
                                <input type="email" placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input placeholder="Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <select className="form-select">
                                    <option selected>select your country</option>
                                    <option>india</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input placeholder="Contact" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <textarea placeholder="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button onClick={(e) => { e.preventDefault() }} type="submit" className="btn btn-primary d-block mx-auto w-25  animate__animated animate__pulse animate__slow animate__repeat-2 2 animate__delay-4s"  >Submit</button>
                        </form>
                    </div>
                </div>               
            </div>
        </>
    )
}