import { useEffect, useState } from "react"
import apiservice from "../../apiservice/apiservice"
import { toast } from "react-toastify"

export default function Addcertificate() {
 const [category,setcategory]=useState([])
 const [load,setload]=useState(false)
 const [sector,setsector]=useState("")
 const [trainee,settrainee]=useState()
 const [categoryvalue,setcategoryvalue]=useState("")
 useEffect(()=>{
    apiservice.allCategory().then((res)=>{
        setcategory(res.data.data)
    }).catch((err)=>{
        toast.error("error"+err)
    })
 },[load])  

 function addTrainee(e){
    e.preventDefault()
    setload(true)
    let data={
        categoryId:categoryvalue,
        totaltrainee:trainee,
        area:sector
    }
    apiservice.addTrainee(data).then((res)=>{
        if(res.data.success===false){
            setload(false)
            toast.error(res.data.message)
        }else{
            setTimeout(() => {
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
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 pt-5">
                        <form>
                            <h1 className="h3 mb-3 fw-normal text-center">Add Trainees</h1>
                              <select  onChange={(e)=>setcategoryvalue(e.target.value)} className="form-select">
                                <option disabled>Choose one Category</option>
                                {category.map((el)=>{
                                    return(
                                        <option  value={el._id} >{el.name}</option>
                                    )
                                })}
                            </select>
                            <div className="form-floating mt-4">
                                <input value={sector} onChange={(e)=>{setsector(e.target.value)}} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Sectors</label>
                            </div>
                            <div className="form-floating">
                                <input value={trainee} onChange={(e)=>{settrainee(e.target.value)}} type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Total Trainee</label>
                            </div>
                            <button onClick={addTrainee} className="btn btn-primary d-block mx-auto w-25 py-2" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}