import { useEffect, useState } from "react"
import apiservice from "../apiservice/apiservice"   
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
export default function AdminEnquiry(props){
    const [load ,setload]=useState(false)
    const [data,setdata]=useState([])
    const customStyle = {
        background: "URL('https://media.gettyimages.com/id/1337813785/photo/pink-wooden-toy-block-with-question-mark.jpg?s=1024x1024&w=gi&k=20&c=JMCSztShgAW5UuxJhANJNlMP8GqlgJt1QC4bf31CGd0=')",
        height: "45vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",  
        backgroundPositionY:"center"
    }  

    useEffect(()=>{
        apiservice.allContact().then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            toast.error("error"+err)
        })
    },[load])

function delFunc(id){
    setload(true)
    console.log(id)
    let data={
        _id:id
    }
    apiservice.deleteContact(data).then((res)=>{
        if(res.data.success===false){
            setload(false)
            toast.error(res.data.message)
        }else{
            setload(false)
            toast.success(res.data.message)  
        }
    }).catch((err)=>{
        toast.error('error'+err)
    })
}    

    return(
        <>
            <div className="brand_color">
                        <div style={customStyle} className="row ">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <p className="display-1 text-body-emphasis fw-bold text-light  mt-5"> {props.title}</p>
                                </div>
                            </div>
                        </div>
                </div>
           <div className="container-fluid">
                <div className="row">
                    <div className="col-md ">
                        <div className="table-responsive">
                        <table className="table table-bordered ">
                            <thead>
                                <tr>
                                    <th>Sno.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Nation</th>
                                    <th>Contact</th>
                                    <th>Message</th>
                                    <th></th>
                                </tr>
                            </thead>
                    
                                   {data.map((el,index)=>{
                                        return(
                                            <>
                                            <tbody>
                                                <tr key={index+1}>
                                                    <td>{index+1}</td>
                                                    <td>{el.name}</td>
                                                    <td>{el.email}</td>
                                                    <td>{el.country}</td>
                                                    <td>{el.mobile}</td>
                                                    <td>{el.message}</td>
                                                    <td className="d-flex">
                                                        <Link to={`/admin/adminenquiry/update/${el._id}`} className="btn btn-primary"><i className="bi bi-pencil"></i></Link>
                                                        <button onClick={()=>{delFunc(el._id)}}  className="btn btn-danger mx-1"><i class="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            </>
                                        )
                                   })} 
                            
                        </table>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}