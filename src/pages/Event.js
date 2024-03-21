import { useEffect, useState } from "react"
import apiservice from "../apiservice/apiservice"
import { toast } from "react-toastify"
export default function Event(){
const [data,setdata]=useState([])  
useEffect(()=>{
    apiservice.fileupload().then((res)=>{
        setdata(res.data.data)
    }).catch((err)=>{
        toast.error('error'+err)
    })
},[])
    return(
        <>
           <div className="container pt-5 p-5">
                <div className="row">
                    {data.map((el,index)=>{
                        return(
                            <div key={index} className="col-md-3 mt-3">
                                <img className="img-fluid" src={`http://localhost:5000/${el.image}`} alt="all trainings" />
                            </div>
                        )
                    })}
                </div>
            </div> 
        </>
    )
}

// 1 $matach and $count
// [
//     $match:{
//         isDeleted:false
//     },{
//         $count:"active training"
//     }
// ]


// 2. grouping and more
//    [
//     $group:{
//         _id:"$company.location.country",
                // usercount:{
                //     $sum:1
                // }
//     }
//    ],{
        //     $sort:{
        //         usercount: 1 ascending order and -1 descending order
        //     }
        // } ,{
        //     $limit:5
    // }


    // 4.$unwind used at arrays

    // 5 ,$match
    // {$match:{
    //     isActive:false , tags:  "velit"
    // }}