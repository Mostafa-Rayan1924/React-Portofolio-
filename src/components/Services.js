import { useState } from "react";
import MainTitle from "./MainTitle";
import BoxServ from "./BoxServ";
import img from "../img/skills/html5.png";
import img2 from "../img/skills/css3.png";
import img3 from "../img/skills/js.png";
import img4 from "../img/skills/figma.png";

const Services = () => {
  let [box, SetBox] = useState([
    {
      id: 1,
      icon: `${img}`,
      title: "Web Design",
      desc: " Lorem ipsum dolor sit, amer dignissimos molestias quisquam architecto laudantium ea incidunt praesentium dolorum deleniti similique!",
    },
    {
      id: 2,
      icon: `${img2}`,

      title: "Web developer",
      desc: " Lorem ipsum dolor sit, amer dignissimos molestias quisquam architecto laudantium ea incidunt praesentium dolorum deleniti similique!",
    },
    {
      id: 3,
      icon: `${img3}`,

      title: "graphic Design",
      desc: " Lorem ipsum dolor sit, amer dignissimos molestias quisquam architecto laudantium ea incidunt praesentium dolorum deleniti similique!",
    },
    {
      id: 4,
      icon: `${img4}`,

      title: "SEO",
      desc: " Lorem ipsum dolor sit, amer dignissimos molestias quisquam architecto laudantium ea incidunt praesentium dolorum deleniti similique!",
    },
  ]);
  let boxMap = box.map((item) => {
    return <BoxServ item={item} />;
  });
  return (
    <div id="services" className="py-[100px] bg-thirdBody">
      <MainTitle stroke={"Services"} title={"What i do for my clients"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {boxMap}
      </div>
    </div>
  );
};

export default Services;
