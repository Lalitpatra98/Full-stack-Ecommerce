import React from "react";
import Img from "../assets/HeroImg.jpg";
const Hero = () => {
  return (
    <div >
      <div className=" border border-gray-700 w-[700px] mx-auto rounded">
        <div className="hero-content flex-col lg:flex-row-reverse gap-32  ">
          <img src={Img} className="max-w-sm h-96 rounded-lg shadow-2xl" />
          <div>
            <p className="">---------Our Bestseller</p>
            <h1 className="text-2xl font-medium ">Box Office News</h1>
            <p>shop now-----------</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
