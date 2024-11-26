import React from "react";

function Map() {
  return (
    <div className=" h-full w-full pb-32">
      <iframe
        className="border-0 w-full mx-auto h-[500px]  max-w-[1150px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.5248142433807!2d46.71435097392645!3d24.640057554044194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f058d694a52af%3A0xa5d993f6275eb880!2sBatha%20Commercial%20Center%20base%20Car%20Parking!5e0!3m2!1sen!2ssa!4v1732518110825!5m2!1sen!2ssa"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
