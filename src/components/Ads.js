import ad1 from "../img/brands/behance.png";
import ad2 from "../img/brands/fiverr.png";
import ad3 from "../img/brands/freelancer.png";
import ad4 from "../img/brands/dribbble.png";
import ad5 from "../img/brands/upwork.png";
import ad6 from "../img/brands/behance.png";
import { useState } from "react";

const Ads = () => {
  return (
    <div className="bg-thirdBody text-white  p-10">
      <div className="container grid grid-cols-3 md:grid-cols-6">
        <img className="max-w-full" src={ad1} />
        <img className="max-w-full" src={ad2} />
        <img className="max-w-full" src={ad3} />
        <img className="max-w-full" src={ad4} />
        <img className="max-w-full" src={ad5} />
        <img className="max-w-full" src={ad6} />
      </div>
    </div>
  );
};

export default Ads;
