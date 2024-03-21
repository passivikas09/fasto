import { useEffect, useState } from "react"
import apiservice from "../../apiservice/apiservice"
import { useParams } from "react-router-dom"

export default function UpdateEnequiry(){
 const[name,setname]=useState("")
 const[email,setemail]=useState("")
 const [message,setmessage]=useState("")
 const params=useParams()
 const id=params.id
useEffect(()=>{
    let data={
        _id:id
    }
    apiservice.singleContact(data).then((res)=>{
        console.log(res.data.data)
        setname(res.data.data.name)
        setemail(res.data.data.email)
        setmessage(res.data.data.message)
    }).catch(()=>{

    })
},[])
    return(
        <>
          <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 mt-5 pt-5 border">
                    <form>
                            <h1 class="h3 mb-3 fw-normal text-center">Update Enquiry</h1>
                            <div class="form-floating" >
                                <input  value={name} onChange={(e)=>{setname(e.target.value)}}  type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput"> Name</label>
                            </div>
                            <div class="form-floating">
                                <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">E-mail</label>
                            </div>
                            <div class="form-floating">
                                <input  value={message} onChange={(e)=>{setmessage(e.target.value)}} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Message</label>
                            </div>
                            <div class="form-floating">
                                <input   type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Reply</label>
                            </div>
                            <button  class="btn btn-primary d-block mx-auto w-25 py-2" type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </div>   
        </>
    )
}