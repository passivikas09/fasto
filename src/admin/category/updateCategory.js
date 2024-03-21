import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiservice from "../../apiservice/apiservice"
import { toast } from "react-toastify"

export default function Updatecategory() {
    const params = useParams()
    const id=params.id
    const [name,setname]=useState("")
    const [newname,setnewname]=useState("")
    const [load,setload]=useState(false)
    useEffect(()=>{
        let data={
            _id:id
        }
        apiservice.singleCategory(data).then((res)=>{
            setname(res.data.data.name)
        }).catch((err)=>{
            toast.error("error"+err)
        })
    },[load])

    function updateFunc(e){
        setload(true)
        e.preventDefault()
        let data={
            _id:id,
            newname:newname
        }
        apiservice.updateCategory(data).then((res)=>{
            if(res.data.success===false){
                setload(false)
                toast.error(res.data.message)
            }else{
                setload(false)
                toast.success(res.data.message)
            }
        }).catch((err)=>{
            toast.error("Error"+err)
        })
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 mt-5 pt-5 border">
                    <form>
                            <h1 class="h3 mb-3 fw-normal text-center">Update Category</h1>
                            <div class="form-floating">
                                <input value={name} onChange={(e)=>{setname(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Category </label>
                            </div>
                            <div class="form-floating">
                                <input value={newname} onChange={(e)=>{setnewname(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">New Name</label>
                            </div>
                            <button onClick={updateFunc} class="btn btn-primary d-block mx-auto w-25 py-2" type="submit">Update</button>
                            <p class="mt-5 mb-3 text-body-secondary"></p>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}