import { useState } from "react"
import apiservice from "../../apiservice/apiservice"
import { toast } from "react-toastify"

export default function Addcategory(props) {
 const [name,setname]=useState("")
 const [load ,setload]=useState(false)
    const customStyle = {
        background: "URL('https://media.gettyimages.com/id/1448558067/photo/graphs-and-histograms-tablets-medical-protective-mask-medicine-on-the-desktop-calculation-of.jpg?s=1024x1024&w=gi&k=20&c=t8MHviJu9uMUgQlUeT6mVgUYgOuflMb7PQhUd45Weys=')",
        height: "40vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",  
        backgroundPosition:"center"
    }   
    function addFunc(e){
        setload(true)
        e.preventDefault()
        let data={
            name:name
        }
        apiservice.addCategory(data).then((res)=>{
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
    return (
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
            <div className="container">
                <div   className="row d-flex justify-content-center ">
                    <div className="col-md-6  ">
                    <form className="border border-secondary mt-1 p-4">
                            <h1 className="h3 mb-3 fw-normal text-center">{props.title}</h1>
                            <div className="form-floating ">
                                <input value={name} onChange={(e)=>{setname(e.target.value)}} type="email" className="form-control " id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Category Name</label>
                            </div>
                            <button onClick={addFunc} className="btn btn-primary d-block mx-auto w-25 py-2" type="submit">Submit</button>
                            <p className="mt-5 mb-3 text-body-secondary">©2024 fasto.org</p>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}