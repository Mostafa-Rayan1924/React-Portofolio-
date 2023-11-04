import logo from "../img/logo.svg";
import Social from "./Social";
const Footer = () => {
  return (
    <div className=" py-10 bg-thirdBody">
      <div className="container flex justify-between items-center">
        <Social />
        <img className="md:flex hidden" src={logo} />
        <p className="text-white capitalize">created by : mostafa rayan</p>
      </div>
    </div>
  );
};

export default Footer;
