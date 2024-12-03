import React from "react";
import Img from "../assets/HeroImg.jpg";
const Hero = () => {
  return (
    <div >
      <div className=" w-48  mx-auto rounded">
        <div className="hero-content flex-col  md:flex-row-reverse ">
          <img src={Img} className="  rounded-lg shadow-2xl" />
          <div className=" md:px-2 ">
            <p className="w-40">---------Our Bestseller</p>
            <h1 className="text-2xl font-medium ">Box Office News</h1>
            <p>shop now ---------</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
