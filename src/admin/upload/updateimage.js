import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiservice from "../../apiservice/apiservice"
import { toast } from "react-toastify"

export default function Updateimage(){
const params= useParams()
const id =params.id
const [load,setload]=useState(false)
const [title,settitle]=useState("")
const [image,setimage]=useState("")
const [changeimage,setchangeimage]=useState("")
useEffect(()=>{
    let data={
        _id:id
    }
    apiservice.singlefileupload(data).then((res)=>{
        settitle(res.data.data.imagename)
        setimage(res.data.data.image)
   
    }).catch((err)=>{
        toast.error("error"+err)
    })
},[load])
  

function updateFunc(e){
    e.preventDefault()
    setload(true)
    let data={
        imagename:title 
    }
    apiservice.updatefileupload(data).then((res)=>{
        if(res.data.success===false){
            setload(false)
            toast.error(res.data.message)
        }else{
            setTimeout(()=>{
                setload(false)
                toast.success(res.data.message)
            })
        }
    }).catch(()=>{
        toast.error("something went wrong")
    })
}

    return(
        <>
           <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 mt-5 pt-5 border">
                    <form>
                            <h1 class="h3 mb-3 fw-normal text-center">Update Image</h1>
                            <div class="form-floating" >
                                <input  value={title} onChange={(e)=>{settitle(e.target.value)}}  type="text" class="form-control" id="floatingInput" />
                                    <label for="floatingInput">Image Name</label>
                            </div>
                            <div class="form-floating text-center pb-5">
                                <img  height={"200px"} width={"200px"} src={"http://localhost:5000/"+image}/>
                            </div>
                            <input onChange={(e)=>{setchangeimage(e.target.files[0])}} type="file" className="form-control"  />
                            <button onClick={updateFunc}  class="btn btn-primary d-block mx-auto w-25 py-2" type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </div>  
        </>
    )
}