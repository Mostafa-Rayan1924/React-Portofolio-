import About from "../components/About";
import Ads from "../components/Ads";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portofolio from "../components/Portofolio";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Ads />
      <About />
      <Skills />
      <Portofolio />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
