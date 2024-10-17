import { motion } from "framer-motion";
const BoxServ = ({ item }) => {
  let child = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: item.id * 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={child}
      initial="initial"
      // animate="animate"
      whileInView={{
        opacity: 1,
        transition: {
          delay: item.id * 0.5,
        },
      }}
      key={item.id}
      className="bg-secondBody shadow p-4 rounded-lg border border-transparent transition-all duration-300 hover:border hover:border-mainColor">
      <img className="w-10 h-10 mb-20" src={item.icon} />
      <h2 className="text-xl text-white">{item.title}</h2>
      <p className="text-gray-400 leading-relaxed text-sm pb-3">{item.desc}</p>
    </motion.div>
  );
};

export default BoxServ;
