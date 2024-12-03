import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { PiKeyReturnFill } from "react-icons/pi";
import { FaExchangeAlt } from "react-icons/fa";
const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 text-center  p-10 my-14">
      <div className="flex flex-col items-center">
        <FaExchangeAlt className="size-10"/>
        <p> Easy Exchange Police</p>
        <p> We offer hassle free Exchange policy</p>
      </div>
      <div className="flex flex-col items-center">
        <PiKeyReturnFill className="size-10"/>
        <p> 7 days Return Policy</p>
        <p> We provide 7 days return policy</p>
      </div>
      <div className="flex flex-col items-center">
        <MdSupportAgent className="size-10"/>
        <p> Best customer support</p>
        <p> We provide 24/7 customer support </p>
      </div>
    </div>
  );
};

export default OurPolicy;
