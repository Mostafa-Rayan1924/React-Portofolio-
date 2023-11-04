import { useState } from "react";
import MainTitle from "./MainTitle";
import img1 from "../img/projects/p1.webp";
import img2 from "../img/projects/p2.webp";
import img3 from "../img/projects/p3.webp";
import img4 from "../img/projects/p4.webp";
import img5 from "../img/projects/p5.webp";
import img6 from "../img/projects/p6.webp";

const Portofolio = () => {
  let [pro, setPro] = useState([
    {
      id: 1,
      img: img1,
      title: "Ui&Ux design",
      desc: "Project 1",
      filters: "design",
    },
    {
      id: 2,
      img: img2,
      title: "Web developer",
      desc: "Project 2",
      filters: "developer",
    },
    { id: 3, img: img3, title: "AI", desc: "Project 3", filters: "AI" },
    {
      id: 4,
      img: img4,
      title: "Web developer",
      desc: "Project 4",
      filters: "developer",
    },
    { id: 5, img: img5, title: "AI", desc: "Project 5", filters: "AI" },
    {
      id: 6,
      img: img6,
      title: "Ui&Ux design",
      desc: "Project 6",
      filters: "design",
    },
  ]);
  let [active, setActive] = useState("all");
  let aiItem = pro.filter((item) => {
    return item.filters == "AI";
  });
  let desItem = pro.filter((item) => {
    return item.filters == "design";
  });
  let devItem = pro.filter((item) => {
    return item.filters == "developer";
  });
  function filteredItem(name, e) {
    if (name == e.target.id) {
      setActive(name);
    }
  }
  let rednderItems = pro;
  if (active == "AI") {
    rednderItems = aiItem;
  } else if (active == "design") {
    rednderItems = desItem;
  } else if (active == "developer") {
    rednderItems = devItem;
  } else if (active == "all") {
    rednderItems = pro;
  }
  return (
    <div id="portofolio" className="py-[100px] text-white">
      <MainTitle stroke={"Portofolio"} title={"My latest work"} />
      <ul className="flex items-center gap-8 justify-center my-20  cursor-pointer">
        <li
          id="all"
          onClick={(e) => {
            filteredItem("all", e);
          }}
          className={`${active == "all" ? "text-mainColor" : ""}`}>
          All
        </li>
        <li
          id="AI"
          className={`${active == "AI" ? "text-mainColor" : ""}`}
          onClick={(e) => {
            filteredItem("AI", e);
          }}>
          Ai
        </li>
        <li
          id="developer"
          className={`${active == "developer" ? "text-mainColor" : ""}`}
          onClick={(e) => {
            filteredItem("developer", e);
          }}>
          Developer
        </li>
        <li
          id="design"
          className={`${active == "design" ? "text-mainColor" : ""}`}
          onClick={(e) => {
            filteredItem("design", e);
          }}>
          Design
        </li>
      </ul>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rednderItems.map((item) => {
          return (
            <div key={item.id} className="text-center ">
              <img className="rounded-lg" src={item.img} />
              <h2 className="my-4 text-mainColor">{item.title}</h2>
              <h3 className="mb-5">{item.desc}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portofolio;
