import { useState } from "react"
import apiservice from "../../apiservice/apiservice"
import { toast } from "react-toastify"
export default function AddImage() {
const [load ,setload]=useState(false) 
const [imagename,setimagename]=useState("")   
const [image,setimage]=useState("")
function handleimage(){
    setload(true)
    let formdata= new FormData()
    formdata.append("image",image)
    formdata.append("imagename",imagename)
    apiservice.addfileupload(formdata).then((res)=>{
        if(res.data.success===false){
            setload(false)
            toast.error(res.data.message)
        }else{
            setTimeout(()=>{
                setload(false)
                toast.success(res.data.message)
            })
        }
    }).catch((err)=>{
        toast.error("error"+err)
    })
}

    return (
        <>
            <div className="container">
                <div className="row pt-5 " >
                    <p className="fs-1  text-center" >Image Upload</p>
                </div>
                <div className="row d-flex justify-content-center pt-4">
                    <div className="col-lg-6 border p-5">
                        <form>
                            <input  onChange={(e)=>{setimagename(e.target.value)}} className="form-control" placeholder="Title" />
                            <input  onChange={(e)=>{setimage(e.target.files[0])}} className="form-control" type="file"  placeholder="select Image"  />
                        </form>
                        <button onClick={handleimage} className="btn btn-primary d-block mx-auto ">Upload Image</button>
                    </div>
                </div>
            </div>
        </>
    )
}