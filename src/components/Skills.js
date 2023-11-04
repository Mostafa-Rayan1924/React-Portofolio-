import skill1 from "../img/skills/css3.png";
import skill2 from "../img/skills/figma.png";
import skill3 from "../img/skills/reactjs.png";
import skill4 from "../img/skills/js.png";
import skill5 from "../img/skills/git.png";
import skill6 from "../img/skills/nextjs.png";
import skill7 from "../img/skills/nodejs.png";
import skill8 from "../img/skills/html5.png";

const Skills = () => {
  return (
    <div className="bg-thirdBody text-white  p-10">
      <div className="container grid grid-cols-4 md:grid-cols-8">
        <img className="max-w-full" src={skill1} />
        <img className="max-w-full" src={skill2} />
        <img className="max-w-full" src={skill3} />
        <img className="max-w-full" src={skill4} />
        <img className="max-w-full" src={skill5} />
        <img className="max-w-full" src={skill6} />
        <img className="max-w-full" src={skill7} />
        <img className="max-w-full" src={skill8} />
      </div>
    </div>
  );
};

export default Skills;
