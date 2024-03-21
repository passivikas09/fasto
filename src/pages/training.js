import { Link } from "react-router-dom"

export default function Training() {

    const customStyle = {
        background: "URL('https://media.gettyimages.com/id/1371160686/photo/business-people-watching-a-presentation-on-the-whiteboard.jpg?s=1024x1024&w=gi&k=20&c=aHLUAB1bgxfYTrDzuC-UwQ7j25IfqCN3gJEZqKYy9a8=')",
        height: "60vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPositon:"center"
    }
 
    return (
        <>
            
            <div className="container">
            <div className="brand_color">
                    <div className="container">
                        <div style={customStyle} className="row ">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <p className="display-1 text-body-emphasis fw-bold mt-5">Training </p>
                                </div>
                                <div className="row px-4 text-center mx-auto">
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center fs-3">
                                <Link className="text-dark" to="/">Home</Link>/<Link className="text-primary" to="/">Training</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <p className="fs-1 fw-medium text-center"> FSATO approved training partners with FSSAI </p>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 text-center  mt-4 pe-3">
                        <p className="fw-normal fs-5 text-break">Government of India's organization FSSAI (Food Safety and Standards Authority of India) has made it mandatory for each and every food business operator(Restaurant or Hotel owner to Food Business Owners including street vendors also) to have food safety training certificate, non-compliance of which may lead to some serious legal action from inspecting authorities of FSSAI.</p>
                        <p className="fw-normal fs-5 text-break pe-3">Our organization FSATO (Food Safety Awareness and Training Organization) provides awareness about safe food to public in general. We also provide trainings in various disciplines of food safety to distinct categories of food business owners. We are approved training partners with FSAAI which provides certificates of these trainings after successful completion of training courses in food safety and assessment. In case of any inspection undertaken in your facility by representatives of FSSAI, you can present this certificate to show your qualification.</p>
                    </div>
                </div>
                <div className="row   justify-content-center">
                    <div className="col-md-10 text-center    fs-5 mt-5 ">FSATO provides the certificate only after due completion of the training course and assessment.<br/> The following FSSAI Approved training programs are available with us:-</div>
                </div>
                <div className="row d-flex justify-content-center pt-5 mb-5  ">
                    <div className="col-md-3">
                        <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">Basic Training</h5>
                                    <Link to="/training/basic" class="btn border border-primary" >View Detail</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">Advance Training</h5>
                                    <Link to="/training/advance" class="btn  border border-primary">View Detail</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">Special Training</h5>
                                    <Link to="/training/special" class="btn border border-primary">View Detail</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}