import { Typewriter } from "react-simple-typewriter";
import Banner from "../../components/Banner/Banner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import Success from "../../components/Success/Success";
import AboutDev from "../../components/AboutDev/AboutDev";
const Home = () => {
  return (
    <div>
      <div className="absolute left-[15px] top-[80px] lg:top-1/2 lg:left-1/4 z-50 text-white text-4xl font-bold ">
        <div className="h-auto text-red-400 font-extrabold text-6xl">
          <Typewriter
            words={["Baked", "Fried", "Boiled", "Steamed"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <h1 className="text-xl md:text-3xl font-bold">
          No matter how you cook, <br /> RecipeMagic has many the recipes
        </h1>
        <div className="flex gap-4 mt-8">
          <Link to={"/recipes"}>
            <button className="btn bg-red-500 border-none hover:bg-red-400 text-white">
              See All Recipes
            </button>
          </Link>
          <Link to={"/addRecipes"}>
            <button className="btn bg-red-500 border-none hover:bg-red-400 text-white">
              Add Recipes
            </button>
          </Link>
        </div>
      </div>
      <Banner></Banner>
      <Success></Success>
      <AboutDev></AboutDev>
    </div>
  );
};

export default Home;
