import MainTitle from "./MainTitle";

const Contact = () => {
  return (
    <div id="contact" className="py-[100px]">
      <MainTitle title={"contact me"} stroke={"Contact Us"} />
      <div className="container flex flex-col md:flex-row  gap-10 text-white">
        <div className="w-full md:w-[30%] mt-2">
          <div className="flex gap-8 mb-10">
            <i class="fa-regular fa-envelope text-mainColor"></i>
            <div className="-mt-2">
              <h2>have a questions?</h2>
              <p className="text-gray-400 my-1 capitalize">
                i,m here to help you
              </p>
              <h3 className="text-mainColor capitalize">
                email me at rayan@gmail.com
              </h3>
            </div>
          </div>
          <div className="flex gap-8">
            <i class="fa-regular fa-compass text-mainColor"></i>
            <div className="-mt-2">
              <h2>current a location</h2>
              <p className="text-gray-400 my-1 capitalize">i,m in Egypt</p>
              <h3 className="text-mainColor capitalize">
                email me at rayan@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%]">
          <form className="w-full">
            <div className="flex items-center gap-5">
              <input
                className="bg-thirdBody w-1/2 h-12 rounded-md focus:outline-none px-6"
                placeholder="Enter your name"></input>
              <input
                className="bg-thirdBody w-1/2 h-12 rounded-md focus:outline-none px-6"
                placeholder="Enter your email"></input>
            </div>
            <div>
              <input
                className="bg-thirdBody w-full h-12 rounded-md focus:outline-none px-6 my-8"
                placeholder="Enter your subject"></input>
            </div>
            <textarea
              placeholder="leave msg"
              className="bg-thirdBody w-full resize-none h-[150px] rounded-md focus:outline-none p-6"></textarea>
            <button className="btn my-4">send a message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
