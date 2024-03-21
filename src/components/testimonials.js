import AwesomeTestimonial from 'react-awesome-testimonials';

export default function Testimonials(){
    return(
        <> 
              <AwesomeTestimonial  
    testimonials={[
      {
        name: "Our Mission",
        img_src:"/images/mission.jpg",
        review:
          "“To give the facility to all people for sharing their innovative views, values, beliefs which are related to food and safe for us..”",
      },
      {
        name: "Our Vision",
        img_src:"/images/vision.jpg",
        review:
          "“Provide the knowledge or beliefs about risks and benefits which are correlated with food technical and training support.”",
      },
      {
        name: "Our Aim",
        img_src:"/images/aim.jpg",
        review:
          "“The FSATO works to ensure the availability of safe and wholesome food for everyone, to raise food safety awareness and promote the benefits of healthy eating.”",
      }
    ]}
  />
        </>
    )
}