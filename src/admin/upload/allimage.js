import { useEffect, useState } from "react"
import apiservice from "../../apiservice/apiservice"
import { toast } from "react-toastify"
import moment from "moment"
export default function AllImages() {
    const[load,setload]=useState(false) 
    const [data, setdata] = useState([])
    useEffect(() => {
        apiservice.fileupload().then((res) => {
            setdata(res.data.data)
        }).catch(() => {
            toast.error("somethimg went wrong")
        })
    },[load])

    function deleteImg(id){
        setload(true)
        let data={
            _id:id
        }
        apiservice.deletefileupload(data).then((res)=>{
                console.log(res)
            if(res.data.success===false){
                setload(false)
                toast.error(res.data.message)
            }else{
                setload(false)
                toast.success(res.data.message)
            }    
        }).catch(()=>{
            toast.error("something went wrong")
        })
    }
    return (
        <>
            <div className="container">
                <div className="row pt-5 " >
                    <p className="fs-1  text-center" >All Images</p>
                </div>
                 <div style={{width:'100%', overflowX:"scroll"}} className="row table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-center" >
                                <th>Sno.</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>CreatedAt</th>
                                <th>isDeleted</th>
                            </tr>
                        </thead>
                        <tbody>
                    {data.map((el,index)=>{
                        return(
                          
                                <tr key={index} className="text-center">
                                    <td>{el.autoId}</td>
                                    <td>{el.imagename}</td>
                                    <td><img width={"200px"} className="img-fluid"  src={`http://localhost:5000/${el.image}`} alt="fsato"/></td>
                                    <td>{moment(el.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    <td>{el.isDeleted.toString()}</td>
                                    <td className="d-flex justify-content-center" >
                                        <button onClick={()=>{deleteImg(el._id)}} className="btn btn-danger"><i className="bi bi-trash3"></i></button>
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