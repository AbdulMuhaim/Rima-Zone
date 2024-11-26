"use client"

import {
  FaCogs,
  FaStickyNote,
  FaCar,
  FaCompress,
  FaCut,
  FaHospital,
  FaTruck,
  FaWrench,
  FaRuler,
  FaDolly,
  FaIndustry,
  FaPaintRoller,
  FaToolbox,
  FaLock,
  FaWarehouse,
  FaFire,
  FaHardHat,
  FaLightbulb,
  FaTools,
  FaShieldAlt,
  FaBroom,
  FaSeedling,
} from "react-icons/fa";

import { FaTape } from "react-icons/fa6";


export default function Categories() {



  const services = [
    {
      id: 1,
      icon: <FaHardHat />, // Represents construction equipment
      title: "Construction",
      link:"construction",
      description:
        "Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis ante. Nulla enim velit, porttitor sed magna at, porttitor.",
    },
    
    {
      id: 2,
      icon: <FaLightbulb />, // Represents electrical and lighting
      title: "Electrical & Lighting",
      link: "electrical&lighting",
      description:
        "Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis ante. Nulla enim velit, porttitor sed magna at, porttitor.",
    },
    {
      id: 3,
      icon: <FaTools />, // Represents power tools
      title: "Power Tools",
      link: "powertools",
      description:
        "Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis ante. Nulla enim velit, porttitor sed magna at, porttitor.",
    },
    {
      id: 4,
      icon: <FaShieldAlt />, // Represents safety and protection
      title: "Safety & Protection",
      description:
        "Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis ante. Nulla enim velit, porttitor sed magna at, porttitor.",
    },
    {
      id: 5,
      icon: <FaBroom />, // Represents cleaning equipment
      title: "Cleaning Equipment",
      description:
        "Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis ante. Nulla enim velit, porttitor sed magna at, porttitor.",
    },
    {
      id: 6,
      icon: <FaSeedling />, // Represents gardening and agriculture
      title: "Lawn Garden & Agriculture",
      description:
        "Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis ante. Nulla enim velit, porttitor sed magna at, porttitor.",
    },
    {
      id: 7,
      icon: <FaCogs />, // Represents abrasive tools
      title: "Abrasive",
      description:
        "Supplying high-quality abrasive materials for industrial and commercial use.",
    },
    {
      id: 8,
      icon: <FaStickyNote />, // Represents adhesive and sealant
      title: "Adhesive and Sealant",
      description:
        "Providing a wide range of adhesives and sealants for various applications.",
    },
    {
      id: 9,
      icon: <FaCar />, // Represents automotive supplies
      title: "Automotive",
      description: "Offering tools and parts tailored to automotive needs.",
    },
    {
      id: 10,
      icon: <FaCompress />, // Represents air compressors
      title: "Air Compressor",
      description:
        "Delivering efficient air compressors for industrial and personal use.",
    },
    {
      id: 11,
      icon: <FaCut />, // Represents cutting tools
      title: "Cutting Tools",
      description: "High-precision cutting tools for industrial applications.",
    },
    {
      id: 12,
      icon: <FaHospital />, // Represents hospital supplies
      title: "Hospital Machineries",
      description:
        "Specialized equipment and materials for hospitals and food services.",
    },
    {
      id: 13,
      icon: <FaTruck />, // Represents generators
      title: "Generator",
      description: "Reliable and efficient generators for all power needs.",
    },
    {
      id: 14,
      icon: <FaWrench />, // Represents hand tools
      title: "Hand Tools",
      description: "Premium hand tools for every trade and purpose.",
    },
    {
      id: 15,
      icon: <FaToolbox />, // Represents pneumatic tools
      title: "Pneumatic Tools",
      description: "High-quality pneumatic tools for diverse industrial uses.",
    },
    {
      id: 16,
      icon: <FaLock />, // Represents security products
      title: "Security Products",
      description: "Reliable security solutions for various applications.",
    },
    {
      id: 17,
      icon: <FaWarehouse />, // Represents storage systems
      title: "Storage Systems",
      description: "Efficient and space-saving storage solutions.",
    },
    {
      id: 18,
      icon: <FaFire />,
      title: "Welding",
      description: "Complete welding solutions for industrial applications.",
    },
    {
      id: 19,
      icon: <FaRuler />, // Represents measuring and testing tools
      title: "Measuring & Testing",
      description:
        "Precise measuring and testing instruments for technical applications.",
    },
    {
      id: 20,
      icon: <FaDolly />, // Represents material handling
      title: "Material Handling",
      description: "Equipment for efficient material handling and logistics.",
    },
    {
      id: 21,
      icon: <FaIndustry />, // Represents metal cutting machinery
      title: "Metal Cutting Machinery",
      description: "Advanced machinery for cutting and shaping metals.",
    },
    {
      id: 22,
      icon: <FaIndustry />, // Represents sheet cutting machinery
      title: "Sheet Cutting Machinery",
      description:
        "Efficient machinery for cutting sheets of various materials.",
    },
    {
      id: 23,
      icon: <FaTape />, // Represents packing equipment
      title: "Packing Equipment",
      description: "Packing solutions for industrial and commercial needs.",
    },
    {
      id: 24,
      icon: <FaPaintRoller />, // Represents painting and coating
      title: "Painting & Coating",
      description: "Specialized tools and materials for painting and coating.",
    },
  ];

  return (
    <main className=" min-h-screen py-20 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <a key={service.id}
            href={'products/'+service.link}
              className="bg-white text-center p-6">
              <div className="text-yellow-500 flex justify-center text-5xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {service.title.toUpperCase()}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
