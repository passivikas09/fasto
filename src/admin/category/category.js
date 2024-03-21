import { useEffect, useState } from "react"
import apiservice from "../../apiservice/apiservice"
import moment from 'moment'
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
export default function Category(props){
    const[load ,setload]=useState(false)
    const [data,setdata]=useState([])
    const customStyle = {
        background: "URL('https://media.gettyimages.com/id/1448558067/photo/graphs-and-histograms-tablets-medical-protective-mask-medicine-on-the-desktop-calculation-of.jpg?s=1024x1024&w=gi&k=20&c=t8MHviJu9uMUgQlUeT6mVgUYgOuflMb7PQhUd45Weys=')",
        height: "40vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",  
        backgroundPosition:"center"
    }  
    useEffect(()=>{
        apiservice.allCategory().then((res)=>{
            console.log(res)
            setdata(res.data.data)
        }).catch(()=>{

        })
    },[load])


    function deleteFunc(id){
        setload(true)
        let data={
            _id:id
        }
        apiservice.deleteCategory(data).then((res)=>{
            if(res.data.success===false){
                setTimeout(()=>{
                setload(false)
                toast.error(res.data.message)
                })
            }else{
                setTimeout(() => {
                setload(false)
                toast.success(res.data.message)
                }, )
            }
        }).catch((err)=>{
            toast.error("error"+err)
        })
    }
    return(
        <>
        <div className="brand_color">
                        <div style={customStyle} className="row">
                            <div className="col-md-12">
                                <div className="titlepage ">
                                    <p className="display-1 text-body-emphasis fw-bold   mt-5"> {props.title}</p>
                                </div>
                            </div>
                        </div>
                </div>
           <div className="container pt-1">
                <div className="row  table-responsive">
                    <table className="table table-bordered">
                        <thead>
                                <tr>
                                    <th>Sno.</th>
                                    <th>Name</th>
                                    <th>isDeleted</th>
                                    <th>CreatedAt</th>
                                    <th></th>
                                </tr>
                        </thead>
                        {data.map((el,index)=>{
                            return(
                                <tbody>
                                    <tr key={index} >
                                        <td>{index+1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.isDeleted.toString()}</td>
                                        <td>{moment(el.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                        <td className="d-flex" >
                                        <Link to={`/admin/category/update/${el._id}`}  className="btn btn-primary">< i class="bi bi-pencil-fill"></i></Link>    
                                        <button onClick={()=>{deleteFunc(el._id)}} className="btn btn-danger mx-1"><i class="bi bi-trash3"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div> 
        </>
    )
}