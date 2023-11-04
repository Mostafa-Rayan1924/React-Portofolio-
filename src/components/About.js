import imgAbout from "../img/about.webp";
const About = () => {
  return (
    <div className="py-[100px] bg-secondBody" id="about">
      <div className="container grid grid-cols-1  lg:grid-cols-2 gap-20">
        <img className="max-w-full rounded-xl" src={imgAbout} />
        <div className="-mt-12">
          <h2 className="stroke capitalize">About</h2>
          <div className="-mt-20">
            <h3 className="text-white text-3xl">Mo Rayan</h3>
            <h4 className="text-mainColor">freelancer web developer</h4>
          </div>
          <p className="leading-relaxed text-gray-400 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ad
            rem temporibus dolore veniam porro nemo perferendis sapiente.
            Inventore eum, itaque, fuga culpa sequi, perspiciatis molestias
            dicta labore hic non quibusdam dolor voluptas voluptatibus pariatur
            accusamus dolore ab excepturi.
          </p>
          <button className="btn capitalize">contact me</button>
        </div>
      </div>
    </div>
  );
};
export default About;
