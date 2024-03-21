import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import apiservice from "../apiservice/apiservice"
import { toast } from "react-toastify"

export default function Certificate(props){
    const [data,setdata]=useState([])
    const customStyle = {
        background: "URL('https://media.gettyimages.com/id/116359970/photo/close-up-of-stamper-making-seal-on-paper.jpg?s=1024x1024&w=gi&k=20&c=gC4E0ucWOTV2d54lpBBtUqRmsoCgupQKmrNztsAQIXs=')",
        height: "40vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",  
        backgroundPosition:"center"
    }  

useEffect(()=>{
    apiservice.totalcategorywise().then((res)=>{
        setdata(res.data.data)
    }).catch((err)=>{
        toast.error("error"+err)
    })  
},[])
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
           <div className="container">
               <div className="row pt-3 ">
                    {data.map((el,index)=>{
                        return(
                            <div key={index} className="col mx-2 border p-3">
                            {el.results.map((item,index)=>{
                                    return(
                                        <h2 key={index} className="fw-normal pt-3 text-center ">{item.name}</h2>
                                    )
                            })}
                            <p className="fs-1 text-center ">{el.categorywisetrainee}</p>
                        </div>                     
                        )
                    })}
               </div> 
               <div className=" row pt-4">
                    <div className="col-md">
                        <Link to="/admin/trainee/add" className="btn btn-success d-block mx-auto w-25">ADD</Link>
                    </div>
               </div>
          </div> 
        </>
    )
}