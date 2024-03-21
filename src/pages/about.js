
import { Link } from "react-router-dom"
export default function About() {
    const customStyle = {
        background: "URL('https://media.gettyimages.com/id/1338114224/photo/man-in-a-coffee-plantation-researcher.jpg?s=1024x1024&w=gi&k=20&c=0tNlCCX0nCWVGaLRShkZUVOIOJQvjG6goDxLWQwTPCo=')",
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
                                    <p className="display-1 text-body-emphasis fw-bold   mt-5">About us </p>
                                </div>
                                <div className="row px-4 text-center mx-auto">
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center fs-3">
                                <Link className="text-dark" to="/">Home</Link>/<Link className="text-primary" to="/">about</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row featurette ">
                    <div className="col-md-6 ">
                        <h2 className="featurette-heading fw-normal lh-1 pt-5 text-center"><i>Specifically, we work to promote:</i></h2>
                        <ul className="">
                            <p className="mt-4 fs-5 fw-bold">The production, transportation, preparation and sale of food in hygienic conditions ('Safe Food Farm to Fork' approach).</p>
                            <li className="mt-4 fs-5"> &#x2022;The provision of food that is free from harmful contaminants.</li>
                            <li className="mt-4 fs-5"> &#x2022;Accurate, informative and comprehensive food labelling which can be easily understood by consumers.</li>
                            <li className="mt-4 fs-5"> &#x2022;The provision and consumption of healthier foods that are affordable, accessible and locally available.</li>
                            <li className="mt-4 fs-5"> &#x2022;Food production and procurement based on principles of sustainability.</li>
                        </ul>
                    </div>
                    <div className="col-md-6 pt-5 ">
                        <img className=" img-fluid animate__animated animate__fadeIn animate__slow animate__repeat-1 animate__delay-1s" alt="oragnic" src="https://media.gettyimages.com/id/1205476866/photo/tree-sapling-hand-planting-sprout-in-soil-with-sunset-close-up-male-hand-planting-young-tree.jpg?s=612x612&w=0&k=20&c=CfmtGMXNpqx8jTqiW1eoc07K2M_0RnYbR6voLCvFXlc=" />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6  pt-5">
                        <img className="  img-fluid  animate__animated animate__fadeIn animate__slow animate__repeat-1 animate__delay-2s" alt="oragnic" src="https://media.gettyimages.com/id/1279479096/photo/plant-for-the-earth.jpg?s=612x612&w=0&k=20&c=YsIIYwVn9KYRXTHzfUkVhKjlEah0m9bzSUrepHoFsdA=" />
                    </div>
                    <div className="col-lg-6 pt-5   ">
                        <p class="featurette-heading fw-normal lh-1 fs-4">Strengthening of regulator, industry and consumer partnerships to improve food safety and standards. The FSATO works to ensure the availability of safe and wholesome food for everyone, and to promote the benefits of healthy eating.</p>
                        <p className="text-center fs-1 pt-5 fw-bold"><i> What we do</i></p>
                        <ul className=" fs-5 text-wrap">
                            <li className="mt-4 ">* Arrange seminars to raise food safety awareness.</li>
                            <li className="mt-1 ">* Training food professionals and staff working / involved in food businesses.</li>
                            <li className="mt-1 ">* Encouraging and promoting compliance with food legislation.</li>
                            <li className="mt-1 ">* Working along with government and educational institutes.</li>
                            <li className="mt-1 ">* Disseminating good practice information.</li>
                            <li className="mt-1 ">* Sponsoring research to provide a robust evidence base for health improvement.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}