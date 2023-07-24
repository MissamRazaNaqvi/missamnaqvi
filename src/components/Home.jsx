import img2 from '../assets/img2.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link} from "react-scroll";
import  style from '../assets/css/home.module.css'
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h4 className={`text-3xl sm:text-7xl font-bold ${style.ProfileTitle}`}>
          {/* Hello, I'm Missam Naqvi. */}
          I'm a front-end developer.
          </h4>
          <p className={`text-gray-500 py-4 max-w-md ${style.IntroText}`}>
          Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={img2}
            alt="my profile"
            className={`rounded-2xl mx-auto w-2/4 md:w-full xs:w-full ${style.ProfileImage}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
