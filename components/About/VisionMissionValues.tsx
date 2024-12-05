import React from "react";

const VisionMissionValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Our <span className="text-yellow-500">Vision, Mission,</span> and
          Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-yellow-500 text-5xl mb-4">
              <i className="fas fa-eye"></i>{" "}
              {/* FontAwesome or replace with an SVG */}
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2 font-sans">
              Our Vision
            </h3>
            <p className="text-gray-600 font-sans opacity-80 p-5">
              To become a globally recognized leader in innovation and
              excellence, creating sustainable solutions for future generations.
            </p>
          </div>

          {/* Mission */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-yellow-500 text-5xl mb-4">
              <i className="fas fa-bullseye"></i>{" "}
              {/* FontAwesome or replace with an SVG */}
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2 font-sans">
              Our Mission
            </h3>
            <p className="text-gray-600 font-sans opacity-80 p-5">
              To deliver top-quality services that inspire trust and drive
              impactful change, ensuring growth and development for all
              stakeholders.
            </p>
          </div>

          {/* Values */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-yellow-500 text-5xl mb-4">
              <i className="fas fa-heart"></i>{" "}
              {/* FontAwesome or replace with an SVG */}
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2 font-sans">
              Our Values
            </h3>
            <p className="text-gray-600 font-sans opacity-80 p-5">
              Integrity, innovation, customer satisfaction, and a commitment to
              making a positive impact in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
