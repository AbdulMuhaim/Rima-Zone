"use client";
import Image from "next/image";
import banner1 from "../public/Banner/jpeg-optimizer_banner1.jpg";
import banner6 from "../public/Banner/jpeg-optimizer_banner6.jpg";
import banner7 from "../public/Banner/jpeg-optimizer_banner7.jpg";
import banner8 from "../public/Banner/jpeg-optimizer_banner8.jpg";
import banner9 from "../public/Banner/jpeg-optimizer_banner9.jpg";
import bgImage from "../public/bgImages/5367739.jpg";

import { FaThumbsUp } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiDiamondHard } from "react-icons/gi";
import { useEffect, useState } from "react";
import { MarqueeDemo } from "@/components/Home/Marquee";
import Footer from "@/components/Footer/Footer";
import Whatsapp from "@/components/UI/Whatsapp";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import CallUsBanner from "@/components/About/CallUsButton";
import service1 from "../public/ServiceImages/jpeg-optimizer_adjusting-heating-valves-residential-building.jpg"
import service2 from "../public/ServiceImages/jpeg-optimizer_carpenter-male-dressed-safety-yellow-cap-works-with-chain-saw-garage.jpg"
import service3 from "../public/ServiceImages/360_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg"





export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);








  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);



  const bannerImages = [banner1, banner6, banner7, banner8, banner9];

  const cardData = [
    {
      title: "Repair & Maintenance",
      description:
        "Proper repair and maintenance ensure the longevity and functionality of assets...",
      image:
        service1,
    },
    {
      title: "Material Supply",
      description:
        "Efficient material supply ensures the timely availability of resources..",
      image:
        service3,
    },
    {
      title: "Machinery Installation",
      description:
        "Professional machinery installation ensures optimal performance, safety...",
      image:
        service2,
    },
  ];

  const projects = [
    {
      id: 1,
      image:
        "https://omo-oss-image.thefastimg.com/portal-saas/new2022071417205406509/cms/image/6eb87af9-60ef-43c7-97ee-ace63b27b85c.jpg",
      alt: "Project 1",
    },
    {
      id: 2,
      image:
        "https://canberralabourhire.com.au/wp-content/uploads/2022/04/is-construction-work-hard.png",
      alt: "Project 2",
    },
    {
      id: 3,
      image:
        "https://st.depositphotos.com/1008724/4972/i/450/depositphotos_49725757-Tractor-and-Plow.jpg",
      alt: "Project 3",
    },
    {
      id: 4,
      image:
        "https://coastalhomeservicesinc.com/wp-content/uploads/2023/12/vecteezy_electrician-installing-electrical-wires-and-fuse-switch_29555703-1024x683.jpg",
      alt: "Project 4",
    },
  ];

  const features = [
    {
      icon: <FaThumbsUp className="text-yellow-500 text-3xl" />,
      title: "RELIABILITY",
      description:
        "We trust in our employees because we choose smart, experienced, and hardworking professionals.",
    },
    {
      icon: <AiOutlineClockCircle className="text-yellow-500 text-3xl" />,
      title: "EXPERTISE",
      description:
        "We trust in our employees because we choose smart, experienced, and hardworking professionals.",
    },
    {
      icon: <GiDiamondHard className="text-yellow-500 text-3xl" />,
      title: "QUALITY",
      description:
        "We trust in our employees because we choose smart, experienced, and hardworking professionals.",
    },
  ];

  // const insurances = [
  //   whatsappLogo, whatsappLogo, whatsappLogo, whatsappLogo, whatsappLogo
  // ];

  return (
    <>
      <div className="bg-white ">
        {/* Whatsapp */}
        <Whatsapp/>

<Header/>
<Navbar/>

        {/* Navbar */}


        {/* Banner */}
        <div className="relative w-full h-[90vh] ">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Render Image */}
              <Image
                src={image}
                alt={`Banner image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-50" />
            </div>
          ))}

          {/* Search Box Overlay */}
          <div className="absolute left-1/2 bottom-12 transform -translate-x-1/2 flex flex-col items-center justify-center px-4 sm:px-8">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-sans uppercase text-white mb-5 flex flex-col items-center text-center">
              <span className="leading-normal">High Quality</span>
              <span className="whitespace-nowrap">Tools & Materials</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-md sm:max-w-lg text-center mb-6">
              From basic tools to advanced machinery, we offer high-quality,
              affordable products to meet all your project needs.
            </p>

            {/* Search Box */}

          </div>
        </div>

        {/* cards */}

        <div className="py-16 shadow-2xl w-full ">
          <div className="container w-full mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-[350px] h-[250px] mx-auto"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image.src})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-500"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent">
                  <h3 className="text-xl font-bold text-white transition-transform duration-700 ease-in-out group-hover:translate-y-[-20px]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-200 mt-2 transition-transform duration-700 ease-in-out group-hover:translate-y-[-20px]">
                    {card.description}
                  </p>
                  <a
                    className="block mt-4 text-xs  text-yellow-400 hover:text-white font-semibold opacity-0 transform translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-y-[-20px] group-hover:opacity-100"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Projects */}
        <div className="flex justify-center">
        <div
          className="container w-full bg-cover bg-center py-20 "
          style={{ backgroundImage: `url(${bgImage.src})` }}
          aria-label="Projects Section Background"
        >
          {/* Section Title */}
          <div className="text-center  px-4">
            <h2 className="text-3xl mb-10 text-black font-bold uppercase relative inline-block">
              Our Projects
              <span className="block h-1 w-10 bg-yellow-500 mx-auto mt-2"></span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden shadow-lg bg-white transition-transform duration-500 hover:scale-105"
                role="button"
                tabIndex={0}
                aria-label={`Project: ${project.alt}`}
              >
                {/* Project Background */}
                <div
                  className="relative w-full h-0 pb-[100%] bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                  role="img"
                  aria-label={project.alt}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Project Description */}
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="flex justify-center">
        <div className="container py-11 flex flex-col items-center">
          <div className="text-center my-10 ">
            <h2 className="text-3xl text-black font-bold uppercase relative inline-block">
              Why Choose Us
              <span className="block h-1 w-10 bg-yellow-500 mx-auto mt-2"></span>
            </h2>
          </div>

          <div className="w-full">
            {/* Main Container */}
            <div className="flex flex-wrap md:flex-nowrap items-center w-full">
              {/* Left Section - Images */}
              <div className=" md:w-1/2 w-full ">
                {/* Main Container */}
                <div className="grid md:grid-cols-2 md:grid-rows-2 grid-rows-3 w-full h-full gap-3 px-5">
                  {/* First Image: 2/4 (Full Height & Half Width) */}
                  <div className="md:col-span-1 md:row-span-2 row-span-1">
                    <Image
                      src="https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg"
                      alt="Snow house"
                      width={800}
                      height={1000}
                      className="w-full h-full object-cover shadow-lg"
                    />
                  </div>

                  {/* Second Image: 1/4 (Half Width & Half Height) */}
                  <div>
                    <Image
                      src="https://www.theconstructionindex.co.uk/assets/news_articles/2023/03/1678889209_15mar23-marcum.jpg"
                      alt="Construction team"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover shadow-md row-span-1"
                    />
                  </div>

                  {/* Third Image: 1/4 (Half Width & Half Height) */}
                  <div>
                    <Image
                      src="https://static.vecteezy.com/system/resources/thumbnails/049/461/621/small/team-of-smiling-construction-workers-in-safety-gear-at-worksite-photo.jpeg"
                      alt="Modern building"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover shadow-md row-span-1"
                    />
                  </div>
                </div>
              </div>

              {/* Right Section - Features */}
              <div className="md:w-1/2 w-full lg:px-16 px-10 py-10 md:py-0">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 mb-6 border-b pb-4"
                  >
                    {/* Icon */}
                    <div>{feature.icon}</div>
                    {/* Content */}
                    <div className="">
                      <h3 className="text-lg font-sans font-bold text-black uppercase">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 font-sans w-full ">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* scrolling logos */}

        <div>

        <MarqueeDemo/>

      {/* <Slider {...settings}>
        {insurances.map((insurance, index) => (
          <div key={index}>
            <img src={insurance.src} alt={`Insurance ${index + 1}`} />
          </div>
        ))}
      </Slider> */}
    </div>

    <CallUsBanner/>

    <Footer/>


      </div>
    </>
  );
}


