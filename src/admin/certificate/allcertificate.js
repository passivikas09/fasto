import { useEffect, useState } from "react"
import apiservice from "../../apiservice/apiservice"
import moment from 'moment'
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function Allcertificate(){
  const [data,setdata]=useState([])  
  const [load,setload]=useState(false)
  const [category,setcategory]=useState([])  
    useEffect(()=>{
        apiservice.allCategory().then((res)=>{
            setcategory(res.data.data)
        }).catch((err)=>{
            toast.error("error"+err)
        })
    },[load])

    function singleCategoryData(id){
        let data={
            _id:id
        }
        apiservice.categoryWiseTrainee(data).then((res)=>{
            setdata(res.data.data)
        }).catch((err)=>{
            toast.error("error"+err)
        })
    }

  useEffect(()=>{
    apiservice.allTrainee().then((res)=>{
        setdata(res.data.data)
    }).catch((err)=>{
        toast.error("error"+err)
    })
  },[load])  

    function deleteFunc(id){
        setload(true)
        let data={
            _id:id
        }
        apiservice.deleteTrainee(data).then((res)=>{
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
 
    return(
        <>
            <div  className="container">
                <div className="row d-flex justify-content-end">
                    <div className="col-md-3 pt-5">
                        <select  onChange={(e)=>{singleCategoryData(e.target.value)}}  className="form-select">
                            <option  disabled>Choose One Category</option>
                            {category.map((el,index)=>{
                                return(
                                    <option key={index} value={el._id}>{el.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="row table-responsive pt-5">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-center" >
                                <th>Sno</th>
                                <th>Category Name</th>
                                <th> Sector</th>
                                <th>Number of Trainees</th>
                                <th>CreatedAt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((el,index)=>{
                                return(
                                    <tr className="text-center" key={index} >
                                        <td>{index+1}</td>
                                        <td>{el.categoryId.name}</td>
                                        <td>{el.area}</td>
                                        <td  >{el.totaltrainee}</td>
                                        <td>{moment(el.createdAt).format('MMMM Do YYYY')}</td>
                                        <td className="d-flex justify-content-center"> 
                                            <Link to={`/admin/certificate/update/${el._id}`}  className="btn btn-primary">< i class="bi bi-pencil-fill"></i></Link>
                                            <button onClick={()=>{deleteFunc(el._id)}} className="btn btn-danger mx-1"><i class="bi bi-trash3"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>  
            </div>
        </>
    )
}