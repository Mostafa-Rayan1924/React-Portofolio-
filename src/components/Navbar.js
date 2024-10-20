import { AnimatePresence, motion } from "framer-motion";
import logo from "../img/logo.svg";
import { useEffect, useRef, useState } from "react";
import Social from "./Social";
const Navbar = () => {
  let [links, setLinks] = useState([
    "home",
    "about",
    "portofolio",
    "services",
    "testimonials",
    "contact",
  ]);
  let child = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       headerRef.current.style.background = "#131419";
  //     } else {
  //       headerRef.current.style.background = "transparent";
  //     }
  //   });
  // }, []);
  let headerRef = useRef();
  let [openLinks, setOpenLinks] = useState(false);
  return (
    <header
      ref={headerRef}
      className="py-6 z-40 shadow border-b border-zinc-900/20 fixed top-0 left-0 w-full text-white transition-all duration-300  ">
      <div className="container flex justify-between items-center ">
        <h1>
          <img className="sm:w-[100px] md:w-[172px]" src={logo} alt="logo" />
        </h1>
        <div className="sm:hidden">
          <span
            className="text-white"
            onClick={() => {
              setOpenLinks(true);
            }}>
            <i class="fa-solid fa-bars-staggered text-3xl"></i>
          </span>
          {/* mobile */}
          <AnimatePresence>
            {openLinks ? (
              <motion.ul
                initial={{ top: "100%" }}
                animate={{ top: 0 }}
                exit={{ top: "100%" }}
                className={`fixed  p-10 text-center bg-mainColor/70 text-white left-0 w-full   h-full  flex flex-col items-center justify-center sm:hidden gap-6 `}>
                {links.map((item, index) => {
                  return (
                    <li key={index}>
                      <motion.a
                        variants={child}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.3, delay: index * 0.3 }}
                        className="capitalize  hover:border-b-2  hover:border-white  p-2"
                        href={"#" + item}>
                        {item}
                      </motion.a>
                    </li>
                  );
                })}
                <span
                  className="text-4xl absolute top-10 right-10 cursor-pointer"
                  onClick={() => {
                    setOpenLinks(false);
                  }}>
                  <i class="fa-solid fa-circle-xmark"></i>
                </span>
              </motion.ul>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
        <ul className="hidden sm:flex gap-6">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={`text-sm ${
                    item == "home" ? "text-mainColor" : "text-white"
                  } capitalize transition-all duration-300 hover:text-mainColor`}
                  href={"#" + item}>
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex">
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
