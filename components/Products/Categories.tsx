"use client"

import { link } from "fs";
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
  FaRoad,
  FaToilet,
} from "react-icons/fa";

import { FaTape } from "react-icons/fa6";


export default function Categories() {



  const services = [
    {
      id: 1,
      icon: <FaHardHat />, // Represents construction equipment
      title: "Construction",
      link: "construction",
      description:
        "High-quality construction materials and equipment to support diverse building projects.",
    },
    {
      id: 2,
      icon: <FaLightbulb />, // Represents electrical and lighting
      title: "Electrical & Lighting",
      link: "electrical&lighting",
      description:
        "Comprehensive solutions for electrical systems and energy-efficient lighting.",
    },
    {
      id: 3,
      icon: <FaTools />, // Represents power tools
      title: "Power Tools",
      link: "powertools",
      description:
        "Reliable and durable power tools for professional and industrial use.",
    },
    {
      id: 4,
      icon: <FaShieldAlt />, // Represents safety and protection
      title: "Safety & Protection",
      description:
        "Top-tier safety equipment to ensure workplace protection and compliance.",
    },
    {
      id: 5,
      icon: <FaToilet />, // Represents sanitary and plumbing
      title: "Sanitary & Plumbing",
      link: "sanitary&plumbing",
      description:
        "High-quality sanitary and plumbing solutions for efficient water management.",
    },
    {
      id: 6,
      icon: <FaRoad />, // Represents road safety materials
      title: "Road Safety Materials",
      link: "road-safety-materials",
      description:
        "Durable road safety products designed to enhance traffic management and safety.",
    },
    {
      id: 7,
      icon: <FaCogs />, // Represents abrasive tools
      title: "Abrasive",
      link: "abrasive",
      description:
        "Supplying premium abrasive tools for precise cutting, grinding, and polishing.",
    },
    {
      id: 8,
      icon: <FaStickyNote />, // Represents adhesive and sealant
      title: "Adhesive and Sealant",
      link:"adhesive&sealant",
      description:
        "A wide range of high-performance adhesives and sealants for all your bonding needs.",
    },
    {
      id: 9,
      icon: <FaCar />, // Represents automotive supplies
      title: "Automotive",
      description:
        "Comprehensive automotive tools and accessories for maintenance and repair.",
    },
    {
      id: 10,
      icon: <FaCompress />, // Represents air compressors
      title: "Air Compressor",
      link:"aircompressor",
      description:
        "Efficient air compressors engineered for industrial and personal applications.",
    },
    {
      id: 11,
      icon: <FaCut />, // Represents cutting tools
      title: "Cutting Tools",
      link:"cuttingtools",
      description: "Precision cutting tools for diverse industrial needs.",
    },
    {
      id: 12,
      icon: <FaHospital />, // Represents hospital supplies
      title: "Hospital Machineries",
      description:
        "Specialized medical equipment to meet the high standards of healthcare facilities.",
    },
    {
      id: 13,
      icon: <FaTruck />, // Represents generators
      title: "Generator",
      link:"generator",
      description: "Reliable generators for uninterrupted power supply.",
    },
    {
      id: 14,
      icon: <FaWrench />, // Represents hand tools
      title: "Hand Tools",
      description: "Durable hand tools crafted for professional use.",
    },
    {
      id: 15,
      icon: <FaToolbox />, // Represents pneumatic tools
      title: "Pneumatic Tools",
      link:"pneumatictool",
      description:
        "High-quality pneumatic tools for effective industrial performance.",
    },
    {
      id: 16,
      icon: <FaLock />, // Represents security products
      title: "Security Products",
      link:"securityproducts",
      description: "Innovative and dependable security solutions.",
    },
    {
      id: 17,
      icon: <FaWarehouse />, // Represents storage systems
      title: "Storage Systems",
      description: "Optimized storage systems to enhance space utilization.",
    },
    {
      id: 18,
      icon: <FaFire />,
      title: "Welding",
      link:"welding",
      description: "Comprehensive welding tools and supplies for industrial needs.",
    },
    {
      id: 19,
      icon: <FaRuler />, // Represents measuring and testing tools
      title: "Measuring & Testing",
      description:
        "Accurate and reliable instruments for precise measurement and testing.",
    },
    {
      id: 20,
      icon: <FaDolly />, // Represents material handling
      title: "Material Handling",
      description:
        "Equipment designed for efficient movement and storage of materials.",
    },
    {
      id: 21,
      icon: <FaIndustry />, // Represents metal cutting machinery
      title: "Metal Cutting Machinery",
      description:
        "Advanced metal cutting machines for precision and durability.",
    },
    {
      id: 22,
      icon: <FaIndustry />, // Represents sheet cutting machinery
      title: "Sheet Cutting Machinery",
      description:
        "Reliable sheet cutting machinery for various industrial applications.",
    },
    {
      id: 23,
      icon: <FaTape />, // Represents packing equipment
      title: "Packing Equipment",
      link:"packagingequipment",
      description: "High-quality packing tools for industrial and commercial use.",
    },
    {
      id: 24,
      icon: <FaPaintRoller />, // Represents painting and coating
      title: "Painting & Coating",
      link:"painting&coating",
      description:
        "Superior materials and tools for professional painting and coating tasks.",
    },
    {
      id: 25,
      icon: <FaBroom />, // Represents cleaning equipment
      title: "Cleaning Equipment",
      link: "cleaningequipment",
      description:
        "Robust cleaning equipment for industrial and commercial environments.",
    },
    {
      id: 26,
      icon: <FaSeedling />, // Represents gardening and agriculture
      title: "Lawn Garden & Agriculture",
      description:
        "Innovative tools and equipment for lawn, garden, and agricultural needs.",
    },
  ];
  

  return (
    <main className=" min-h-screen py-20 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <a key={service.id}
            href={'products/'+service.link}
              className="bg-white text-center p-6 hover:shadow-xl transition-all duration-500">
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
