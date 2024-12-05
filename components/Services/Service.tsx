import React from "react";
import serviceImage1 from "../../public/ServiceImages/jpeg-optimizer_serviceImage.jpg"
import serviceImage2 from "../../public/ServiceImages/jpeg-optimizer_carpenter-working-sawmill-wood-manufacture.jpg"
import serviceImage3 from "../../public/ServiceImages/jpeg-optimizer_professional-cleaning-service-person-using-vacuum-cleaner-office.jpg"
import serviceImage4 from "../../public/ServiceImages/jpeg-optimizer_close-up-delivery-concept-with-package.jpg"
import serviceImage5 from "../../public/ServiceImages/jpeg-optimizer_standard-quality-control-collage.jpg"


const services = [
  {
    title: "Repair & Maintenance",
    image: serviceImage1,
  },
  {
    title: "Machinery Installation",
    image: serviceImage2,
  },
  {
    title: "Cleaning Service",
    image: serviceImage3,
  },
  {
    title: "Spot Delivery",
    image: serviceImage4,
  },
  {
    title: "Warranty",
    image: serviceImage5,
  },
];



function Pharmacy() {



  return (

      <>

      {services.map((service,index)=>(

     <div key={index} className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10 container p-3 sm:py-20 sm:px-28">
          <div className="w-full">
            <img src={service.image.src} className="rounded-xl" alt="Pharmacy work" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="w-full">
              <h1 className="text-4xl font-bold mb-4 uppercase">{service.title}</h1>
            </div>

            <p className="president-message max-w-4xl font-sans opacity-75 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div> ))}




</>
  );
}

export default Pharmacy;

