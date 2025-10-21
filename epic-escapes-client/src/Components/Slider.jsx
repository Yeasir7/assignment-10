import React from "react";
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <div id="item1" className="carousel-item w-full">
          <img src={pic1} className="w-full h-full object-cover" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={pic2} className="w-full h-full object-cover" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={pic3} className="w-full h-full object-cover" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={pic4} className="w-full  h-full object-cover" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
