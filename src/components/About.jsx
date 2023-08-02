import React from "react";
import {motion } from 'framer-motion'
import style from '../assets/css/about.module.css'
const About = () => {

  return (
    <div
      name="about" 
      className={`w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ${style.Container}`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <motion.p   initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }} transition={{duration:2}}
         data-tor={`inview(.Container)}):scale.to(5%)`} className={`text-4xl font-bold inline border-b-4 border-gray-500 ${style.Heading}`}>
            About
          </motion.p>
        </div>

        <motion.p  initial={{ textOverflow:"hidden",width:'-100px',height:'29px'  }} transition={{duration:3}}  whileInView={{ width:'100%'}} className={`${style } text-xl md:mt-18 mt-10   overflow-hidden`}>
        Hi,
          I'm Missam Naqvi
            WebDeveloper
              Front End Developer / JavaScript  / React Js
        </motion.p>

        <br />

        <motion.p  initial={{ scale:.5 }}  whileInView={{ scale:1 }} className="text-xl">
        Professionally connected with the web development industry.
        Problem solver, well-organised person, loyal employee with high attention to detail.
        Fan of Boxing, outdoor activities, video games, and coding of course.
        Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
        </motion.p>
      </div>
    </div>
  );
};

export default About;

