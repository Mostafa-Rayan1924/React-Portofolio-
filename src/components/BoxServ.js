const BoxServ = ({ item }) => {
  return (
    <div
      key={item.id}
      className="bg-secondBody shadow p-4 rounded-lg border border-transparent transition-all duration-300 hover:border hover:border-mainColor">
      <img className="w-10 h-10 mb-20" src={item.icon} />
      <h2 className="text-xl text-white">{item.title}</h2>
      <p className="text-gray-400 leading-relaxed text-sm pb-3">{item.desc}</p>
    </div>
  );
};

export default BoxServ;
