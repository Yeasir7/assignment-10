import React from "react";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import pic4 from "../../assets/images/pic4.jpg";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <div id="item1" className="carousel-item w-full relative">
          <img src={pic1} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Enter the Mystical Mangrove Forest
            </h2>
            <p className="text-lg md:text-2xl max-w-2xl">
              Witness the majestic Royal Bengal Tiger and navigate through the
              world's largest mangrove ecosystem.
            </p>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img src={pic2} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Journey Through the Hills of Bandarban
            </h2>
            <p className="text-lg md:text-2xl max-w-2xl">
              Explore lush green mountains, serene waterfalls, and the rich
              culture of indigenous communities.
            </p>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img src={pic3} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Discover the World's Longest Sea Beach
            </h2>
            <p className="text-lg md:text-2xl max-w-2xl">
              Experience endless golden sands, stunning sunsets, and the
              rhythmic waves of the Bay of Bengal..
            </p>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img src={pic4} className="w-full  h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Escape to the Roof of Rangamati
            </h2>
            <p className="text-lg md:text-2xl max-w-2xl">
              Touch the clouds in Bangladesh's highest peak valley, where
              mountains meet endless blue skies.
            </p>
          </div>
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
