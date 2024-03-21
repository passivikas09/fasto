import { useEffect, useState } from "react"
import apiservice from "../../apiservice/apiservice"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

export default function Updatecertificate(){
 const [load,setload] =useState(false)
 const [categorylist,setcategorylist]=useState([])  
 const [categoryname,setcategoryname]=useState("")  
 const [sector,setsector]=useState("")  
 const [trainee,settrainee]=useState("")  
 const params=useParams()
 const id=params.id  
 useEffect(()=>{
    let data={
        _id:id
    }
    apiservice.singleTrainee(data).then((res)=>{
        setcategoryname(res.data.data.categoryId.name)
        setsector(res.data.data.area)
        settrainee(res.data.data.totaltrainee)
    }).catch((err)=>{
        toast.error("error"+err)
    })
 },[load])  


useEffect(()=>{
    apiservice.allCategory().then((res)=>{
        console.log(res.data.data)
        setcategorylist(res.data.data)
    }).catch((err)=>{
        toast.error("error"+err)
    })
},[load])

function updateFunc(e){
    e.preventDefault()
    let data={
        _id:id,
        area:sector,
        categoryId:categoryname,
        totaltrainee:trainee    
    }
    apiservice.updateTrainee(data).then((res)=>{
        if(res.data.success===false){
            setload(false)
            toast.error(res.data.message)
        }else{
            setTimeout(() => {
                setload(false)
                toast.success(res.data.message)
            },)
        }
    }).catch((err)=>{
        toast.error("err"+err)
    })
}

    return(
        <>
           <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 mt-5 pt-5 border pb-3">
                    <form>
                            <h1 class="h3 mb-3 fw-normal text-center">Update Certificate</h1>
                            <div className="col-md- mb-3">
                                <select onChange={(e)=>{setcategoryname(e.target.value)}} className="form-select" >
                                    <option selected >Choose  Category <span className="alert-danger"> *</span></option> 
                                    {categorylist.map((el)=>{
                                       return(
                                            <option value={el._id} >{el.name}</option>
                                       ) 
                                    })}   
                                </select>    
                             </div>
                            <div class="form-floating" >
                                <input value={categoryname} onChange={(e)=>{setcategoryname(e.target.value)}}  type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Category Name</label>
                            </div>
                            <div class="form-floating">
                                <input  value={sector} onChange={(e)=>{setsector(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Sector</label>
                            </div>
                            <div class="form-floating">
                                <input  value={trainee} onChange={(e)=>{settrainee(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Total Trainees</label>
                            </div>
                            <button onClick={updateFunc} class="btn btn-primary d-block mx-auto w-25 " type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </div> 
        </>
    )
}