import { useEffect, useState } from "react"
import apiservice from "../apiservice/apiservice"
import { toast } from "react-toastify"
import { AnimationOnScroll } from 'react-animation-on-scroll'
export default function FsatoTraining() {
    const [data, setdata] = useState([])

    useEffect(() => {
        apiservice.allTrainee().then((res) => {
            setdata(res.data.data)
        }).catch(() => {
            toast.error("something went wrong")    
        })
    }, [])
    const customStyle={
        background:"Url('https://image.shutterstock.com/image-photo/blurred-shadow-palm-leaves-on-260nw-2261327067.jpg')",
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        backgroundPosition:"center",
        backgroundSize:"cover"
    }
    return (
        <>
            <div style={customStyle} className="container-fluid">
                <div className="fs-1 text-center pt-5 ">FSATO has trained people in the following sectors.</div>
                <div className="row">
                    {data.map((item, index) => {
                        return (  
                            <>
                                <div className="col-md-3 pb-3">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="card p-3 mt-5  "> 
                                           <div key={index+1} className="card-body text-center ">
                                                <h5 className="card-title">{item.categoryId.name}</h5>
                                                <p className="card-text">{item.area}</p>
                                                <p>{item.totaltrainee}</p>
                                            </div>
                                    </div>
                                </AnimationOnScroll>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}