import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi,
I'm Missam Naqvi
WebDeveloper
Front End Developer / JavaScript  / React Js
        </p>

        <br />

        <p className="text-xl">
        Professionally connected with the web development industry.

Problem solver, well-organised person, loyal employee with high attention to detail.
Fan of Boxing, outdoor activities, video games, and coding of course.
Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
        </p>
      </div>
    </div>
  );
};

export default About;
