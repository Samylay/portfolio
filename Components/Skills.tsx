import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="min-h-screen xl:flex-row max-w-[2000px] xl:px-10 justify-center flex flex-col relative text-center mx-auto items-center">
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 uppercase text-2xl font-semibold">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}

export default Skills;
