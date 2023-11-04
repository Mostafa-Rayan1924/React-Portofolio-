const MainTitle = ({ stroke, title }) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="stroke">{stroke}</h2>
      <div className=" -mt-10 md:-mt-16">
        <h3 className="text-white text-xl md:text-2xl tracking-tighter mb-4">
          {title}
        </h3>
        <p className="max-w-[400px] mx-auto text-sm md:text-base text-gray-400 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          officiis alias dolor asperiores facere, eos reprehenderit eaque ea
          quaerat nisi ea quaerat?
        </p>
      </div>
    </div>
  );
};

export default MainTitle;
