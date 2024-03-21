import { useEffect, useState } from "react"
import apiservice from "../apiservice/apiservice"
import { toast } from "react-toastify"

export default function Alluser(props) {
    const [data,setdata]=useState([])
    const [load,setload]=useState(false)
    const customStyle = {
        background: "URL('https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-blue-business-technology-user-image_6481.jpg')",
        height: "45vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",  
        backgroundPosition:"center"
    }   

    useEffect(()=>{
        apiservice.alluser().then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            toast.error("error"+err)
        })
    },[load])

    const delFunc=(id)=>{
        setload(true)
        let data={
            _id:id
        }
        apiservice.deleteUser(data).then((res)=>{
            if(res.data.success===false){
                setload(false)
                toast.error(res.data.message)
            }else{
                setload(false)
                toast.success(res.data.message)
            }
        }).catch((err)=>{
            toast.error("error"+err)
        })
    }
    return (
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
                <div className="col-md">
                    <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Contact</th>
                                <th> </th>
                            </tr>
                            </thead>
                                {data.map((el,index)=>{
                                    return(
                                        <>
                                             <tbody>
                                            <tr key={index}>
                                           <td>{index+1}</td> 
                                           <td>{el.name}</td>
                                           <td>{el.email}</td>
                                           <td>{el.address}</td>
                                           <td>{el.contact}</td>
                                           <td><button onClick={()=>{delFunc(el._id)}} className="btn btn-dark   d-block mx-auto"><i class="bi bi-trash3"></i></button></td>
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