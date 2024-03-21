import { useState } from 'react';
import apiservice from '../apiservice/apiservice';
import { RingLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
export default function Register() {
    const nav=useNavigate()
    const [load, setload] = useState(false)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [address, setaddress] = useState("")
    const [contact, setcontact] = useState("")

    const submit = (e) => {
        e.preventDefault()
        setload(true)
        let data = {
            name: name,
            email: email,
            password: password,
            address: address,
            contact: contact
        }
        apiservice.adduser(data).then((res) => {
            if (res.data.success === false) {
                setTimeout(() => {
                    setload(false)
                    toast.error(res.data.message)
                }, 3000)
            } else {
                setTimeout(() => {
                    setload(false)
                    toast.success(res.data.message)
                    toast.info("please login")
                    nav("/signin")
                }, 3000)
            }
        }).catch((err) => {
            console.log("error" + err)
        })
    }
    const customStyle = {
        position: "Absolute",
        left: "48%",
        top: "50%",
        zIndex: 1
    }         
    return (
        <>
            <RingLoader size={100} color='aqua' cssOverride={customStyle} loading={load} />
            <div className={load === true ? "disable-screen" : ""}>
            <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <img src='/images/deadpool.jpg' alt='deadpool'/>
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
                <div className="container-fluid  " >
                    <div className="row d-flex justify-content-center  ">
                        <div className='col-md-6 pt-5  '>
                            <img className='img-fluid' src='https://media.gettyimages.com/id/169999232/photo/biotechnology.jpg?s=1024x1024&w=gi&k=20&c=nq6UAsauHfak2uv9HN8teLySiNXSIeGj9L9z2TkoxGg=' alt='register' />
                        </div>
                        <div className="pb-5 col-md-6 ">
                            <div className="row">
                                <div className="display-4  text-center">Create   Account</div>
                            </div>
                            <div className="row pt-3"  >
                                <div className="col-lg col-md ">
                                    <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" className="form-control " placeholder="Name" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg col-md">
                                    <input value={email} onChange={(e) => { setemail(e.target.value) }} type="text" className="form-control " placeholder="Email" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg col-md">
                                    <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" className="form-control " placeholder="password" required />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg col-md'>
                                    <input className='form-control' placeholder='contact' type='text' value={contact} onChange={(e) => { setcontact(e.target.value) }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg col-md">
                                    <textarea value={address} onChange={(e) => { setaddress(e.target.value) }} className="form-control " rows={7} placeholder="Address" ></textarea>
                                </div>
                            </div>
                            <div className="row">   
                                <div className="col-md">
                                    <button onClick={submit} className="btn d-block mx-auto w-25 btn-primary">Submit</button>
                                </div>
                            </div>
                            <div className='row  d-flex justify-content-center '>
                                <p className=" col-lg-6 col-md-6 text-center pt-5">I already have an account? <span><Link to={"/signin"}>Sign In</Link></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}