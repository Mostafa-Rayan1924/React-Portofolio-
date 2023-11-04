import heroImg from "../img/banner-woman2.webp";
const Hero = () => {
  return (
    <div className="text-white  pt-[150px]  md:pt-[200px]">
      <div className="container flex justify-center md:justify-between pb-5">
        <div className="text-center md:text-start md:w-1/2">
          <h3 className="text-lg text-orange-400 capitalize">
            hello i.m Rayan <i class="fa-solid fa-hand text-yellow-500 "></i>
          </h3>
          <h2 className="text-3xl lg:text-5xl my-4 capitalize">
            i,m build web design <br />
            web interfaces
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing <br />
            elit. Hic, repellat?
          </p>
          <button className="btn">work with me</button>
        </div>
        <img className="max-w-full hidden md:flex" src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
