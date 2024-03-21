import { Link } from "react-router-dom"
export default function Service() {
    const customStyle = {
        background: "URL('https://media.gettyimages.com/id/1314957190/photo/older-farmer-repairing-agricultural-equipment-on-a-farm-during-sunset.jpg?s=1024x1024&w=gi&k=20&c=_BAA0iDMdFNRi7kgDwS1ReQZC9xkMf7dLojJGC2Wx-c=')",
        height: "60vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition:"center"
    }
    return (
        <>
            <div className="container">
            <div className="brand_color">
                    <div className="container">
                        <div style={customStyle} className="row ">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <p className="display-1 fw-bold text-body-emphasis mt-5">Service </p>
                                </div>
                                <div className="row px-4 text-center mx-auto">
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center fs-3">
                                <Link className="text-dark" to="/">Home</Link>/<Link className="text-primary" to="/">Service</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 col-md-8  mt-5 ">
                        <p className="fs-3 text-center fw-medium">FSATO helps to improve our food safety technology performance. We deliver business results through people centred approach for technology and providing the right expertise, according to your needs.</p>
                    </div>
                </div>
                <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col animate__animated animate__zoomIn animate__slow animate__repeat-1 animate__delay-1s">
          <div className="card shadow-sm p-2 pb-4">
           <img   className="img-fluid" alt="training" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kzB9ujgDT0Y61S8XgmMe5Y2bUuKDMOnZQg&usqp=CAU" />
            <div className="card-body">
                <h2 className="text-center">Training</h2>
              <p className="card-text fw-medium pb-4" >As a training body, the FSATO provides food safety training, tailor made training regimes for different segments covering food safety aspects from 'Farm to Fork'Also, seminars are arranged on regular basis to raise awareness related to food safety issues. FSATO members also participate in events organised by consumer and local organisations.</p>
            </div>
          </div>
        </div>
        <div className="col animate__animated animate__zoomIn animate__slow animate__repeat-1 animate__delay-2s">
          <div className="card shadow-sm p-2">
            <img  className="img-fluid" alt="seminars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSso5bAPyclR152MOXMpnxz99v9cqmA8trNkw&usqp=CAU" />
            <div className="card-body">
                <h2 className="text-center">Seminars</h2>
              <p className="card-text fw-medium p-2">arranges events such as scientific conferences and workshops, including a prestigious annual lecture to an invited audience. Also, seminars are arranged on regular basis to raise awareness related to food safety issues. FSATO members also participate in events organised by consumer and local organisations.</p>
            </div>
          </div>
        </div>
        <div className="col animate__animated animate__zoomIn animate__slow animate__repeat-1 animate__delay-3s">
          <div className="card shadow-sm p-2 pb-5">
           <img  className="img-fluid" src="https://img.freepik.com/premium-photo/doctor-scientist-work-research-organic-herb-farm-lab-discovery-medicine-pill-extract-from-plant_43300-4373.jpg" alt="scitech"/>
            <div className="card-body">
                <h2>Science & Technology</h2>
              <p className="card-text fw-medium ">Through the expertise of our members, FSATO is uniquely placed to provide independent objective information on food issues. Our statements are publicly available, prepared and peer reviewed by experts within the FSATO membership and are uninfluenced by sectional or 'political' motives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            </div>
        </>
    )
}