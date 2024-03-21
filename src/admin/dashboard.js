import { useEffect, useState } from "react"
import apiservice from "../apiservice/apiservice"
import { toast } from "react-toastify"
import moment from "moment"
export default function Dashboard() {
    const [data,setdata]=useState([])
    const [totaltraining,settotaltraining]=useState("")
    const [Feedback,setfeedback]=useState("")
    const [user,setuser]=useState("")
    const [category,setcategory]=useState("")
    const [load ,setload]=useState(false)
    useEffect(()=>{  
      apiservice.dashboard().then((res)=>{
            setfeedback(res.data.data.contact)
            setuser(res.data.data.users)
            setcategory(res.data.data.categorys)
            setdata(res.data.data.enquirys)
      }).catch((err)=>{
            toast.error("error"+err)
      }) 
    },[load])  

    useEffect(()=>{
        apiservice.totaltrained().then((res)=>{
            settotaltraining(res.data.data[0].totaltrainee)
        }).catch((err)=>{
            toast.error("error"+err)
        })
    },[load])
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center ">
                    <div className="col pt-3">
                        <div class="card  d-flex align-items-center" style={{width: "15rem"}}>
                        <i style={{fontSize:"40px",color:"green"}} class="bi bi-patch-check"></i>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Total Training <br/> {totaltraining}</h5>
                                </div>
                        </div>
                    </div>
                    <div className="col pt-3">
                        <div class="card" style={{width: "15rem"}}>
                             <div class="card-body text-center">
                             <i style={{fontSize:"40px",color:"red"}} class="bi bi-journal-bookmark-fill"></i>
                                    <h5 class="card-title"> Sector<br/> {category}</h5>
                                </div>
                        </div>
                    </div>
                    <div className="col pt-3">
                        <div class="card d-flex align-items-center" style={{width: "15rem"}}>
                        <i style={{fontSize:"40px",color:"blue"}} class="bi bi-people-fill"></i>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Total User  <br/> {user}</h5>
                                </div>
                        </div>
                    </div>
                    <div className="col pt-3">
                        <div class="card " style={{width: "15rem"}}>
                                <div class="card-body text-center">
                                <i style={{fontSize:"40px",color:"grey"}} class="bi bi-chat-right-text"></i>
                                    <h5 class="card-title">Feedback <br/> {Feedback}</h5>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">  
                    <p className="fs-1">Recent Enquiry</p>
                </div>
                <div className="row">
                    <div className="col-md table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Sno.</th>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {data.map((el,index)=>{
                                        return (
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{moment(el.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                                <td>{el.name}</td>
                                                <td> {el.email}</td>
                                                <td>{el.message}</td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}