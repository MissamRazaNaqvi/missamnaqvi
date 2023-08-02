import React, { useState , useEffect} from "react";
import {  motion} from 'framer-motion'
import myntra from "../assets/portfolio/myntra.png";
import antoine from '../assets/portfolio/antoine.png'
import installNode from "../assets/portfolio/installNode.jpg";
import todo from "../assets/portfolio/todo.png";
import textutil from "../assets/portfolio/textutil.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import style from '../assets/css/portfolio.module.css';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const portfolios = [
    {
      id: 1,
      src: antoine,
      href:"https://antoine-five.vercel.app/",
      code:"https://github.com/MissamRazaNaqvi/antoine.git"
    },
    {
      id: 2,
      src: textutil,
      href:"https://missamrazanaqvi.github.io/Text_utils/",
    },
    {
      id: 3,
      src: todo,
    },
    {
      id: 4,
      src: myntra,
      href:"https://missamrazanaqvi.github.io/Myntra/",
      code:"https://github.com/MissamRazaNaqvi/Myntra"
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  useEffect(() => {
  
  }, [isVisible])
  
  return (
    <div
      name="portfolio"
      className={`bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen `} 
    >
      <div className="max-w-screen-lg p-3 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 mb-32 sm:px-0 ${style.CardContainer} ${style.portfolioTitle} ${style.CardContainerTwo}`}>
          {portfolios.map(({ id, src,href ,code}) => (
            <motion.div key={id} className={`shadow-md shadow-gray-600 rounded-lg Card ${style.Card} ${isVisible && style.Lagao} `}  id={`hehe${id}`}>
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href}  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="blank">
                  Demo
                </a>
                <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="blank">
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
